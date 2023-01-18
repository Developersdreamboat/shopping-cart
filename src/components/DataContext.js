import React, { useState } from 'react';

export const DataContext = React.Context();

export function DataProvider() {
  const [products] = useState([
    {
        "_id": "1",
        "title": "Funny Shoes",
        "src": "./img/air-jordan-5-retro-shoes-nX9vG3.png",
        "price": 11,
        "count": 1
    },
    {
        "_id": "2",
        "title": "Big Shoes",
        "src": "./img/air-jordan-6-retro-shoes-kd7N3v.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "3",
        "title": "Unique Shoes",
        "src": "./img/air-max-plus-shoes-nnTrAZe0.png",
        "price": 18,
        "count": 1
    },
    {
        "_id": "4",
        "title": "Interesting Shoes",
        "src": "./img/air-max-terrascape-97-shoes-NPz26W.png",
        "price": 16,
        "count": 1
    },
    {
        "_id": "5",
        "title": "Nice Shoes",
        "src": "./img/go-flyease-easy-on-off-shoes-84H33P.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "6",
        "title": "Cool Shoes",
        "src": "./img/jordan-max-aura-4-shoes-SjXFxR.png",
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