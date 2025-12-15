import React from 'react'
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const ElectronicsItem = [{
     image: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?semt=ais_hybrid&w=740&q=80",
  title: "Smart TV",
  description: "A high-definition smart TV with internet connectivity."
},
  {
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230216/pngtree-open-empty-fridge-in-front-of-green-wall-3d-illustration-image_1609670.jpg",
    title: "Refrigerator",
    description: "A spacious refrigerator with energy-saving features.",
  },
  {
    image: "https://img.freepik.com/free-photo/view-laundry-room-with-washing-machine-retro-colors_23-2151176271.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Washing Machine",
    description: "A front-load washing machine with multiple wash settings.",
  },
  {
    image: "https://static.vecteezy.com/ti/fotos-gratis/t1/49372114-uma-branco-ar-condicionador-e-montado-em-a-parede-dentro-uma-quarto-com-uma-vermelho-e-azul-muro-a-quarto-tem-uma-brilhante-e-ensolarado-atmosfera-com-uma-em-vaso-plantar-dentro-a-canto-foto.jpg",
    title: "Air Conditioner",
    description: "About 1.5-ton split air conditioner with inverter technology.",
  },
]

function Examplecarousel() {
  return (
    <div className='container-fluid' style={{marginTop:"5%"}}>
          <Carousel>
              {ElectronicsItem.map((item, index) => (
                  <Carousel.Item key={index}>
                      <img className="d-block " src={item.image} alt={item.title} style={{ height: '500px', objectFit: 'cover', width: "100%" }} />
                      <Carousel.Caption className='text-white ' style={{ marginTop: "100px" }}>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              ))}
      </Carousel>
      <div className='container-fluid mt-5 d-flex flex-wrap gap-4 left-0' style={{width:"100%"}}>
              
              <Card className="card-hover" style={{width:"18%"}}>
                  <Card.Body>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.b9lmSDJS1Nzu3-Zp-TLpjwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{ width: '90%', height: '200px', objectFit: 'cover', justifyItem: "center" }} />
                      <Card.Title>Smart Watch</Card.Title>
                      <Card.Text>
                         A portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in terms of notifications and other features. 
                      </Card.Text>
                  </Card.Body>
              </Card>

              <Card className="card-hover" style={{width:"18%"}}>
                  <Card.Body>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lyCuCfRxZCqY2McUNcsMiQHaFj?w=266&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{ width: '90%', height: '200px', objectFit: 'cover', justifyItem: "center" }} />
                      <Card.Title>Laptops</Card.Title>
                      <Card.Text>
                          A portable computer with a clamshell form factor suitable for mobile used.
                      </Card.Text>
                  </Card.Body>
              </Card>

              <Card className="card-hover" style={{width:"18%"}}>
                  <Card.Body>
                      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.qMnKupYMJvmaLZEtlxuF6AHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{ width: '90%', height: '200px', objectFit: 'cover' }} />
                      <Card.Title>Headphones</Card.Title>
                      <Card.Text>
                          A pair of small loudspeaker drivers worn on or around the head over a users ears.
                      </Card.Text>
                  </Card.Body>
        </Card>
        <Card className="card-hover" style={{ width: "18%" }}>
          <Card.Body>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.bWXlTKYiejyABUEz5IZkGgHaEo?w=313&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{ width: '90%', height: '200px', objectFit: 'cover' }} />
          <Card.Title>Smart Phone</Card.Title>
          <Card.Text>
            A high-resolution touchscreen high-speed processor ample RAM and a quality camera system for photos and videos.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card className="card-hover" style={{ width: "18%" }}>
          <Card.Body>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.c034wcEWDaq9DBdPHH7KuAHaFB?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{ width: '90%', height: '200px', objectFit: 'cover' }} />
          <Card.Title>Tablet</Card.Title>
          <Card.Text>
            A touch-sensitive screen and is used for various tasks such as web browsing watching videos reading e-books playing games and running applications.
          </Card.Text>
          </Card.Body>
        </Card>
          </div>
      
    </div> 
  )
}

export default Examplecarousel
