import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/img.png"

const Hero = () => {

    const StyledHero = styled("div")(()=>({
      backgroundColor: "black"
    }))
    const StyledImg = styled("img")(()=>({
      width: "30px"
      
    }))

    return (
      <>
        <StyledHero>
          Olá
          <img src={Avatar} alt="" />
        </StyledHero>
      </>
    )
  }
  
  export default Hero