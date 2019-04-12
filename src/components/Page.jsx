import React from 'react';
import { AppLink } from 'components/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

export const Page = ({ title, loading, backButton, children }) => (
	<div className="Page">
		<header className="Page-title">{backButton && <><AppLink to="/"><FontAwesomeIcon icon={ faArrowCircleLeft }/></AppLink></>}{title}</header>
		<div className="Page-content">{loading ? <div className="Page-content-loading" /> : children}</div>
	</div>
);
