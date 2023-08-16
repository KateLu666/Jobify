import styled from "styled-components";

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1rem;
    color: var(--text-color);
  }
`;
export default Wrapper;
