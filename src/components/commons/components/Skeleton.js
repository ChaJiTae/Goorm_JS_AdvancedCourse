import React from 'react';
import './Skeleton.css'; // Update the file path to the correct location

function Skeleton() {
  return (
    <div className="skeleton">
        <div className="skeleton-avatar"/>
        <div className="skeleton-author"/>
        <div className="skeleton-description"/>
    </div>
  )
}

export default Skeleton;
