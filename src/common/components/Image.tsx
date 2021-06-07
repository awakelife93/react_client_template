import styled from "styled-components";
import { CommonComponentIE } from ".";

interface BannerImageIE extends CommonComponentIE {}
export const BannerImage = styled.img`
  width: ${(props: BannerImageIE) => props["width"] ?? "100%"};
  height: ${(props: BannerImageIE) =>
    props["height"] ?? `${document.documentElement.clientHeight - 20}px`};
`;