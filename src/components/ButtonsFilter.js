import React, {useState} from 'react';

const ButtonsFilter = ({ category, filter, selected }) => {
    const [selectedId, setSelectedId] = useState(-1);
    const handleClick = (event, id, cat)=>{
        setSelectedId(id)
        filter(cat)
    }

    return (

        <div className="filters">
            {
                category.map((cat, i) => {
                    if(cat !== undefined){
                        return <button className={ selectedId === i ? 'active btn-rounded btn-second' : 'btn-rounded btn-second'}  key={i} onClick={() => handleClick(event, i, cat) }> {cat} </button>
                    }
                })
            }
        </div>
    );
}

export default ButtonsFilter;
