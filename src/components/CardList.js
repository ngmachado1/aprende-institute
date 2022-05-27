import { useEffect, useState } from 'react'
import Card from './Card'
import ButtonsFilter from './ButtonsFilter'

const CardList = () => {
    const url = 'https://qa.aprende.dev/wp-json/aprende/v1/ap-master-class'
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(4);
    const [allCategories, setAllCategories] = useState([])
    const [filters, setFilters] = useState([]);
    const [selected, setSelected] = useState('active');
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setData(data)
            setFilters(data)
            let c = data.map(data => data.taxonomy['master-class-category'].map(data => data.name))
            let categories = [];
            c.forEach(cat => {
                categories.push(cat[0])
            });
            let categoriesNoRepeated = [...new Set(categories)]
            setAllCategories(categoriesNoRepeated);

        })
    }, [])

    const showMore = () => {
        setVisible(prevValue => prevValue + 4)
    }
    const clearState = () => {
        setVisible(4);
      };
    const filter = (button) => {
        let filterData = [];
        data.forEach(item => {
            if (item.taxonomy['master-class-category'].length > 0) {
                if (item.taxonomy['master-class-category'][0].name === button)
                    filterData.push(item)
            }
        })
        setFilters(filterData)
        setSelected('true')
        clearState();
    }

    return (
        <>
            <ButtonsFilter category={allCategories} filter={filter} active={selected}/>
            <div className="gs-grid">
                {filters.slice(0, visible).map(data =>
                    <Card title={data.title} key={data.id} />

                )}
            </div>
            <button className="btn btn-outline-primary mx-auto show-more" onClick={showMore}>Ver más</button>
        </>
    )
}

export default CardList