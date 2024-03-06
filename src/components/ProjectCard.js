import './ProjectCard.css';

function Link({title, hRef, children}){
  return (
    <div className="project-card">
      <TextView><strong>{title}</strong></TextView>
      <Link hRef={href} />
      <TextView>{children}</TextView>
      <Link hRef={hRef}>
        <Icon className="icon">right</Icon>
      </Link>
    </div>
  );
}

export default ProjectCard;
