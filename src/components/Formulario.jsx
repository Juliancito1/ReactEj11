import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
    const[categoria, setCategoria] = useState('');

    return (
        <Container className="my-5 border border-3 border-black">
            <Form>
            <Form.Group className="my-3 justify-content-center d-flex border-bottom border-black border-1" controlId="formCategoria">
            <Form.Label className="d-inline fs-4">Buscar por Categoria: </Form.Label>
            <Form.Select className="d-inline w-50 ms-3 mb-4" aria-label="Categoria" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
            <option>Opciones</option>
            <option value="sports">Deportes</option>
            <option value="top">Top</option>
            <option value="business">Negocios</option>
            <option value="technology">Tecnologia</option>
            </Form.Select>
            </Form.Group>
            </Form>
            <ListaNoticias></ListaNoticias>
        </Container>
    );
};

export default Formulario;