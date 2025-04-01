    "use client"  // This tells Next.js this component only runs in the browser

    import '@/app/globals.css'
    
    import {
      EditorContent, FloatingMenu, mergeAttributes,
      Node, useEditor,
    } from '@tiptap/react'
    import StarterKit from '@tiptap/starter-kit'
    import React, { useEffect } from 'react'
    
    export default () => {
      const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: `
          <p>Let's write something</p>
    
          <p></p>
        `,
      })
    
      const [isEditable, setIsEditable] = React.useState(true)
    
      useEffect(() => {
        if (editor) {
          editor.setEditable(isEditable)
        }
      }, [isEditable, editor])
    
      return (
        <>
          {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div data-testid="floating-menu" className="floating-menu">
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`cursor-pointer ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
              >
                H1
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`cursor-pointer ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
              >
                H2
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`cursor-pointer ${editor.isActive('bulletList') ? 'is-active' : ''}`}
              >
                Bullet list
              </button>
            </div>
          </FloatingMenu>}
          <EditorContent editor={editor} />
        </>
      )
    }    