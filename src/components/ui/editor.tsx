"use client"  // This tells Next.js this component only runs in the browser

import { useEditor, EditorContent, FloatingMenu, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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

  // This shows our editor on the page
    //   return <EditorContent editor={editor} />

    return (
        <>
          <EditorContent editor={editor} />
          <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
          <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
      )
}

export default Editor