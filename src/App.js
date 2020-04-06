import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPerson } from './actions/personAction'

import './css/App.css';
import PersonPicker from './components/PersonPicker'
import FilmCard from './components/FilmCard'
import FilmModal from './components/FilmModal'
import ViewGridIcon from 'mdi-react/ViewGridIcon';
import FormatListBulletedIcon from 'mdi-react/FormatListBulletedIcon';
import loader from './img/bb8.gif'
import logo2 from './img/logo2.jpg'

class App extends React.Component {
  state = {
    person: '',
    currentFilm: {},
    loading: false,
    row: false,
    modal: false
  }

  handleChange = person => {
    this.setState({ person: person.name })
    this.props.getPerson(person)
    this.showLoader()
  }

  sortFilms = films => {
    films = films.sort((a, b) => {
      if (a.release_date < b.release_date) return -1;
      if (a.release_date > b.release_date) return 1;
      return 0;
    })
    return films
  }

  renderFilms = (films) => {
    let newFilms =
      films.length ?
        this.sortFilms(films).map(f => {
          return <FilmCard
            onClick={() => this.pickFilm(f)}
            film={f}
            row={this.state.row}
            key={f.episode_id} />
        })
        : <span style={{ "margin": "20px auto" }}>
            No films listed
          </span>
    return newFilms
  }

  showLoader = () => {
    this.setState({ loading: true })
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  toggleRow = () => {
    this.setState({ row: !this.state.row })
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  pickFilm = currentFilm => {
    this.setState({ currentFilm })
    this.toggleModal()
  }

  render() {
    // console.log('state', this.state);
    // console.log('props', this.props);

    let rowClass = this.state.row ? "active" : "inactive"
    let gridClass = this.state.row ? "inactive" : "active"

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} alt="Movie Poster" width="150px" />
          <div className="App-header-center">
            <PersonPicker handleChange={this.handleChange} />
          </div>
          <div className="App-header-right">
            <ViewGridIcon onClick={this.toggleRow} className={gridClass} />
            <FormatListBulletedIcon onClick={this.toggleRow} className={rowClass} />
          </div>
        </header>

        {this.props.loading || this.state.loading ?
          <div className="movies">
            <img src={loader} width="200px" alt="loading" className="loader" />
          </div> : null
        }

        {this.state.person && !this.state.loading &&
          <h3 className="subheader-caption">Films that {this.state.person} appears in:</h3>
        }

        {this.props.loading === false &&
        this.props.films &&
        !!this.props.films.length &&
          <div className="movies">
            {this.renderFilms(this.props.films)}
          </div>
        }

        {this.props.loading === false &&
        this.state.loading === false &&
        this.props.films &&
        this.props.films.length === 0 &&
          'No films available'}

        {!this.props.person &&
          <div className="welcome">
            <div className="welcome-inner">
              <h1>Welcome!</h1>
              <h2>Choose a Character</h2>
              <h2>Using the Menu Above</h2>
            </div>
          </div>
        }

        <FilmModal
          modal={this.state.modal}
          toggleModal={this.toggleModal}
          data={this.state.currentFilm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.personReducer.loading,
    person: state.personReducer.person,
    films: state.personReducer.films
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { getPerson }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
