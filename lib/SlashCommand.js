import { E as i } from "./index-BblvcbTH.js";
import { PluginKey as a } from "@tiptap/pm/state";
import { R as m } from "./clsx-0OU6n9va.js";
import { S as s } from "./index-CGjT-a9h.js";
import { u, r as l, S as d } from "./SlashCommandNodeView-o323V8li.js";
import { a as F } from "./SlashCommandNodeView-o323V8li.js";
import { u as o } from "./updatePosition-BwzAsiY0.js";
import { jsx as f, Fragment as c } from "react/jsx-runtime";
import { useEffect as h } from "react";
import { u as C } from "./index-oj858lQO.js";
function v({ commandList: e }) {
  const [, t] = u(), { t: r } = C();
  return h(() => {
    if (!(e != null && e.length)) {
      const n = l({ t: r });
      t(n);
      return;
    }
    t(e);
  }, [r, e]), /* @__PURE__ */ f(c, {});
}
const K = /* @__PURE__ */ i.create({
  name: "richtextSlashCommand",
  priority: 200,
  // addOptions() {
  //   return {
  //     suggestion: {
  //       char: '/',
  //     },
  //   };
  // },
  addProseMirrorPlugins() {
    return [
      s({
        pluginKey: new a("richtextSlashCommandPlugin"),
        editor: this.editor,
        char: "/",
        // allowSpaces: true,
        // startOfLine: true,
        // pluginKey: new PluginKey(`richtextCustomPlugin${this.name}`),
        // allow: ({ state, range }) => {
        //   const $from = state.doc.resolve(range.from);
        //   const isRootDepth = $from.depth === 1;
        //   const isParagraph = $from.parent.type.name === 'paragraph';
        //   const isStartOfNode = $from.parent.textContent?.charAt(0) === '/';
        //   const isInColumn = this.editor.isActive('column');
        //   const afterContent = $from.parent.textContent?.slice(
        //     Math.max(0, $from.parent.textContent?.indexOf('/')),
        //   );
        //   const isValidAfterContent = !afterContent?.endsWith('  ');
        //   return (
        //     ((isRootDepth && isParagraph && isStartOfNode)
        //       || (isInColumn && isParagraph && isStartOfNode))
        //     && isValidAfterContent
        //   );
        // },
        command: ({ editor: e, range: t, props: r }) => {
          const { view: n } = e;
          r.action({ editor: e, range: t }), n.focus();
        },
        render: () => {
          let e;
          return {
            onStart: (t) => {
              t.clientRect && (e = new m(d, {
                props: t,
                editor: t.editor
              }), e.element.style.position = "absolute", document.body.appendChild(e.element), o(t.editor, e.element));
            },
            onUpdate(t) {
              e.updateProps(t), t.clientRect && o(t.editor, e.element);
            },
            onKeyDown(t) {
              var r;
              return t.event.key === "Escape" ? (e.destroy(), e.element.remove(), !0) : (r = e.ref) == null ? void 0 : r.onKeyDown(t);
            },
            onExit() {
              e && (e.destroy(), e.element.remove());
            }
          };
        }
      })
    ];
  }
});
export {
  K as SlashCommand,
  v as SlashCommandList,
  l as renderCommandListDefault,
  F as useFilterCommandList
};
