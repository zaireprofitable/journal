    "use client"  // This tells Next.js this component only runs in the browser

import { useEditor, EditorContent, FloatingMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'


const Editor = ()   => {
  // This is like creating a new notebook where we can write things
  const editor = useEditor({
    // StarterKit gives us basic features like bold, italic, and paragraphs
    extensions: [StarterKit],
    // This is what will show up when the editor is empty
    content: '<p>Start writing your journal entry...</p>',
    // This makes the editor look nice
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none'
      }
    }
  })




  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])


  // This shows our editor on the page
    //   return <EditorContent editor={editor} />

    return (
        <>
          {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div data-testid="floating-menu" className="floating-menu">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            Bullet list
          </button>
        </div>
      </FloatingMenu>}
      <EditorContent editor={editor} />
        </>
      )
}

export default Editor