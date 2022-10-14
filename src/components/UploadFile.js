import axios from "axios";
import React, { useState } from "react";

const UploadFile = () => {
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = "http://localhost:3000/upload-file";
    const response = await axios.post(url, formData, config);
    console.log(response);
    setFileUrl(response.data.url);
  };
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]); // 0,1,2
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" name="file" multiple onChange={onChange} />
        </div>
        {fileUrl && <img src={fileUrl} />}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UploadFile;
