const Title = (props) => <h1 className="title">{props.text}</h1>;

function Copy() {
  return <p>Jaguar shark! So me - does it really exist?</p>;
}

const Kpi = () => {
  return (
    <div className="box">
      <Title text="Jeff Goldblum says:" />
      <Copy />
    </div>
  );
};

export default Kpi;

// ReactDOM.render(<Kpi />, document.getElementById("root"));
