import React from 'react';
import './popUp.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
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
        <div className="principal">
          <div className="secundario">

          </div></div>

        <Modal isOpen={this.state.abierto} style={modalstyles}>
          <ModalHeader >
            DATOS BANCARIOS
          </ModalHeader>
          <ModalBody>
              Nombre del titular: Florencia Fernandez
              CBU: 456d4as65d4sa56
              Alias: dsda-dsdsa-dsadsa
              DNI: 123456789
              Banco Galicia
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=>this.props.setModalActive(false)}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default App;