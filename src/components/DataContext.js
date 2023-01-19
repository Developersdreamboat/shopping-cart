import React, { useState } from 'react';

export const DataContext = React.createContext();

export function DataProvider(props) {
  const [products] = useState([
    {
        "_id": "1",
        "title": "Funny Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/5-retro-shoes.png",
        "price": 11,
        "count": 1
    },
    {
        "_id": "2",
        "title": "Big Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/6-retro-shoes.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "3",
        "title": "Unique Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/plus-shoes.png",
        "price": 18,
        "count": 1
    },
    {
        "_id": "4",
        "title": "Interesting Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/terrascape-97-shoes.png",
        "price": 16,
        "count": 1
    },
    {
        "_id": "5",
        "title": "Nice Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/easy-on-off-shoes.png",
        "price": 12,
        "count": 1
    },
    {
        "_id": "6",
        "title": "Cool Shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt malesuada dolor sed tincidunt. Maecenas arcu tortor, maximus et ante eget, volutpat fringilla ante. Vivamus faucibus a erat vitae fringilla. In pulvinar sed dui sit amet maximus. Vestibulum tincidunt eros at lectus tempus laoreet.",
        "src": "/img/aura-4-shoes.png",
        "price": 15,
        "count": 1
    }
  ]);

  return (
    <DataContext.Provider value={{products}}>
      {props.children}
    </DataContext.Provider>
  );
}