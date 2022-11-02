import React from 'react';

export interface AsterriskProps {
  fill: string,
}

export class Asterrisk extends React.Component<AsterriskProps> {
  render() {
    return (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.60533 6.5L0 4.46875L1.42133 1.9974L5.06133 4.09635V0H7.93867V4.09635L11.544 1.9974L13 4.46875L9.36 6.5L13 8.53125L11.544 10.9688L7.93867 8.9375V13H5.06133V8.9375L1.42133 10.9688L0 8.53125L3.60533 6.5Z"
         fill={this.props.fill} />
      </svg>
    );
  }
}
