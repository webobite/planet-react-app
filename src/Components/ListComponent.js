import React from 'react'

const ListComponent = ({ optionSelected }) => {
    return (
        <div>
            {
                <ul class="list-group">
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
