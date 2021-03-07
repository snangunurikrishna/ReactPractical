import { PropTypes } from "prop-types";

const Child = (props) => {
  const { name, id } = props;
  return (
    <>
      Child{" "}
      <h1>
        {name}
        {id}
      </h1>
    </>
  );
};

export default Child;

Child.defaultProps = {
  name: "default name",
};
Child.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};
