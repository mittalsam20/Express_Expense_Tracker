const InfoCard = () => {
  const ran = Math.round(Math.random());
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying:
      <br />
      Add
      {ran ? "Income " : "Expense "} for
      {ran ? "100 " : "500 "} Rs in category
      {ran ? "Car " : "Salary "} for
      {ran ? "Monday " : "Next Monday "}...
    </div>
  );
};

export default InfoCard;
