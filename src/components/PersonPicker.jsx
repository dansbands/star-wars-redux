import React from 'react'
import characters from '../utils/characters.json'
import { Input, FormGroup } from 'reactstrap'

class PersonPicker extends React.Component {
  state = {
    characters: [],
    selectedCharacter: '',
    dropdownOpen: false
  }

  componentDidMount() {
    this.setState({ characters: characters.characters })
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  renderDropdownItems = () => {
    let newChar = this.state.characters.map(ch => {
      return <option key={ch.url} value={ch.name}>{ch.name}</option>
    })
    return newChar
  }

  handleChange = e => {
    // console.log('Changing Dropdown', e.target.value);
    let selectedCharacter = characters.characters.find(ch => ch.name === e.target.value)
    this.setState({ selectedCharacter })
    this.props.handleChange(selectedCharacter)
  }

  render() {
    // console.log('PersonPicker', this.state);
    return (
      <FormGroup>
        <Input 
          type="select"
          name="select"
          onChange={this.handleChange}
          defaultValue="Choose a character"
        >

        <option value="Choose a character" disabled>Choose a Character...</option>
        {this.renderDropdownItems()}

        </Input>
      </FormGroup>
    )
  }
}

export default PersonPicker;
