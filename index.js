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
        },
        {
          image: 'img/titan.jpg',
          caption: 'Survey Corps',
        },
        {
          image: 'img/cello.jpg',
          caption: 'Classy and refined',
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
        Welcome! This project was made to learn some front-end.<br/><br/>
        Use the terminal on the left to explore!<br/><br/>

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
          heading: 'Helm.ai',
          template: <div>Machine learning engineer<br />July 2018 - April 2020</div>,
          image: 'img/helm.jpeg',
          url: 'https://www.helm.ai/',
        },
        {
          heading: 'Stripe',
          template: <div>Software engineer<br/>August 2016 - March 2018</div>,
          image: 'img/stripe.png',
          url: 'https://stripe.com/',
        },
        {
          heading: 'Quora',
          template: <div>Software engineer<br/>July 2012 to January 2016</div>,
          image: 'img/quora.png',
          url: 'https://www.quora.com',
        },
        {
          heading: 'Facebook',
          template: <div>Software engineering intern<br/>Summer 2011</div>,
          image: 'img/facebook.png',
          url: 'https://www.facebook.com',
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


const ProjectsListing = React.createClass({
  getInitialState() {
    return {
      data: [
        {
          heading: 'musictube',
          template: (
            <div>
              <p>Efficient music practice</p>
              <ListGroup entries={
                [
                  {
                    name: 'TypeScript',
                    image: 'img/typescript.png',
                  },
                  {
                    name: 'Redux',
                    image: 'img/redux.svg',
                  },
                ]
              } />
            </div>
          ),
          image: 'img/music.ico',
          url: 'https://musictube.pages.dev/player',
        },
        {
          heading: 'music-visualizer.js',
          template: (
            <div>
              <p>Music visualizer</p>
              <ListGroup entries={
                [
                  {
                    name: 'BabylonJS',
                    image: 'img/babylonjs.png',
                  },
                ]
              }/>
            </div>
          ),
          image: 'img/music.ico',
          url: 'https://dogbox.github.io/music-visualizer.js/',
        },
        {
          heading: 'dogbox.github.io',
          template: (
            <div>
              <p>Learning front-end development</p>
              <ListGroup entries={
                [
                  {
                    name: 'React',
                    image: 'img/react.png',
                  },
                  {
                    name: 'jQuery',
                    image: 'img/jquery.png',
                  },
                  {
                    name: 'Bootstrap',
                    image: 'img/bootstrap.png',
                  }
                ]
              }/>
            </div>
          ),
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

const appHistory = ReactRouter.useRouterHistory(History.createHashHistory)({queryKey: false})

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/">
      <IndexRedirect to="/about"/>
      <Route path="about" component={About}/>
      <Route path="work" component={WorkListing}/>
      <Route path="projects" component={ProjectsListing}/>
    </Route>
  </Router>
), $('#view')[0]);
