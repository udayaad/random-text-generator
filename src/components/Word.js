
import  randomWordsGenerator  from './utils'

const Word = ({number}) => {
  
  return (
    <div>
      <p>{randomWordsGenerator(number)}</p>


    </div>
  )
}

export default Word

