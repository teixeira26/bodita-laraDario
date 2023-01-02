import React from 'react';
import './popUp.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    abierto: true,
  }
  
  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {
    const modalstyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    
    console.log(this.props)
    return (
      <>
        <div >
          <div >
            <Modal isOpen={this.state.abierto} style={modalstyles}>
              <ModalHeader className="principal">
                DATOS BANCARIOS
              </ModalHeader>
              <ModalBody className="secundario">
                Nombre del titular: Darío Ezequiel Latorre <br/>
                CBU: 0000003100090919459141 <br/>
                Alias: Dario.Latorre.mp <br/>
                Mercado Pago <br/><br/>

                Como estamos preparando nuestro hogar, lo priorizamos y nos encantaria que seas parte colaborando ❤️
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.props.setModalActive(false)}>Cerrar</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </>
    )
  }
}

export default App;
