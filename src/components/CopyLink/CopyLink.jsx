import React from "react";
import "./style.css";

import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyLink = ({label, content, description}) => {
  return (
    <span>
      <CopyToClipboard text={content}>
        <span className="copy-link" title={"click to copy " + description}>{label}</span>
      </CopyToClipboard>
    </span>
  );
};

export default CopyLink;