import { useParams } from 'react-router-dom';

function Section() {
  const { id } = useParams();
  return <h2>Section ID: {id}</h2>;
}

export default Section;
