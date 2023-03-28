import Markdown from "markdown-to-jsx";

const Card = ({ user }) => {
  const {
    data: { title, selftext, score, url }
  } = user;
  return (
    <div className="card-container">
      <div className="word-break">
        <strong>Title: </strong>
        {title}
      </div>
      <div className="word-break">
        <strong>SelfText_HTML: </strong>
        <Markdown>{selftext}</Markdown>
      </div>
      <div className="word-break">
        <strong>Score: </strong>
        {score}
      </div>
      <div className="word-break">
        <strong>URL: </strong>
        {url}
      </div>
      <div>
        <div>{`Window width = 1280px`}</div>
        <div>{`Window height = 720px`}</div>
      </div>
      );
    </div>
  );
};
export default Card;
