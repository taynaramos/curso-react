import React from "react";
import Contact from "./Contact";
// import './Contacts.scss';

class Contacts extends React.Component {
	render() {
		return (
			<div className="container" data-testid="contacts">
			<section className="contacts">
				<Contact/>
			</section>
		  </div>
		)
	}
}

export default Contacts;
