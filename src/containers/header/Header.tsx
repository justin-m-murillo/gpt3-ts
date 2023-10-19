import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai-min.png'

const Header = () => {
  const headerTitle = "Let's Build Something amazing with GPT-3 OpenAI";
  const headerDesc = "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.";
  const getStarted = "Get Started";
  const peopleDesc = "1,600 people requested access a visit in last 24 hours";

  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>{headerTitle}</h1>
        <p>{headerDesc}</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>{getStarted}</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>{peopleDesc}</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header