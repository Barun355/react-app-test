function Icon({typeName, children}){
  return (
    <span className="material-symbols- {typeName}">{children}</span>
  );
}

export default Icon;
