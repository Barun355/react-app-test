function Sidebar(props){
  const asideStyle = {
    background: "#fdfdff",
    marginLeft: "12px",
  };
  
  return (
  <aside style={asideStyle} className="aside-class">{props.greet} from Sidebar</aside>
  );
}

export default Sidebar;
