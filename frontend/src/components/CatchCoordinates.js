import '../css/CatchCoordinates.css'

const CatchCoordinates = ({children}) => (
  <div>
    <p className="catchCoordinates ">Double click copy the ground coordinates</p>
    <div className="copiedCoordinates" id="copiedCoordinates"></div>
  </div>
)

export default CatchCoordinates;