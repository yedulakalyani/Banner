// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {Banner} = props
  const {headerText, description, className} = Banner
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h className="heading">{headerText}</h>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
