var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;
var Carousel = ReactBootstrap.Carousel;

const About = React.createClass({
  getInitialState() {
    return {
      slides: [
        {
          image: 'img/bike.jpg',
          caption: 'Life on the edge',
          id: 0,
        },
        {
          image: 'img/titan.jpg',
          caption: 'Survey Corps',
          id: 1,
        },
        {
          image: 'img/cello.jpg',
          caption: 'Classy and refined',
          id: 2,
        },
      ]
    };
  },

  render() {
    return (
      <div>
        <h2>dogboxland
          <i className="fa fa-arrow-left"/>
          <i className="fa fa-arrow-down"/>
          <i className="fa fa-arrow-up"/>
          <i className="fa fa-arrow-right"/>
        </h2>
        <p>Welcome! This is a project Im doing to learn front-end stuff.<br/>
          Use the terminal on the left to explore!</p>

        <Carousel style={{width: '500px'}}>
          {
            this.state.slides.map(function(slide, i) {
              return (
                <Carousel.Item key={i}>
                  <img src={slide.image} className="img-rounded" style={{margin: 'auto'}}/>
                  <Carousel.Caption>{slide.caption}</Carousel.Caption>
                </Carousel.Item>
              )})
          }
        </Carousel>
      </div>
    );
  }
});

const Listings = React.createClass({
  render() {
    return (
      <div>
        <div className="panel-group">
          {
            this.props.entries.map(function(entry, i) {
              return (
                <div className={i === 0 ? 'panel panel-primary' : 'panel panel-default'} key={i}>
                  <div className="panel-heading">
                    <h1 className="panel-title">{entry.heading}</h1>
                  </div>
                  <div className="panel-body">
                    <div className="row vertical-centered">
                      <div className="col-md-2">
                        <a href={entry.url} target="_blank">
                          <img src={entry.image} className="icon"/>
                        </a>
                      </div>
                      <div className="col-md-10" >
                        {entry.template}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  },
});

const WorkListing = React.createClass({
  getInitialState() {
    return {
      data: [
        {
          heading: 'Quora',
          template: <div>Software engineer<br/>July 2012 to January 2016</div>,
          image: 'img/quora.png',
          url: 'https://www.quora.com/profile/Scott-Liao',
        },
        {
          heading: 'Facebook',
          template: <div>Software engineering intern<br/>Summer 2011</div>,
          image: 'img/facebook.png',
          url: 'https://www.facebook.com/sliao',
        },
        {
          heading: 'California Institute of Technology',
          template: <div>Teaching assistant<br/>CS 38 (algorithms)</div>,
          image: 'img/caltech.png',
          url: 'https://www.caltech.edu/',
        },
      ]};
  },

  render() {
    return (
      <div>
        <h2>work work</h2>
        <Listings entries={this.state.data} />
      </div>
    );
  }
});

const SchoolListing = React.createClass({
  getInitialState() {
    return {
      data: [
        {
          heading: 'California Institute of Technology',
          template: <div>Class of 2012, computer science<br/>Page House, Lloyd House</div>,
          image: 'img/caltech.png',
          url: 'https://www.caltech.edu/',
        },
        {
          heading: 'The Harker School',
          template: <div>Class of 2008</div>,
          image: 'img/harker.jpeg',
          url: 'https://www.harker.org/',
        },
      ]};
  },

  render() {
    return (
      <div>
        <h2>i went 2 skool</h2>
        <Listings entries={this.state.data} />
      </div>
    );
  }
});


const ProjectsListing = React.createClass({
  getInitialState() {
    var entries = [
      {
        name: 'React',
        image: 'img/react.png',
        url: 'https://facebook.github.io/react/',
      },
      {
        name: 'jQuery',
        image: 'img/jquery.png',
        url: 'https://jquery.com/',
      },
      {
        name: 'Bootstrap',
        image: 'img/bootstrap.png',
        url: 'https://getbootstrap.com/',
      }
    ];
    return {
      data: [
        {
          heading: 'dogbox.github.io',
          template: <div><p>Learning front-end development</p><ListGroup entries={entries}/></div>,
          image: 'img/site.png',
          url: 'https://dogbox.github.io/',
        }
      ]};
  },

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Listings entries={this.state.data} />
      </div>
    );
  }
});

const ListGroup = React.createClass({
  render() {
    return (
      <ul className="list-group">
      {this.props.entries.map(function(entry, i) {
        return (
          <a href={entry.url} target="_blank" key={i} className="list-group-item">
            <div className="row vertical-centered">
              <div className="col-md-2">
                <img src={entry.image} className="small-icon" />
              </div>
              <div className="col-md-10">{entry.name}</div>
            </div>
          </a>
        );
      })}
      </ul>
    );
  }
});

const Footer = React.createClass({
  getInitialState() {
    return {
      buttons: [
        {
          class: 'fa-facebook',
          url: 'https://www.facebook.com/sliao',
        },
        {
          class: 'fa-linkedin',
          url: 'https://www.linkedin.com/in/scott-liao-99673355',
        },
        {
          class: 'fa-github',
          url: 'https://github.com/dogbox',
        },
        {
          class: 'fa-steam',
          url: 'http://steamcommunity.com/profiles/76561198019653821/',
        },
      ]};
  },

  render() {
    return (
      <ul className="btn-group" role="group">
      {
        this.state.buttons.map(function(button, i) {
          var class_name = 'btn btn-default fa fa-lg ' + button.class;
          return (
            <a href={button.url} target="_blank" key={i} className={class_name}/>
          );
        })
      }
      </ul>
    );
  }
});

const appHistory = ReactRouter.useRouterHistory(History.createHashHistory)({queryKey: false})

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/">
      <IndexRedirect to="/about"/>
      <Route path="about" component={About}/>
      <Route path="work" component={WorkListing}/>
      <Route path="projects" component={ProjectsListing}/>
      <Route path="school" component={SchoolListing}/>
    </Route>
  </Router>
), $('#view')[0]);

ReactDOM.render(<Footer/>, $('#social_buttons')[0]);
