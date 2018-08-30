import React from 'react';
const BadgeShowCountList = ({ totaltodo }) => (
  <span style={{ marginRight: 10 }} className="badge badge-info">
    Displaying all {totaltodo} todo
  </span>
);

export default BadgeShowCountList;
