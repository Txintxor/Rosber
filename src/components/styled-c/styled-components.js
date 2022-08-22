import styled from "styled-components";

///VARIABLES DE CSS

export const border = "#6B9E72";
export const whiteC = "#EFF2FB";
export const barBack = "#406345";

//STYLED COMPONENTS

export const Listed = styled.li`
  padding: 0 1rem;
`;

//Componente Ficha

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const OutputContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  
  @media (max-width: 900px) {
    width: fit-content;
  }
`;

export const InputField = styled.input`
  width: 15rem;
  height: 1.5rem;
  padding: 0.35rem;
  margin: 1rem 0;
  border: 2px solid ${border};
  border-radius: 4px;
`;

export const OutputList = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  background-color: ${whiteC};
  min-height: 1rem;
`;

export const OutputLi = styled.li`
display:flex;
flex-direction: row;
list-style-type: none;
`;

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  font: inherit;
  color: inherit;
`;
export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  font: inherit;
  color: inherit;
`;

export const Card = styled.a`
  background-color: ${barBack};
  color: ${whiteC};
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 3rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0.75rem;
  }
`;

export const CardDiv = styled.div`
  background-color: ${barBack};
  color: ${whiteC};
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 3rem;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0.75rem;
  }
`;

export const Button = styled.a`
  width: fit-content;
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  text-align: center;
  align-self: center;
  background-color: ${whiteC};
`;

export const Button2 = styled.button`
  width: fit-content;
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  text-align: center;
  align-self: center;
  background-color: ${whiteC};
  margin: 1rem 0;
`;

export const DelButton = styled.button`
  font-weight: 800;
  color: ${border};
  border: 2px solid ${border};
  border-radius: 4px;
  padding: 0 0.2rem;
  margin-left: 0.2rem;
`;

export const Label = styled.label`
  font-weight: 800;
`;
