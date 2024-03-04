function Icon({typeName, children}){
  return (
    <span className=`material-symbols-${typeName ? typeName : 'rounded'}`>{children}</span>
  );
}

export default Icon;
