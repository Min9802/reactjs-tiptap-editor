// Base Kit
import { Document } from '@tiptap/extension-document';
import { HardBreak } from '@tiptap/extension-hard-break';
import { ListItem } from '@tiptap/extension-list';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Text } from '@tiptap/extension-text';
import { TextStyle } from '@tiptap/extension-text-style';
import { Dropcursor, Gapcursor, Placeholder, TrailingNode } from '@tiptap/extensions';
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCaret from '@tiptap/extension-collaboration-caret'
// import { HocuspocusProvider } from '@hocuspocus/provider'
// import * as Y from 'yjs'
import { EditorContent, useEditor } from '@tiptap/react';
// const hocuspocusProvider = new HocuspocusProvider({
//   url: 'ws://0.0.0.0:8080',
//   name: 'github.com/hunghg255',
//   document: ydoc,
// })
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { all, createLowlight } from 'lowlight';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { RichTextProvider } from '@min98/tiptap-editor';
import { Attachment, RichTextAttachment } from '@min98/tiptap-editor/attachment';
import { Blockquote, RichTextBlockquote } from '@min98/tiptap-editor/blockquote';
import { Bold, RichTextBold } from '@min98/tiptap-editor/bold';
// Bubble
import {
  RichTextBubbleCallout,
  RichTextBubbleColumns,
  RichTextBubbleDrawer,
  RichTextBubbleExcalidraw,
  RichTextBubbleIframe,
  RichTextBubbleKatex,
  RichTextBubbleLink,
  RichTextBubbleImage,
  RichTextBubbleVideo,
  RichTextBubbleImageGif,
  RichTextBubbleMermaid,
  RichTextBubbleTable,
  RichTextBubbleText,
  RichTextBubbleTwitter,
  RichTextBubbleMenuDragHandle,
  RichTextBubbleCodeBlock,
} from '@min98/tiptap-editor/bubble';
import { BulletList, RichTextBulletList } from '@min98/tiptap-editor/bulletlist';
import { Callout, RichTextCallout } from '@min98/tiptap-editor/callout';
import { Clear, RichTextClear } from '@min98/tiptap-editor/clear';
import { Code, RichTextCode } from '@min98/tiptap-editor/code';
import { CodeBlock, RichTextCodeBlock } from '@min98/tiptap-editor/codeblock';
import { CodeView, RichTextCodeView } from '@min98/tiptap-editor/codeview';
import { Color, RichTextColor } from '@min98/tiptap-editor/color';
import {
  Column,
  ColumnNode,
  MultipleColumnNode,
  RichTextColumn,
} from '@min98/tiptap-editor/column';
import { Drawer, RichTextDrawer } from '@min98/tiptap-editor/drawer';
import { Emoji, RichTextEmoji } from '@min98/tiptap-editor/emoji';
import { Excalidraw, RichTextExcalidraw } from '@min98/tiptap-editor/excalidraw';
import { ExportPdf, RichTextExportPdf } from '@min98/tiptap-editor/exportpdf';
import { ExportWord, RichTextExportWord } from '@min98/tiptap-editor/exportword';
import { FontFamily, RichTextFontFamily } from '@min98/tiptap-editor/fontfamily';
import { FontSize, RichTextFontSize } from '@min98/tiptap-editor/fontsize';
import { Heading, RichTextHeading } from '@min98/tiptap-editor/heading';
import { Highlight, RichTextHighlight } from '@min98/tiptap-editor/highlight';
// build extensions
import { History, RichTextUndo, RichTextRedo } from '@min98/tiptap-editor/history';
import { HorizontalRule, RichTextHorizontalRule } from '@min98/tiptap-editor/horizontalrule';
import { Iframe, RichTextIframe } from '@min98/tiptap-editor/iframe';
import { Image, RichTextImage } from '@min98/tiptap-editor/image';
import { ImageGif, RichTextImageGif } from '@min98/tiptap-editor/imagegif';
import { ImportWord, RichTextImportWord } from '@min98/tiptap-editor/importword';
import { Indent, RichTextIndent } from '@min98/tiptap-editor/indent';
import { Italic, RichTextItalic } from '@min98/tiptap-editor/italic';
import { Katex, RichTextKatex } from '@min98/tiptap-editor/katex';
import { LineHeight, RichTextLineHeight } from '@min98/tiptap-editor/lineheight';
import { Link, RichTextLink } from '@min98/tiptap-editor/link';
import { localeActions, useLocale } from '@min98/tiptap-editor/locale-bundle';
import { MarkdownPaste } from '@min98/tiptap-editor/markdownpaste';
import { Mention } from '@min98/tiptap-editor/mention';
import { Mermaid, RichTextMermaid } from '@min98/tiptap-editor/mermaid';
import { MoreMark, RichTextMoreMark } from '@min98/tiptap-editor/moremark';
import { OrderedList, RichTextOrderedList } from '@min98/tiptap-editor/orderedlist';
import { SearchAndReplace, RichTextSearchAndReplace } from '@min98/tiptap-editor/searchandreplace';
// Slash Command
import { SlashCommand, SlashCommandList } from '@min98/tiptap-editor/slashcommand';
import { Strike, RichTextStrike } from '@min98/tiptap-editor/strike';
import { Table, RichTextTable } from '@min98/tiptap-editor/table';
import { TaskList, RichTextTaskList } from '@min98/tiptap-editor/tasklist';
import { TextAlign, RichTextAlign } from '@min98/tiptap-editor/textalign';
import { TextDirection, RichTextTextDirection } from '@min98/tiptap-editor/textdirection';
import { TextUnderline, RichTextUnderline } from '@min98/tiptap-editor/textunderline';
import { themeActions, useTheme } from '@min98/tiptap-editor/theme';
import { Twitter, RichTextTwitter } from '@min98/tiptap-editor/twitter';
import { Video, RichTextVideo } from '@min98/tiptap-editor/video';

import { EMOJI_LIST } from '@/emojis';

import '@min98/tiptap-editor/style.css';
// const ydoc = new Y.Doc()
import 'katex/dist/katex.min.css';
import 'easydrawer/styles.css';
import '@excalidraw/excalidraw/index.css';
import 'katex/contrib/mhchem';

// create a lowlight instance with all languages loaded
const lowlight = createLowlight();

// This is only an example, all supported languages are already loaded above
// but you can also register only specific languages to reduce bundle-size
lowlight.register('html', html);
lowlight.register('css', css);
lowlight.register('js', js);
lowlight.register('ts', ts);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function convertBase64ToBlob(base64: string) {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// custom document to support columns
const DocumentColumn = /* @__PURE__ */ Document.extend({
  content: '(block|columns)+',
});

const MOCK_USERS = [
  {
    id: '0',
    label: 'hunghg255',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/42096908?v=4',
    },
  },
  {
    id: '1',
    label: 'benjamincanac',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
  },
  {
    id: '2',
    label: 'atinux',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/904724?v=4',
    },
  },
  {
    id: '3',
    label: 'danielroe',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/28706372?v=4',
    },
  },
  {
    id: '4',
    label: 'pi0',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/5158436?v=4',
    },
  },
];

const BaseKit = [
  DocumentColumn,
  Text,
  Dropcursor.configure({
    class: 'reactjs-tiptap-editor-theme',
    color: 'hsl(var(--primary))',
    width: 2,
  }),
  Gapcursor,
  HardBreak,
  Paragraph,
  TrailingNode,
  ListItem,
  TextStyle,
  Placeholder.configure({
    placeholder: "Press '/' for commands",
  }),
];

const extensions = [
  ...BaseKit,

  History,
  SearchAndReplace,
  Clear,
  FontFamily,
  Heading,
  FontSize,
  Bold,
  Italic,
  TextUnderline,
  Strike,
  MoreMark,
  Emoji.configure({
    suggestion: {
      items: async ({ query }: any) => {
        const lowerCaseQuery = query?.toLowerCase();

        return EMOJI_LIST.filter(({ name }) => name.toLowerCase().includes(lowerCaseQuery));
      },
    },
  }),
  Color,
  Highlight,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  LineHeight,
  TaskList,
  Link,
  Image.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 300);
      });
    },
  }),
  Video.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files));
        }, 300);
      });
    },
  }),
  ImageGif.configure({
    provider: 'giphy',
    API_KEY: import.meta.env.VITE_GIPHY_API_KEY as string,
  }),
  Blockquote,
  HorizontalRule,
  Code,
  CodeBlock.configure({
    lowlight,
  }),

  Column,
  ColumnNode,
  MultipleColumnNode,
  Table,
  Iframe,
  ExportPdf,
  ImportWord,
  ExportWord,
  TextDirection,
  Attachment.configure({
    upload: (file: any) => {
      // fake upload return base 64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        setTimeout(() => {
          const blob = convertBase64ToBlob(reader.result as string);
          resolve(URL.createObjectURL(blob));
        }, 300);
      });
    },
  }),
  Katex,
  Excalidraw,
  Mermaid.configure({
    upload: (file: any) => {
      // fake upload return base 64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        setTimeout(() => {
          const blob = convertBase64ToBlob(reader.result as string);
          resolve(URL.createObjectURL(blob));
        }, 300);
      });
    },
  }),
  Drawer.configure({
    upload: (file: any) => {
      // fake upload return base 64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        setTimeout(() => {
          const blob = convertBase64ToBlob(reader.result as string);
          resolve(URL.createObjectURL(blob));
        }, 300);
      });
    },
  }),
  Twitter,
  Mention.configure({
    suggestion: {
      char: '@',
      items: async ({ query }: any) => {
        console.log('query', query);
        // const data = MOCK_USERS.map(item => item.label);
        // return data.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));
        return MOCK_USERS.filter((item) =>
          item.label.toLowerCase().startsWith(query.toLowerCase())
        );
      },
    },
    // suggestions: [
    //   {
    //     char: '@',
    //     items: async ({ query }: any) => {
    //       return MOCK_USERS.filter(item => item.label.toLowerCase().startsWith(query.toLowerCase()));
    //     },
    //   },
    //   {
    //     char: '#',
    //     items: async ({ query }: any) => {
    //       return MOCK_USERS.filter(item => item.label.toLowerCase().startsWith(query.toLowerCase()));
    //     },
    //   }
    // ]
  }),
  SlashCommand,
  CodeView,
  Callout,
  MarkdownPaste,
  //  Collaboration.configure({
  //   document: hocuspocusProvider.document,
  // }),
  // CollaborationCaret.configure({
  //   provider: hocuspocusProvider,
  //   user: {
  //     color: getRandomColor(),
  //   },
  // }),
];

const DEFAULT = `<pre dir="auto"><code class="language-js">const a = 2;</code></pre><p dir="auto"></p>`;

function debounce(func: any, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const Header = ({ editor, theme, setTheme }) => {
  const [editorEditable, setEditorEditable] = useState(false);
  const currentLocale = useLocale();
  const currentTheme = useTheme();

  useEffect(() => {
    localeActions.setLang('vi');
    themeActions.setColor('red');
    setEditorEditable(editor?.isEditable ?? true);
  }, []);

  useEffect(() => {
    if (editor) {
      editor.on('update', () => {
        setEditorEditable(editor.isEditable);
      });
    }

    return () => {
      if (editor) {
        editor.off('update', () => {
          setEditorEditable(editor.isEditable);
        });
      }
    };
  }, [editor]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: '100px',
          marginBottom: 10,
        }}
      >
        {currentLocale.lang}
        {currentTheme.color}
        <button
          type='button'
          onClick={() => {
            localeActions.setLang('vi');
          }}
        >
          Vietnamese
        </button>
        <button type='button' onClick={() => localeActions.setLang('en')}>
          English
        </button>
        <button type='button' onClick={() => localeActions.setLang('zh_CN')}>
          Chinese
        </button>
        <button type='button' onClick={() => localeActions.setLang('pt_BR')}>
          Português
        </button>
        <button type='button' onClick={() => localeActions.setLang('hu_HU')}>
          Hungarian
        </button>
        <button type='button' onClick={() => localeActions.setLang('ja')}>
          日本語
        </button>
        <button type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <button
          type='button'
          onClick={() => {
            editor?.setEditable(!editorEditable);
          }}
        >
          {editorEditable ? 'Editable' : 'Disabled'}
        </button>
      </div>
      <div className='flex items-center gap-1'>
        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setTheme('light');
          }}
        >
          Theme light
        </button>
        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setTheme('dark');
          }}
        >
          Theme dark
        </button>
      </div>

      <div className='flex items-center gap-1'>
        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('default');
          }}
        >
          Color default
        </button>
        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('red');
          }}
        >
          Theme red
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('blue');
          }}
        >
          Theme blue
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('green');
          }}
        >
          Theme green
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('orange');
          }}
        >
          Theme orange
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('rose');
          }}
        >
          Theme rose
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('violet');
          }}
        >
          Theme violet
        </button>

        <button
          className='border border-solid border-gray-500 p-1'
          onClick={() => {
            themeActions.setColor('yellow');
          }}
        >
          Theme yellow
        </button>
      </div>

      <div className='flex items-center gap-2'>
        <span>Border radius</span>

        <input
          type='range'
          min={0}
          max={3}
          step={0.05}
          defaultValue={0.65}
          onChange={(e) => {
            const value = e.target.value;
            themeActions.setBorderRadius(`${value}rem`);
          }}
        />
      </div>
    </>
  );
};

const RichTextToolbar = () => {
  return (
    <div className='flex items-center gap-2 flex-wrap border-b border-solid'>
      <RichTextUndo />
      <RichTextRedo />
      <RichTextSearchAndReplace />
      <RichTextClear />
      <RichTextFontFamily />
      <RichTextHeading />
      <RichTextFontSize />
      <RichTextBold />
      <RichTextItalic />
      <RichTextUnderline />
      <RichTextStrike />
      <RichTextMoreMark />
      <RichTextEmoji />
      <RichTextColor />
      <RichTextHighlight />
      <RichTextBulletList />
      <RichTextOrderedList />
      <RichTextAlign />
      <RichTextIndent />
      <RichTextLineHeight />
      <RichTextTaskList />
      <RichTextLink />
      <RichTextImage />
      <RichTextVideo />
      <RichTextImageGif />
      <RichTextBlockquote />
      <RichTextHorizontalRule />
      <RichTextCode />
      <RichTextCodeBlock />
      <RichTextColumn />
      <RichTextTable />
      <RichTextIframe />
      <RichTextExportPdf />
      <RichTextImportWord />
      <RichTextExportWord />
      <RichTextTextDirection />
      <RichTextAttachment />
      <RichTextKatex />
      <RichTextExcalidraw />
      <RichTextMermaid />
      <RichTextDrawer />
      <RichTextTwitter />
      <RichTextCodeView />
      <RichTextCallout />
    </div>
  );
};

function App() {
  const [content, setContent] = useState(DEFAULT);
  const [theme, setTheme] = useState('light');

  const onValueChange = useCallback(
    debounce((value: any) => {
      setContent(value);
    }, 300),
    []
  );

  const editor = useEditor({
    // shouldRerenderOnTransaction:  false,
    textDirection: 'auto', // global text direction
    content,
    extensions,
    // content,
    // immediatelyRender: false, // error duplicate plugin key
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onValueChange(html);
    },
  });

  useEffect(() => {
    window['editor'] = editor;
  }, [editor]);

  return (
    <div
      className='p-[24px] flex flex-col w-full max-w-screen-lg gap-[24px] mx-[auto] my-0'
      style={{
        maxWidth: 1024,
        margin: '40px auto',
      }}
    >
      <Header editor={editor} setTheme={setTheme} theme={theme} />

      <RichTextProvider editor={editor} dark={theme === 'dark'}>
        <div className='overflow-hidden rounded-[0.5rem] bg-background shadow outline outline-1'>
          <div className='flex max-h-full w-full flex-col'>
            <RichTextToolbar />

            <EditorContent editor={editor} />

            {/* Bubble */}
            <RichTextBubbleCallout />
            <RichTextBubbleColumns />
            <RichTextBubbleDrawer />
            <RichTextBubbleExcalidraw />
            <RichTextBubbleIframe />
            <RichTextBubbleKatex />
            <RichTextBubbleLink />

            <RichTextBubbleImage />
            <RichTextBubbleVideo />
            <RichTextBubbleImageGif />

            <RichTextBubbleMermaid />
            <RichTextBubbleTable />
            <RichTextBubbleText />
            <RichTextBubbleTwitter />
            <RichTextBubbleCodeBlock />

            <RichTextBubbleMenuDragHandle />

            {/* Command List */}
            <SlashCommandList />
          </div>
        </div>
      </RichTextProvider>

      {typeof content === 'string' && (
        <textarea
          style={{
            marginTop: 20,
            height: 500,
          }}
          readOnly
          value={content}
        />
      )}
    </div>
  );
}

export default App;
