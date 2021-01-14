# PortfolioSite
Personal website to showcase my projects and other work

# Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General Info
LeagueChat is a React app that offers full functionality to navigate between content, adjust to mobile devices, and allows for email comunication with Twilio SendGrid.

# Technologies
* React - version 17.0.1
* React Bootstrap - version 1.4.0
* Axios - version 0.21
## Deployement
https://danielmaderaportfolio.web.app/

## Code Examples
```javascript
handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }
```    
## Contact
Created by [Daniel Madera](https://www.linkedin.com/in/daniel-madera-925b4987/)

Please feel free to contact me!


