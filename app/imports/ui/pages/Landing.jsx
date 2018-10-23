import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='splash'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center' inverted>
              <Icon name='users' size='huge' inverted/>
              <h1>Multiple Users</h1>
              <h3>This address book enables any number of users to register and save contacts</h3>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='address book' size='huge' inverted/>
              <h1>Contact Details</h1>
              <h3>For each contact, you can save their number and name</h3></Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='calendar' size='huge' inverted/>
              <h1>Timestamped Notes</h1>
              <h3>Each time you make a contact with a contact, you can write a note that summarized the conversation.
                This note is save with the contact and a time stamp.</h3></Grid.Column>


          </Grid>
        </div>
    );
  }
}

export default Landing;
