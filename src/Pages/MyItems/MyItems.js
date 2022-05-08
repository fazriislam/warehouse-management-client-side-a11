import React, { useEffect, useState } from 'react';
import MyItem from './MyItem/MyItem';

const MyItems = () => {

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-springs-86908.herokuapp.com/myItem')
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, []);

    const handleDelete = id => {
        const agree = window.confirm('Confirm Delete');
        if (agree) {
            const url = `https://sheltered-springs-86908.herokuapp.com/myItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(rest);
                })
        }
    }

    return (
        <div className='w-75 mt-3 mx-auto md:border p-3'>
            <h2 className='text-primary'>My Items: {myItems.length}</h2>
            <div className='product-container'>
                {
                    myItems.map(myItem => <MyItem
                        key={myItem._id}
                        myItem={myItem}
                        handleDelete={handleDelete}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;