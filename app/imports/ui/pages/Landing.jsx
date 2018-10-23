import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='splash'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon name='users' size='huge' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper
                blandit purus, eget finibus magna ornare quis. Nulla sit amet elit eu diam volutpat lacinia id eget
                nisi. Nunc mollis ipsum non fermentum lacinia. Duis luctus vel nisi sit amet vestibulum.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='address book' size='huge' inverted/>
              <Header as='h1' inverted>Contact Details</Header>
              <Header as='h3' inverted>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper
                blandit purus, eget finibus magna ornare quis.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='calendar' size='huge' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper
                blandit purus, eget finibus magna ornare quis. Nulla sit amet elit eu diam volutpat lacinia id eget
                nisi. Nunc mollis ipsum non fermentum lacinia. Duis luctus vel nisi sit amet vestibulum.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
