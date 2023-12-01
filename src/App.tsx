import { Container, Header, NavBar, About, Products, Contact, Footer } from "./components/"
import HeaderImage from './assets/header-image.jpg'


function App() {
  const AboutImage = 'https://placehold.co/600x400'
  return (
    <Container>
      <Header image={HeaderImage} title="Arthus'anato e Lele vasos" subtitle="A arte inovando na cerâmica" id="Home"/>
      <NavBar />
      <About id="About" image={AboutImage} title="Quem somos"/>
      <Products />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
