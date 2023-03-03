import './index.css'

const DenominationItem = props => {
  const {item, denominatorValue} = props
  const {value} = item

  const onDenominatorValue = () => {
    denominatorValue(value)
  }
  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onDenominatorValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
