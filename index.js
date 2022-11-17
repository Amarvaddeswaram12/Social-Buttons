const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div>
      <h1>Social Buttons</h1>
      <div className="button-element">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
