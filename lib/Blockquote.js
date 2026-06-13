import { N as k, w as h, m as g } from "./index-BblvcbTH.js";
import { h as p } from "./jsx-runtime-CT7Pcg-t.js";
import { jsx as m, Fragment as b } from "react/jsx-runtime";
import { u as f, d as q, A as v } from "./index-BrsJsbds.js";
import "react";
import "./theme.js";
var B = /^\s*>\s$/, A = k.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ p("blockquote", { ...g(this.options.HTMLAttributes, t), children: /* @__PURE__ */ p("slot", {}) });
  },
  parseMarkdown: (t, o) => {
    var e;
    const n = (e = o.parseBlockChildren) != null ? e : o.parseChildren;
    return o.createNode("blockquote", void 0, n(t.tokens || []));
  },
  renderMarkdown: (t, o) => {
    if (!t.content)
      return "";
    const e = ">", n = [];
    return t.content.forEach((r, i) => {
      var s, c;
      const a = ((c = (s = o.renderChild) == null ? void 0 : s.call(o, r, i)) != null ? c : o.renderChildren([r])).split(`
`).map((d) => d.trim() === "" ? e : `${e} ${d}`);
      n.push(a.join(`
`));
    }), n.join(`
${e}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      h({
        find: B,
        type: this.type
      })
    ];
  }
});
function L() {
  const t = f(x.name), {
    icon: o = void 0,
    tooltip: e = void 0,
    shortcutKeys: n = void 0,
    tooltipOptions: r = {},
    action: i = void 0,
    isActive: s = void 0
  } = (t == null ? void 0 : t.componentProps) ?? {}, { dataState: c, disabled: u, update: l } = q(s), a = () => {
    u || i && (i(), l());
  };
  return t ? /* @__PURE__ */ m(
    v,
    {
      action: a,
      dataState: c,
      disabled: u,
      icon: o,
      shortcutKeys: n,
      tooltip: e,
      tooltipOptions: r
    }
  ) : /* @__PURE__ */ m(b, {});
}
const x = /* @__PURE__ */ A.extend({
  //@ts-expect-error
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: o, t: e, extension: n }) => ({
        componentProps: {
          action: () => o.commands.toggleBlockquote(),
          isActive: () => o.isActive("blockquote"),
          disabled: !o.can().toggleBlockquote(),
          icon: "TextQuote",
          shortcutKeys: n.options.shortcutKeys ?? ["shift", "mod", "B"],
          tooltip: e("editor.blockquote.tooltip")
        }
      })
    };
  }
});
export {
  x as Blockquote,
  L as RichTextBlockquote
};
