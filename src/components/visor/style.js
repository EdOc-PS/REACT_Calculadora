import styled from 'styled-components'

export const InputContainer = styled.div`
  
    background-color: #484D57;
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    margin-bottom: 5px;


    input{
      width: 100%;
      height: 180px;
      background-color: transparent;
      font-size: 70px;
      padding: .5rem 2rem;
      border: 0;
      text-align: end;
    }
      
    input:focus-visible {
        outline: none;
    }

`
