import styled from 'styled-components';

const Card = styled.div`
  border: 3px solid #FAE0C5;
  margin-top: 30px;
  margin-bottom: 70px;
`;

const CardContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  border-top: 3px solid #FAE0C5;
  h3 {
    font-size: 2rem;
    margin: 0;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  a {
    padding: 15px;
    font-size: 20px;
    color: black;
    border: 3px solid #FAE0C5
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      // background-color: ${Color.PRIMARY};
      // color: ${Color.WHITE};
    }
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BlogCard = props => {
  return (
    <Card>
      <ImageDiv>
        <Image src={props.src} alt={props.imgAlt} />
      </ImageDiv>
      <CardContent>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
