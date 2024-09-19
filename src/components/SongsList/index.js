import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const SongsList = props => {
  const {initialTracksList, onDeleteItem} = props
  const {id, imageUrl, name, duration, genre} = initialTracksList

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="bgs-container">
      <div className="card-container">
        <div className="first">
          <img src={imageUrl} alt="track" className="img" />
          <div className="name-container">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="time-container">
          <p className="time">{duration}</p>
          <button
            data-testid="delete"
            type="button"
            className="button"
            onClick={onClickDelete}
          >
            <RiDeleteBin7Line />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongsList
