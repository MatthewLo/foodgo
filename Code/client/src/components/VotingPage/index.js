import React from 'react';
import { withRouter } from 'react-router-dom';

import Voting from './voting';
import Header from '../header';

const VotingPage = (props) => {
  return (
    <div>
      <Header/>
      <Voting
        db={props.db}
        idKey={props.match.params.id}
      />
    </div>
  );
}

export default withRouter(VotingPage);