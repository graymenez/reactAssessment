import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";

const ItemForm = ({ addFunction, type }) => {
  const INITIALSTATE = {
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [istyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState(INITIALSTATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    setIsTyping(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addFunction({
      id: formData.name.toLowerCase(),
      name: formData.name,
      description: formData.description,
      recipe: formData.recipe,
      serve: formData.serve,
    });
    setFormData(INITIALSTATE);
    setIsTyping(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {type === "snack" ? <h1>Create Snack</h1> : <h1>Create Drink</h1>}
      <FormGroup floating>
        <Label for="name">Name</Label>
        {istyping && formData.name.length < 4 ? (
          <Input
            required
            onChange={handleChange}
            invalid
            name="name"
            placeholder="Name"
            value={formData.name}
          />
        ) : (
          <Input
            required
            onChange={handleChange}
            name="name"
            placeholder="Name"
            value={formData.name}
          />
        )}

        <FormFeedback invalid>Field is required</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        {istyping && formData.description.length < 4 ? (
          <Input
            required
            type="textarea"
            onChange={handleChange}
            invalid
            name="description"
            placeholder="Item name"
            value={formData.description}
          />
        ) : (
          <Input
            required
            type="textarea"
            onChange={handleChange}
            name="description"
            placeholder="Description"
            value={formData.description}
          />
        )}

        <FormFeedback invalid>Field is required</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        {istyping && formData.recipe.length < 4 ? (
          <Input
            required
            onChange={handleChange}
            invalid
            name="recipe"
            placeholder="Recipe"
            value={formData.recipe}
          />
        ) : (
          <Input
            required
            onChange={handleChange}
            name="recipe"
            placeholder="Recipe"
            value={formData.recipe}
          />
        )}

        <FormFeedback invalid>Field is required</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        {istyping && formData.serve.length < 4 ? (
          <Input
            required
            onChange={handleChange}
            invalid
            name="serve"
            placeholder="Serve"
            value={formData.serve}
          />
        ) : (
          <Input
            required
            onChange={handleChange}
            name="serve"
            placeholder="Serve"
            value={formData.serve}
          />
        )}

        <FormFeedback invalid>Field is required</FormFeedback>
      </FormGroup>
      <Button color="primary">Submit</Button>
      {/* <FormGroup>
    <Label for="exampleEmail">Input without validation</Label>
    <Input />
    <FormFeedback>You will not be able to see this</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">Valid input</Label>
    <Input valid />
    <FormFeedback valid>Sweet! that name is available</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">Invalid input</Label>
    <Input invalid />
    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">Input without validation</Label>
    <Input />
    <FormFeedback tooltip>You will not be able to see this</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="exampleEmail">Valid input</Label>
    <Input valid />
    <FormFeedback tooltip valid>
      Sweet! that name is available
    </FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup className="position-relative">
    <Label for="examplePassword">Invalid input</Label>
    <Input invalid />
    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup> */}
    </Form>
  );
};

export default ItemForm;
