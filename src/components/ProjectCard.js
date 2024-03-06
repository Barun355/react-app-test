import './ProjectCard.css';

import Icon from './Icon';
import Link from './Link';
import TextView from './TextView';

function ProjectCard({title, hRef, children}){
  return (
    <div className="project-card">
      <TextView><strong>{title}</strong></TextView>
      <Link hRef={hRef} />
      <TextView>{children}</TextView>
      <Link hRef={hRef}>
        <Icon className="icon">public</Icon>
      </Link>
    </div>
  );
}

export default ProjectCard;
