import React from "react";



class Menu extends React.Component {
  constructor() {
    super()
    this.state = { items: [] }
  }

  componentDidMount() {
    const menuURL = 'https://formula-test-api.herokuapp.com/menu';
    const myRequest = new Request(menuURL);
    let items = [];

    const filterByExpiration = (items) => {
      // change this function to return only current items
      // where expirationDate > today's date
      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      return items.filter((i) => {
          if ('expirationDate' in i) {
              let iD = new Date(i['expirationDate']);
              iD.setHours(0);
              iD.setMinutes(0);
              iD.setSeconds(0);
              iD.setMilliseconds(0);
              if (+iD > +today) return i;
          }
      });
    };

    fetch(myRequest)
      .then(response => {
        return response.json();
      })
      .then(response => {
          console.log(response);
          return (
            console.log('filterByExpiration: ', filterByExpiration(response)),
            filterByExpiration(response)
          );
      })
      .then(response => {
          //Proceed response here
          this.setState({ items: response })
      })
      .catch(e => {
          console.log(e);
          console.log(e.message);
      });
  }

  render() {
    return (
      <section className="main_menu" id="menu">
          <div className="container">
              <div className="main_menu__list">
              {this.state.items.map(items => {
                return (<article className="main_menu__item" key={items['id']}>
                          <div className="menu_content">
                              <h2 className="menu_title">{items['name']}</h2>
                              <p className="menu_description">{items['description']}</p>
                          </div>
                          <div className="menu_img" style={ { backgroundImage: "url("+items['backgroundURL']+")" } }></div>
                      </article>);
              })}
        
              </div>
          </div>
      </section>
    )
  }
}

export default Menu;