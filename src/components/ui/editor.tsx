"use client"  // This tells Next.js this component only runs in the browser

import '@/app/globals.css'

import {
  EditorContent, FloatingMenu, useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'


interface JournalEntry {
    slug: string;
    title: string;
    content: string;
    date: string;
  }

// Add props to the component
interface EditorProps {
  onChange?: (content: string) => void;
}

export default ({ onChange }: EditorProps) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: 'Write something …',
          showOnlyWhenEditable: true,
          showOnlyCurrent: true,
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-node-empty',
        }),
      ],
      onUpdate: ({ editor }) => {
        // When content changes, call the onChange prop with the new content
        const content = editor.getText()
        onChange?.(content)
      }
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