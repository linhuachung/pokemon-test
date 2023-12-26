import styled from 'styled-components';

const HomePageWrapperContentStyled = styled.div`
  margin: 30px 0;
`;

const ContentItem = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ContentButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin: 20px auto 0 auto;
`;

export { HomePageWrapperContentStyled, ContentItem, ContentButton };
