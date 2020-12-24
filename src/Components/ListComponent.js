import React from 'react'

const ListComponent = ({ optionSelected }) => {

    if(optionSelected.length === 0) {
        return (
            <>
                <h2>Nothing was selected as Favorite</h2>
            </>
        )
    }

    return (
        <div>
            {
                <ul class="list-group" style={{
                    marginLeft: 10 + 'em', 
                    marginRight: 10 + 'em',
                    marginTop: 3 + 'em',
                    marginBottom: 3 + 'em',
                    }}>
                    {optionSelected.map((item, index) => (
                        <li class="list-group-item">
                            <label key={item.id}>
                                {" " + item.name}
                            </label>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ListComponent
