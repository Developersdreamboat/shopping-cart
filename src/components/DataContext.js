import React, { useState } from 'react';

export const DataContext = React.createContext();

export function DataProvider() {
  const [products] = useState([
    {
        "_id": "1",
        "title": "Funny Shoes",
        "src": "./img/5-retro-shoes.png",
        "price": 11,
        "count": 1
    },
    {
        "_id": "2",
        "title": "Big Shoes",
        "src": "./img/6-retro-shoes.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "3",
        "title": "Unique Shoes",
        "src": "./img/plus-shoes.png",
        "price": 18,
        "count": 1
    },
    {
        "_id": "4",
        "title": "Interesting Shoes",
        "src": "./img/terrascape-97-shoes.png",
        "price": 16,
        "count": 1
    },
    {
        "_id": "5",
        "title": "Nice Shoes",
        "src": "./img/easy-on-off-shoes.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "6",
        "title": "Cool Shoes",
        "src": "./img/aura-4-shoes.png",
        "price": 15,
        "count": 1
    }
  ]);

  return (
    <DataContext.Provider value={this.state}>
        {this.props.children}
    </DataContext.Provider>
  );
}