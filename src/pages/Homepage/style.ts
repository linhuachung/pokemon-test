import styled from 'styled-components'

const HomePageWrapperContentStyled = styled.div`
    margin: 30px 0;
`

const ContentItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const ContentButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    button {
        margin: 0 10px;
    }
`

export { HomePageWrapperContentStyled, ContentItem, ContentButton }
