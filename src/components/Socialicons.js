import React, {useState, useEffect} from "react";
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Socialicons(props){
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LineIcon name="linkedin-original"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github-original"/>
        </a>
      </li>}
      {!socialLinks.medium ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.medium}>
          <LineIcon name="medium"/>
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
