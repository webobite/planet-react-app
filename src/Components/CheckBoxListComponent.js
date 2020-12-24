import React, { useState } from 'react'

const CheckBoxListComponent = ({ options, onChange }) => {
    const [data, setData] = React.useState(options);

    const toggle = index => {
        const newData = [...data];
        newData.splice(index, 1, {
            id: data[index].id,
            label: data[index].name,
            isFavourite: !data[index].isFavourite,
            name: data[index].name

        });
        setData(newData);
        // console.log("newData ==> ", newData);
        onChange(newData.filter(x => x.isFavourite));
    };

    // console.log("Data L L L --> ", data);

    return (
        <>
            <ul class="list-group" style={{
                marginLeft: 10 + 'em', 
                marginRight: 10 + 'em',
                marginTop: 3 + 'em',
                marginBottom: 3 + 'em',
                }}>
                {data.map((item, index) => (
                    <li class="list-group-item">
                        <input
                            readOnly
                            type="checkbox"
                            class="form-check-input"
                            checked={item.isFavourite || false}
                            onClick={() => toggle(index)}
                        />
                        <label key={item.id}>
                            {" " + item.name}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CheckBoxListComponent