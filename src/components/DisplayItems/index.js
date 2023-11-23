import './index.css'

const DisplayItems = props => {
  const {displayItem} = props
  const {imageAltText, imageUrl} = displayItem

  return (
    <div className="image-container">
      <img src={imageUrl} alt={imageAltText} className="image-cls" />
    </div>
  )
}
export default DisplayItems
