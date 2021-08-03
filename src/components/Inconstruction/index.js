import {InconstImage,InconstContainer, InconstImageWrapper,InconstTextWrapper,InconstTitle,InconstDesc} from './InconstructionStyle'
import img from '../../images/under_construction.svg'

const Inconstruction = () => {
    return (
        <>
        <InconstContainer>
            <InconstImageWrapper>
                <InconstImage src={img} alt='in construction'/>
            </InconstImageWrapper>

            <InconstTextWrapper>
            <InconstTitle>Page in construction</InconstTitle>
            <InconstDesc>Sorry, our team is currently working on this page.</InconstDesc>
            </InconstTextWrapper>  
        </InconstContainer>
        </>
    )
}

export default Inconstruction
