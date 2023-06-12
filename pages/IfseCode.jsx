import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const IfseCode = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>

                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
                                {/* <Form.Label>Select an Bank Name:</Form.Label> */}
                                <Form.Control
                                    as="select"
                                    custom
                                    value={selectedOption}
                                    onChange={handleSelect}
                                >
                                    <option value="">Select an Bank Name</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
                                {/* <Form.Label>Select an option:</Form.Label> */}
                                <Form.Control
                                    as="select"
                                    custom
                                    value={selectedOption}
                                    onChange={handleSelect}
                                >
                                    <option value="">Select an State</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
                                {/* <Form.Label>Select an option:</Form.Label> */}
                                <Form.Control
                                    as="select"
                                    custom
                                    value={selectedOption}
                                    onChange={handleSelect}
                                >
                                    <option value="">Select an State</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
                                {/* <Form.Label>Select an option:</Form.Label> */}
                                <Form.Control
                                    as="select"
                                    custom
                                    value={selectedOption}
                                    onChange={handleSelect}
                                >
                                    <option value="">Select an Branch</option>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IfseCode;