import {ButtonContainer} from "./style"
export default function Button({title, onClick}) {
  return (
    <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  )
}
