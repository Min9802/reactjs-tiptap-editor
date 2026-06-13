import { M as m, h as l, j as g, m as h } from "./index-BblvcbTH.js";
import { jsx as a, Fragment as M } from "react/jsx-runtime";
import { u as v, d as C, A as k } from "./index-BrsJsbds.js";
import "react";
import "./theme.js";
var x = /(^|[^`])`([^`]+)`(?!`)$/, f = /(^|[^`])`([^`]+)`(?!`)/g, y = m.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", h(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (t, e) => e.applyMark("code", [{ type: "text", text: t.text || "" }]),
  renderMarkdown: (t, e) => t.content ? `\`${e.renderChildren(t.content)}\`` : "",
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      g({
        find: x,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      l({
        find: f,
        type: this.type
      })
    ];
  }
});
function L() {
  const t = v(A.name), {
    icon: e = void 0,
    tooltip: o = void 0,
    shortcutKeys: r = void 0,
    tooltipOptions: d = {},
    action: n = void 0,
    isActive: i = void 0
  } = (t == null ? void 0 : t.componentProps) ?? {}, { dataState: u, disabled: s, update: c } = C(i), p = () => {
    s || n && (n(), c());
  };
  return t ? /* @__PURE__ */ a(
    k,
    {
      action: p,
      dataState: u,
      disabled: s,
      icon: e,
      shortcutKeys: r,
      tooltip: o,
      tooltipOptions: d
    }
  ) : /* @__PURE__ */ a(M, {});
}
const A = /* @__PURE__ */ y.extend({
  //@ts-expect-error
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: o, extension: r }) => ({
        componentProps: {
          action: () => e.commands.toggleCode(),
          isActive: () => e.isActive("code"),
          disabled: !e.can().toggleCode(),
          icon: "Code",
          shortcutKeys: r.options.shortcutKeys ?? ["mod", "E"],
          tooltip: o("editor.code.tooltip")
        }
      })
    };
  }
});
export {
  A as Code,
  L as RichTextCode
};
