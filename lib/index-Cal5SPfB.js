import { N as g, w as b, m as L, r as $, E as S, a as K, p as x, i as I, b as z, c as V, d as O, e as X } from "./index-BblvcbTH.js";
var F = Object.defineProperty, G = (t, e) => {
  for (var s in e)
    F(t, s, { get: e[s], enumerable: !0 });
}, W = "listItem", w = "textStyle", C = /^\s*([-+*])\s$/, q = g.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", L(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => t.type !== "list" || t.ordered ? [] : {
    type: "bulletList",
    content: t.items ? e.parseChildren(t.items) : []
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(W, this.editor.getAttributes(w)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = b({
      find: C,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = b({
      find: C,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(w),
      editor: this.editor
    })), [t];
  }
});
function Y(t) {
  var e, s;
  const n = (e = t.tokens) == null ? void 0 : e[0];
  return !!(t.text && ((s = t.tokens) == null ? void 0 : s.length) === 1 && (n == null ? void 0 : n.type) === "list" && n.ordered && n.raw === t.text);
}
function J(t, e) {
  return e.tokenizeInline ? e.parseInline(e.tokenizeInline(t)) : e.parseInline([
    {
      type: "text",
      raw: t,
      text: t
    }
  ]);
}
var Q = g.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", L(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (t, e) => {
    var s;
    if (t.type !== "list_item")
      return [];
    const n = (s = e.parseBlockChildren) != null ? s : e.parseChildren;
    let r = [];
    if (t.tokens && t.tokens.length > 0) {
      if (Y(t))
        return {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: J(t.text || "", e)
            }
          ]
        };
      if (t.tokens.some((u) => u.type === "paragraph"))
        r = n(t.tokens);
      else {
        const u = t.tokens[0];
        if (u && u.type === "text" && u.tokens && u.tokens.length > 0) {
          if (r = [
            {
              type: "paragraph",
              content: e.parseInline(u.tokens)
            }
          ], t.tokens.length > 1) {
            const p = t.tokens.slice(1), h = n(p);
            r.push(...h);
          }
        } else
          r = n(t.tokens);
      }
    }
    return r.length === 0 && (r = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: r
    };
  },
  renderMarkdown: (t, e, s) => $(
    t,
    e,
    (n) => {
      var r, i;
      return n.parentType === "bulletList" ? "- " : n.parentType === "orderedList" ? `${(((i = (r = n.meta) == null ? void 0 : r.parentAttrs) == null ? void 0 : i.start) || 1) + n.index}. ` : "- ";
    },
    s
  ),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), U = {};
G(U, {
  findListItemPos: () => y,
  getNextListDepth: () => A,
  handleBackspace: () => T,
  handleDelete: () => M,
  hasListBefore: () => _,
  hasListItemAfter: () => Z,
  hasListItemBefore: () => B,
  listItemHasSubList: () => P,
  nextListIsDeeper: () => D,
  nextListIsHigher: () => j
});
var y = (t, e) => {
  const { $from: s } = e.selection, n = O(t, e.schema);
  let r = null, i = s.depth, u = s.pos, a = null;
  for (; i > 0 && a === null; )
    r = s.node(i), r.type === n ? a = i : (i -= 1, u -= 1);
  return a === null ? null : { $pos: e.doc.resolve(u), depth: a };
}, A = (t, e) => {
  const s = y(t, e);
  if (!s)
    return !1;
  const [, n] = X(e, t, s.$pos.pos + 4);
  return n;
}, _ = (t, e, s) => {
  const { $anchor: n } = t.selection, r = Math.max(0, n.pos - 2), i = t.doc.resolve(r).node();
  return !(!i || !s.includes(i.type.name));
}, B = (t, e) => {
  var s;
  const { $anchor: n } = e.selection, r = e.doc.resolve(n.pos - 2);
  return !(r.index() === 0 || ((s = r.nodeBefore) == null ? void 0 : s.type.name) !== t);
}, P = (t, e, s) => {
  if (!s)
    return !1;
  const n = O(t, e.schema);
  let r = !1;
  return s.descendants((i) => {
    i.type === n && (r = !0);
  }), r;
}, T = (t, e, s) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!I(t.state, e) && _(t.state, e, s)) {
    const { $anchor: a } = t.state.selection, p = t.state.doc.resolve(a.before() - 1), h = [];
    p.node().descendants((c, l) => {
      c.type.name === e && h.push({ node: c, pos: l });
    });
    const m = h.at(-1);
    if (!m)
      return !1;
    const o = t.state.doc.resolve(p.start() + m.pos + 1);
    return t.chain().cut({ from: a.start() - 1, to: a.end() + 1 }, o.end()).joinForward().run();
  }
  if (!I(t.state, e) || !z(t.state))
    return !1;
  const n = y(e, t.state);
  if (!n)
    return !1;
  const i = t.state.doc.resolve(n.$pos.pos - 2).node(n.depth), u = P(e, t.state, i);
  return B(e, t.state) && !u ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, D = (t, e) => {
  const s = A(t, e), n = y(t, e);
  return !n || !s ? !1 : s > n.depth;
}, j = (t, e) => {
  const s = A(t, e), n = y(t, e);
  return !n || !s ? !1 : s < n.depth;
}, M = (t, e) => {
  if (!I(t.state, e) || !V(t.state, e))
    return !1;
  const { selection: s } = t.state, { $from: n, $to: r } = s;
  return !s.empty && n.sameParent(r) ? !1 : D(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : j(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, Z = (t, e) => {
  var s;
  const { $anchor: n } = e.selection, r = e.doc.resolve(n.pos - n.parentOffset - 2);
  return !(r.index() === r.parent.childCount - 1 || ((s = r.nodeAfter) == null ? void 0 : s.type.name) !== t);
}, tt = S.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s }) => {
          t.state.schema.nodes[s] !== void 0 && M(t, s) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s }) => {
          t.state.schema.nodes[s] !== void 0 && M(t, s) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: n }) => {
          t.state.schema.nodes[s] !== void 0 && T(t, s, n) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: s, wrapperNames: n }) => {
          t.state.schema.nodes[s] !== void 0 && T(t, s, n) && (e = !0);
        }), e;
      }
    };
  }
}), N = /^(\s*)(\d+)\.\s+(.*)$/, et = /^\s/;
function st(t) {
  const e = t.trimStart();
  return /^[-+*]\s+/.test(e) || /^\d+\.\s+/.test(e) || /^>\s?/.test(e) || /^```/.test(e) || /^~~~/.test(e);
}
function nt(t) {
  const e = [], s = [];
  let n = !1;
  return t.forEach((r) => {
    if (n) {
      s.push(r);
      return;
    }
    if (r.trim() === "") {
      n = !0, s.push(r);
      return;
    }
    if (e.length > 0 && st(r)) {
      n = !0, s.push(r);
      return;
    }
    e.push(r);
  }), {
    paragraphLines: e,
    blockLines: s
  };
}
function rt(t) {
  const e = [];
  let s = 0, n = 0;
  for (; s < t.length; ) {
    const r = t[s], i = r.match(N);
    if (!i)
      break;
    const [, u, a, p] = i, h = u.length, m = [p];
    let o = s + 1;
    const c = [r];
    let l = !1;
    for (; o < t.length; ) {
      const d = t[o];
      if (d.match(N))
        break;
      if (d.trim() === "")
        c.push(d), m.push(""), l = !0, o += 1;
      else if (d.match(et))
        c.push(d), m.push(d.slice(h + 2)), o += 1;
      else {
        if (l)
          break;
        c.push(d), m.push(d), o += 1;
      }
    }
    e.push({
      indent: h,
      number: parseInt(a, 10),
      content: m.join(`
`).trim(),
      contentLines: m,
      raw: c.join(`
`)
    }), n = o, s = o;
  }
  return [e, n];
}
function R(t, e, s) {
  const n = [];
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (i.indent === e) {
      const { paragraphLines: u, blockLines: a } = nt(i.contentLines), p = u.join(`
`).trim(), h = [];
      p && h.push({
        type: "paragraph",
        raw: p,
        tokens: s.inlineTokens(p)
      });
      const m = a.join(`
`).trim();
      if (m) {
        const l = s.blockTokens(m);
        h.push(...l);
      }
      let o = r + 1;
      const c = [];
      for (; o < t.length && t[o].indent > e; )
        c.push(t[o]), o += 1;
      if (c.length > 0) {
        const l = Math.min(...c.map((f) => f.indent)), d = R(c, l, s);
        h.push({
          type: "list",
          ordered: !0,
          start: c[0].number,
          items: d,
          raw: c.map((f) => f.raw).join(`
`)
        });
      }
      n.push({
        type: "list_item",
        raw: i.raw,
        tokens: h
      }), r = o;
    } else
      r += 1;
  }
  return n;
}
function it(t, e) {
  return t.map((s) => {
    if (s.type !== "list_item")
      return e.parseChildren([s])[0];
    const n = [];
    return s.tokens && s.tokens.length > 0 && s.tokens.forEach((r) => {
      if (r.type === "paragraph" || r.type === "list" || r.type === "blockquote" || r.type === "code")
        n.push(...e.parseChildren([r]));
      else if (r.type === "text" && r.tokens) {
        const i = e.parseChildren([r]);
        n.push({
          type: "paragraph",
          content: i
        });
      } else {
        const i = e.parseChildren([r]);
        i.length > 0 && n.push(...i);
      }
    }), {
      type: "listItem",
      content: n
    };
  });
}
var at = "listItem", E = "textStyle", H = /^(\d+)\.\s$/, ot = g.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...s } = t;
    return e === 1 ? ["ol", L(this.options.HTMLAttributes, s), 0] : ["ol", L(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => {
    if (t.type !== "list" || !t.ordered)
      return [];
    const s = t.start || 1, n = t.items ? it(t.items, e) : [];
    return s !== 1 ? {
      type: "orderedList",
      attrs: { start: s },
      content: n
    } : {
      type: "orderedList",
      content: n
    };
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: (t) => {
      const e = t.match(/^(\s*)(\d+)\.\s+/), s = e == null ? void 0 : e.index;
      return s !== void 0 ? s : -1;
    },
    tokenize: (t, e, s) => {
      var n;
      const r = t.split(`
`), [i, u] = rt(r);
      if (i.length === 0)
        return;
      const a = R(i, 0, s);
      return a.length === 0 ? void 0 : {
        type: "list",
        ordered: !0,
        start: ((n = i[0]) == null ? void 0 : n.number) || 1,
        items: a,
        raw: r.slice(0, u).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(at, this.editor.getAttributes(E)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = b({
      find: H,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = b({
      find: H,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(E) }),
      joinPredicate: (e, s) => s.childCount + s.attrs.start === +e[1],
      editor: this.editor
    })), [t];
  }
}), ut = /^\s*(\[([( |x])?\])\s$/, ct = g.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      L(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (t, e) => {
    const s = [];
    if (t.tokens && t.tokens.length > 0 ? s.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? s.push(e.createNode("paragraph", {}, [e.createNode("text", { text: t.text })])) : s.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
      const n = e.parseChildren(t.nestedTokens);
      s.push(...n);
    }
    return e.createNode("taskItem", { checked: t.checked || !1 }, s);
  },
  renderMarkdown: (t, e) => {
    var s;
    const r = `- [${(s = t.attrs) != null && s.checked ? "x" : " "}] `;
    return $(t, e, r);
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: s, editor: n }) => {
      const r = document.createElement("li"), i = document.createElement("label"), u = document.createElement("span"), a = document.createElement("input"), p = document.createElement("div"), h = (o) => {
        var c, l;
        a.ariaLabel = ((l = (c = this.options.a11y) == null ? void 0 : c.checkboxLabel) == null ? void 0 : l.call(c, o, a.checked)) || `Task item checkbox for ${o.textContent || "empty task item"}`;
      };
      h(t), i.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (o) => o.preventDefault()), a.addEventListener("change", (o) => {
        if (!n.isEditable && !this.options.onReadOnlyChecked) {
          a.checked = !a.checked;
          return;
        }
        const { checked: c } = o.target;
        n.isEditable && typeof s == "function" && n.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: l }) => {
          const d = s();
          if (typeof d != "number")
            return !1;
          const f = l.doc.nodeAt(d);
          return l.setNodeMarkup(d, void 0, {
            ...f == null ? void 0 : f.attrs,
            checked: c
          }), !0;
        }).run(), !n.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, c) || (a.checked = !a.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([o, c]) => {
        r.setAttribute(o, c);
      }), r.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, i.append(a, u), r.append(i, p), Object.entries(e).forEach(([o, c]) => {
        r.setAttribute(o, c);
      });
      let m = new Set(Object.keys(e));
      return {
        dom: r,
        contentDOM: p,
        update: (o) => {
          if (o.type !== this.type)
            return !1;
          r.dataset.checked = o.attrs.checked, a.checked = o.attrs.checked, h(o);
          const c = n.extensionManager.attributes, l = K(o, c), d = new Set(Object.keys(l)), f = this.options.HTMLAttributes;
          return m.forEach((k) => {
            d.has(k) || (k in f ? r.setAttribute(k, f[k]) : r.removeAttribute(k));
          }), Object.entries(l).forEach(([k, v]) => {
            v == null ? k in f ? r.setAttribute(k, f[k]) : r.removeAttribute(k) : r.setAttribute(k, v);
          }), m = d, !0;
        }
      };
    };
  },
  addInputRules() {
    return [
      b({
        find: ut,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), lt = g.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", L(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(t) {
      var e;
      const s = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
      return s !== void 0 ? s : -1;
    },
    tokenize(t, e, s) {
      const n = (i) => {
        const u = x(
          i,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (a) => ({
              indentLevel: a[1].length,
              mainContent: a[4],
              checked: a[3].toLowerCase() === "x"
            }),
            createToken: (a, p) => ({
              type: "taskItem",
              raw: "",
              mainContent: a.mainContent,
              indentLevel: a.indentLevel,
              checked: a.checked,
              text: a.mainContent,
              tokens: s.inlineTokens(a.mainContent),
              nestedTokens: p
            }),
            // Allow recursive nesting
            customNestedParser: n
          },
          s
        );
        return u ? [
          {
            type: "taskList",
            raw: u.raw,
            items: u.items
          }
        ] : s.blockTokens(i);
      }, r = x(
        t,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (i) => ({
            indentLevel: i[1].length,
            mainContent: i[4],
            checked: i[3].toLowerCase() === "x"
          }),
          createToken: (i, u) => ({
            type: "taskItem",
            raw: "",
            mainContent: i.mainContent,
            indentLevel: i.indentLevel,
            checked: i.checked,
            text: i.mainContent,
            tokens: s.inlineTokens(i.mainContent),
            nestedTokens: u
          }),
          // Use the recursive parser for nested content
          customNestedParser: n
        },
        s
      );
      if (r)
        return {
          type: "taskList",
          raw: r.raw,
          items: r.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
S.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(q.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(Q.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(tt.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(ot.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(ct.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(lt.configure(this.options.taskList)), t;
  }
});
export {
  q as B,
  ot as O,
  lt as T,
  ct as a
};
