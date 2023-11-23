import './index.css'

const Tabs = props => {
  const {isActive, onClickTab, tabItem} = props
  const {buttonText, id} = tabItem

  const onClickItem = () => {
    onClickTab(id)
  }

  const activeButtonCls = isActive ? 'active-btn' : ''

  return (
    <li className="list-container">
      <button
        type="button"
        onClick={onClickItem}
        className={`button ${activeButtonCls}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
