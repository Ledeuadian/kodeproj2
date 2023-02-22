import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { TabTitle } from '../utilities/Title'

export default function Movies() {
    TabTitle('Movies');
    return ( 
      <div className = 'bg-dark'> 
       <div>

<div className='d-flex justify-content-center'> 
    <div class="input-group input-group-sm mb-3 ms-3 w-25  "  >
    <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm "/>
    <button type="button" class="btn btn-danger">Search</button>
    </div>
</div>

{/* carousel */}
<div className ="bg-dark text-start img-fluid">
    <h1 className = "text-light text-start rounded-3 mx-auto justify-self-start"></h1>
{/* Start of carousel */}
<OwlCarousel
    className="container owl-theme bg-light rounded-3 p-3"
    items="4"
    loop
    margin={10}>
    <section>

    <div className="item ">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://airwallpaper.com/wp-content/uploads/images2/HD-One-piece-wallpaper-color.jpg" />
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="item mt-3">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp5963929.jpg" />
        <Card.Body>
          <Card.Title>Card Title </Card.Title>
          <Button variant="primary" className="mt-auto">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

  
    </section>

    <section>

<div className="item ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918284.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className="item mt-3 ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp3888271.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</section>

<section>

<div className="item ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp5838694.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className="item mt-3">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp5510903.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</section>

<section>

<div className="item ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918303.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className="item mt-3">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918322.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</section>

<section>

<div className="item ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918361.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className="item mt-3">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6421201.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</section>

<section>

<div className="item ">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918386.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className="item mt-3">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://wallpapercave.com/dwp1x/wp6918439.jpg" />
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</section>

    </OwlCarousel>

  {/* End of carousel */}


<section>
  <p className='fs-4 text-light text-center mt-5 mb-0'>Unlimitied movies, Tv shows and more</p>
  <p className='fs-4 text-light text-center m-0'>Watch anywhere. Cancel anytime</p>
  <p className='fs-4 text-light text-center '>Ready to watch your email to create or restart your membership</p>
  
</section>

</div>
  <div className="bg-dark container d-flex flex-row mt-5 w-50 ">
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email Address'/>
  <Button className="me-2" variant="danger">Watch</Button>{' '}
  </div>

</div>
      </div>
    )
}