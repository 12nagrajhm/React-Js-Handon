const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" required />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
