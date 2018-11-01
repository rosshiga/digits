import React from 'react';
import { Card,Image,Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Stuffs, People } from '/imports/api/stuff/stuff';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.contact.image}/>
          <Card.Content>
            <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
            <Card.Meta>
              {this.props.contact.address}
            </Card.Meta>
            <Card.Description>{this.props.contact.description}</Card.Description>
          </Card.Content>
          <Card.Content extra><Button color={'red'} onClick={ () => People.remove({_id: this.props.contact._id})}>Delete</Button></Card.Content>
        </Card>
    );
  }
}


/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact)
