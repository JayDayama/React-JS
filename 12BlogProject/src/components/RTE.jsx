import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import conf from '../conf/conf'

// RTE -> real time editor

export default function RTE({name , control , label , defaultValue = ""}) {
    // control passes something(control) from this component to who ever calls this component
  return (
    // we can directly create a editor over here and return it but we might need to use this editor somewhere at someplace but how do we get the refrence? -> controller
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller 
        name = {name || "content"}
        control={control} // passing the control over to the parent element (control over values, state, etc)
        render={({field : {onChange}}) => (
            // jo bhi render karwana hai :-
            <Editor
            apiKey={conf.tinymceApiKey}
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            //any changes in editor than the field should be governed with onchange
            // while using we will give the editors the label of rte and take over the access
            />
        )}
        />
    </div>
  )
}