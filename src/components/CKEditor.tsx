import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorWrapper: React.FC<{
  onChange: (data: string) => void;
  description: string;
  setImagePath: (path: string) => void;
}> = ({ onChange, description, setImagePath }) => {
  const [editor, setEditor] = useState<any>();
  const [editorData, setEditorData] = useState(description);

  useEffect(() => {
    if (editor) {
      (editor as any).plugins.get('FileRepository').createUploadAdapter = (
        loader: any
      ) => {
        return {
          async upload() {
            const data = new FormData();
            data.append('file', await loader.file);

            const response = await fetch('/api/upload-image', {
              method: 'POST',
              body: data,
            });

            const responseData = await response.json();
            setImagePath(responseData.path);
            return {
              default: responseData.path,
            };
          },
        };
      };
    }
  }, [editor, setImagePath]);

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={(event, editor) => {
        const data = editor.getData();
        setEditorData(data);
      }}
      onBlur={(event, editor) => {
        onChange(editorData);
      }}
      onReady={(editor) => {
        setEditor(editor);
      }}
    />
  );
};

export default CKEditorWrapper;
