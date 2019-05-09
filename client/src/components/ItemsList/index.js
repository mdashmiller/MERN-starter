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
    const { items } = this.props

    return (
      <div>
        {items.length &&
          <ul data-test="list">
            {items.map(item =>
              <li key={item.id}>{item.title}</li>
            )}
          </ul>
        }
      </div>
    )
  }
}

ItemsList.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { getItems })(ItemsList)
