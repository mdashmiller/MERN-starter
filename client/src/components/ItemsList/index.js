import React, { Component }from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getItems } from '../../store/actions/itemActions'

class ItemsList extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    const { items } = this.props.item

    return (
      <div>
        <ul>
          {items.map(item => 
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

ItemsList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
  // item: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired
  // }).isRequired
}

const mapStateToProps = state => {
  return {
    item: state.item
  }
}

export default connect(mapStateToProps, { getItems })(ItemsList)
