import "./Figure.css";

const Figure = ({ data }) => {
  return (
    <figure className="apodFigure">
        <h1 className="title">{data.title}</h1>
        <h3>{data.date}</h3>
        <p>{data.explanation}</p>
    </figure>
  );
};

export default Figure;
