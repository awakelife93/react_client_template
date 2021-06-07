import styled from "styled-components";
import { CommonComponentIE } from ".";
import { CommonColor } from "../styles";

interface SubMitButtonIE extends CommonComponentIE {}
export const SubMitButton = styled.button`
  width: ${(props: SubMitButtonIE) => props["width"] ?? "150px"};
  height: ${(props: SubMitButtonIE) => props["height"] ?? "40px"};
  margin: ${(props: SubMitButtonIE) => props["margin"] ?? "20px"};
  color: ${(props: SubMitButtonIE) => props["color"] ?? CommonColor.TEXT_COLOR};
  background-color: ${(props: SubMitButtonIE) =>
    props["background-color"] ?? "black"};
  border: ${(props: SubMitButtonIE) => props["border"] ?? "none"};
`;

interface TextButtonIE extends CommonComponentIE {}
export const TextButton = styled.button`
  background-color: ${(props: TextButtonIE) =>
    props["background-color"] ?? CommonColor.TRANS_PARENT};
  border: ${(props: TextButtonIE) => props["border"] ?? "none"};
  color: ${(props: TextButtonIE) => props["color"] ?? CommonColor.TEXT_COLOR};
  font-size: ${(props: TextButtonIE) => props["font-size"] ?? "15px"};
`;