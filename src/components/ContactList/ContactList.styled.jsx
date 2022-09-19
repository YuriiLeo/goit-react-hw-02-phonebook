import styled from 'styled-components';

export const List = styled.ul`
    margin-left: 20px;
`;

export const Wrapper = styled.div`
  margin-left: 20px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;  
`;

export const Button = styled.button`
    /* font-size: 20px; */
    padding: 0 10px;
    margin-left: 20px;
    cursor: pointer;
    border-color: #00000024;
    border-radius: 2px;
    background-color: #00000005;

    &:hover, &:focus {

        background-color: #2196f3;
        transform: scale(1.22);
    }
`;