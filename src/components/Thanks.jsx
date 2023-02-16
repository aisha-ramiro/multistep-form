import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />

}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>Sua opiniao é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra</p>
      <p>Para concluir sua avaliação, clique no botão enviar</p>
      <h3>Aqui está um resumo da sua avaliação:</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comentário: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks