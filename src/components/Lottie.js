function Icon({srcName}){
  return (
    <lottie-player src={srcName} background="transparent"  speed="1"  style="width: 100%; height: 100%;" loop controls autoplay></lottie-player>
  );
}

export default Icon;
