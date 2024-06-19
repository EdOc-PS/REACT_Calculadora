import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle, #d1cafd 0%, #8a8ac2 50%, #4d4e86 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  
`

export const Content = styled.div`
    width: 700px;
    padding: .7rem;  
    border: 2px solid #4F5560;
    border-radius: 5px;
    backdrop-filter: blur(15px);
    background-color: #4F5560AA;
    
`

export const ButtonSpace = styled.div`
    width: 100%;
    display: flex;
    gap: .5rem;
    padding: .2rem 0;
    flex-wrap: wrap;
`


export const ButtonSpaceColor = styled.div`
    width: 100%;
    display: flex;
    gap: .5rem;
    padding: .2rem 0;
    flex-wrap: wrap;

        button:last-child{
            background-color: #4d4e86;
        }
`
