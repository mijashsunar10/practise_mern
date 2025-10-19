import React from 'react'

import foodreceipe from '../assets/images/image.png'
import Receipitems from '../components/Receipitems'


const Home = () => {
  return (
    <>

 
    <section className='home'>

        <div className='left'>
            <h1>Food Receipe</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae accusamus nam omnis aspernatur nisi vitae nemo distinctio amet facere eaque obcaecati, doloribus quia eum accusantium possimus esse iste fugiat harum unde quibusdam repellendus. Vero natus, ab, soluta nemo earum incidunt quod atque, voluptatem sapiente libero recusandae ipsa corrupti ullam.</h5>
            <button>Share your receipe</button>
        </div>
        <div className='right'>
            <img src={foodreceipe} width="320px" height="300px" alt="" />



        </div>

    </section>
    <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,224L21.8,240C43.6,256,87,288,131,266.7C174.5,245,218,171,262,160C305.5,149,349,203,393,229.3C436.4,256,480,256,524,218.7C567.3,181,611,107,655,101.3C698.2,96,742,160,785,197.3C829.1,235,873,245,916,213.3C960,181,1004,107,1047,85.3C1090.9,64,1135,96,1178,106.7C1221.8,117,1265,107,1309,117.3C1352.7,128,1396,160,1418,176L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>


    </div>
  {/* <Footer/> no need to includeheader and footer at everytime at everpage now just use the mainnavigation in App.jsx*/}

  <div className='receipe'>
    <Receipitems/>
  </div>
    </>
  )
}

export default Home
