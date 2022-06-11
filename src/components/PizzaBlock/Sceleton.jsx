import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='258' rx='10' ry='10' width='280' height='27' />
    <circle cx='129' cy='119' r='119' />
    <rect x='0' y='300' rx='10' ry='10' width='280' height='77' />
    <rect x='0' y='397' rx='10' ry='10' width='115' height='34' />
    <rect x='128' y='393' rx='14' ry='14' width='153' height='44' />
  </ContentLoader>
);

export default Sceleton;
