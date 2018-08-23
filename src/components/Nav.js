import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List,{ListItem} from 'material-ui/List'


export default function Nav({categories}){
    const to = category =>{
        if(category.id === "1"){
            return '/all'}
        else
            {return `/category/${category.id}`
        }
    };

    return(
        <Drawer type='permanent'>
            <List className='nav'>
                {categories.map(category => (
                    <ListItem button key={`nav-item-${category.id}`}>
                        <Link to={to(category)}>
                            {category.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

Nav.PropTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
