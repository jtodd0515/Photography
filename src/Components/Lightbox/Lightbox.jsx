import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function Lightbox(props) {
  const [toggler, setToggler] = useState(true);
  const { sources } = props;

  return (
    <>
      {sources ?
        <>
          <div onClick={() => setToggler(!toggler)}>
            {props.children}
          </div>
          <FsLightbox
            toggler={toggler}
            sources={sources}
          />
        </> :
        null
      }
    </>
  );
}

export default Lightbox;
