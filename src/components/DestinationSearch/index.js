// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const destinationsList = this.props
    console.log(destinationsList)
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            className="search-element"
            type="search"
            placeholder="search"
          />
          <img
            className="search-button"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt=" search icon"
          />
        </div>
        <ul>
          {destinationsList.map(eachDestination => (
            <DestinationItem
              eachDestination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
