import React, { useState } from 'react'
import Header from '../layouts/partials/header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Content() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (value) => {
    setEditorHtml(value);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions
    }
  }

  return (
    <div>
      <Header header={"Manage content"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-start bg-white px-4 py-2">
            <button className="rounded-md w-full sm:w-auto text-sm bg-gray-150 text-white px-6 py-2  font-medium capitalize">Privacy Policy</button>
            <button className="rounded-md w-full sm:w-auto border text-sm text-gray-150 px-6 py-2  font-medium capitalize">Terms and Conditions</button>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-4">
              {/* <Filterdropdown /> */}
            </div>
          </div>
          <div className='space-y-2 my-3'>
            <div className=' bg-white'>
              <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={handleEditorChange}
                modules={modules}
              />
            </div>
            <div>
              <button
                // onClick={saveContentToDatabase}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Save Content
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
