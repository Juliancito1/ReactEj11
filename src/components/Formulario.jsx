import { Container, Form } from "react-bootstrap";

const Formulario = () => {
    return (
        <Container className="my-5">
            <Form>
            <Form.Group className="mb-3 justify-content-center d-flex" controlId="formCategoria">
            <Form.Label className="d-inline fs-4">Buscar por Categoria: </Form.Label>
            <Form.Select className="d-inline w-50 ms-3" aria-label="Categoria">
            <option>Opciones</option>
            <option value="sports">Deportes</option>
            <option value="top">Top</option>
            <option value="business">Negocios</option>
            <option value="technology">Tecnologia</option>
            </Form.Select>
            </Form.Group>
            </Form>
        </Container>
    );
};

export default Formulario;