export const PopUp = ({ onHide }) => {
  const style = {
    backgroundColor: "#789",
    color: "#000",
    padding: "20px",
    margin: "40vh",
  };

  return (
    <div style={style}>
      <center>
        <h1>Welcome Everyone</h1>
        <button onClick={onHide}>close</button>
      </center>
    </div>
  );
};
