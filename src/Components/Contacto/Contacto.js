import React, {useRef} from 'react'
import './Contacto.css'
import { Container, Form, Button } from 'react-bootstrap'
import swal from 'sweetalert';


function Contacto() {

  const email = useRef();
  const nombre = useRef();
  const apellido = useRef();
  const provincia = useRef();
  const comentario = useRef();

  function handleEffect(e){
    e.preventDefault();
    if (nombre.current.value === ""){
      swal({
        title: "Complete su nombre",
        icon: "error",
      });
    }
    
    if (apellido.current.value === ""){
      swal("Complete su apellido");
      swal({
        title: "Complete su apellido",
        icon: "error",
      });
    }

    if (provincia.current.value === ""){
      swal("Complete su provincia");
      swal({
        title: "Complete su provincia",
        icon: "error",
      });
    }
    if (comentario.current.value === ""){
      swal("Complete su comentario");
      swal({
        title: "Complete su comentario",
        icon: "error",
      });
    }
    if (email.current.value === "" ){
      swal("Complete su email");
      swal({
        title: "Complete su email",
        icon: "error",
      });
    }else{
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email.current.value)) {
        swal({
          title: "Revise su direccion de email",
          icon: "error",
        });
      }
    }

  }

  return (
    <>
      <Container className="contactoContainer">
        <h3 className="contactoTitulo">Dejanos tu comentario y te contactaremos</h3>
        <Form className="contactoForm">
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={email} type="email" placeholder="Ingrese un email válido." />
            <Form.Text className="text-muted">
              No compartiremos tu email con nadie.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control ref={nombre} type="text" placeholder="*" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control ref={apellido} type="text" placeholder="*"  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Provincia</Form.Label>
            <Form.Control ref={provincia} type="text" placeholder="*"  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comentario</Form.Label>
            <Form.Control ref={comentario} as="textarea" placeholder="Dejanos tu comentario... *" />
          </Form.Group>
          
          <Button variant="primary" onClick={handleEffect} className="btn btn-info contactoBtn" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Contacto
