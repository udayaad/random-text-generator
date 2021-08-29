import { randomParasGenerator } from "./utils"

const Para = ({number}) => {
  return (
    <div>
      {randomParasGenerator(number).map((para)=>(<p>{para}</p>))}
    </div>
  )
}

export default Para
