import './App.css';
import dubai from './Images/dubai.jpg';

function App() {
  return (
    <>
    <div class="hdr-bg"></div>

    <header class="hdr">
        <div class="content-wrap">
            <h1>SUMMERDAYS==HOLIDAYS==FUNDAYS!!</h1>
            <p class="p1">Plan Tours in holidays with us</p>
        </div>
    </header>



    <section class="destination">
        <div class="content-wrap">
            <div>
            <h2 class="des">Our Destination</h2>
            </div>
            <div class="dest1">
                <h3 class="h31">DUBAI</h3>
                <img src={dubai}/>
                <div class="dest-text">Dubai the city of gold,the city of glory, the city of richness,people dream to visit Dubai and see the lavish life of people over there.</div>   
            </div>

            
            </div>
        
        <a href="#contact" class="btn">Book your Trip</a>
    </section>



    <section class="price">
            <div class="content-wrap">
                <h2>our price</h2>
                <p> 50000 INR.</p>
            </div>
    </section>



    <section class="contact" id="contact">
        <div class="contect-wrap">
            <h2>contact</h2>
            <h3>SnehalAthare</h3>
            <p>Email :snehalgunwant@gmail.com</p>
        </div>   
    </section>
    </>
  );
}

export default App;