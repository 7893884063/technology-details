import './index.css'

const TechnologyCard = props => {
  const {technologyDetails} = props
  const {title, description, imgUrl, className} = technologyDetails

  return (
    <li className={`${className} technology-list-item`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt={title} className="first-image" />
        </div>
      </div>
    </li>
  )
}
export default TechnologyCard
