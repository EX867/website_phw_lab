import React from "react";
import "./style.css";

import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyLink = ({children, content, description}) => {
  return (
    <span>
      <CopyToClipboard text={content}>
        <span className="copy-link" title={"click to copy " + description}>
          {children}
        </span>
      </CopyToClipboard>
    </span>
  );
};

export default CopyLink;