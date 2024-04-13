import './style/EditText.css';

function EditText({placeholderText}){
  return (
    <input placeholder={ placeholderText ? placeholderText : "" } type="text" className="input-class" />
  );
}

export default EditText;
