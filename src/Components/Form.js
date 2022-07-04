import styled from "styled-components";
import FormButton from "../Components/FormButton";
import Input from "../Components/Input";

// Object data is expected to be like this:
//
// {
//   form: { onSubmit },
//   inputs: [{
//       onChange
//       value
//       placeholder
//       required
//       disabled
//   }],
//   button: { text, disabled }
// }

export default function Form({ data }) {
  return (
    <Container autoComplete="on" onSubmit={data.form.onSubmit}>
      {data.inputs.map((input, index) => (
        <Input
          key={index}
          onChange={input.onChange}
          value={input.value}
          type={input.type}
          placeholder={input.placeholder}
          required={input.required}
          disabled={input.disabled}
        ></Input>
      ))}
      <FormButton disabled={data.button.disabled}>{data.button.text}</FormButton>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 36px;
`;
