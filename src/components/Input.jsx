function Input({ handleonkeydown }) {
  return (
    <>
      <input
        type="text"
        class="form-control input"
        placeholder="enter new item in list"
        onKeyDown={(event) => {
          console.log(event);
          handleonkeydown(event);
        }}
      />
    </>
  );
}
export default Input;
