var pl = Object.defineProperty;
var gl = (e, t, n) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => gl(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as p, Fragment as I, jsxs as x } from "react/jsx-runtime";
import { a1 as ml, f as mr, E as Ue, a2 as wl, a3 as bl, a4 as Le, a5 as yl, Q as Ui, O as wr, v as Je, F as Xe, T as Li, A as xl, u as vl, a6 as Sl, a7 as Cl, a8 as kl } from "./index-BblvcbTH.js";
import { f as br, s as yr, o as xr, a as vr, b as Sr, d as Cr, h as kr, i as _r, c as Pi } from "./index-CGjT-a9h.js";
import { Plugin as Pe, PluginKey as Yt, NodeSelection as di, TextSelection as _l, SelectionRange as El, Selection as Tl } from "@tiptap/pm/state";
import { C as Dl, T as Al } from "./Table-CC9uNHPL.js";
import { u as Er } from "./clsx-0OU6n9va.js";
import Tr, { useRef as ct, useState as U, useEffect as Z, useLayoutEffect as Il, useCallback as O, useMemo as ht, Fragment as Bi } from "react";
import { createPortal as $i } from "react-dom";
import { F as Q, h as j, D as Be, r as $e, A as v, s as Ve, v as He, L as Ut, j as te, w as ze, B as Lt, x as Dr, m as Vi, E as Ol, z as Ml, Y as Rl, p as Nl, Z as Ul, I as rt } from "./index-BrsJsbds.js";
import { C as Ze, S as Ll, a as Pl, b as Bl, c as $l, d as Vl } from "./Callout-CF7Y9yJ7.js";
import { u as Gt, K as ui, s as Hl } from "./Katex-pzwyyiFJ.js";
import { u as J, o as un, V as bs } from "./index-oj858lQO.js";
import { Pencil as zl, Trash2 as Ar, Check as fi, Copy as Fl } from "lucide-react";
import { CodeBlock as Gn } from "./CodeBlock.js";
import { S as Ct } from "./separator-b-qOPJmp.js";
import { P as Hi, a as zi, b as Fi } from "./popover-BIVHT1W9.js";
import { MultipleColumnNode as ys } from "./Column.js";
import "./theme.js";
import { C as Kl, D as qn } from "./Drawer-CaXVhxo4.js";
import { Editor as jl, makeDropdownToolbar as Wl } from "easydrawer";
import { s as Ir, i as Or } from "./shortId-WJVkrvml.js";
import { Excalidraw as we } from "./Excalidraw.js";
import { I as be, g as Yl } from "./Iframe-Bp986fj0.js";
import { ImageGif as Gl } from "./ImageGif.js";
import ql from "katex";
import { T as pi } from "./textarea-CpxXPky_.js";
import { L as xs, a as Jl, R as Xl } from "./LinkEditBlock-OjN4F2rM.js";
import { DecorationSet as vs, Decoration as Zl } from "@tiptap/pm/view";
import { NodeRange as Ql } from "@tiptap/pm/model";
import { Clear as tc } from "./Clear.js";
import { I as ec, a as Ss, s as Cs } from "./Indent-E6B8DkyN.js";
import { RichTextAlign as nc, TextAlign as ic } from "./TextAlign.js";
import { D as sc, a as rc, b as oc, f as Et, d as lc, g as ks, h as _s, i as Es, j as Ts } from "./dropdown-menu-BW2M6saA.js";
import { Mermaid as gi } from "./Mermaid.js";
import { RichTextBold as cc } from "./Bold.js";
import { RichTextCode as ac } from "./Code.js";
import "./index-zw-Kd38i.js";
import { RichTextColor as hc } from "./Color.js";
import { RichTextHighlight as dc } from "./Highlight.js";
import { RichTextItalic as uc } from "./Italic.js";
import { r as fc } from "./SlashCommandNodeView-o323V8li.js";
import { RichTextStrike as pc } from "./Strike.js";
import { RichTextUnderline as gc } from "./TextUnderline.js";
import { T as Ds, F as mc } from "./Twitter-BVnXL8we.js";
function wc(e, t) {
  const n = Math.min(e.top, t.top), i = Math.max(e.bottom, t.bottom), s = Math.min(e.left, t.left), o = Math.max(e.right, t.right) - s, l = i - n, c = s, a = n;
  return new DOMRect(c, a, o, l);
}
var bc = class {
  constructor({
    editor: e,
    element: t,
    view: n,
    pluginKey: i = "bubbleMenu",
    updateDelay: s = 250,
    resizeDelay: r = 60,
    shouldShow: o,
    appendTo: l,
    getReferencedVirtualElement: c,
    options: a
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({ view: h, state: u, from: f, to: g }) => {
      const { doc: m, selection: w } = u, { empty: b } = w, C = !m.textBetween(f, g).length && ml(u.selection), S = this.element.contains(document.activeElement);
      return !(!(h.hasFocus() || S) || b || C || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: h }) => {
      var u;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      h != null && h.relatedTarget && ((u = this.element.parentNode) != null && u.contains(h.relatedTarget)) || (h == null ? void 0 : h.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (h, u) => {
      const f = !(u != null && u.selection.eq(h.state.selection)), g = !(u != null && u.doc.eq(h.state.doc));
      !f && !g || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(h, f, g, u);
      }, this.updateDelay));
    }, this.updateHandler = (h, u, f, g) => {
      const { composing: m } = h;
      if (m || !u && !f)
        return;
      if (!this.getShouldShow(g)) {
        this.hide();
        return;
      }
      this.show(), this.updatePosition();
    }, this.transactionHandler = ({ transaction: h }) => {
      const u = h.getMeta(this.pluginKey);
      u === "updatePosition" ? this.updatePosition() : u && typeof u == "object" && u.type === "updateOptions" ? this.updateOptions(u.options) : u === "hide" ? this.hide() : u === "show" && (this.updatePosition(), this.show());
    };
    var d;
    this.editor = e, this.element = t, this.view = n, this.pluginKey = i, this.updateDelay = s, this.resizeDelay = r, this.appendTo = l, this.scrollTarget = (d = a == null ? void 0 : a.scrollTarget) != null ? d : window, this.getReferencedVirtualElement = c, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...a
    }, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(br(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      yr(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      xr(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(vr(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(Sr(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      Cr(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(kr(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      _r(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  get virtualElement() {
    var e, t, n;
    const { selection: i } = this.editor.state, s = (e = this.getReferencedVirtualElement) == null ? void 0 : e.call(this);
    if (s)
      return s;
    if (!((n = (t = this.view) == null ? void 0 : t.dom) != null && n.parentNode))
      return;
    const r = mr(this.view, i.from, i.to);
    let o = {
      getBoundingClientRect: () => r,
      getClientRects: () => [r]
    };
    if (i instanceof di) {
      let l = this.view.nodeDOM(i.from);
      const c = l.dataset.nodeViewWrapper ? l : l.querySelector("[data-node-view-wrapper]");
      c && (l = c), l && (o = {
        getBoundingClientRect: () => l.getBoundingClientRect(),
        getClientRects: () => [l.getBoundingClientRect()]
      });
    }
    if (i instanceof Dl) {
      const { $anchorCell: l, $headCell: c } = i, a = l ? l.pos : c.pos, d = c ? c.pos : l.pos, h = this.view.nodeDOM(a), u = this.view.nodeDOM(d);
      if (!h || !u)
        return;
      const f = h === u ? h.getBoundingClientRect() : wc(
        h.getBoundingClientRect(),
        u.getBoundingClientRect()
      );
      o = {
        getBoundingClientRect: () => f,
        getClientRects: () => [f]
      };
    }
    return o;
  }
  updatePosition() {
    if (!this.isVisible)
      return;
    const e = this.virtualElement;
    e && Pi(e, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: t, y: n, strategy: i, middlewareData: s }) => {
      var r, o;
      if (!(!this.isVisible || this.editor.isDestroyed || !this.element.isConnected)) {
        if ((r = s.hide) != null && r.referenceHidden || (o = s.hide) != null && o.escaped) {
          this.element.style.visibility = "hidden";
          return;
        }
        this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = i, this.element.style.left = `${t}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
      }
    });
  }
  update(e, t) {
    const { state: n } = e, i = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const s = !(t != null && t.selection.eq(e.state.selection)), r = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, s, r, t);
  }
  getShouldShow(e) {
    var t;
    const { state: n } = this.view, { selection: i } = n, { ranges: s } = i, r = Math.min(...s.map((c) => c.$from.pos)), o = Math.max(...s.map((c) => c.$to.pos));
    return ((t = this.shouldShow) == null ? void 0 : t.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: e,
      from: r,
      to: o
    })) || !1;
  }
  show() {
    var e;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const t = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (e = t ?? this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  updateOptions(e) {
    var t;
    if (e.updateDelay !== void 0 && (this.updateDelay = e.updateDelay), e.resizeDelay !== void 0 && (this.resizeDelay = e.resizeDelay), e.appendTo !== void 0 && (this.appendTo = e.appendTo), e.getReferencedVirtualElement !== void 0 && (this.getReferencedVirtualElement = e.getReferencedVirtualElement), e.shouldShow !== void 0 && e.shouldShow && (this.shouldShow = e.shouldShow), e.options !== void 0) {
      const n = (t = e.options.scrollTarget) != null ? t : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...e.options
      };
    }
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Mr = (e) => new Pe({
  key: typeof e.pluginKey == "string" ? new Yt(e.pluginKey) : e.pluginKey,
  view: (t) => new bc({ view: t, ...e })
});
Ue.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Mr({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        updateDelay: this.options.updateDelay,
        options: this.options.options,
        appendTo: this.options.appendTo,
        getReferencedVirtualElement: this.options.getReferencedVirtualElement,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
var yc = class {
  constructor({
    editor: e,
    element: t,
    view: n,
    pluginKey: i = "floatingMenu",
    updateDelay: s = 250,
    resizeDelay: r = 60,
    options: o,
    appendTo: l,
    shouldShow: c
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.shouldShow = ({ view: d, state: h }) => {
      const { selection: u } = h, { $anchor: f, empty: g } = u, m = f.depth === 1, w = f.parent.isTextblock && !f.parent.type.spec.code && !f.parent.textContent && f.parent.childCount === 0 && !this.getTextContent(f.parent);
      return !(!d.hasFocus() || !g || !m || !w || !this.editor.isEditable);
    }, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "right",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1
    }, this.updateHandler = (d, h, u, f) => {
      const { composing: g } = d;
      if (g || !h && !u)
        return;
      if (!this.getShouldShow(f)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: d }) => {
      var h;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      d != null && d.relatedTarget && ((h = this.element.parentNode) != null && h.contains(d.relatedTarget)) || (d == null ? void 0 : d.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.transactionHandler = ({ transaction: d }) => {
      const h = d.getMeta(this.pluginKey);
      h === "updatePosition" ? this.updatePosition() : h && typeof h == "object" && h.type === "updateOptions" ? this.updateOptions(h.options) : h === "hide" ? this.hide() : h === "show" && (this.updatePosition(), this.show());
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    };
    var a;
    this.editor = e, this.element = t, this.view = n, this.pluginKey = i, this.updateDelay = s, this.resizeDelay = r, this.appendTo = l, this.scrollTarget = (a = o == null ? void 0 : o.scrollTarget) != null ? a : window, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...o
    }, this.element.tabIndex = 0, c && (this.shouldShow = c), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  getTextContent(e) {
    return wl(e, { textSerializers: bl(this.editor.schema) });
  }
  get middlewares() {
    const e = [];
    return this.floatingUIOptions.flip && e.push(br(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && e.push(
      yr(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && e.push(
      xr(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && e.push(vr(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && e.push(Sr(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && e.push(
      Cr(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && e.push(kr(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && e.push(
      _r(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), e;
  }
  getShouldShow(e) {
    var t;
    const { state: n } = this.view, { selection: i } = n, { ranges: s } = i, r = Math.min(...s.map((c) => c.$from.pos)), o = Math.max(...s.map((c) => c.$to.pos));
    return (t = this.shouldShow) == null ? void 0 : t.call(this, {
      editor: this.editor,
      view: this.view,
      state: n,
      oldState: e,
      from: r,
      to: o
    });
  }
  updateOptions(e) {
    var t;
    if (e.updateDelay !== void 0 && (this.updateDelay = e.updateDelay), e.resizeDelay !== void 0 && (this.resizeDelay = e.resizeDelay), e.appendTo !== void 0 && (this.appendTo = e.appendTo), e.shouldShow !== void 0 && e.shouldShow && (this.shouldShow = e.shouldShow), e.options !== void 0) {
      const n = (t = e.options.scrollTarget) != null ? t : window;
      n !== this.scrollTarget && (this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.scrollTarget = n, this.scrollTarget.addEventListener("scroll", this.resizeHandler)), this.floatingUIOptions = {
        ...this.floatingUIOptions,
        ...e.options
      };
    }
  }
  updatePosition() {
    var e, t;
    if (!((t = (e = this.view) == null ? void 0 : e.dom) != null && t.parentNode))
      return;
    const { selection: n } = this.editor.state, i = mr(this.view, n.from, n.to);
    Pi({
      getBoundingClientRect: () => i,
      getClientRects: () => [i]
    }, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: r, y: o, strategy: l, middlewareData: c }) => {
      var a, d;
      if ((a = c.hide) != null && a.referenceHidden || (d = c.hide) != null && d.escaped) {
        this.element.style.visibility = "hidden";
        return;
      }
      this.element.style.visibility = "visible", this.element.style.width = "max-content", this.element.style.position = l, this.element.style.left = `${r}px`, this.element.style.top = `${o}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(e, t) {
    const n = !(t != null && t.selection.eq(e.state.selection)), i = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, n, i, t);
  }
  show() {
    var e;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const t = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (e = t ?? this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Rr = (e) => new Pe({
  key: typeof e.pluginKey == "string" ? new Yt(e.pluginKey) : e.pluginKey,
  view: (t) => new yc({ view: t, ...e })
});
Ue.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      options: {},
      pluginKey: "floatingMenu",
      updateDelay: void 0,
      resizeDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addCommands() {
    return {
      updateFloatingMenuPosition: () => ({ tr: e, dispatch: t }) => (t && e.setMeta(this.options.pluginKey, "updatePosition"), !0)
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Rr({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        updateDelay: this.options.updateDelay,
        resizeDelay: this.options.resizeDelay,
        options: this.options.options,
        appendTo: this.options.appendTo,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
function Nr(e, t) {
  return e ?? new Yt(t);
}
var xc = typeof window < "u" ? Il : Z, Ur = /* @__PURE__ */ new Set(["left", "opacity", "position", "top", "visibility", "width"]), vc = /* @__PURE__ */ new Set([
  "animationIterationCount",
  "aspectRatio",
  "borderImageOutset",
  "borderImageSlice",
  "borderImageWidth",
  "columnCount",
  "columns",
  "fillOpacity",
  "flex",
  "flexGrow",
  "flexShrink",
  "fontWeight",
  "gridArea",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnStart",
  "gridRow",
  "gridRowEnd",
  "gridRowStart",
  "lineClamp",
  "lineHeight",
  "opacity",
  "order",
  "orphans",
  "scale",
  "stopOpacity",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "tabSize",
  "widows",
  "zIndex",
  "zoom"
]), Sc = /* @__PURE__ */ new Set(["children", "className", "style"]), Cc = /* @__PURE__ */ new Set(["tabIndex"]), kc = /* @__PURE__ */ new Set([
  "accessKey",
  "autoCapitalize",
  "contentEditable",
  "contextMenu",
  "dir",
  "draggable",
  "enterKeyHint",
  "hidden",
  "id",
  "lang",
  "nonce",
  "role",
  "slot",
  "spellCheck",
  "tabIndex",
  "title",
  "translate"
]), _c = {
  Blur: "focusout",
  DoubleClick: "dblclick",
  Focus: "focusin",
  MouseEnter: "mouseenter",
  MouseLeave: "mouseleave"
};
function mi(e, t) {
  return /^on[A-Z]/.test(e) && typeof t == "function";
}
function Ec(e) {
  return e.startsWith("aria-") || e.startsWith("data-"), e;
}
function Tc(e) {
  return e.startsWith("aria-") || e.startsWith("data-") || kc.has(e);
}
function Lr(e) {
  return e.startsWith("--") ? e : e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Dc(e) {
  var t;
  const n = e.endsWith("Capture"), s = (n ? e.slice(0, -7) : e).slice(2);
  return {
    eventName: (t = _c[s]) != null ? t : s.toLowerCase(),
    options: n ? { capture: !0 } : void 0
  };
}
function Ac(e, t) {
  let n = t.defaultPrevented, i = !1;
  const s = Object.create(t);
  return Object.defineProperties(s, {
    nativeEvent: { value: t },
    currentTarget: { value: e },
    target: { value: t.target },
    persist: { value: () => {
    } },
    isDefaultPrevented: { value: () => n },
    isPropagationStopped: { value: () => i },
    preventDefault: {
      value: () => {
        n = !0, t.preventDefault();
      }
    },
    stopPropagation: {
      value: () => {
        i = !0, t.stopPropagation();
      }
    }
  }), s;
}
function Jn(e) {
  return Cc.has(e);
}
function As(e, t, n) {
  if (t === "tabIndex") {
    e.tabIndex = Number(n);
    return;
  }
  e[t] = n;
}
function Ic(e, t) {
  if (t === "tabIndex") {
    e.removeAttribute("tabindex");
    return;
  }
  const n = e[t];
  if (typeof n == "boolean") {
    e[t] = !1;
    return;
  }
  if (typeof n == "number") {
    e[t] = 0;
    return;
  }
  e[t] = "";
}
function Oc(e, t) {
  return typeof t != "number" || t === 0 || e.startsWith("--") || vc.has(e) ? String(t) : `${t}px`;
}
function Mc(e, t) {
  Ur.has(t) || e.style.removeProperty(Lr(t));
}
function Rc(e, t, n) {
  Ur.has(t) || e.style.setProperty(Lr(t), Oc(t, n));
}
function Nc(e, t, n) {
  (/* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(n)])).forEach((s) => {
    if (Sc.has(s) || !Tc(s) || mi(s, t[s]) || mi(s, n[s]))
      return;
    const r = t[s], o = n[s];
    if (r === o)
      return;
    const l = Ec(s);
    if (o == null || o === !1) {
      Jn(s) && Ic(e, s), e.removeAttribute(l);
      return;
    }
    if (o === !0) {
      Jn(s) && As(e, s, !0), e.setAttribute(l, "");
      return;
    }
    if (Jn(s)) {
      As(e, s, o);
      return;
    }
    e.setAttribute(l, String(o));
  });
}
function Uc(e, t, n) {
  if (t !== n) {
    if (n) {
      e.className = n;
      return;
    }
    e.removeAttribute("class");
  }
}
function Lc(e, t, n) {
  const i = t ?? {}, s = n ?? {};
  (/* @__PURE__ */ new Set([...Object.keys(i), ...Object.keys(s)])).forEach((o) => {
    const l = i[o], c = s[o];
    if (l !== c) {
      if (c == null) {
        Mc(e, o);
        return;
      }
      Rc(e, o, c);
    }
  });
}
function Pc(e, t, n) {
  t.forEach(({ eventName: s, listener: r, options: o }) => {
    e.removeEventListener(s, r, o);
  });
  const i = [];
  return Object.entries(n).forEach(([s, r]) => {
    if (!mi(s, r))
      return;
    const { eventName: o, options: l } = Dc(s), c = (a) => {
      r(Ac(e, a));
    };
    e.addEventListener(o, c, l), i.push({ eventName: o, listener: c, options: l });
  }), i;
}
function Pr(e, t) {
  const n = ct({}), i = ct([]);
  xc(() => {
    const s = n.current;
    return Uc(e, s.className, t.className), Lc(e, s.style, t.style), Nc(e, s, t), i.current = Pc(e, i.current, t), n.current = t, () => {
      i.current.forEach(({ eventName: r, listener: o, options: l }) => {
        e.removeEventListener(r, o, l);
      }), i.current = [];
    };
  }, [e, t]);
}
var st = Tr.forwardRef(
  ({
    pluginKey: e,
    editor: t,
    updateDelay: n,
    resizeDelay: i,
    appendTo: s,
    shouldShow: r = null,
    getReferencedVirtualElement: o,
    options: l,
    children: c,
    ...a
  }, d) => {
    const h = ct(document.createElement("div")), u = ct(Nr(e, "bubbleMenu")).current;
    Pr(h.current, a), typeof d == "function" ? d(h.current) : d && (d.current = h.current);
    const { editor: f } = Er(), g = t || f, m = {
      updateDelay: n,
      resizeDelay: i,
      appendTo: s,
      pluginKey: u,
      shouldShow: r,
      getReferencedVirtualElement: o,
      options: l
    }, w = ct(m);
    w.current = m;
    const [b, C] = U(!1), S = ct(!0);
    return Z(() => {
      if (g != null && g.isDestroyed)
        return;
      if (!g) {
        console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
        return;
      }
      const T = h.current;
      T.style.visibility = "hidden", T.style.position = "absolute";
      const W = Mr({
        ...w.current,
        editor: g,
        element: T
      });
      g.registerPlugin(W);
      const D = w.current.pluginKey;
      return S.current = !0, C(!0), () => {
        C(!1), g.unregisterPlugin(D), window.requestAnimationFrame(() => {
          T.parentNode && T.parentNode.removeChild(T);
        });
      };
    }, [g]), Z(() => {
      if (!(!b || !g || g.isDestroyed)) {
        if (S.current) {
          S.current = !1;
          return;
        }
        g.view.dispatch(
          g.state.tr.setMeta(u, {
            type: "updateOptions",
            options: w.current
          })
        );
      }
    }, [
      b,
      g,
      n,
      i,
      r,
      l,
      s,
      o,
      u
    ]), $i(c, h.current);
  }
);
Tr.forwardRef(
  ({ pluginKey: e, editor: t, updateDelay: n, resizeDelay: i, appendTo: s, shouldShow: r = null, options: o, children: l, ...c }, a) => {
    const d = ct(document.createElement("div")), h = ct(Nr(e, "floatingMenu")).current;
    Pr(d.current, c), typeof a == "function" ? a(d.current) : a && (a.current = d.current);
    const { editor: u } = Er(), f = t || u, g = {
      updateDelay: n,
      resizeDelay: i,
      appendTo: s,
      pluginKey: h,
      shouldShow: r,
      options: o
    }, m = ct(g);
    m.current = g;
    const [w, b] = U(!1), C = ct(!0);
    return Z(() => {
      if (f != null && f.isDestroyed)
        return;
      if (!f) {
        console.warn(
          "FloatingMenu component is not rendered inside of an editor component or does not have editor prop."
        );
        return;
      }
      const S = d.current;
      S.style.visibility = "hidden", S.style.position = "absolute";
      const T = Rr({
        ...m.current,
        editor: f,
        element: S
      });
      f.registerPlugin(T);
      const W = m.current.pluginKey;
      return C.current = !0, b(!0), () => {
        b(!1), f.unregisterPlugin(W), window.requestAnimationFrame(() => {
          S.parentNode && S.parentNode.removeChild(S);
        });
      };
    }, [f]), Z(() => {
      if (!(!w || !f || f.isDestroyed)) {
        if (C.current) {
          C.current = !1;
          return;
        }
        f.view.dispatch(
          f.state.tr.setMeta(h, {
            type: "updateOptions",
            options: m.current
          })
        );
      }
    }, [w, f, n, i, r, o, s, h]), $i(l, d.current);
  }
);
function qt(e, t) {
  const { state: n } = t, i = n.selection.$anchor;
  let s = !1;
  if (i.depth)
    for (let r = i.depth; r > 0; r--)
      i.node(r).type.name === e && (t.dispatchTransaction && t.dispatchTransaction(
        n.tr.delete(i.before(r), i.after(r)).scrollIntoView()
      ), s = !0);
  else {
    const r = n.selection.node;
    r && r.type.name === e && (t.chain().deleteSelection().run(), s = !0);
  }
  if (!s) {
    const r = i.pos;
    if (r) {
      const o = n.tr.doc.nodeAt(r);
      o && o.type.name === e && (t.dispatchTransaction && t.dispatchTransaction(n.tr.delete(r, r + o.nodeSize)), s = !0);
    }
  }
  return s;
}
const Bc = [
  { value: "note", label: "Note", icon: "Info" },
  { value: "tip", label: "Tip", icon: "Lightbulb" },
  { value: "important", label: "Important", icon: "AlertCircle" },
  { value: "warning", label: "Warning", icon: "TriangleAlert" },
  { value: "caution", label: "Caution", icon: "OctagonAlert" }
];
function Cp() {
  const e = Q(), t = j(), { t: n } = J(), { type: i, title: s, body: r } = Gt(t, Ze.name, {
    type: "note",
    title: "",
    body: ""
  }), [o, l] = U(!1), [c, a] = U("note"), [d, h] = U(""), [u, f] = U("");
  Z(() => {
    o && (a(i || "note"), h(s || ""), f(r || ""));
  }, [o, i, s, r]);
  const g = O(() => {
    t && (t.chain().updateAttributes(Ze.name, {
      type: c,
      title: d,
      body: u
    }).focus().run(), l(!1));
  }, [t, c, d, u]), m = O(() => {
    l(!1);
  }, []), w = O(() => {
    qt(Ze.name, t);
  }, [t]), b = O(() => t.isActive(Ze.name), [t]);
  return e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "top", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleCallout",
      shouldShow: b,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ x(Be, { onOpenChange: l, open: o, children: [
          /* @__PURE__ */ p($e, { asChild: !0, children: /* @__PURE__ */ p(v, { icon: "Pencil", tooltip: n("editor.callout.edit.title") }) }),
          /* @__PURE__ */ x(Ve, { children: [
            /* @__PURE__ */ p(He, { children: n("editor.callout.edit.title") }),
            /* @__PURE__ */ x("div", { className: "richtext-space-y-4 richtext-py-4", children: [
              /* @__PURE__ */ x("div", { className: "richtext-space-y-2", children: [
                /* @__PURE__ */ p(Ut, { children: n("editor.callout.dialog.type") }),
                /* @__PURE__ */ x(Ll, { onValueChange: a, value: c, children: [
                  /* @__PURE__ */ p(Pl, { children: /* @__PURE__ */ p(
                    Bl,
                    {
                      className: "richtext-text-accent",
                      placeholder: n("editor.callout.dialog.type.placeholder")
                    }
                  ) }),
                  /* @__PURE__ */ p($l, { children: Bc.map((C) => /* @__PURE__ */ p(Vl, { value: C.value, children: n(`editor.callout.type.${C.value}`) }, C.value)) })
                ] })
              ] }),
              /* @__PURE__ */ x("div", { className: "richtext-space-y-2", children: [
                /* @__PURE__ */ p(Ut, { children: n("editor.callout.dialog.title.label") }),
                /* @__PURE__ */ p(
                  te,
                  {
                    onChange: (C) => h(C.target.value),
                    placeholder: n("editor.callout.dialog.title.placeholder"),
                    type: "text",
                    value: d
                  }
                )
              ] }),
              /* @__PURE__ */ x("div", { className: "richtext-space-y-2", children: [
                /* @__PURE__ */ p(Ut, { children: n("editor.callout.dialog.body.label") }),
                /* @__PURE__ */ p(
                  te,
                  {
                    onChange: (C) => f(C.target.value),
                    placeholder: n("editor.callout.dialog.body.placeholder"),
                    type: "text",
                    value: u
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ x(ze, { children: [
              /* @__PURE__ */ p(Lt, { onClick: m, variant: "outline", children: n("editor.callout.dialog.button.cancel") }),
              /* @__PURE__ */ p(Lt, { onClick: g, children: n("editor.callout.dialog.button.apply") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p(v, { action: w, icon: "Trash2", tooltip: n("editor.delete") })
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function kp() {
  const e = Q(), t = j(), { t: n } = J(), i = O(() => t.isActive(ys.name), [t]), s = O(() => qt(ys.name, t), [t]), r = O(() => t.chain().focus().addColBefore().run(), [t]), o = O(() => t.chain().focus().addColAfter().run(), [t]), l = O(() => t.chain().focus().deleteCol().run(), [t]);
  return e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleColumns",
      shouldShow: i,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(
          v,
          {
            action: r,
            icon: "ColumnAddLeft",
            tooltip: n("editor.table.menu.insertColumnBefore")
          }
        ),
        /* @__PURE__ */ p(
          v,
          {
            action: o,
            icon: "ColumnAddRight",
            tooltip: n("editor.table.menu.insertColumnAfter")
          }
        ),
        /* @__PURE__ */ p(
          v,
          {
            action: l,
            icon: "DeleteColumn",
            tooltip: n("editor.table.menu.deleteColumn")
          }
        ),
        /* @__PURE__ */ p(
          v,
          {
            action: s,
            icon: "Trash2",
            tooltip: n("editor.table.menu.delete_column")
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function $c(e, t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((s, r) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.${s.replace("-", ".")}.tooltip`),
      icon: i[r],
      action: () => e.commands.updateImage({ width: un[s] }),
      isActive: () => e.isActive("image", { width: un[s] })
    }
  }));
}
function Vc(e, t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((s, r) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.${s.replace("-", ".")}.tooltip`),
      icon: i[r],
      action: () => e.commands.updateImageGif({ width: un[s] }),
      isActive: () => e.isActive("image", { width: un[s] })
    }
  }));
}
function Hc(e, t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((s) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.textalign.${s}.tooltip`),
      icon: i[s],
      action: () => {
        var r, o;
        return (o = (r = e.commands) == null ? void 0 : r.setAlignImage) == null ? void 0 : o.call(r, s);
      },
      isActive: () => e.isActive({ align: s }) || !1,
      disabled: !1
    }
  }));
}
function zc(e, t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((s) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.textalign.${s}.tooltip`),
      icon: i[s],
      action: () => {
        var r, o;
        return (o = (r = e.commands) == null ? void 0 : r.setAlignImageGif) == null ? void 0 : o.call(r, s);
      },
      isActive: () => e.isActive({ align: s }) || !1,
      disabled: !1
    }
  }));
}
function Fc(e, t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((s) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.textalign.${s}.tooltip`),
      icon: i[s],
      action: () => {
        var r, o;
        return (o = (r = e.commands) == null ? void 0 : r.setAlignImageMermaid) == null ? void 0 : o.call(r, s);
      },
      isActive: () => e.isActive({ align: s }) || !1,
      disabled: !1
    }
  }));
}
function Kc(e, t) {
  const n = ["left", "center", "right"], i = {
    left: "AlignLeft",
    center: "AlignCenter",
    right: "AlignRight"
  };
  return n.map((s) => ({
    type: `image-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.textalign.${s}.tooltip`),
      icon: i[s],
      action: () => {
        var r, o;
        return (o = (r = e.commands) == null ? void 0 : r.setAlignImageDrawer) == null ? void 0 : o.call(r, s);
      },
      isActive: () => e.isActive({ align: s }) || !1,
      disabled: !1
    }
  }));
}
function jc(e) {
  return [
    { type: "flex-start", icon: "AlignLeft", tooltip: "Align left" },
    { type: "center", icon: "AlignCenter", tooltip: "Align center" },
    { type: "flex-end", icon: "AlignRight", tooltip: "Align right" }
  ].map((n) => ({
    type: `video-align-${n.type}`,
    component: v,
    componentProps: {
      tooltip: n.tooltip,
      icon: n.icon,
      action: () => e.commands.updateVideo({ align: n.type }),
      isActive: () => e.getAttributes("video").align === n.type
    }
  }));
}
function Wc(e, t) {
  const n = ["size-small", "size-medium", "size-large"], i = [
    "SizeS",
    "SizeM",
    "SizeL"
  ];
  return n.map((s, r) => ({
    type: `video-${s}`,
    component: v,
    componentProps: {
      tooltip: t(`editor.${s.replace("-", ".")}.tooltip`),
      icon: i[r],
      action: () => e.commands.updateVideo({ width: bs[s] }),
      isActive: () => e.isActive("video", { width: bs[s] })
    }
  }));
}
function Yc(e, t) {
  return [
    {
      type: "flipX",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.tooltip.flipX"),
        icon: "FlipX",
        action: () => {
          const n = e.getAttributes("image"), { flipX: i } = n;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipX: !i
          }).run();
        }
      }
    },
    {
      type: "flipY",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.tooltip.flipY"),
        icon: "FlipY",
        action: () => {
          const n = e.getAttributes("image"), { flipY: i } = n;
          e.chain().focus(void 0, { scrollIntoView: !1 }).updateImage({
            flipY: !i
          }).run();
        }
      }
    },
    ...$c(e, t),
    ...Hc(e, t),
    {
      type: "remove",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = e.view;
          Le(n, i);
        }
      }
    }
  ];
}
function Gc(e, t) {
  return [
    ...Vc(e, t),
    ...zc(e, t),
    {
      type: "remove",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = e.view;
          Le(n, i);
        }
      }
    }
  ];
}
function qc(e, t) {
  return [
    ...Fc(e, t),
    {
      type: "edit",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = e.view;
          Le(n, i);
        }
      }
    }
  ];
}
function Jc(e, t) {
  return [
    ...Kc(e, t),
    {
      type: "edit",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.edit"),
        icon: "Pencil",
        action: () => !0
      }
    },
    {
      type: "remove",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = e.view;
          Le(n, i);
        }
      }
    }
  ];
}
function Xc(e, t) {
  return [
    ...Wc(e, t),
    ...jc(e),
    {
      type: "remove",
      component: v,
      componentProps: {
        editor: e,
        tooltip: t("editor.remove"),
        icon: "Trash2",
        action: () => {
          const { state: n, dispatch: i } = e.view;
          Le(n, i);
        }
      }
    }
  ];
}
let ye = !1;
function Zc({ editor: e, attrs: t, extension: n }) {
  const [i, s] = U(!1), r = ct(null), o = ct(null), { alt: l, align: c } = t, a = n == null ? void 0 : n.options.upload, d = () => {
    (async () => {
      const y = document.querySelector("#easydrawer");
      y && (r.current = new jl(y, {
        wheelEventsEnabled: !1,
        disableZoom: !0
      }), o.current = Wl(r.current), o.current.addDefaultToolWidgets(), r.current.loadFromSVG(decodeURIComponent(l)));
    })();
  };
  Z(() => {
    i && setTimeout(() => {
      d();
    }, 200);
  }, [i]);
  const h = async () => {
    if (r.current) {
      const D = r.current.toSVG(), y = D.outerHTML, k = `drawer-${Ir()}.svg`;
      let B = Or(D.outerHTML);
      if (a) {
        const F = Dr(B, k);
        B = await a(F);
      }
      e == null || e.chain().focus().setDrawer(
        {
          type: "drawer",
          src: B,
          alt: encodeURIComponent(y),
          width: 426,
          height: 212
        },
        !!y
      ).run(), e == null || e.commands.setAlignImageDrawer(c);
    }
    s(!1);
  }, u = (D) => {
    const y = r.current.toolController.getPrimaryTools()[2], k = o.current.getWidgetById("pen-1");
    y && k && (y.setColor(D), k.serializeState());
  }, f = (D) => {
    const y = r.current.toolController.getPrimaryTools()[2], k = o.current.getWidgetById("pen-1");
    y && k && (y.setThickness(D), k.serializeState());
  }, g = (D) => {
    const y = r.current.toolController.getPrimaryTools()[3], k = o.current.getWidgetById("pen-2");
    y && k && (y.setColor(D), k.serializeState());
  }, m = (D) => {
    const y = o.current.getWidgetById("shape");
    y && y.setShapeType(D);
  }, w = (D) => {
    const y = r.current.toolController.getPrimaryTools()[5], k = o.current.getWidgetById("shape");
    y && k && (y.setColor(D), k.serializeState());
  }, b = (D) => {
    const y = r.current.toolController.getPrimaryTools()[5], k = o.current.getWidgetById("shape");
    y && k && (y.setThickness(D), k.serializeState());
  }, C = (D) => {
    const y = r.current.toolController.getPrimaryTools()[5], k = o.current.getWidgetById("shape");
    y && k && (y.setBorderColor(D), k.serializeState());
  }, S = () => {
    if (ye) {
      for (; r.current.history.redoStackSize > 0; )
        r.current.history.redo();
      ye = !1;
      return;
    }
    r.current.history.undo();
  };
  return /* @__PURE__ */ x(Be, { onOpenChange: s, open: i, children: [
    /* @__PURE__ */ p($e, { asChild: !0, children: /* @__PURE__ */ p(v, { action: () => s(!0), icon: "Pencil", tooltip: "Edit Drawer" }) }),
    /* @__PURE__ */ x(Ve, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
      /* @__PURE__ */ p(He, { children: "Edit Drawer" }),
      /* @__PURE__ */ x(
        "div",
        {
          style: {
            height: "100%",
            borderWidth: 1,
            background: "white",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ p("div", { className: "richtext-size-full", id: "easydrawer" }),
            /* @__PURE__ */ p(
              Kl,
              {
                changeBorderColorShape: C,
                changeColorShape: w,
                changeShape: m,
                onClear: () => {
                  if (!ye) {
                    for (; r.current.history.undoStackSize > 0; )
                      S();
                    ye = !0;
                  }
                },
                onRedo: () => {
                  ye || r.current.history.redo();
                },
                onThicknessChange: b,
                onUndo: S,
                refEditor: r,
                setColorHighlight: g,
                setColorPen: u,
                setThicknessPen: f
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ p(ze, { children: /* @__PURE__ */ p(Lt, { onClick: h, type: "button", children: "Save changes" }) })
    ] })
  ] });
}
function Qc({ item: e, disabled: t, editor: n }) {
  var s;
  const i = e.component;
  return i ? /* @__PURE__ */ p(Bi, { children: e.type === "divider" ? /* @__PURE__ */ p(
    Ct,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ p(
    i,
    {
      ...e.componentProps,
      disabled: t || ((s = e == null ? void 0 : e.componentProps) == null ? void 0 : s.disabled),
      editor: n
    }
  ) }) : /* @__PURE__ */ p(I, {});
}
function _p() {
  const { lang: e, t } = J(), n = Q(), i = j(), s = Gt(i, qn.name), r = Vi(qn.name), o = ({ editor: c }) => {
    const { selection: a } = c.view.state, { $from: d, to: h } = a;
    let u = !1;
    return c.view.state.doc.nodesBetween(d.pos, h, (f) => {
      if (f.type.name === qn.name)
        return u = !0, !1;
    }), u;
  }, l = ht(() => Jc(i, t), [i, e, t]);
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: i,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleDrawer",
      shouldShow: o,
      children: l != null && l.length ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: l == null ? void 0 : l.map((c, a) => c.type === "edit" && (s != null && s.src) ? /* @__PURE__ */ p(
        Zc,
        {
          attrs: s,
          editor: i,
          extension: r
        },
        `bubbleMenu-drawer-${a}`
      ) : /* @__PURE__ */ p(Qc, { editor: i, item: c }, `bubbleMenu-drawer-${a}`)) }) : /* @__PURE__ */ p(I, {})
    }
  ) : /* @__PURE__ */ p(I, {});
}
const Br = ({ width: e, maxWidth: t, height: n, onOk: i, children: s }) => {
  const { t: r } = J(), [o, l] = U({
    width: "",
    height: "",
    maxWidth: ""
  });
  Z(() => {
    l({
      width: e,
      height: n,
      maxWidth: t
    });
  }, [n, t, e]);
  function c(a) {
    a.preventDefault(), a.stopPropagation(), i(o);
  }
  return /* @__PURE__ */ x(Hi, { modal: !0, children: [
    /* @__PURE__ */ p(zi, { asChild: !0, children: s }),
    /* @__PURE__ */ p(Fi, { children: /* @__PURE__ */ x("form", { className: "richtext-flex richtext-flex-col richtext-gap-2", onSubmit: c, children: [
      /* @__PURE__ */ p(Ut, { className: "mb-[6px]", children: "Width" }),
      /* @__PURE__ */ p("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ p("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ p(
        te,
        {
          onChange: (a) => l({ ...o, width: a.target.value }),
          required: !0,
          type: "number",
          value: o.width
        }
      ) }) }),
      /* @__PURE__ */ p(Ut, { className: "mb-[6px]", children: "Max Width" }),
      /* @__PURE__ */ p("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ p("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ p(
        te,
        {
          onChange: (a) => l({ ...o, maxWidth: a.target.value }),
          required: !0,
          type: "number",
          value: o.maxWidth
        }
      ) }) }),
      /* @__PURE__ */ p(Ut, { className: "mb-[6px]", children: "Height" }),
      /* @__PURE__ */ p("div", { className: "richtext-flex richtext-w-full richtext-max-w-sm richtext-items-center richtext-gap-1.5", children: /* @__PURE__ */ p("div", { className: "richtext-relative richtext-w-full richtext-max-w-sm richtext-items-center", children: /* @__PURE__ */ p(
        te,
        {
          onChange: (a) => l({ ...o, height: a.target.value }),
          required: !0,
          type: "number",
          value: o.height
        }
      ) }) }),
      /* @__PURE__ */ p(Lt, { className: "richtext-mt-2 richtext-self-end", type: "submit", children: r("editor.link.dialog.button.apply") })
    ] }) })
  ] });
}, Vt = /* @__PURE__ */ new Map();
function ta(e) {
  const t = e.options.element;
  Vt.has("width") || Vt.set("width", t.clientWidth), Vt.has("width") && Vt.get("width") <= 0 && Vt.set("width", t.clientWidth);
  const n = { attributes: !0, childList: !0, subtree: !0 }, i = function() {
    Vt.set("width", t.clientWidth);
  }, s = new MutationObserver(i);
  return s.observe(t, n), e.on("destroy", () => {
    s.disconnect();
  }), { width: Vt.get("width") };
}
function Ep() {
  const e = Q(), t = j(), { t: n } = J(), { width: i } = ta(t), s = Gt(t, we.name, {
    defaultShowPicker: !1,
    createUser: "",
    width: 0,
    height: 0
  }), { defaultShowPicker: r, createUser: o, width: l, height: c } = s, a = O(
    (f) => {
      t.chain().updateAttributes(we.name, f).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), d = O(() => {
    const f = Ol.EXCALIDRAW(t.id);
    Ml(f, s);
  }, [t, s]), h = O(() => t.isActive(we.name), [t]), u = O(() => qt(we.name, t), [t]);
  return Z(() => {
    r && (d(), t.chain().updateAttributes(we.name, { defaultShowPicker: !1 }).focus().run());
  }, [o, r, t, d]), e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleExcalidraw",
      shouldShow: h,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(v, { action: d, icon: "Pencil", tooltip: n("editor.edit") }),
        /* @__PURE__ */ p(Br, { height: c, maxWidth: i, onOk: a, width: l, children: /* @__PURE__ */ p(v, { icon: "Settings", tooltip: n("editor.settings") }) }),
        /* @__PURE__ */ p(v, { action: u, icon: "Trash2", tooltip: n("editor.delete") })
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Tp() {
  const e = Q(), t = j(), { t: n } = J(), { width: i, height: s, src: r } = Gt(t, be.name, {
    width: 0,
    height: 0,
    src: "",
    defaultShowPicker: !1
  }), [o, l] = U(!1), [c, a] = U(""), d = O(
    (w) => {
      var b;
      (b = w == null ? void 0 : w.preventDefault) == null || b.call(w), l(!1);
    },
    [l]
  );
  Z(() => {
    o && a(r);
  }, [o, r]);
  const h = O(
    (w) => {
      var C;
      (C = w == null ? void 0 : w.preventDefault) == null || C.call(w);
      const b = Yl(c);
      t.chain().updateAttributes(be.name, {
        src: (b == null ? void 0 : b.src) || c
      }).setNodeSelection(t.state.selection.from).focus().run(), l(!1);
    },
    [t, c, l]
  ), u = O(() => {
    window.open(r, "_blank");
  }, [r]), f = O(
    (w) => {
      t.chain().updateAttributes(be.name, w).setNodeSelection(t.state.selection.from).focus().run();
    },
    [t]
  ), g = O(() => t.isActive(be.name) && !r, [t, r]), m = O(() => qt(be.name, t), [t]);
  return e ? /* @__PURE__ */ p(I, { children: /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleIframe",
      shouldShow: g,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(v, { action: u, icon: "Eye", tooltip: "Visit Link" }),
        /* @__PURE__ */ x(Be, { onOpenChange: l, open: o, children: [
          /* @__PURE__ */ p($e, { asChild: !0, children: /* @__PURE__ */ p(v, { icon: "Pencil", tooltip: "Open Edit Link" }) }),
          /* @__PURE__ */ x(Ve, { children: [
            /* @__PURE__ */ p(Rl, { children: /* @__PURE__ */ p(He, { children: "Edit Link Iframe" }) }),
            /* @__PURE__ */ p(
              te,
              {
                autoFocus: !0,
                onInput: (w) => a(w.target.value),
                placeholder: "Enter link",
                type: "url",
                value: c
              }
            ),
            /* @__PURE__ */ x(ze, { children: [
              /* @__PURE__ */ p(Lt, { onClick: d, type: "button", children: "Cancel" }),
              /* @__PURE__ */ p(Lt, { onClick: h, type: "button", children: "OK" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p(Br, { height: s, onOk: f, width: i, children: /* @__PURE__ */ p(v, { icon: "Settings", tooltip: n("editor.settings") }) }),
        /* @__PURE__ */ p(v, { action: m, icon: "Trash2", tooltip: n("editor.delete") })
      ] })
    }
  ) }) : /* @__PURE__ */ p(I, {});
}
function ea({ children: e, visible: t, toggleVisible: n }) {
  const { t: i } = J(), s = j(), r = Gt(s, ui.name, {
    text: "",
    macros: ""
  }), { text: o, macros: l } = r, [c, a] = U(decodeURIComponent(o || "")), [d, h] = U(decodeURIComponent(l || ""));
  Z(() => {
    t && (a(decodeURIComponent(o || "")), h(decodeURIComponent(l || "")));
  }, [t]);
  const u = O(() => {
    s.chain().focus().setKatex({
      text: encodeURIComponent(c),
      macros: encodeURIComponent(d)
    }).run(), a(""), h(""), n(!1);
  }, [s, c, d, n]), f = ht(() => {
    try {
      return ql.renderToString(c, {
        macros: Hl(d || "")
      });
    } catch {
      return c;
    }
  }, [c, d]), g = ht(() => `${c}`.trim() ? f : null, [c, f]);
  return /* @__PURE__ */ x(Be, { onOpenChange: n, open: t, children: [
    /* @__PURE__ */ p($e, { asChild: !0, children: e }),
    /* @__PURE__ */ x(Ve, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
      /* @__PURE__ */ p(He, { children: i("editor.formula.dialog.text") }),
      /* @__PURE__ */ p("div", { style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
        /* @__PURE__ */ x("div", { className: "richtext-flex-1", children: [
          /* @__PURE__ */ p(Ut, { className: "mb-[6px]", children: "Expression" }),
          /* @__PURE__ */ p(
            pi,
            {
              autoFocus: !0,
              className: "richtext-mb-[10px]",
              onChange: (m) => a(m.target.value),
              placeholder: "Text",
              required: !0,
              rows: 10,
              value: c,
              style: {
                color: "hsl(var(--foreground))"
              }
            }
          ),
          /* @__PURE__ */ p(Ut, { className: "mb-[6px]", children: "Macros" }),
          /* @__PURE__ */ p(
            pi,
            {
              onChange: (m) => h(m.target.value),
              placeholder: "Macros",
              rows: 10,
              value: d,
              style: {
                color: "hsl(var(--foreground))"
              }
            }
          )
        ] }),
        /* @__PURE__ */ p(
          "div",
          {
            className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
            dangerouslySetInnerHTML: { __html: g || "" },
            style: {
              height: "100%",
              borderWidth: 1,
              minHeight: 500,
              background: "#fff"
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ p(ze, { children: /* @__PURE__ */ p(Lt, { onClick: u, type: "button", children: "Save changes" }) })
    ] })
  ] });
}
function Dp() {
  const e = Q(), t = j(), [n, i] = U(!1), s = O(() => t.isActive(ui.name), [t]), r = O(() => qt(ui.name, t), [t]);
  return e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleKatex",
      shouldShow: s,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(ea, { toggleVisible: i, visible: n, children: /* @__PURE__ */ p(v, { action: () => i(!n), tooltip: "Edit", children: /* @__PURE__ */ p(zl, { size: 16 }) }) }),
        /* @__PURE__ */ p(v, { action: r, tooltip: "Delete", children: /* @__PURE__ */ p(Ar, { size: 16 }) })
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function na(e) {
  const { t } = J();
  return /* @__PURE__ */ x("div", { className: "richtext-flex richtext-flex-nowrap", children: [
    /* @__PURE__ */ p(
      v,
      {
        disabled: !(e != null && e.link),
        icon: "ExternalLink",
        tooltip: t("editor.link.open.tooltip"),
        tooltipOptions: { sideOffset: 15 },
        action: () => {
          window.open(e == null ? void 0 : e.link, "_blank");
        }
      }
    ),
    /* @__PURE__ */ p(
      v,
      {
        icon: "Pencil",
        tooltip: t("editor.link.edit.tooltip"),
        tooltipOptions: { sideOffset: 15 },
        action: () => {
          e == null || e.onEdit();
        }
      }
    ),
    /* @__PURE__ */ p(
      v,
      {
        icon: "Unlink",
        tooltip: t("editor.link.unlink.tooltip"),
        tooltipOptions: { sideOffset: 15 },
        action: () => {
          e == null || e.onClear();
        }
      }
    )
  ] });
}
function Ap() {
  const e = Q(), t = j(), [n, i] = U(!1), s = Gt(t, xs.name), r = s == null ? void 0 : s.href, o = O(({ editor: d }) => d.isActive(xs.name), []), l = (d, h, u) => {
    const f = t.state.selection, { from: g } = f, m = (h == null ? void 0 : h.length) ?? 0, w = g + m;
    t.chain().extendMarkRange("link").insertContent({
      type: "text",
      text: h,
      marks: [
        {
          type: "link",
          attrs: {
            href: d,
            target: u ? "_blank" : ""
          }
        }
      ]
    }).setLink({ href: d }).setTextSelection({ from: g, to: w }).focus().run(), i(!1);
  }, c = O(() => {
    t.chain().extendMarkRange("link").unsetLink().focus().run(), i(!1);
  }, [t]), a = () => {
    i(!1);
  };
  return e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleLink",
      shouldShow: o,
      children: /* @__PURE__ */ p(I, { children: n ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ p(Jl, { editor: t, onClose: a, onSetLink: l }) }) : /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ p(
        na,
        {
          editor: t,
          link: r,
          onClear: c,
          onEdit: () => {
            i(!0);
          }
        }
      ) }) })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Ki({ item: e, disabled: t, editor: n }) {
  const i = e.component;
  return i ? /* @__PURE__ */ p(Bi, { children: e.type === "divider" ? /* @__PURE__ */ p(
    Ct,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ p(
    i,
    {
      ...e.componentProps,
      disabled: t || (e == null ? void 0 : e.componentdisabled),
      editor: n
    }
  ) }) : /* @__PURE__ */ p(I, {});
}
function ia(e) {
  return e.type.name === Nl.name;
}
function sa(e) {
  return e.type.name === Gl.name;
}
function ra(e) {
  return e.type.name === Ul.name;
}
function Ip() {
  const { lang: e, t } = J(), n = Q(), i = j(), s = ({ editor: o }) => {
    const { selection: l } = o.view.state, { $from: c, to: a } = l;
    let d = !1;
    return o.view.state.doc.nodesBetween(c.pos, a, (h) => {
      if (ia(h))
        return d = !0, !1;
    }), d;
  }, r = ht(() => Yc(i, t), [i, e, t]);
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: i,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleImage",
      shouldShow: s,
      children: r != null && r.length ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: r == null ? void 0 : r.map((o, l) => /* @__PURE__ */ p(Ki, { editor: i, item: o }, `bubbleMenu-image-${l}`)) }) : /* @__PURE__ */ p(I, {})
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Op() {
  const { lang: e, t } = J(), n = Q(), i = j(), s = ({ editor: o }) => {
    const { selection: l } = o.view.state, { $from: c, to: a } = l;
    let d = !1;
    return o.view.state.doc.nodesBetween(c.pos, a, (h) => {
      if (sa(h))
        return d = !0, !1;
    }), d;
  }, r = ht(() => Gc(i, t), [i, t, e]);
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: i,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleImageGif",
      shouldShow: s,
      children: r != null && r.length ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: r == null ? void 0 : r.map((o, l) => /* @__PURE__ */ p(Ki, { editor: i, item: o }, `bubbleMenu-image-gif-${l}`)) }) : /* @__PURE__ */ p(I, {})
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Mp() {
  const { t: e } = J(), t = Q(), n = j(), i = ({ editor: r }) => {
    const { selection: o } = r.view.state, { $from: l, to: c } = o;
    let a = !1;
    return r.view.state.doc.nodesBetween(l.pos, c, (d) => {
      if (ra(d))
        return a = !0, !1;
    }), a;
  }, s = ht(() => Xc(n, e), [n, e]);
  return t ? /* @__PURE__ */ p(
    st,
    {
      editor: n,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleVideo",
      shouldShow: i,
      children: s != null && s.length ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: s == null ? void 0 : s.map((r, o) => /* @__PURE__ */ p(Ki, { editor: n, item: r }, `bubbleMenu-video-${o}`)) }) : /* @__PURE__ */ p(I, {})
    }
  ) : /* @__PURE__ */ p(I, {});
}
const Is = `graph TB
a-->b`, oa = ({ editor: e, attrs: t, extension: n }) => {
  const { alt: i, align: s } = t, [r, o] = U(decodeURIComponent(i ?? Is)), [l, c] = U(""), [a, d] = U(!1), h = ct(null), [u, f] = U(null), g = n == null ? void 0 : n.options.upload, m = O((S) => {
    S && import("mermaid").then((T) => {
      f(T.default);
    });
  }, []), w = async (S) => {
    try {
      const { svg: T } = await u.render("mermaid-svg", S);
      c(T);
    } catch {
      c("");
    }
  }, b = () => {
    u.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), w(r);
  };
  return Z(() => {
    u && a && b();
  }, [u, a]), Z(() => {
    u && a && w(r);
  }, [u, r]), /* @__PURE__ */ x(Be, { onOpenChange: d, open: a, children: [
    /* @__PURE__ */ p($e, { asChild: !0, children: /* @__PURE__ */ p(v, { action: () => d(!0), icon: "Pencil", tooltip: "Edit Mermaid" }) }),
    /* @__PURE__ */ x(Ve, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
      /* @__PURE__ */ p(He, { children: "Edit Mermaid" }),
      /* @__PURE__ */ p("div", { ref: m, style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
        /* @__PURE__ */ p(
          pi,
          {
            autoFocus: !0,
            className: "richtext-flex-1",
            defaultValue: Is,
            onChange: (S) => o(S.target.value),
            placeholder: "Text",
            required: !0,
            rows: 10,
            value: r,
            style: {
              color: "hsl(var(--foreground))"
            }
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
            dangerouslySetInnerHTML: { __html: l },
            ref: h,
            style: {
              height: "100%",
              border: "1px solid hsl(var(--border))",
              minHeight: 500
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ p(ze, { children: /* @__PURE__ */ p(Lt, { onClick: async () => {
        if (r !== "") {
          if (r) {
            const S = h.current.querySelector("svg"), { width: T, height: W } = S.getBoundingClientRect(), D = `mermaid-${Ir()}.svg`;
            let y = Or(S.outerHTML);
            if (g) {
              const k = Dr(y, D);
              y = await g(k);
            }
            e == null || e.chain().focus().setMermaid(
              {
                type: "mermaid",
                src: y,
                alt: encodeURIComponent(r),
                width: T,
                height: W
              },
              !!r
            ).run(), e == null || e.commands.setAlignImageMermaid(s);
          }
          d(!1);
        }
      }, type: "button", children: "Save changes" }) })
    ] })
  ] });
};
function la({ item: e, disabled: t, editor: n }) {
  var s;
  const i = e.component;
  return i ? /* @__PURE__ */ p(Bi, { children: e.type === "divider" ? /* @__PURE__ */ p(
    Ct,
    {
      className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
      orientation: "vertical"
    }
  ) : /* @__PURE__ */ p(
    i,
    {
      ...e.componentProps,
      disabled: t || ((s = e == null ? void 0 : e.componentProps) == null ? void 0 : s.disabled),
      editor: n
    }
  ) }) : /* @__PURE__ */ p(I, {});
}
function ca(e) {
  return e.type.name === gi.name;
}
function Rp() {
  const { lang: e, t } = J(), n = Q(), i = j(), s = Gt(i, gi.name), r = Vi(gi.name), o = ({ editor: c }) => {
    const { selection: a } = c.view.state, { $from: d, to: h } = a;
    let u = !1;
    return c.view.state.doc.nodesBetween(d.pos, h, (f) => {
      if (ca(f))
        return u = !0, !1;
    }), u;
  }, l = ht(() => qc(i, t), [i, e, t]);
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: i,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleMermaid",
      shouldShow: o,
      children: l != null && l.length ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: l == null ? void 0 : l.map((c, a) => c.type === "edit" && (s != null && s.src) ? /* @__PURE__ */ p(
        oa,
        {
          attrs: s,
          editor: i,
          extension: r
        },
        `bubbleMenu-mermaid-${a}`
      ) : /* @__PURE__ */ p(la, { editor: i, item: c }, `bubbleMenu-mermaid-${a}`)) }) : /* @__PURE__ */ p(I, {})
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Np({ hiddenActions: e = [] }) {
  var m, w, b, C, S, T, W, D, y, k, B, F, M, $, K, _, dt, Ge;
  const { t } = J(), n = Q(), i = j(), s = ({ editor: Zt }) => yl(Zt.view.state, Al.name), r = (Zt) => e.includes(Zt);
  function o() {
    i.chain().focus().addColumnBefore().run();
  }
  function l() {
    i.chain().focus().addColumnAfter().run();
  }
  function c() {
    i.chain().focus().deleteColumn().run();
  }
  function a() {
    i.chain().focus().addRowBefore().run();
  }
  function d() {
    i.chain().focus().addRowAfter().run();
  }
  function h() {
    i.chain().focus().deleteRow().run();
  }
  function u() {
    i.chain().focus().mergeCells().run();
  }
  function f() {
    i == null || i.chain().focus().splitCell().run();
  }
  function g() {
    i.chain().focus().deleteTable().run();
  }
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: i,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleTable",
      shouldShow: s,
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        !r("addColumnBefore") && /* @__PURE__ */ p(
          v,
          {
            action: o,
            disabled: !((w = (m = i == null ? void 0 : i.can()) == null ? void 0 : m.addColumnBefore) != null && w.call(m)),
            icon: "BetweenHorizonalEnd",
            tooltip: t("editor.table.menu.insertColumnBefore"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !r("addColumnAfter") && /* @__PURE__ */ p(
          v,
          {
            action: l,
            disabled: !((C = (b = i == null ? void 0 : i.can()) == null ? void 0 : b.addColumnAfter) != null && C.call(b)),
            icon: "BetweenHorizonalStart",
            tooltip: t("editor.table.menu.insertColumnAfter"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !r("deleteColumn") && /* @__PURE__ */ p(
          v,
          {
            action: c,
            disabled: !((T = i == null ? void 0 : (S = i.can()).deleteColumn) != null && T.call(S)),
            icon: "DeleteColumn",
            tooltip: t("editor.table.menu.deleteColumn"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ p(
          Ct,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        !r("addRowAbove") && /* @__PURE__ */ p(
          v,
          {
            action: a,
            disabled: !((D = i == null ? void 0 : (W = i.can()).addRowBefore) != null && D.call(W)),
            icon: "BetweenVerticalEnd",
            tooltip: t("editor.table.menu.insertRowAbove"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !r("addRowBelow") && /* @__PURE__ */ p(
          v,
          {
            action: d,
            disabled: !((k = (y = i == null ? void 0 : i.can()) == null ? void 0 : y.addRowAfter) != null && k.call(y)),
            icon: "BetweenVerticalStart",
            tooltip: t("editor.table.menu.insertRowBelow"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !r("deleteRow") && /* @__PURE__ */ p(
          v,
          {
            action: h,
            disabled: !((F = (B = i == null ? void 0 : i.can()) == null ? void 0 : B.deleteRow) != null && F.call(B)),
            icon: "DeleteRow",
            tooltip: t("editor.table.menu.deleteRow"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ p(
          Ct,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        !r("mergeCells") && /* @__PURE__ */ p(
          v,
          {
            action: u,
            disabled: !(($ = (M = i == null ? void 0 : i.can()) == null ? void 0 : M.mergeCells) != null && $.call(M)),
            icon: "TableCellsMerge",
            tooltip: t("editor.table.menu.mergeCells"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        !r("splitCells") && /* @__PURE__ */ p(
          v,
          {
            action: f,
            disabled: !((_ = (K = i == null ? void 0 : i.can()) == null ? void 0 : K.splitCell) != null && _.call(K)),
            icon: "TableCellsSplit",
            tooltip: t("editor.table.menu.splitCells"),
            tooltipOptions: { sideOffset: 15 }
          }
        ),
        /* @__PURE__ */ p(
          Ct,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        !r("deleteTable") && /* @__PURE__ */ p(
          v,
          {
            action: g,
            disabled: !((Ge = (dt = i == null ? void 0 : i.can()) == null ? void 0 : dt.deleteTable) != null && Ge.call(dt)),
            icon: "Trash2",
            tooltip: t("editor.table.menu.deleteTable"),
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function aa() {
  const { t: e } = J(), [t, n] = U(!1), i = j(), s = ht(() => {
    var o, l;
    return (l = (o = fc({ t: e })) == null ? void 0 : o[0]) == null ? void 0 : l.commands;
  }, [e]), r = ht(() => {
    var l;
    return (l = s == null ? void 0 : s.find((c) => {
      var a;
      return (a = c == null ? void 0 : c.isActive) == null ? void 0 : a.call(c, i);
    })) == null ? void 0 : l.label;
  }, [i.state.selection.ranges, t, i, s, e]);
  return /* @__PURE__ */ x(Hi, { modal: !0, onOpenChange: n, open: t, children: [
    /* @__PURE__ */ p(
      zi,
      {
        asChild: !0,
        className: "hover:richtext-bg-accent data-[state=on]:richtext-bg-accent",
        children: /* @__PURE__ */ x(v, { dataState: !!r, children: [
          r ? /* @__PURE__ */ p(I, { children: r }) : /* @__PURE__ */ p(I, { children: e("editor.paragraph.tooltip") }),
          /* @__PURE__ */ p(
            rt,
            {
              className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
              name: "MenuDown"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ p(
      Fi,
      {
        align: "start",
        className: "!richtext-w-[initial] !richtext-p-[4px]",
        hideWhenDetached: !0,
        side: "bottom",
        children: s == null ? void 0 : s.map((o) => {
          var c;
          const l = (c = o == null ? void 0 : o.isActive) == null ? void 0 : c.call(o, i);
          return /* @__PURE__ */ x(
            "div",
            {
              className: "richtext-flex richtext-w-full richtext-items-center richtext-gap-3 richtext-rounded-sm !richtext-border-none !richtext-bg-transparent richtext-px-2 richtext-py-1.5 richtext-text-left richtext-text-sm richtext-text-foreground !richtext-outline-none richtext-transition-colors hover:!richtext-bg-accent",
              onClick: (a) => {
                a.preventDefault(), o.action({
                  editor: i,
                  range: i.state.selection.ranges
                }), n(!1);
              },
              children: [
                /* @__PURE__ */ x("div", { className: "!richtext-min-w-[20px]", children: [
                  l && /* @__PURE__ */ p(fi, { size: 16 }),
                  !r && o.label === e("editor.paragraph.tooltip") && !l && /* @__PURE__ */ p(fi, { size: 16 })
                ] }),
                /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-1", children: [
                  o.iconName && /* @__PURE__ */ p(
                    rt,
                    {
                      className: "!richtext-mr-1 !richtext-text-lg",
                      name: o.iconName
                    }
                  ),
                  o.label
                ] })
              ]
            },
            o.name
          );
        })
      }
    )
  ] });
}
function ha() {
  return /* @__PURE__ */ x(I, { children: [
    /* @__PURE__ */ p(aa, {}),
    /* @__PURE__ */ p(
      Ct,
      {
        className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
        orientation: "vertical"
      }
    ),
    /* @__PURE__ */ p(cc, {}),
    /* @__PURE__ */ p(uc, {}),
    /* @__PURE__ */ p(gc, {}),
    /* @__PURE__ */ p(pc, {}),
    /* @__PURE__ */ p(ac, {}),
    /* @__PURE__ */ p(Xl, {}),
    /* @__PURE__ */ p(
      Ct,
      {
        className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
        orientation: "vertical"
      }
    ),
    /* @__PURE__ */ p(hc, {}),
    /* @__PURE__ */ p(dc, {}),
    /* @__PURE__ */ p(nc, {})
  ] });
}
function Up({ buttonBubble: e }) {
  const t = j(), n = Q(), i = ({ editor: s }) => {
    const { selection: r } = s.view.state, { $from: o, to: l } = r;
    return s.isActive("codeBlock") || o.pos === l ? !1 : r instanceof _l;
  };
  return n ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleText",
      shouldShow: i,
      children: e ? /* @__PURE__ */ p(I, { children: e }) : /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ p(ha, {}) })
    }
  ) : /* @__PURE__ */ p(I, {});
}
function Lp() {
  const { t: e } = J(), t = Q(), n = j(), [i, s] = U(!1), r = O(({ editor: c }) => c.isActive(Ds.name), []), o = (c) => {
    n.commands.updateTweet({ src: c }), s(!1);
  }, l = O(() => qt(Ds.name, n), [n]);
  return t ? /* @__PURE__ */ p(
    st,
    {
      editor: n,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleTwitter",
      shouldShow: r,
      children: /* @__PURE__ */ p(I, { children: i ? /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-4 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: /* @__PURE__ */ p(mc, { editor: n, onSetLink: o }) }) : /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(
          v,
          {
            icon: "Pencil",
            tooltip: e("editor.link.edit.tooltip"),
            tooltipOptions: { sideOffset: 15 },
            action: () => {
              s(!0);
            }
          }
        ),
        /* @__PURE__ */ p(
          v,
          {
            action: l,
            icon: "Trash",
            tooltip: e("editor.delete"),
            tooltipOptions: { sideOffset: 15 }
          }
        )
      ] }) })
    }
  ) : /* @__PURE__ */ p(I, {});
}
const wt = () => /* @__PURE__ */ new Map(), wi = (e) => {
  const t = wt();
  return e.forEach((n, i) => {
    t.set(i, n);
  }), t;
}, It = (e, t, n) => {
  let i = e.get(t);
  return i === void 0 && e.set(t, i = n()), i;
}, da = (e, t) => {
  const n = [];
  for (const [i, s] of e)
    n.push(t(s, i));
  return n;
}, ua = (e, t) => {
  for (const [n, i] of e)
    if (t(i, n))
      return !0;
  return !1;
}, Ft = () => /* @__PURE__ */ new Set(), Xn = (e) => e[e.length - 1], fa = (e, t) => {
  for (let n = 0; n < t.length; n++)
    e.push(t[n]);
}, Kt = Array.from, ji = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (!t(e[n], n, e))
      return !1;
  return !0;
}, Wi = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return !0;
  return !1;
}, pa = (e, t) => {
  const n = new Array(e);
  for (let i = 0; i < e; i++)
    n[i] = t(i, n);
  return n;
}, oe = Array.isArray;
class $r {
  constructor() {
    this._observers = wt();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, n) {
    return It(
      this._observers,
      /** @type {string} */
      t,
      Ft
    ).add(n), n;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(t, n) {
    const i = (...s) => {
      this.off(
        t,
        /** @type {any} */
        i
      ), n(...s);
    };
    this.on(
      t,
      /** @type {any} */
      i
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(t, n) {
    const i = this._observers.get(t);
    i !== void 0 && (i.delete(n), i.size === 0 && this._observers.delete(t));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(t, n) {
    return Kt((this._observers.get(t) || wt()).values()).forEach((i) => i(...n));
  }
  destroy() {
    this._observers = wt();
  }
}
const bt = Math.floor, rn = Math.abs, le = (e, t) => e < t ? e : t, Pt = (e, t) => e > t ? e : t, Vr = (e) => e !== 0 ? e < 0 : 1 / e < 0, Os = 1, Ms = 2, Zn = 4, Qn = 8, Ce = 32, Dt = 64, nt = 128, ga = 1 << 29, On = 31, bi = 63, zt = 127, ma = 2147483647, fn = Number.MAX_SAFE_INTEGER, Rs = Number.MIN_SAFE_INTEGER, wa = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && bt(e) === e), Hr = String.fromCharCode, ba = (e) => e.toLowerCase(), ya = /^\s*/g, xa = (e) => e.replace(ya, ""), va = /([A-Z])/g, Ns = (e, t) => xa(e.replace(va, (n) => `${t}${ba(n)}`)), Sa = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, i = new Uint8Array(n);
  for (let s = 0; s < n; s++)
    i[s] = /** @type {number} */
    t.codePointAt(s);
  return i;
}, ke = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), Ca = (e) => ke.encode(e), ka = ke ? Ca : Sa;
let ve = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
ve && ve.decode(new Uint8Array()).length === 1 && (ve = null);
const _a = (e, t) => pa(t, () => e).join("");
class Fe {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Ke = () => new Fe(), Ea = (e) => {
  const t = Ke();
  return e(t), mt(t);
}, Ta = (e) => {
  let t = e.cpos;
  for (let n = 0; n < e.bufs.length; n++)
    t += e.bufs[n].length;
  return t;
}, mt = (e) => {
  const t = new Uint8Array(Ta(e));
  let n = 0;
  for (let i = 0; i < e.bufs.length; i++) {
    const s = e.bufs[i];
    t.set(s, n), n += s.length;
  }
  return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Da = (e, t) => {
  const n = e.cbuf.length;
  n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Pt(n, t) * 2), e.cpos = 0);
}, Y = (e, t) => {
  const n = e.cbuf.length;
  e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, yi = Y, A = (e, t) => {
  for (; t > zt; )
    Y(e, nt | zt & t), t = bt(t / 128);
  Y(e, zt & t);
}, Yi = (e, t) => {
  const n = Vr(t);
  for (n && (t = -t), Y(e, (t > bi ? nt : 0) | (n ? Dt : 0) | bi & t), t = bt(t / 64); t > 0; )
    Y(e, (t > zt ? nt : 0) | zt & t), t = bt(t / 128);
}, xi = new Uint8Array(3e4), Aa = xi.length / 3, Ia = (e, t) => {
  if (t.length < Aa) {
    const n = ke.encodeInto(t, xi).written || 0;
    A(e, n);
    for (let i = 0; i < n; i++)
      Y(e, xi[i]);
  } else
    lt(e, ka(t));
}, Oa = (e, t) => {
  const n = unescape(encodeURIComponent(t)), i = n.length;
  A(e, i);
  for (let s = 0; s < i; s++)
    Y(
      e,
      /** @type {number} */
      n.codePointAt(s)
    );
}, ee = ke && /** @type {any} */
ke.encodeInto ? Ia : Oa, Mn = (e, t) => {
  const n = e.cbuf.length, i = e.cpos, s = le(n - i, t.length), r = t.length - s;
  e.cbuf.set(t.subarray(0, s), i), e.cpos += s, r > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Pt(n * 2, r)), e.cbuf.set(t.subarray(s)), e.cpos = r);
}, lt = (e, t) => {
  A(e, t.byteLength), Mn(e, t);
}, Gi = (e, t) => {
  Da(e, t);
  const n = new DataView(e.cbuf.buffer, e.cpos, t);
  return e.cpos += t, n;
}, Ma = (e, t) => Gi(e, 4).setFloat32(0, t, !1), Ra = (e, t) => Gi(e, 8).setFloat64(0, t, !1), Na = (e, t) => (
  /** @type {any} */
  Gi(e, 8).setBigInt64(0, t, !1)
), Us = new DataView(new ArrayBuffer(4)), Ua = (e) => (Us.setFloat32(0, e), Us.getFloat32(0) === e), ce = (e, t) => {
  switch (typeof t) {
    case "string":
      Y(e, 119), ee(e, t);
      break;
    case "number":
      wa(t) && rn(t) <= ma ? (Y(e, 125), Yi(e, t)) : Ua(t) ? (Y(e, 124), Ma(e, t)) : (Y(e, 123), Ra(e, t));
      break;
    case "bigint":
      Y(e, 122), Na(e, t);
      break;
    case "object":
      if (t === null)
        Y(e, 126);
      else if (oe(t)) {
        Y(e, 117), A(e, t.length);
        for (let n = 0; n < t.length; n++)
          ce(e, t[n]);
      } else if (t instanceof Uint8Array)
        Y(e, 116), lt(e, t);
      else {
        Y(e, 118);
        const n = Object.keys(t);
        A(e, n.length);
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          ee(e, s), ce(e, t[s]);
        }
      }
      break;
    case "boolean":
      Y(e, t ? 120 : 121);
      break;
    default:
      Y(e, 127);
  }
};
class Ls extends Fe {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(t) {
    super(), this.w = t, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(t) {
    this.s === t ? this.count++ : (this.count > 0 && A(this, this.count - 1), this.count = 1, this.w(this, t), this.s = t);
  }
}
const Ps = (e) => {
  e.count > 0 && (Yi(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && A(e.encoder, e.count - 2));
};
class on {
  constructor() {
    this.encoder = new Fe(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (Ps(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Ps(this), mt(this.encoder);
  }
}
const Bs = (e) => {
  if (e.count > 0) {
    const t = e.diff * 2 + (e.count === 1 ? 0 : 1);
    Yi(e.encoder, t), e.count > 1 && A(e.encoder, e.count - 2);
  }
};
class ti {
  constructor() {
    this.encoder = new Fe(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (Bs(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Bs(this), mt(this.encoder);
  }
}
class La {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new on();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new Fe();
    return this.sarr.push(this.s), this.s = "", ee(t, this.sarr.join("")), Mn(t, this.lensE.toUint8Array()), mt(t);
  }
}
const _t = (e) => new Error(e), pt = () => {
  throw _t("Method unimplemented");
}, it = () => {
  throw _t("Unexpected case");
}, zr = _t("Unexpected end of array"), Fr = _t("Integer out of Range");
class Rn {
  /**
   * @param {Uint8Array<Buf>} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const qi = (e) => new Rn(e), Pa = (e) => e.pos !== e.arr.length, Ba = (e, t) => {
  const n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
  return e.pos += t, n;
}, ut = (e) => Ba(e, L(e)), _e = (e) => e.arr[e.pos++], L = (e) => {
  let t = 0, n = 1;
  const i = e.arr.length;
  for (; e.pos < i; ) {
    const s = e.arr[e.pos++];
    if (t = t + (s & zt) * n, n *= 128, s < nt)
      return t;
    if (t > fn)
      throw Fr;
  }
  throw zr;
}, Ji = (e) => {
  let t = e.arr[e.pos++], n = t & bi, i = 64;
  const s = (t & Dt) > 0 ? -1 : 1;
  if ((t & nt) === 0)
    return s * n;
  const r = e.arr.length;
  for (; e.pos < r; ) {
    if (t = e.arr[e.pos++], n = n + (t & zt) * i, i *= 128, t < nt)
      return s * n;
    if (n > fn)
      throw Fr;
  }
  throw zr;
}, $a = (e) => {
  let t = L(e);
  if (t === 0)
    return "";
  {
    let n = String.fromCodePoint(_e(e));
    if (--t < 100)
      for (; t--; )
        n += String.fromCodePoint(_e(e));
    else
      for (; t > 0; ) {
        const i = t < 1e4 ? t : 1e4, s = e.arr.subarray(e.pos, e.pos + i);
        e.pos += i, n += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          s
        ), t -= i;
      }
    return decodeURIComponent(escape(n));
  }
}, Va = (e) => (
  /** @type any */
  ve.decode(ut(e))
), vi = ve ? Va : $a, Xi = (e, t) => {
  const n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
  return e.pos += t, n;
}, Ha = (e) => Xi(e, 4).getFloat32(0, !1), za = (e) => Xi(e, 8).getFloat64(0, !1), Fa = (e) => (
  /** @type {any} */
  Xi(e, 8).getBigInt64(0, !1)
), Ka = [
  (e) => {
  },
  // CASE 127: undefined
  (e) => null,
  // CASE 126: null
  Ji,
  // CASE 125: integer
  Ha,
  // CASE 124: float32
  za,
  // CASE 123: float64
  Fa,
  // CASE 122: bigint
  (e) => !1,
  // CASE 121: boolean (false)
  (e) => !0,
  // CASE 120: boolean (true)
  vi,
  // CASE 119: string
  (e) => {
    const t = L(e), n = {};
    for (let i = 0; i < t; i++) {
      const s = vi(e);
      n[s] = pn(e);
    }
    return n;
  },
  (e) => {
    const t = L(e), n = [];
    for (let i = 0; i < t; i++)
      n.push(pn(e));
    return n;
  },
  ut
  // CASE 116: Uint8Array
], pn = (e) => Ka[127 - _e(e)](e);
class $s extends Rn {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, n) {
    super(t), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), Pa(this) ? this.count = L(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class ln extends Rn {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Ji(this);
      const t = Vr(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = L(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class ei extends Rn {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const t = Ji(this), n = t & 1;
      this.diff = bt(t / 2), this.count = 1, n && (this.count = L(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class ja {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new ln(t), this.str = vi(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), n = this.str.slice(this.spos, t);
    return this.spos = t, n;
  }
}
const Wa = crypto.getRandomValues.bind(crypto), Ya = Math.random, Kr = () => Wa(new Uint32Array(1))[0], Ga = (e) => e[bt(Ya() * e.length)], qa = "10000000-1000-4000-8000" + -1e11, Ja = () => qa.replace(
  /[018]/g,
  /** @param {number} c */
  (e) => (e ^ Kr() & 15 >> e / 4).toString(16)
), Xa = Date.now, Vs = (e) => (
  /** @type {Promise<T>} */
  new Promise(e)
);
Promise.all.bind(Promise);
const Hs = (e) => e === void 0 ? null : e;
class Za {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(t, n) {
    this.map.set(t, n);
  }
  /**
   * @param {string} key
   */
  getItem(t) {
    return this.map.get(t);
  }
}
let jr = new Za(), Qa = !0;
try {
  typeof localStorage < "u" && localStorage && (jr = localStorage, Qa = !1);
} catch {
}
const th = jr, Ee = Symbol("Equality"), Wr = (e, t) => {
  var n;
  return e === t || !!((n = e == null ? void 0 : e[Ee]) != null && n.call(e, t)) || !1;
}, eh = (e) => typeof e == "object", nh = Object.assign, Yr = Object.keys, ih = (e, t) => {
  for (const n in e)
    t(e[n], n);
}, gn = (e) => Yr(e).length, sh = (e) => {
  for (const t in e)
    return !1;
  return !0;
}, ue = (e, t) => {
  for (const n in e)
    if (!t(e[n], n))
      return !1;
  return !0;
}, Zi = (e, t) => Object.prototype.hasOwnProperty.call(e, t), rh = (e, t) => e === t || gn(e) === gn(t) && ue(e, (n, i) => (n !== void 0 || Zi(t, i)) && Wr(t[i], n)), oh = Object.freeze, Gr = (e) => {
  for (const t in e) {
    const n = e[t];
    (typeof n == "object" || typeof n == "function") && Gr(e[t]);
  }
  return oh(e);
}, Qi = (e, t, n = 0) => {
  try {
    for (; n < e.length; n++)
      e[n](...t);
  } finally {
    n < e.length && Qi(e, t, n + 1);
  }
}, cn = (e, t) => {
  if (e === t)
    return !0;
  if (e == null || t == null || e.constructor !== t.constructor && (e.constructor || Object) !== (t.constructor || Object))
    return !1;
  if (e[Ee] != null)
    return e[Ee](t);
  switch (e.constructor) {
    case ArrayBuffer:
      e = new Uint8Array(e), t = new Uint8Array(t);
    // eslint-disable-next-line no-fallthrough
    case Uint8Array: {
      if (e.byteLength !== t.byteLength)
        return !1;
      for (let n = 0; n < e.length; n++)
        if (e[n] !== t[n])
          return !1;
      break;
    }
    case Set: {
      if (e.size !== t.size)
        return !1;
      for (const n of e)
        if (!t.has(n))
          return !1;
      break;
    }
    case Map: {
      if (e.size !== t.size)
        return !1;
      for (const n of e.keys())
        if (!t.has(n) || !cn(e.get(n), t.get(n)))
          return !1;
      break;
    }
    case void 0:
    case Object:
      if (gn(e) !== gn(t))
        return !1;
      for (const n in e)
        if (!Zi(e, n) || !cn(e[n], t[n]))
          return !1;
      break;
    case Array:
      if (e.length !== t.length)
        return !1;
      for (let n = 0; n < e.length; n++)
        if (!cn(e[n], t[n]))
          return !1;
      break;
    default:
      return !1;
  }
  return !0;
}, lh = (e, t) => t.includes(e), ae = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", qr = typeof window < "u" && typeof document < "u" && !ae;
let St;
const ch = () => {
  if (St === void 0)
    if (ae) {
      St = wt();
      const e = process.argv;
      let t = null;
      for (let n = 0; n < e.length; n++) {
        const i = e[n];
        i[0] === "-" ? (t !== null && St.set(t, ""), t = i) : t !== null && (St.set(t, i), t = null);
      }
      t !== null && St.set(t, "");
    } else typeof location == "object" ? (St = wt(), (location.search || "?").slice(1).split("&").forEach((e) => {
      if (e.length !== 0) {
        const [t, n] = e.split("=");
        St.set(`--${Ns(t, "-")}`, n), St.set(`-${Ns(t, "-")}`, n);
      }
    })) : St = wt();
  return St;
}, Si = (e) => ch().has(e), mn = (e) => Hs(ae ? process.env[e.toUpperCase().replaceAll("-", "_")] : th.getItem(e)), Jr = (e) => Si("--" + e) || mn(e) !== null, ah = Jr("production"), hh = ae && lh(process.env.FORCE_COLOR, ["true", "1", "2"]), dh = hh || !Si("--no-colors") && // @todo deprecate --no-colors
!Jr("no-color") && (!ae || process.stdout.isTTY) && (!ae || Si("--color") || mn("COLORTERM") !== null || (mn("TERM") || "").includes("color")), uh = (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += Hr(e[n]);
  return btoa(t);
}, fh = (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), ph = qr ? uh : fh, gh = (e) => Ea((t) => ce(t, e));
class mh {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, n) {
    this.left = t, this.right = n;
  }
}
const Tt = (e, t) => new mh(e, t), zs = (e) => e.next() >= 0.5, ni = (e, t, n) => bt(e.next() * (n + 1 - t) + t), Xr = (e, t, n) => bt(e.next() * (n + 1 - t) + t), ts = (e, t, n) => Xr(e, t, n), wh = (e) => Hr(ts(e, 97, 122)), bh = (e, t = 0, n = 20) => {
  const i = ts(e, t, n);
  let s = "";
  for (let r = 0; r < i; r++)
    s += wh(e);
  return s;
}, ii = (e, t) => t[ts(e, 0, t.length - 1)], yh = Symbol("0schema");
class xh {
  constructor() {
    this._rerrs = [];
  }
  /**
   * @param {string?} path
   * @param {string} expected
   * @param {string} has
   * @param {string?} message
   */
  extend(t, n, i, s = null) {
    this._rerrs.push({ path: t, expected: n, has: i, message: s });
  }
  toString() {
    const t = [];
    for (let n = this._rerrs.length - 1; n > 0; n--) {
      const i = this._rerrs[n];
      t.push(_a(" ", (this._rerrs.length - n) * 2) + `${i.path != null ? `[${i.path}] ` : ""}${i.has} doesn't match ${i.expected}. ${i.message}`);
    }
    return t.join(`
`);
  }
}
const Ci = (e, t) => e === t ? !0 : e == null || t == null || e.constructor !== t.constructor ? !1 : e[Ee] ? Wr(e, t) : oe(e) ? ji(
  e,
  (n) => Wi(t, (i) => Ci(n, i))
) : eh(e) ? ue(
  e,
  (n, i) => Ci(n, t[i])
) : !1;
class tt {
  /**
   * @param {Schema<any>} other
   */
  extends(t) {
    let [n, i] = [
      /** @type {any} */
      this.shape,
      /** @type {any} */
      t.shape
    ];
    return (
      /** @type {typeof Schema<any>} */
      this.constructor._dilutes && ([i, n] = [n, i]), Ci(n, i)
    );
  }
  /**
   * Overwrite this when necessary. By default, we only check the `shape` property which every shape
   * should have.
   * @param {Schema<any>} other
   */
  equals(t) {
    return this.constructor === t.constructor && cn(this.shape, t.shape);
  }
  [yh]() {
    return !0;
  }
  /**
   * @param {object} other
   */
  [Ee](t) {
    return this.equals(
      /** @type {any} */
      t
    );
  }
  /**
   * Use `schema.validate(obj)` with a typed parameter that is already of typed to be an instance of
   * Schema. Validate will check the structure of the parameter and return true iff the instance
   * really is an instance of Schema.
   *
   * @param {T} o
   * @return {boolean}
   */
  validate(t) {
    return this.check(t);
  }
  /* c8 ignore start */
  /**
   * Similar to validate, but this method accepts untyped parameters.
   *
   * @param {any} _o
   * @param {ValidationError} [_err]
   * @return {_o is T}
   */
  check(t, n) {
    pt();
  }
  /* c8 ignore stop */
  /**
   * @type {Schema<T?>}
   */
  get nullable() {
    return fe(this, Bn);
  }
  /**
   * @type {$Optional<Schema<T>>}
   */
  get optional() {
    return new to(
      /** @type {Schema<T>} */
      this
    );
  }
  /**
   * Cast a variable to a specific type. Returns the casted value, or throws an exception otherwise.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check only if not in a production environment.
   *
   * @template OO
   * @param {OO} o
   * @return {Extract<OO, T> extends never ? T : (OO extends Array<never> ? T : Extract<OO,T>)}
   */
  cast(t) {
    return Fs(t, this), /** @type {any} */
    t;
  }
  /**
   * EXPECTO PATRONUM!! 🪄
   * This function protects against type errors. Though it may not work in the real world.
   *
   * "After all this time?"
   * "Always." - Snape, talking about type safety
   *
   * Ensures that a variable is a a specific type. Returns the value, or throws an exception if the assertion check failed.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * Can be useful when defining lambdas: `s.lambda(s.$number, s.$void).expect((n) => n + 1)`
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check if not in a production environment.
   *
   * @param {T} o
   * @return {o extends T ? T : never}
   */
  expect(t) {
    return Fs(t, this), t;
  }
}
// this.shape must not be defined on Schema. Otherwise typecheck on metatypes (e.g. $$object) won't work as expected anymore
/**
 * If true, the more things are added to the shape the more objects this schema will accept (e.g.
 * union). By default, the more objects are added, the the fewer objects this schema will accept.
 * @protected
 */
qe(tt, "_dilutes", !1);
class es extends tt {
  /**
   * @param {C} c
   * @param {((o:Instance<C>)=>boolean)|null} check
   */
  constructor(t, n) {
    super(), this.shape = t, this._c = n;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is C extends ((...args:any[]) => infer T) ? T : (C extends (new (...args:any[]) => any) ? InstanceType<C> : never)} o
   */
  check(t, n = void 0) {
    const i = (t == null ? void 0 : t.constructor) === this.shape && (this._c == null || this._c(t));
    return !i && (n == null || n.extend(null, this.shape.name, t == null ? void 0 : t.constructor.name, (t == null ? void 0 : t.constructor) !== this.shape ? "Constructor match failed" : "Check failed")), i;
  }
}
const z = (e, t = null) => new es(e, t);
z(es);
class ns extends tt {
  /**
   * @param {(o:any) => boolean} check
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is any}
   */
  check(t, n) {
    const i = this.shape(t);
    return !i && (n == null || n.extend(null, "custom prop", t == null ? void 0 : t.constructor.name, "failed to check custom prop")), i;
  }
}
const q = (e) => new ns(e);
z(ns);
class Nn extends tt {
  /**
   * @param {Array<T>} literals
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   *
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is T}
   */
  check(t, n) {
    const i = this.shape.some((s) => s === t);
    return !i && (n == null || n.extend(null, this.shape.join(" | "), t.toString())), i;
  }
}
const Un = (...e) => new Nn(e), Zr = z(Nn), vh = (
  /** @type {any} */
  RegExp.escape || /** @type {(str:string) => string} */
  ((e) => e.replace(/[().|&,$^[\]]/g, (t) => "\\" + t))
), Qr = (e) => {
  if (he.check(e))
    return [vh(e)];
  if (Zr.check(e))
    return (
      /** @type {Array<string|number>} */
      e.shape.map((t) => t + "")
    );
  if (ao.check(e))
    return ["[+-]?\\d+.?\\d*"];
  if (ho.check(e))
    return [".*"];
  if (bn.check(e))
    return e.shape.map(Qr).flat(1);
  it();
};
class Sh extends tt {
  /**
   * @param {T} shape
   */
  constructor(t) {
    super(), this.shape = t, this._r = new RegExp("^" + t.map(Qr).map((n) => `(${n.join("|")})`).join("") + "$");
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is CastStringTemplateArgsToTemplate<T>}
   */
  check(t, n) {
    const i = this._r.exec(t) != null;
    return !i && (n == null || n.extend(null, this._r.toString(), t.toString(), "String doesn't match string template.")), i;
  }
}
z(Sh);
const Ch = Symbol("optional");
class to extends tt {
  /**
   * @param {S} shape
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is (Unwrap<S>|undefined)}
   */
  check(t, n) {
    const i = t === void 0 || this.shape.check(t);
    return !i && (n == null || n.extend(null, "undefined (optional)", "()")), i;
  }
  get [Ch]() {
    return !0;
  }
}
const kh = z(to);
class _h extends tt {
  /**
   * @param {any} _o
   * @param {ValidationError} [err]
   * @return {_o is never}
   */
  check(t, n) {
    return n == null || n.extend(null, "never", typeof t), !1;
  }
}
z(_h);
const In = class In extends tt {
  /**
   * @param {S} shape
   * @param {boolean} partial
   */
  constructor(t, n = !1) {
    super(), this.shape = t, this._isPartial = n;
  }
  /**
   * @type {Schema<Partial<$ObjectToType<S>>>}
   */
  get partial() {
    return new In(this.shape, !0);
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is $ObjectToType<S>}
   */
  check(t, n) {
    return t == null ? (n == null || n.extend(null, "object", "null"), !1) : ue(this.shape, (i, s) => {
      const r = this._isPartial && !Zi(t, s) || i.check(t[s], n);
      return !r && (n == null || n.extend(s.toString(), i.toString(), typeof t[s], "Object property does not match")), r;
    });
  }
};
qe(In, "_dilutes", !0);
let wn = In;
const Eh = (e) => (
  /** @type {any} */
  new wn(e)
), Th = z(wn), Dh = q((e) => e != null && (e.constructor === Object || e.constructor == null));
class eo extends tt {
  /**
   * @param {Keys} keys
   * @param {Values} values
   */
  constructor(t, n) {
    super(), this.shape = {
      keys: t,
      values: n
    };
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [key in Unwrap<Keys>]: Unwrap<Values> }}
   */
  check(t, n) {
    return t != null && ue(t, (i, s) => {
      const r = this.shape.keys.check(s, n);
      return !r && (n == null || n.extend(s + "", "Record", typeof t, r ? "Key doesn't match schema" : "Value doesn't match value")), r && this.shape.values.check(i, n);
    });
  }
}
const no = (e, t) => new eo(e, t), Ah = z(eo);
class io extends tt {
  /**
   * @param {S} shape
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [K in keyof S]: S[K] extends Schema<infer Type> ? Type : never }}
   */
  check(t, n) {
    return t != null && ue(this.shape, (i, s) => {
      const r = (
        /** @type {Schema<any>} */
        i.check(t[s], n)
      );
      return !r && (n == null || n.extend(s.toString(), "Tuple", typeof i)), r;
    });
  }
}
const Ih = (...e) => new io(e);
z(io);
class so extends tt {
  /**
   * @param {Array<S>} v
   */
  constructor(t) {
    super(), this.shape = t.length === 1 ? t[0] : new Ln(t);
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Array<S extends Schema<infer T> ? T : never>} o
   */
  check(t, n) {
    const i = oe(t) && ji(t, (s) => this.shape.check(s));
    return !i && (n == null || n.extend(null, "Array", "")), i;
  }
}
const ro = (...e) => new so(e), Oh = z(so), Mh = q((e) => oe(e));
class oo extends tt {
  /**
   * @param {new (...args:any) => T} constructor
   * @param {((o:T) => boolean)|null} check
   */
  constructor(t, n) {
    super(), this.shape = t, this._c = n;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is T}
   */
  check(t, n) {
    const i = t instanceof this.shape && (this._c == null || this._c(t));
    return !i && (n == null || n.extend(null, this.shape.name, t == null ? void 0 : t.constructor.name)), i;
  }
}
const Rh = (e, t = null) => new oo(e, t);
z(oo);
const Nh = Rh(tt);
class Uh extends tt {
  /**
   * @param {Args} args
   */
  constructor(t) {
    super(), this.len = t.length - 1, this.args = Ih(...t.slice(-1)), this.res = t[this.len];
  }
  /**
   * @param {any} f
   * @param {ValidationError} err
   * @return {f is _LArgsToLambdaDef<Args>}
   */
  check(t, n) {
    const i = t.constructor === Function && t.length <= this.len;
    return !i && (n == null || n.extend(null, "function", typeof t)), i;
  }
}
const Lh = z(Uh), Ph = q((e) => typeof e == "function");
class Bh extends tt {
  /**
   * @param {T} v
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Intersect<UnwrapArray<T>>}
   */
  check(t, n) {
    const i = ji(this.shape, (s) => s.check(t, n));
    return !i && (n == null || n.extend(null, "Intersectinon", typeof t)), i;
  }
}
z(Bh, (e) => e.shape.length > 0);
class Ln extends tt {
  /**
   * @param {Array<Schema<S>>} v
   */
  constructor(t) {
    super(), this.shape = t;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is S}
   */
  check(t, n) {
    const i = Wi(this.shape, (s) => s.check(t, n));
    return n == null || n.extend(null, "Union", typeof t), i;
  }
}
qe(Ln, "_dilutes", !0);
const fe = (...e) => e.findIndex((t) => bn.check(t)) >= 0 ? fe(...e.map((t) => Te(t)).map((t) => bn.check(t) ? t.shape : [t]).flat(1)) : e.length === 1 ? e[0] : new Ln(e), bn = (
  /** @type {Schema<$Union<any>>} */
  z(Ln)
), lo = () => !0, yn = q(lo), $h = (
  /** @type {Schema<Schema<any>>} */
  z(ns, (e) => e.shape === lo)
), is = q((e) => typeof e == "bigint"), Vh = (
  /** @type {Schema<Schema<BigInt>>} */
  q((e) => e === is)
), co = q((e) => typeof e == "symbol");
q((e) => e === co);
const ne = q((e) => typeof e == "number"), ao = (
  /** @type {Schema<Schema<number>>} */
  q((e) => e === ne)
), he = q((e) => typeof e == "string"), ho = (
  /** @type {Schema<Schema<string>>} */
  q((e) => e === he)
), Pn = q((e) => typeof e == "boolean"), Hh = (
  /** @type {Schema<Schema<Boolean>>} */
  q((e) => e === Pn)
), uo = Un(void 0);
z(Nn, (e) => e.shape.length === 1 && e.shape[0] === void 0);
Un(void 0);
const Bn = Un(null), zh = (
  /** @type {Schema<Schema<null>>} */
  z(Nn, (e) => e.shape.length === 1 && e.shape[0] === null)
);
z(Uint8Array);
z(es, (e) => e.shape === Uint8Array);
const Fh = fe(ne, he, Bn, uo, is, Pn, co);
(() => {
  const e = (
    /** @type {$Array<$any>} */
    ro(yn)
  ), t = (
    /** @type {$Record<$string,$any>} */
    no(he, yn)
  ), n = fe(ne, he, Bn, Pn, e, t);
  return e.shape = n, t.shape.values = n, n;
})();
const Te = (e) => {
  if (Nh.check(e))
    return (
      /** @type {any} */
      e
    );
  if (Dh.check(e)) {
    const t = {};
    for (const n in e)
      t[n] = Te(e[n]);
    return (
      /** @type {any} */
      Eh(t)
    );
  } else {
    if (Mh.check(e))
      return (
        /** @type {any} */
        fe(...e.map(Te))
      );
    if (Fh.check(e))
      return (
        /** @type {any} */
        Un(e)
      );
    if (Ph.check(e))
      return (
        /** @type {any} */
        z(
          /** @type {any} */
          e
        )
      );
  }
  it();
}, Fs = ah ? () => {
} : (e, t) => {
  const n = new xh();
  if (!t.check(e, n))
    throw _t(`Expected value to be of type ${t.constructor.name}.
${n.toString()}`);
};
class Kh {
  /**
   * @param {Schema<State>} [$state]
   */
  constructor(t) {
    this.patterns = [], this.$state = t;
  }
  /**
   * @template P
   * @template R
   * @param {P} pattern
   * @param {(o:NoInfer<Unwrap<ReadSchema<P>>>,s:State)=>R} handler
   * @return {PatternMatcher<State,Patterns|Pattern<Unwrap<ReadSchema<P>>,R>>}
   */
  if(t, n) {
    return this.patterns.push({ if: Te(t), h: n }), this;
  }
  /**
   * @template R
   * @param {(o:any,s:State)=>R} h
   */
  else(t) {
    return this.if(yn, t);
  }
  /**
   * @return {State extends undefined
   *   ? <In extends Unwrap<Patterns['if']>>(o:In,state?:undefined)=>PatternMatchResult<Patterns,In>
   *   : <In extends Unwrap<Patterns['if']>>(o:In,state:State)=>PatternMatchResult<Patterns,In>}
   */
  done() {
    return (
      /** @type {any} */
      (t, n) => {
        for (let i = 0; i < this.patterns.length; i++) {
          const s = this.patterns[i];
          if (s.if.check(t))
            return s.h(t, n);
        }
        throw _t("Unhandled pattern");
      }
    );
  }
}
const jh = (e) => new Kh(
  /** @type {any} */
  e
), fo = (
  /** @type {any} */
  jh(
    /** @type {Schema<prng.PRNG>} */
    yn
  ).if(ao, (e, t) => ni(t, Rs, fn)).if(ho, (e, t) => bh(t)).if(Hh, (e, t) => zs(t)).if(Vh, (e, t) => BigInt(ni(t, Rs, fn))).if(bn, (e, t) => Qt(t, ii(t, e.shape))).if(Th, (e, t) => {
    const n = {};
    for (const i in e.shape) {
      let s = e.shape[i];
      if (kh.check(s)) {
        if (zs(t))
          continue;
        s = s.shape;
      }
      n[i] = fo(s, t);
    }
    return n;
  }).if(Oh, (e, t) => {
    const n = [], i = Xr(t, 0, 42);
    for (let s = 0; s < i; s++)
      n.push(Qt(t, e.shape));
    return n;
  }).if(Zr, (e, t) => ii(t, e.shape)).if(zh, (e, t) => null).if(Lh, (e, t) => {
    const n = Qt(t, e.res);
    return () => n;
  }).if($h, (e, t) => Qt(t, ii(t, [
    ne,
    he,
    Bn,
    uo,
    is,
    Pn,
    ro(ne),
    no(fe("a", "b", "c"), ne)
  ]))).if(Ah, (e, t) => {
    const n = {}, i = ni(t, 0, 3);
    for (let s = 0; s < i; s++) {
      const r = Qt(t, e.shape.keys), o = Qt(t, e.shape.values);
      n[r] = o;
    }
    return n;
  }).done()
), Qt = (e, t) => (
  /** @type {any} */
  fo(Te(t), e)
), je = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
q((e) => e.nodeType === Jh);
typeof DOMParser < "u" && new DOMParser();
q((e) => e.nodeType === Yh);
q((e) => e.nodeType === Gh);
const Wh = (e) => da(e, (t, n) => `${n}:${t};`).join(""), Yh = je.ELEMENT_NODE, Gh = je.TEXT_NODE, qh = je.DOCUMENT_NODE, Jh = je.DOCUMENT_FRAGMENT_NODE;
q((e) => e.nodeType === qh);
const Xh = (e) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    e(this._);
  }
}, Zh = Xh(clearTimeout), po = (e, t) => new Zh(setTimeout(t, e)), Ot = Symbol, go = Ot(), mo = Ot(), Qh = Ot(), td = Ot(), ed = Ot(), wo = Ot(), nd = Ot(), ss = Ot(), id = Ot(), sd = (e) => {
  var s;
  e.length === 1 && ((s = e[0]) == null ? void 0 : s.constructor) === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [];
  let i = 0;
  for (; i < e.length; i++) {
    const r = e[i];
    if (r === void 0)
      break;
    if (r.constructor === String || r.constructor === Number)
      t.push(r);
    else if (r.constructor === Object)
      break;
  }
  for (i > 0 && n.push(t.join("")); i < e.length; i++) {
    const r = e[i];
    r instanceof Symbol || n.push(r);
  }
  return n;
}, rd = {
  [go]: Tt("font-weight", "bold"),
  [mo]: Tt("font-weight", "normal"),
  [Qh]: Tt("color", "blue"),
  [ed]: Tt("color", "green"),
  [td]: Tt("color", "grey"),
  [wo]: Tt("color", "red"),
  [nd]: Tt("color", "purple"),
  [ss]: Tt("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [id]: Tt("color", "black")
}, od = (e) => {
  var o;
  e.length === 1 && ((o = e[0]) == null ? void 0 : o.constructor) === Function && (e = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  e[0]());
  const t = [], n = [], i = wt();
  let s = [], r = 0;
  for (; r < e.length; r++) {
    const l = e[r], c = rd[l];
    if (c !== void 0)
      i.set(c.left, c.right);
    else {
      if (l === void 0)
        break;
      if (l.constructor === String || l.constructor === Number) {
        const a = Wh(i);
        r > 0 || a.length > 0 ? (t.push("%c" + l), n.push(a)) : t.push(l);
      } else
        break;
    }
  }
  for (r > 0 && (s = n, s.unshift(t.join(""))); r < e.length; r++) {
    const l = e[r];
    l instanceof Symbol || s.push(l);
  }
  return s;
}, bo = dh ? od : sd, ld = (...e) => {
  console.log(...bo(e)), xo.forEach((t) => t.print(e));
}, yo = (...e) => {
  console.warn(...bo(e)), e.unshift(ss), xo.forEach((t) => t.print(e));
}, xo = Ft(), vo = (e) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: e
}), cd = (e, t) => vo(() => {
  let n;
  do
    n = e.next();
  while (!n.done && !t(n.value));
  return n;
}), si = (e, t) => vo(() => {
  const { done: n, value: i } = e.next();
  return { done: n, value: n ? void 0 : t(i) };
});
class $n {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(t, n) {
    this.clock = t, this.len = n;
  }
}
class pe {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Bt = (e, t, n) => t.clients.forEach((i, s) => {
  const r = (
    /** @type {Array<GC|Item>} */
    e.doc.store.clients.get(s)
  );
  if (r != null) {
    const o = r[r.length - 1], l = o.id.clock + o.length;
    for (let c = 0, a = i[c]; c < i.length && a.clock < l; a = i[++c])
      Ao(e, r, a.clock, a.len, n);
  }
}), ad = (e, t) => {
  let n = 0, i = e.length - 1;
  for (; n <= i; ) {
    const s = bt((n + i) / 2), r = e[s], o = r.clock;
    if (o <= t) {
      if (t < o + r.len)
        return s;
      n = s + 1;
    } else
      i = s - 1;
  }
  return null;
}, ge = (e, t) => {
  const n = e.clients.get(t.client);
  return n !== void 0 && ad(n, t.clock) !== null;
}, rs = (e) => {
  e.clients.forEach((t) => {
    t.sort((s, r) => s.clock - r.clock);
    let n, i;
    for (n = 1, i = 1; n < t.length; n++) {
      const s = t[i - 1], r = t[n];
      s.clock + s.len >= r.clock ? t[i - 1] = new $n(s.clock, Pt(s.len, r.clock + r.len - s.clock)) : (i < n && (t[i] = r), i++);
    }
    t.length = i;
  });
}, ki = (e) => {
  const t = new pe();
  for (let n = 0; n < e.length; n++)
    e[n].clients.forEach((i, s) => {
      if (!t.clients.has(s)) {
        const r = i.slice();
        for (let o = n + 1; o < e.length; o++)
          fa(r, e[o].clients.get(s) || []);
        t.clients.set(s, r);
      }
    });
  return rs(t), t;
}, De = (e, t, n, i) => {
  It(e.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new $n(n, i));
}, So = () => new pe(), hd = (e) => {
  const t = So();
  return e.clients.forEach((n, i) => {
    const s = [];
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      if (o.deleted) {
        const l = o.id.clock;
        let c = o.length;
        if (r + 1 < n.length)
          for (let a = n[r + 1]; r + 1 < n.length && a.deleted; a = n[++r + 1])
            c += a.length;
        s.push(new $n(l, c));
      }
    }
    s.length > 0 && t.clients.set(i, s);
  }), t;
}, os = (e, t) => {
  A(e.restEncoder, t.clients.size), Kt(t.clients.entries()).sort((n, i) => i[0] - n[0]).forEach(([n, i]) => {
    e.resetDsCurVal(), A(e.restEncoder, n);
    const s = i.length;
    A(e.restEncoder, s);
    for (let r = 0; r < s; r++) {
      const o = i[r];
      e.writeDsClock(o.clock), e.writeDsLen(o.len);
    }
  });
}, dd = (e) => {
  const t = new pe(), n = L(e.restDecoder);
  for (let i = 0; i < n; i++) {
    e.resetDsCurVal();
    const s = L(e.restDecoder), r = L(e.restDecoder);
    if (r > 0) {
      const o = It(t.clients, s, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let l = 0; l < r; l++)
        o.push(new $n(e.readDsClock(), e.readDsLen()));
    }
  }
  return t;
}, Ks = (e, t, n) => {
  const i = new pe(), s = L(e.restDecoder);
  for (let r = 0; r < s; r++) {
    e.resetDsCurVal();
    const o = L(e.restDecoder), l = L(e.restDecoder), c = n.clients.get(o) || [], a = V(n, o);
    for (let d = 0; d < l; d++) {
      const h = e.readDsClock(), u = h + e.readDsLen();
      if (h < a) {
        a < u && De(i, o, a, u - a);
        let f = yt(c, h), g = c[f];
        for (!g.deleted && g.id.clock < h && (c.splice(f + 1, 0, En(t, g, h - g.id.clock)), f++); f < c.length && (g = c[f++], g.id.clock < u); )
          g.deleted || (u < g.id.clock + g.length && c.splice(f, 0, En(t, g, u - g.id.clock)), g.delete(t));
      } else
        De(i, o, h, u - h);
    }
  }
  if (i.clients.size > 0) {
    const r = new Vn();
    return A(r.restEncoder, 0), os(r, i), r.toUint8Array();
  }
  return null;
}, Co = Kr;
class Jt extends $r {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = Ja(), collectionid: n = null, gc: i = !0, gcFilter: s = () => !0, meta: r = null, autoLoad: o = !1, shouldLoad: l = !0 } = {}) {
    super(), this.gc = i, this.gcFilter = s, this.clientID = Co(), this.guid = t, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new To(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = l, this.autoLoad = o, this.meta = r, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Vs((a) => {
      this.on("load", () => {
        this.isLoaded = !0, a(this);
      });
    });
    const c = () => Vs((a) => {
      const d = (h) => {
        (h === void 0 || h === !0) && (this.off("sync", d), a());
      };
      this.on("sync", d);
    });
    this.on("sync", (a) => {
      a === !1 && this.isSynced && (this.whenSynced = c()), this.isSynced = a === void 0 || a === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = c();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const t = this._item;
    t !== null && !this.shouldLoad && N(
      /** @type {any} */
      t.parent.doc,
      (n) => {
        n.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(Kt(this.subdocs).map((t) => t.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(t, n = null) {
    return N(this, t, n);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(t, n = (
    /** @type {any} */
    G
  )) {
    const i = It(this.share, t, () => {
      const r = new n();
      return r._integrate(this, null), r;
    }), s = i.constructor;
    if (n !== G && s !== n)
      if (s === G) {
        const r = new n();
        r._map = i._map, i._map.forEach(
          /** @param {Item?} n */
          (o) => {
            for (; o !== null; o = o.left)
              o.parent = r;
          }
        ), r._start = i._start;
        for (let o = r._start; o !== null; o = o.right)
          o.parent = r;
        return r._length = i._length, this.share.set(t, r), r._integrate(this, null), /** @type {InstanceType<Type>} */
        r;
      } else
        throw new Error(`Type with the name ${t} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      i
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(t = "") {
    return (
      /** @type {YArray<T>} */
      this.get(t, re)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(t = "") {
    return this.get(t, $t);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(t = "") {
    return (
      /** @type {YMap<T>} */
      this.get(t, de)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(t = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(t, et)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(t = "") {
    return this.get(t, jt);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const t = {};
    return this.share.forEach((n, i) => {
      t[i] = n.toJSON();
    }), t;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = !0, Kt(this.subdocs).forEach((n) => n.destroy());
    const t = this._item;
    if (t !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        t.content
      );
      n.doc = new Jt({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = t, N(
        /** @type {any} */
        t.parent.doc,
        (i) => {
          const s = n.doc;
          t.deleted || i.subdocsAdded.add(s), i.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class ud {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    this.dsCurrVal = 0, this.restDecoder = t;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += L(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const t = L(this.restDecoder) + 1;
    return this.dsCurrVal += t, t;
  }
}
class xn extends ud {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], L(t), this.keyClockDecoder = new ei(ut(t)), this.clientDecoder = new ln(ut(t)), this.leftClockDecoder = new ei(ut(t)), this.rightClockDecoder = new ei(ut(t)), this.infoDecoder = new $s(ut(t), _e), this.stringDecoder = new ja(ut(t)), this.parentInfoDecoder = new $s(ut(t), _e), this.typeRefDecoder = new ln(ut(t)), this.lenDecoder = new ln(ut(t));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ie(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ie(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return pn(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return ut(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return pn(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const t = this.keyClockDecoder.read();
    if (t < this.keys.length)
      return this.keys[t];
    {
      const n = this.stringDecoder.read();
      return this.keys.push(n), n;
    }
  }
}
class fd {
  constructor() {
    this.restEncoder = Ke();
  }
  toUint8Array() {
    return mt(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    A(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    A(this.restEncoder, t);
  }
}
class pd extends fd {
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    A(this.restEncoder, t.client), A(this.restEncoder, t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    A(this.restEncoder, t.client), A(this.restEncoder, t.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(t) {
    A(this.restEncoder, t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    yi(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    ee(this.restEncoder, t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    A(this.restEncoder, t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    A(this.restEncoder, t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    A(this.restEncoder, t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    ce(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    lt(this.restEncoder, t);
  }
  /**
   * @param {any} embed
   */
  writeJSON(t) {
    ee(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    ee(this.restEncoder, t);
  }
}
class gd {
  constructor() {
    this.restEncoder = Ke(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return mt(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    const n = t - this.dsCurrVal;
    this.dsCurrVal = t, A(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    t === 0 && it(), A(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Vn extends gd {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new ti(), this.clientEncoder = new on(), this.leftClockEncoder = new ti(), this.rightClockEncoder = new ti(), this.infoEncoder = new Ls(yi), this.stringEncoder = new La(), this.parentInfoEncoder = new Ls(yi), this.typeRefEncoder = new on(), this.lenEncoder = new on();
  }
  toUint8Array() {
    const t = Ke();
    return A(t, 0), lt(t, this.keyClockEncoder.toUint8Array()), lt(t, this.clientEncoder.toUint8Array()), lt(t, this.leftClockEncoder.toUint8Array()), lt(t, this.rightClockEncoder.toUint8Array()), lt(t, mt(this.infoEncoder)), lt(t, this.stringEncoder.toUint8Array()), lt(t, mt(this.parentInfoEncoder)), lt(t, this.typeRefEncoder.toUint8Array()), lt(t, this.lenEncoder.toUint8Array()), Mn(t, mt(this.restEncoder)), mt(t);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(t) {
    this.clientEncoder.write(t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    this.infoEncoder.write(t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    this.stringEncoder.write(t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    this.parentInfoEncoder.write(t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    this.typeRefEncoder.write(t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    this.lenEncoder.write(t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    ce(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    lt(this.restEncoder, t);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(t) {
    ce(this.restEncoder, t);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(t) {
    const n = this.keyMap.get(t);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(n);
  }
}
const md = (e, t, n, i) => {
  i = Pt(i, t[0].id.clock);
  const s = yt(t, i);
  A(e.restEncoder, t.length - s), e.writeClient(n), A(e.restEncoder, i);
  const r = t[s];
  r.write(e, i - r.id.clock);
  for (let o = s + 1; o < t.length; o++)
    t[o].write(e, 0);
}, ko = (e, t, n) => {
  const i = /* @__PURE__ */ new Map();
  n.forEach((s, r) => {
    V(t, r) > s && i.set(r, s);
  }), Hn(t).forEach((s, r) => {
    n.has(r) || i.set(r, 0);
  }), A(e.restEncoder, i.size), Kt(i.entries()).sort((s, r) => r[0] - s[0]).forEach(([s, r]) => {
    md(
      e,
      /** @type {Array<GC|Item>} */
      t.clients.get(s),
      s,
      r
    );
  });
}, wd = (e, t) => {
  const n = wt(), i = L(e.restDecoder);
  for (let s = 0; s < i; s++) {
    const r = L(e.restDecoder), o = new Array(r), l = e.readClient();
    let c = L(e.restDecoder);
    n.set(l, { i: 0, refs: o });
    for (let a = 0; a < r; a++) {
      const d = e.readInfo();
      switch (On & d) {
        case 0: {
          const h = e.readLen();
          o[a] = new ft(E(l, c), h), c += h;
          break;
        }
        case 10: {
          const h = L(e.restDecoder);
          o[a] = new gt(E(l, c), h), c += h;
          break;
        }
        default: {
          const h = (d & (Dt | nt)) === 0, u = new R(
            E(l, c),
            null,
            // left
            (d & nt) === nt ? e.readLeftID() : null,
            // origin
            null,
            // right
            (d & Dt) === Dt ? e.readRightID() : null,
            // right origin
            h ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null,
            // parent
            h && (d & Ce) === Ce ? e.readString() : null,
            // parentSub
            Xo(e, d)
            // item content
          );
          o[a] = u, c += u.length;
        }
      }
    }
  }
  return n;
}, bd = (e, t, n) => {
  const i = [];
  let s = Kt(n.keys()).sort((f, g) => f - g);
  if (s.length === 0)
    return null;
  const r = () => {
    if (s.length === 0)
      return null;
    let f = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      n.get(s[s.length - 1])
    );
    for (; f.refs.length === f.i; )
      if (s.pop(), s.length > 0)
        f = /** @type {{i:number,refs:Array<GC|Item>}} */
        n.get(s[s.length - 1]);
      else
        return null;
    return f;
  };
  let o = r();
  if (o === null)
    return null;
  const l = new To(), c = /* @__PURE__ */ new Map(), a = (f, g) => {
    const m = c.get(f);
    (m == null || m > g) && c.set(f, g);
  };
  let d = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const h = /* @__PURE__ */ new Map(), u = () => {
    for (const f of i) {
      const g = f.id.client, m = n.get(g);
      m ? (m.i--, l.clients.set(g, m.refs.slice(m.i)), n.delete(g), m.i = 0, m.refs = []) : l.clients.set(g, [f]), s = s.filter((w) => w !== g);
    }
    i.length = 0;
  };
  for (; ; ) {
    if (d.constructor !== gt) {
      const g = It(h, d.id.client, () => V(t, d.id.client)) - d.id.clock;
      if (g < 0)
        i.push(d), a(d.id.client, d.id.clock - 1), u();
      else {
        const m = d.getMissing(e, t);
        if (m !== null) {
          i.push(d);
          const w = n.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (w.refs.length === w.i)
            a(
              /** @type {number} */
              m,
              V(t, m)
            ), u();
          else {
            d = w.refs[w.i++];
            continue;
          }
        } else (g === 0 || g < d.length) && (d.integrate(e, g), h.set(d.id.client, d.id.clock + d.length));
      }
    }
    if (i.length > 0)
      d = /** @type {GC|Item} */
      i.pop();
    else if (o !== null && o.i < o.refs.length)
      d = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = r(), o === null)
        break;
      d = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (l.clients.size > 0) {
    const f = new Vn();
    return ko(f, l, /* @__PURE__ */ new Map()), A(f.restEncoder, 0), { missing: c, update: f.toUint8Array() };
  }
  return null;
}, yd = (e, t) => ko(e, t.doc.store, t.beforeState), xd = (e, t, n, i = new xn(e)) => N(t, (s) => {
  s.local = !1;
  let r = !1;
  const o = s.doc, l = o.store, c = wd(i, o), a = bd(s, l, c), d = l.pendingStructs;
  if (d) {
    for (const [u, f] of d.missing)
      if (f < V(l, u)) {
        r = !0;
        break;
      }
    if (a) {
      for (const [u, f] of a.missing) {
        const g = d.missing.get(u);
        (g == null || g > f) && d.missing.set(u, f);
      }
      d.update = Qs([d.update, a.update]);
    }
  } else
    l.pendingStructs = a;
  const h = Ks(i, s, l);
  if (l.pendingDs) {
    const u = new xn(qi(l.pendingDs));
    L(u.restDecoder);
    const f = Ks(u, s, l);
    h && f ? l.pendingDs = Qs([h, f]) : l.pendingDs = h || f;
  } else
    l.pendingDs = h;
  if (r) {
    const u = (
      /** @type {{update: Uint8Array}} */
      l.pendingStructs.update
    );
    l.pendingStructs = null, _i(s.doc, u);
  }
}, n, !1), _i = (e, t, n, i = xn) => {
  const s = qi(t);
  xd(s, e, n, new i(s));
};
class vd {
  constructor() {
    this.l = [];
  }
}
const js = () => new vd(), Ws = (e, t) => e.l.push(t), Ys = (e, t) => {
  const n = e.l, i = n.length;
  e.l = n.filter((s) => t !== s), i === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, _o = (e, t, n) => Qi(e.l, [t, n]);
class ie {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, n) {
    this.client = t, this.clock = n;
  }
}
const Qe = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, E = (e, t) => new ie(e, t), Ae = (e) => {
  for (const [t, n] of e.doc.share.entries())
    if (n === e)
      return t;
  throw it();
}, Ie = (e, t) => {
  for (; t !== null; ) {
    if (t.parent === e)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
};
class vn {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(t, n, i, s = 0) {
    this.type = t, this.tname = n, this.item = i, this.assoc = s;
  }
}
class Sd {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, n, i = 0) {
    this.type = t, this.index = n, this.assoc = i;
  }
}
const Cd = (e, t, n = 0) => new Sd(e, t, n), tn = (e, t, n) => {
  let i = null, s = null;
  return e._item === null ? s = Ae(e) : i = E(e._item.id.client, e._item.id.clock), new vn(i, s, t, n);
}, ri = (e, t, n = 0) => {
  let i = e._start;
  if (n < 0) {
    if (t === 0)
      return tn(e, null, n);
    t--;
  }
  for (; i !== null; ) {
    if (!i.deleted && i.countable) {
      if (i.length > t)
        return tn(e, E(i.id.client, i.id.clock + t), n);
      t -= i.length;
    }
    if (i.right === null && n < 0)
      return tn(e, i.lastId, n);
    i = i.right;
  }
  return tn(e, null, n);
}, kd = (e, t) => {
  const n = se(e, t), i = t.clock - n.id.clock;
  return {
    item: n,
    diff: i
  };
}, _d = (e, t, n = !0) => {
  const i = t.store, s = e.item, r = e.type, o = e.tname, l = e.assoc;
  let c = null, a = 0;
  if (s !== null) {
    if (V(i, s.client) <= s.clock)
      return null;
    const d = n ? Ai(i, s) : kd(i, s), h = d.item;
    if (!(h instanceof R))
      return null;
    if (c = /** @type {AbstractType<any>} */
    h.parent, c._item === null || !c._item.deleted) {
      a = h.deleted || !h.countable ? 0 : d.diff + (l >= 0 ? 0 : 1);
      let u = h.left;
      for (; u !== null; )
        !u.deleted && u.countable && (a += u.length), u = u.left;
    }
  } else {
    if (o !== null)
      c = t.get(o);
    else if (r !== null) {
      if (V(i, r.client) <= r.clock)
        return null;
      const { item: d } = n ? Ai(i, r) : { item: se(i, r) };
      if (d instanceof R && d.content instanceof vt)
        c = d.content.type;
      else
        return null;
    } else
      throw it();
    l >= 0 ? a = c._length : a = 0;
  }
  return Cd(c, a, e.assoc);
};
class ls {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, n) {
    this.ds = t, this.sv = n;
  }
}
const Eo = (e, t) => new ls(e, t), oi = (e) => Eo(hd(e.store), Hn(e.store)), Ht = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !ge(t.ds, e.id), Ei = (e, t) => {
  const n = It(e.meta, Ei, Ft), i = e.doc.store;
  n.has(t) || (t.sv.forEach((s, r) => {
    s < V(i, r) && ot(e, E(r, s));
  }), Bt(e, t.ds, (s) => {
  }), n.add(t));
};
class To {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Hn = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.clients.forEach((n, i) => {
    const s = n[n.length - 1];
    t.set(i, s.id.clock + s.length);
  }), t;
}, V = (e, t) => {
  const n = e.clients.get(t);
  if (n === void 0)
    return 0;
  const i = n[n.length - 1];
  return i.id.clock + i.length;
}, Do = (e, t) => {
  let n = e.clients.get(t.id.client);
  if (n === void 0)
    n = [], e.clients.set(t.id.client, n);
  else {
    const i = n[n.length - 1];
    if (i.id.clock + i.length !== t.id.clock)
      throw it();
  }
  n.push(t);
}, yt = (e, t) => {
  let n = 0, i = e.length - 1, s = e[i], r = s.id.clock;
  if (r === t)
    return i;
  let o = bt(t / (r + s.length - 1) * i);
  for (; n <= i; ) {
    if (s = e[o], r = s.id.clock, r <= t) {
      if (t < r + s.length)
        return o;
      n = o + 1;
    } else
      i = o - 1;
    o = bt((n + i) / 2);
  }
  throw it();
}, Ed = (e, t) => {
  const n = e.clients.get(t.client);
  return n[yt(n, t.clock)];
}, se = (
  /** @type {function(StructStore,ID):Item} */
  Ed
), Ti = (e, t, n) => {
  const i = yt(t, n), s = t[i];
  return s.id.clock < n && s instanceof R ? (t.splice(i + 1, 0, En(e, s, n - s.id.clock)), i + 1) : i;
}, ot = (e, t) => {
  const n = (
    /** @type {Array<Item>} */
    e.doc.store.clients.get(t.client)
  );
  return n[Ti(e, n, t.clock)];
}, Gs = (e, t, n) => {
  const i = t.clients.get(n.client), s = yt(i, n.clock), r = i[s];
  return n.clock !== r.id.clock + r.length - 1 && r.constructor !== ft && i.splice(s + 1, 0, En(e, r, n.clock - r.id.clock + 1)), r;
}, Td = (e, t, n) => {
  const i = (
    /** @type {Array<GC|Item>} */
    e.clients.get(t.id.client)
  );
  i[yt(i, t.id.clock)] = n;
}, Ao = (e, t, n, i, s) => {
  if (i === 0)
    return;
  const r = n + i;
  let o = Ti(e, t, n), l;
  do
    l = t[o++], r < l.id.clock + l.length && Ti(e, t, r), s(l);
  while (o < t.length && t[o].id.clock < r);
};
class Dd {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, n, i) {
    this.doc = t, this.deleteSet = new pe(), this.beforeState = Hn(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = i, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const qs = (e, t) => t.deleteSet.clients.size === 0 && !ua(t.afterState, (n, i) => t.beforeState.get(i) !== n) ? !1 : (rs(t.deleteSet), yd(e, t), os(e, t.deleteSet), !0), Js = (e, t, n) => {
  const i = t._item;
  (i === null || i.id.clock < (e.beforeState.get(i.id.client) || 0) && !i.deleted) && It(e.changed, t, Ft).add(n);
}, an = (e, t) => {
  let n = e[t], i = e[t - 1], s = t;
  for (; s > 0; n = i, i = e[--s - 1]) {
    if (i.deleted === n.deleted && i.constructor === n.constructor && i.mergeWith(n)) {
      n instanceof R && n.parentSub !== null && /** @type {AbstractType<any>} */
      n.parent._map.get(n.parentSub) === n && n.parent._map.set(
        n.parentSub,
        /** @type {Item} */
        i
      );
      continue;
    }
    break;
  }
  const r = t - s;
  return r && e.splice(t + 1 - r, r), r;
}, Ad = (e, t, n) => {
  for (const [i, s] of e.clients.entries()) {
    const r = (
      /** @type {Array<GC|Item>} */
      t.clients.get(i)
    );
    for (let o = s.length - 1; o >= 0; o--) {
      const l = s[o], c = l.clock + l.len;
      for (let a = yt(r, l.clock), d = r[a]; a < r.length && d.id.clock < c; d = r[++a]) {
        const h = r[a];
        if (l.clock + l.len <= h.id.clock)
          break;
        h instanceof R && h.deleted && !h.keep && n(h) && h.gc(t, !1);
      }
    }
  }
}, Id = (e, t) => {
  e.clients.forEach((n, i) => {
    const s = (
      /** @type {Array<GC|Item>} */
      t.clients.get(i)
    );
    for (let r = n.length - 1; r >= 0; r--) {
      const o = n[r], l = le(s.length - 1, 1 + yt(s, o.clock + o.len - 1));
      for (let c = l, a = s[c]; c > 0 && a.id.clock >= o.clock; a = s[c])
        c -= 1 + an(s, c);
    }
  });
}, Io = (e, t) => {
  if (t < e.length) {
    const n = e[t], i = n.doc, s = i.store, r = n.deleteSet, o = n._mergeStructs;
    try {
      rs(r), n.afterState = Hn(n.doc.store), i.emit("beforeObserverCalls", [n, i]);
      const l = [];
      n.changed.forEach(
        (c, a) => l.push(() => {
          (a._item === null || !a._item.deleted) && a._callObserver(n, c);
        })
      ), l.push(() => {
        n.changedParentTypes.forEach((c, a) => {
          a._dEH.l.length > 0 && (a._item === null || !a._item.deleted) && (c = c.filter(
            (d) => d.target._item === null || !d.target._item.deleted
          ), c.forEach((d) => {
            d.currentTarget = a, d._path = null;
          }), c.sort((d, h) => d.path.length - h.path.length), l.push(() => {
            _o(a._dEH, c, n);
          }));
        }), l.push(() => i.emit("afterTransaction", [n, i])), l.push(() => {
          n._needFormattingCleanup && Jd(n);
        });
      }), Qi(l, []);
    } finally {
      i.gc && Ad(r, s, i.gcFilter), Id(r, s), n.afterState.forEach((d, h) => {
        const u = n.beforeState.get(h) || 0;
        if (u !== d) {
          const f = (
            /** @type {Array<GC|Item>} */
            s.clients.get(h)
          ), g = Pt(yt(f, u), 1);
          for (let m = f.length - 1; m >= g; )
            m -= 1 + an(f, m);
        }
      });
      for (let d = o.length - 1; d >= 0; d--) {
        const { client: h, clock: u } = o[d].id, f = (
          /** @type {Array<GC|Item>} */
          s.clients.get(h)
        ), g = yt(f, u);
        g + 1 < f.length && an(f, g + 1) > 1 || g > 0 && an(f, g);
      }
      if (!n.local && n.afterState.get(i.clientID) !== n.beforeState.get(i.clientID) && (ld(ss, go, "[yjs] ", mo, wo, "Changed the client-id because another client seems to be using it."), i.clientID = Co()), i.emit("afterTransactionCleanup", [n, i]), i._observers.has("update")) {
        const d = new pd();
        qs(d, n) && i.emit("update", [d.toUint8Array(), n.origin, i, n]);
      }
      if (i._observers.has("updateV2")) {
        const d = new Vn();
        qs(d, n) && i.emit("updateV2", [d.toUint8Array(), n.origin, i, n]);
      }
      const { subdocsAdded: l, subdocsLoaded: c, subdocsRemoved: a } = n;
      (l.size > 0 || a.size > 0 || c.size > 0) && (l.forEach((d) => {
        d.clientID = i.clientID, d.collectionid == null && (d.collectionid = i.collectionid), i.subdocs.add(d);
      }), a.forEach((d) => i.subdocs.delete(d)), i.emit("subdocs", [{ loaded: c, added: l, removed: a }, i, n]), a.forEach((d) => d.destroy())), e.length <= t + 1 ? (i._transactionCleanups = [], i.emit("afterAllTransactions", [i, e])) : Io(e, t + 1);
    }
  }
}, N = (e, t, n = null, i = !0) => {
  const s = e._transactionCleanups;
  let r = !1, o = null;
  e._transaction === null && (r = !0, e._transaction = new Dd(e, n, i), s.push(e._transaction), s.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
  try {
    o = t(e._transaction);
  } finally {
    if (r) {
      const l = e._transaction === s[0];
      e._transaction = null, l && Io(s, 0);
    }
  }
  return o;
};
class Od {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, n) {
    this.insertions = n, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const Xs = (e, t, n) => {
  Bt(e, n.deletions, (i) => {
    i instanceof R && t.scope.some((s) => s === e.doc || Ie(
      /** @type {AbstractType<any>} */
      s,
      i
    )) && us(i, !1);
  });
}, Zs = (e, t, n) => {
  let i = null;
  const s = e.doc, r = e.scope;
  N(s, (l) => {
    for (; t.length > 0 && e.currStackItem === null; ) {
      const c = s.store, a = (
        /** @type {StackItem} */
        t.pop()
      ), d = /* @__PURE__ */ new Set(), h = [];
      let u = !1;
      Bt(l, a.insertions, (f) => {
        if (f instanceof R) {
          if (f.redone !== null) {
            let { item: g, diff: m } = Ai(c, f.id);
            m > 0 && (g = ot(l, E(g.id.client, g.id.clock + m))), f = g;
          }
          !f.deleted && r.some((g) => g === l.doc || Ie(
            /** @type {AbstractType<any>} */
            g,
            /** @type {Item} */
            f
          )) && h.push(f);
        }
      }), Bt(l, a.deletions, (f) => {
        f instanceof R && r.some((g) => g === l.doc || Ie(
          /** @type {AbstractType<any>} */
          g,
          f
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !ge(a.insertions, f.id) && d.add(f);
      }), d.forEach((f) => {
        u = Jo(l, f, d, a.insertions, e.ignoreRemoteMapChanges, e) !== null || u;
      });
      for (let f = h.length - 1; f >= 0; f--) {
        const g = h[f];
        e.deleteFilter(g) && (g.delete(l), u = !0);
      }
      e.currStackItem = u ? a : null;
    }
    l.changed.forEach((c, a) => {
      c.has(null) && a._searchMarker && (a._searchMarker.length = 0);
    }), i = l;
  }, e);
  const o = e.currStackItem;
  if (o != null) {
    const l = i.changedParentTypes;
    e.emit("stack-item-popped", [{ stackItem: o, type: n, changedParentTypes: l, origin: e }, e]), e.currStackItem = null;
  }
  return o;
};
class Oo extends $r {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(t, {
    captureTimeout: n = 500,
    captureTransaction: i = (c) => !0,
    deleteFilter: s = () => !0,
    trackedOrigins: r = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: l = (
      /** @type {Doc} */
      oe(t) ? t[0].doc : t instanceof Jt ? t : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = l, this.addToScope(t), this.deleteFilter = s, r.add(this), this.trackedOrigins = r, this.captureTransaction = i, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((w) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        w
      ) || w === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const a = this.undoing, d = this.redoing, h = a ? this.redoStack : this.undoStack;
      a ? this.stopCapturing() : d || this.clear(!1, !0);
      const u = new pe();
      c.afterState.forEach((w, b) => {
        const C = c.beforeState.get(b) || 0, S = w - C;
        S > 0 && De(u, b, C, S);
      });
      const f = Xa();
      let g = !1;
      if (this.lastChange > 0 && f - this.lastChange < this.captureTimeout && h.length > 0 && !a && !d) {
        const w = h[h.length - 1];
        w.deletions = ki([w.deletions, c.deleteSet]), w.insertions = ki([w.insertions, u]);
      } else
        h.push(new Od(c.deleteSet, u)), g = !0;
      !a && !d && (this.lastChange = f), Bt(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (w) => {
          w instanceof R && this.scope.some((b) => b === c.doc || Ie(
            /** @type {AbstractType<any>} */
            b,
            w
          )) && us(w, !0);
        }
      );
      const m = [{ stackItem: h[h.length - 1], origin: c.origin, type: a ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      g ? this.emit("stack-item-added", m) : this.emit("stack-item-updated", m);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */
  addToScope(t) {
    const n = new Set(this.scope);
    t = oe(t) ? t : [t], t.forEach((i) => {
      n.has(i) || (n.add(i), (i instanceof G ? i.doc !== this.doc : i !== this.doc) && yo("[yjs#509] Not same Y.Doc"), this.scope.push(i));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(t) {
    this.trackedOrigins.add(t);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(t) {
    this.trackedOrigins.delete(t);
  }
  clear(t = !0, n = !0) {
    (t && this.canUndo() || n && this.canRedo()) && this.doc.transact((i) => {
      t && (this.undoStack.forEach((s) => Xs(i, this, s)), this.undoStack = []), n && (this.redoStack.forEach((s) => Xs(i, this, s)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: n }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let t;
    try {
      t = Zs(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return t;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let t;
    try {
      t = Zs(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return t;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* Md(e) {
  const t = L(e.restDecoder);
  for (let n = 0; n < t; n++) {
    const i = L(e.restDecoder), s = e.readClient();
    let r = L(e.restDecoder);
    for (let o = 0; o < i; o++) {
      const l = e.readInfo();
      if (l === 10) {
        const c = L(e.restDecoder);
        yield new gt(E(s, r), c), r += c;
      } else if ((On & l) !== 0) {
        const c = (l & (Dt | nt)) === 0, a = new R(
          E(s, r),
          null,
          // left
          (l & nt) === nt ? e.readLeftID() : null,
          // origin
          null,
          // right
          (l & Dt) === Dt ? e.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? e.readParentInfo() ? e.readString() : e.readLeftID() : null,
          // parent
          c && (l & Ce) === Ce ? e.readString() : null,
          // parentSub
          Xo(e, l)
          // item content
        );
        yield a, r += a.length;
      } else {
        const c = e.readLen();
        yield new ft(E(s, r), c), r += c;
      }
    }
  }
}
class Rd {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, n) {
    this.gen = Md(t), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === gt);
    return this.curr;
  }
}
class Nd {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const Ud = (e, t) => {
  if (e.constructor === ft) {
    const { client: n, clock: i } = e.id;
    return new ft(E(n, i + t), e.length - t);
  } else if (e.constructor === gt) {
    const { client: n, clock: i } = e.id;
    return new gt(E(n, i + t), e.length - t);
  } else {
    const n = (
      /** @type {Item} */
      e
    ), { client: i, clock: s } = n.id;
    return new R(
      E(i, s + t),
      null,
      E(i, s + t - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(t)
    );
  }
}, Qs = (e, t = xn, n = Vn) => {
  if (e.length === 1)
    return e[0];
  const i = e.map((d) => new t(qi(d)));
  let s = i.map((d) => new Rd(d, !0)), r = null;
  const o = new n(), l = new Nd(o);
  for (; s = s.filter((u) => u.curr !== null), s.sort(
    /** @type {function(any,any):number} */
    (u, f) => {
      if (u.curr.id.client === f.curr.id.client) {
        const g = u.curr.id.clock - f.curr.id.clock;
        return g === 0 ? u.curr.constructor === f.curr.constructor ? 0 : u.curr.constructor === gt ? 1 : -1 : g;
      } else
        return f.curr.id.client - u.curr.id.client;
    }
  ), s.length !== 0; ) {
    const d = s[0], h = (
      /** @type {Item | GC} */
      d.curr.id.client
    );
    if (r !== null) {
      let u = (
        /** @type {Item | GC | null} */
        d.curr
      ), f = !1;
      for (; u !== null && u.id.clock + u.length <= r.struct.id.clock + r.struct.length && u.id.client >= r.struct.id.client; )
        u = d.next(), f = !0;
      if (u === null || // current decoder is empty
      u.id.client !== h || // check whether there is another decoder that has has updates from `firstClient`
      f && u.id.clock > r.struct.id.clock + r.struct.length)
        continue;
      if (h !== r.struct.id.client)
        xe(l, r.struct, r.offset), r = { struct: u, offset: 0 }, d.next();
      else if (r.struct.id.clock + r.struct.length < u.id.clock)
        if (r.struct.constructor === gt)
          r.struct.length = u.id.clock + u.length - r.struct.id.clock;
        else {
          xe(l, r.struct, r.offset);
          const g = u.id.clock - r.struct.id.clock - r.struct.length;
          r = { struct: new gt(E(h, r.struct.id.clock + r.struct.length), g), offset: 0 };
        }
      else {
        const g = r.struct.id.clock + r.struct.length - u.id.clock;
        g > 0 && (r.struct.constructor === gt ? r.struct.length -= g : u = Ud(u, g)), r.struct.mergeWith(
          /** @type {any} */
          u
        ) || (xe(l, r.struct, r.offset), r = { struct: u, offset: 0 }, d.next());
      }
    } else
      r = { struct: (
        /** @type {Item | GC} */
        d.curr
      ), offset: 0 }, d.next();
    for (let u = d.curr; u !== null && u.id.client === h && u.id.clock === r.struct.id.clock + r.struct.length && u.constructor !== gt; u = d.next())
      xe(l, r.struct, r.offset), r = { struct: u, offset: 0 };
  }
  r !== null && (xe(l, r.struct, r.offset), r = null), Ld(l);
  const c = i.map((d) => dd(d)), a = ki(c);
  return os(o, a), o.toUint8Array();
}, Mo = (e) => {
  e.written > 0 && (e.clientStructs.push({ written: e.written, restEncoder: mt(e.encoder.restEncoder) }), e.encoder.restEncoder = Ke(), e.written = 0);
}, xe = (e, t, n) => {
  e.written > 0 && e.currClient !== t.id.client && Mo(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), A(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Ld = (e) => {
  Mo(e);
  const t = e.encoder.restEncoder;
  A(t, e.clientStructs.length);
  for (let n = 0; n < e.clientStructs.length; n++) {
    const i = e.clientStructs[n];
    A(t, i.written), Mn(t, i.restEncoder);
  }
}, tr = "You must not compute changes after the event-handler fired.";
class zn {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(t, n) {
    this.target = t, this.currentTarget = t, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = Pd(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(t) {
    return ge(this.transaction.deleteSet, t.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw _t(tr);
      const t = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((s) => {
        if (s !== null) {
          const r = (
            /** @type {Item} */
            n._map.get(s)
          );
          let o, l;
          if (this.adds(r)) {
            let c = r.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(r))
              if (c !== null && this.deletes(c))
                o = "delete", l = Xn(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (o = "update", l = Xn(c.content.getContent())) : (o = "add", l = void 0);
          } else if (this.deletes(r))
            o = "delete", l = Xn(
              /** @type {Item} */
              r.content.getContent()
            );
          else
            return;
          t.set(s, { action: o, oldValue: l });
        }
      }), this._keys = t;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(t) {
    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let t = this._changes;
    if (t === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw _t(tr);
      const n = this.target, i = Ft(), s = Ft(), r = [];
      if (t = {
        added: i,
        deleted: s,
        delta: r,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let l = null;
        const c = () => {
          l && r.push(l);
        };
        for (let a = n._start; a !== null; a = a.right)
          a.deleted ? this.deletes(a) && !this.adds(a) && ((l === null || l.delete === void 0) && (c(), l = { delete: 0 }), l.delete += a.length, s.add(a)) : this.adds(a) ? ((l === null || l.insert === void 0) && (c(), l = { insert: [] }), l.insert = l.insert.concat(a.content.getContent()), i.add(a)) : ((l === null || l.retain === void 0) && (c(), l = { retain: 0 }), l.retain += a.length);
        l !== null && l.retain === void 0 && c();
      }
      this._changes = t;
    }
    return (
      /** @type {any} */
      t
    );
  }
}
const Pd = (e, t) => {
  const n = [];
  for (; t._item !== null && t !== e; ) {
    if (t._item.parentSub !== null)
      n.unshift(t._item.parentSub);
    else {
      let i = 0, s = (
        /** @type {AbstractType<any>} */
        t._item.parent._start
      );
      for (; s !== t._item && s !== null; )
        !s.deleted && s.countable && (i += s.length), s = s.right;
      n.unshift(i);
    }
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  }
  return n;
}, X = () => {
  yo("Invalid access: Add Yjs type to a document before reading data.");
}, Ro = 80;
let cs = 0;
class Bd {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, n) {
    t.marker = !0, this.p = t, this.index = n, this.timestamp = cs++;
  }
}
const $d = (e) => {
  e.timestamp = cs++;
}, No = (e, t, n) => {
  e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = cs++;
}, Vd = (e, t, n) => {
  if (e.length >= Ro) {
    const i = e.reduce((s, r) => s.timestamp < r.timestamp ? s : r);
    return No(i, t, n), i;
  } else {
    const i = new Bd(t, n);
    return e.push(i), i;
  }
}, Fn = (e, t) => {
  if (e._start === null || t === 0 || e._searchMarker === null)
    return null;
  const n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((r, o) => rn(t - r.index) < rn(t - o.index) ? r : o);
  let i = e._start, s = 0;
  for (n !== null && (i = n.p, s = n.index, $d(n)); i.right !== null && s < t; ) {
    if (!i.deleted && i.countable) {
      if (t < s + i.length)
        break;
      s += i.length;
    }
    i = i.right;
  }
  for (; i.left !== null && s > t; )
    i = i.left, !i.deleted && i.countable && (s -= i.length);
  for (; i.left !== null && i.left.id.client === i.id.client && i.left.id.clock + i.left.length === i.id.clock; )
    i = i.left, !i.deleted && i.countable && (s -= i.length);
  return n !== null && rn(n.index - s) < /** @type {YText|YArray<any>} */
  i.parent.length / Ro ? (No(n, i, s), n) : Vd(e._searchMarker, i, s);
}, Oe = (e, t, n) => {
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    if (n > 0) {
      let r = s.p;
      for (r.marker = !1; r && (r.deleted || !r.countable); )
        r = r.left, r && !r.deleted && r.countable && (s.index -= r.length);
      if (r === null || r.marker === !0) {
        e.splice(i, 1);
        continue;
      }
      s.p = r, r.marker = !0;
    }
    (t < s.index || n > 0 && t === s.index) && (s.index = Pt(t, s.index + n));
  }
}, Kn = (e, t, n) => {
  const i = e, s = t.changedParentTypes;
  for (; It(s, e, () => []).push(n), e._item !== null; )
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  _o(i._eH, n, t);
};
class G {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = js(), this._dEH = js(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(t, n) {
    this.doc = t, this._item = n;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw pt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw pt();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(t) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let t = this._start;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    !t.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(t) {
    Ws(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    Ws(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    Ys(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    Ys(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Uo = (e, t, n) => {
  e.doc ?? X(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
  let i = n - t;
  const s = [];
  let r = e._start;
  for (; r !== null && i > 0; ) {
    if (r.countable && !r.deleted) {
      const o = r.content.getContent();
      if (o.length <= t)
        t -= o.length;
      else {
        for (let l = t; l < o.length && i > 0; l++)
          s.push(o[l]), i--;
        t = 0;
      }
    }
    r = r.right;
  }
  return s;
}, Lo = (e) => {
  e.doc ?? X();
  const t = [];
  let n = e._start;
  for (; n !== null; ) {
    if (n.countable && !n.deleted) {
      const i = n.content.getContent();
      for (let s = 0; s < i.length; s++)
        t.push(i[s]);
    }
    n = n.right;
  }
  return t;
}, Po = (e, t) => {
  const n = [];
  let i = e._start;
  for (; i !== null; ) {
    if (i.countable && Ht(i, t)) {
      const s = i.content.getContent();
      for (let r = 0; r < s.length; r++)
        n.push(s[r]);
    }
    i = i.right;
  }
  return n;
}, Me = (e, t) => {
  let n = 0, i = e._start;
  for (e.doc ?? X(); i !== null; ) {
    if (i.countable && !i.deleted) {
      const s = i.content.getContent();
      for (let r = 0; r < s.length; r++)
        t(s[r], n++, e);
    }
    i = i.right;
  }
}, Bo = (e, t) => {
  const n = [];
  return Me(e, (i, s) => {
    n.push(t(i, s, e));
  }), n;
}, Hd = (e) => {
  let t = e._start, n = null, i = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (n === null) {
        for (; t !== null && t.deleted; )
          t = t.right;
        if (t === null)
          return {
            done: !0,
            value: void 0
          };
        n = t.content.getContent(), i = 0, t = t.right;
      }
      const s = n[i++];
      return n.length <= i && (n = null), {
        done: !1,
        value: s
      };
    }
  };
}, $o = (e, t) => {
  e.doc ?? X();
  const n = Fn(e, t);
  let i = e._start;
  for (n !== null && (i = n.p, t -= n.index); i !== null; i = i.right)
    if (!i.deleted && i.countable) {
      if (t < i.length)
        return i.content.getContent()[t];
      t -= i.length;
    }
}, Sn = (e, t, n, i) => {
  let s = n;
  const r = e.doc, o = r.clientID, l = r.store, c = n === null ? t._start : n.right;
  let a = [];
  const d = () => {
    a.length > 0 && (s = new R(E(o, V(l, o)), s, s && s.lastId, c, c && c.id, t, null, new Wt(a)), s.integrate(e, 0), a = []);
  };
  i.forEach((h) => {
    if (h === null)
      a.push(h);
    else
      switch (h.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          a.push(h);
          break;
        default:
          switch (d(), h.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              s = new R(E(o, V(l, o)), s, s && s.lastId, c, c && c.id, t, null, new We(new Uint8Array(
                /** @type {Uint8Array} */
                h
              ))), s.integrate(e, 0);
              break;
            case Jt:
              s = new R(E(o, V(l, o)), s, s && s.lastId, c, c && c.id, t, null, new Ye(
                /** @type {Doc} */
                h
              )), s.integrate(e, 0);
              break;
            default:
              if (h instanceof G)
                s = new R(E(o, V(l, o)), s, s && s.lastId, c, c && c.id, t, null, new vt(h)), s.integrate(e, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), d();
}, Vo = () => _t("Length exceeded!"), Ho = (e, t, n, i) => {
  if (n > t._length)
    throw Vo();
  if (n === 0)
    return t._searchMarker && Oe(t._searchMarker, n, i.length), Sn(e, t, null, i);
  const s = n, r = Fn(t, n);
  let o = t._start;
  for (r !== null && (o = r.p, n -= r.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && ot(e, E(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return t._searchMarker && Oe(t._searchMarker, s, i.length), Sn(e, t, o, i);
}, zd = (e, t, n) => {
  let s = (t._searchMarker || []).reduce((r, o) => o.index > r.index ? o : r, { index: 0, p: t._start }).p;
  if (s)
    for (; s.right; )
      s = s.right;
  return Sn(e, t, s, n);
}, zo = (e, t, n, i) => {
  if (i === 0)
    return;
  const s = n, r = i, o = Fn(t, n);
  let l = t._start;
  for (o !== null && (l = o.p, n -= o.index); l !== null && n > 0; l = l.right)
    !l.deleted && l.countable && (n < l.length && ot(e, E(l.id.client, l.id.clock + n)), n -= l.length);
  for (; i > 0 && l !== null; )
    l.deleted || (i < l.length && ot(e, E(l.id.client, l.id.clock + i)), l.delete(e), i -= l.length), l = l.right;
  if (i > 0)
    throw Vo();
  t._searchMarker && Oe(
    t._searchMarker,
    s,
    -r + i
    /* in case we remove the above exception */
  );
}, Cn = (e, t, n) => {
  const i = t._map.get(n);
  i !== void 0 && i.delete(e);
}, as = (e, t, n, i) => {
  const s = t._map.get(n) || null, r = e.doc, o = r.clientID;
  let l;
  if (i == null)
    l = new Wt([i]);
  else
    switch (i.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        l = new Wt([i]);
        break;
      case Uint8Array:
        l = new We(
          /** @type {Uint8Array} */
          i
        );
        break;
      case Jt:
        l = new Ye(
          /** @type {Doc} */
          i
        );
        break;
      default:
        if (i instanceof G)
          l = new vt(i);
        else
          throw new Error("Unexpected content type");
    }
  new R(E(o, V(r.store, o)), s, s && s.lastId, null, null, t, n, l).integrate(e, 0);
}, hs = (e, t) => {
  e.doc ?? X();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, Fo = (e) => {
  const t = {};
  return e.doc ?? X(), e._map.forEach((n, i) => {
    n.deleted || (t[i] = n.content.getContent()[n.length - 1]);
  }), t;
}, Ko = (e, t) => {
  e.doc ?? X();
  const n = e._map.get(t);
  return n !== void 0 && !n.deleted;
}, Fd = (e, t) => {
  const n = {};
  return e._map.forEach((i, s) => {
    let r = i;
    for (; r !== null && (!t.sv.has(r.id.client) || r.id.clock >= (t.sv.get(r.id.client) || 0)); )
      r = r.left;
    r !== null && Ht(r, t) && (n[s] = r.content.getContent()[r.length - 1]);
  }), n;
}, en = (e) => (e.doc ?? X(), cd(
  e._map.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
));
class Kd extends zn {
}
class re extends G {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(t) {
    const n = new re();
    return n.push(t), n;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new re();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const t = new re();
    return t.insert(0, this.toArray().map(
      (n) => n instanceof G ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), t;
  }
  get length() {
    return this.doc ?? X(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    super._callObserver(t, n), Kn(this, t, new Kd(this, t));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(t, n) {
    this.doc !== null ? N(this.doc, (i) => {
      Ho(
        i,
        this,
        t,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.splice(t, 0, ...n);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(t) {
    this.doc !== null ? N(this.doc, (n) => {
      zd(
        n,
        this,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.push(...t);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(t, n = 1) {
    this.doc !== null ? N(this.doc, (i) => {
      zo(i, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return $o(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Lo(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(t = 0, n = this.length) {
    return Uo(this, t, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((t) => t instanceof G ? t.toJSON() : t);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(t) {
    return Bo(
      this,
      /** @type {any} */
      t
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    Me(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return Hd(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(gu);
  }
}
const jd = (e) => new re();
class Wd extends zn {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(t, n, i) {
    super(t, n), this.keysChanged = i;
  }
}
class de extends G {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(t) {
    super(), this._prelimContent = null, t === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(t);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this._prelimContent.forEach((i, s) => {
      this.set(s, i);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new de();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const t = new de();
    return this.forEach((n, i) => {
      t.set(i, n instanceof G ? (
        /** @type {typeof value} */
        n.clone()
      ) : n);
    }), t;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    Kn(this, t, new Wd(this, t, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? X();
    const t = {};
    return this._map.forEach((n, i) => {
      if (!n.deleted) {
        const s = n.content.getContent()[n.length - 1];
        t[i] = s instanceof G ? s.toJSON() : s;
      }
    }), t;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...en(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return si(
      en(this),
      /** @param {any} v */
      (t) => t[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return si(
      en(this),
      /** @param {any} v */
      (t) => t[1].content.getContent()[t[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return si(
      en(this),
      /** @param {any} v */
      (t) => (
        /** @type {any} */
        [t[0], t[1].content.getContent()[t[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    this.doc ?? X(), this._map.forEach((n, i) => {
      n.deleted || t(n.content.getContent()[n.length - 1], i, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(t) {
    this.doc !== null ? N(this.doc, (n) => {
      Cn(n, this, t);
    }) : this._prelimContent.delete(t);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(t, n) {
    return this.doc !== null ? N(this.doc, (i) => {
      as(
        i,
        this,
        t,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.set(t, n), n;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(t) {
    return (
      /** @type {any} */
      hs(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return Ko(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? N(this.doc, (t) => {
      this.forEach(function(n, i, s) {
        Cn(t, s, i);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(mu);
  }
}
const Yd = (e) => new de(), Rt = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && rh(e, t);
class Di {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(t, n, i, s) {
    this.left = t, this.right = n, this.index = i, this.currentAttributes = s;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    switch (this.right === null && it(), this.right.content.constructor) {
      case H:
        this.right.deleted || me(
          this.currentAttributes,
          /** @type {ContentFormat} */
          this.right.content
        );
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const er = (e, t, n) => {
  for (; t.right !== null && n > 0; ) {
    switch (t.right.content.constructor) {
      case H:
        t.right.deleted || me(
          t.currentAttributes,
          /** @type {ContentFormat} */
          t.right.content
        );
        break;
      default:
        t.right.deleted || (n < t.right.length && ot(e, E(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
        break;
    }
    t.left = t.right, t.right = t.right.right;
  }
  return t;
}, nn = (e, t, n, i) => {
  const s = /* @__PURE__ */ new Map(), r = i ? Fn(t, n) : null;
  if (r) {
    const o = new Di(r.p.left, r.p, r.index, s);
    return er(e, o, n - r.index);
  } else {
    const o = new Di(null, t._start, 0, s);
    return er(e, o, n);
  }
}, jo = (e, t, n, i) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === H && Rt(
    i.get(
      /** @type {ContentFormat} */
      n.right.content.key
    ),
    /** @type {ContentFormat} */
    n.right.content.value
  )); )
    n.right.deleted || i.delete(
      /** @type {ContentFormat} */
      n.right.content.key
    ), n.forward();
  const s = e.doc, r = s.clientID;
  i.forEach((o, l) => {
    const c = n.left, a = n.right, d = new R(E(r, V(s.store, r)), c, c && c.lastId, a, a && a.id, t, null, new H(l, o));
    d.integrate(e, 0), n.right = d, n.forward();
  });
}, me = (e, t) => {
  const { key: n, value: i } = t;
  i === null ? e.delete(n) : e.set(n, i);
}, Wo = (e, t) => {
  for (; e.right !== null; ) {
    if (!(e.right.deleted || e.right.content.constructor === H && Rt(
      t[
        /** @type {ContentFormat} */
        e.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      e.right.content.value
    ))) break;
    e.forward();
  }
}, Yo = (e, t, n, i) => {
  const s = e.doc, r = s.clientID, o = /* @__PURE__ */ new Map();
  for (const l in i) {
    const c = i[l], a = n.currentAttributes.get(l) ?? null;
    if (!Rt(a, c)) {
      o.set(l, a);
      const { left: d, right: h } = n;
      n.right = new R(E(r, V(s.store, r)), d, d && d.lastId, h, h && h.id, t, null, new H(l, c)), n.right.integrate(e, 0), n.forward();
    }
  }
  return o;
}, li = (e, t, n, i, s) => {
  n.currentAttributes.forEach((u, f) => {
    s[f] === void 0 && (s[f] = null);
  });
  const r = e.doc, o = r.clientID;
  Wo(n, s);
  const l = Yo(e, t, n, s), c = i.constructor === String ? new xt(
    /** @type {string} */
    i
  ) : i instanceof G ? new vt(i) : new Xt(i);
  let { left: a, right: d, index: h } = n;
  t._searchMarker && Oe(t._searchMarker, n.index, c.getLength()), d = new R(E(o, V(r.store, o)), a, a && a.lastId, d, d && d.id, t, null, c), d.integrate(e, 0), n.right = d, n.index = h, n.forward(), jo(e, t, n, l);
}, nr = (e, t, n, i, s) => {
  const r = e.doc, o = r.clientID;
  Wo(n, s);
  const l = Yo(e, t, n, s);
  t: for (; n.right !== null && (i > 0 || l.size > 0 && (n.right.deleted || n.right.content.constructor === H)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case H: {
          const { key: c, value: a } = (
            /** @type {ContentFormat} */
            n.right.content
          ), d = s[c];
          if (d !== void 0) {
            if (Rt(d, a))
              l.delete(c);
            else {
              if (i === 0)
                break t;
              l.set(c, a);
            }
            n.right.delete(e);
          } else
            n.currentAttributes.set(c, a);
          break;
        }
        default:
          i < n.right.length && ot(e, E(n.right.id.client, n.right.id.clock + i)), i -= n.right.length;
          break;
      }
    n.forward();
  }
  if (i > 0) {
    let c = "";
    for (; i > 0; i--)
      c += `
`;
    n.right = new R(E(o, V(r.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new xt(c)), n.right.integrate(e, 0), n.forward();
  }
  jo(e, t, n, l);
}, Go = (e, t, n, i, s) => {
  let r = t;
  const o = wt();
  for (; r && (!r.countable || r.deleted); ) {
    if (!r.deleted && r.content.constructor === H) {
      const a = (
        /** @type {ContentFormat} */
        r.content
      );
      o.set(a.key, a);
    }
    r = r.right;
  }
  let l = 0, c = !1;
  for (; t !== r; ) {
    if (n === t && (c = !0), !t.deleted) {
      const a = t.content;
      switch (a.constructor) {
        case H: {
          const { key: d, value: h } = (
            /** @type {ContentFormat} */
            a
          ), u = i.get(d) ?? null;
          (o.get(d) !== a || u === h) && (t.delete(e), l++, !c && (s.get(d) ?? null) === h && u !== h && (u === null ? s.delete(d) : s.set(d, u))), !c && !t.deleted && me(
            s,
            /** @type {ContentFormat} */
            a
          );
          break;
        }
      }
    }
    t = /** @type {Item} */
    t.right;
  }
  return l;
}, Gd = (e, t) => {
  for (; t && t.right && (t.right.deleted || !t.right.countable); )
    t = t.right;
  const n = /* @__PURE__ */ new Set();
  for (; t && (t.deleted || !t.countable); ) {
    if (!t.deleted && t.content.constructor === H) {
      const i = (
        /** @type {ContentFormat} */
        t.content.key
      );
      n.has(i) ? t.delete(e) : n.add(i);
    }
    t = t.left;
  }
}, qd = (e) => {
  let t = 0;
  return N(
    /** @type {Doc} */
    e.doc,
    (n) => {
      let i = (
        /** @type {Item} */
        e._start
      ), s = e._start, r = wt();
      const o = wi(r);
      for (; s; ) {
        if (s.deleted === !1)
          switch (s.content.constructor) {
            case H:
              me(
                o,
                /** @type {ContentFormat} */
                s.content
              );
              break;
            default:
              t += Go(n, i, s, r, o), r = wi(o), i = s;
              break;
          }
        s = s.right;
      }
    }
  ), t;
}, Jd = (e) => {
  const t = /* @__PURE__ */ new Set(), n = e.doc;
  for (const [i, s] of e.afterState.entries()) {
    const r = e.beforeState.get(i) || 0;
    s !== r && Ao(
      e,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(i),
      r,
      s,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === H && o.constructor !== ft && t.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  N(n, (i) => {
    Bt(e, e.deleteSet, (s) => {
      if (s instanceof ft || !/** @type {YText} */
      s.parent._hasFormatting || t.has(
        /** @type {YText} */
        s.parent
      ))
        return;
      const r = (
        /** @type {YText} */
        s.parent
      );
      s.content.constructor === H ? t.add(r) : Gd(i, s);
    });
    for (const s of t)
      qd(s);
  });
}, ir = (e, t, n) => {
  const i = n, s = wi(t.currentAttributes), r = t.right;
  for (; n > 0 && t.right !== null; ) {
    if (t.right.deleted === !1)
      switch (t.right.content.constructor) {
        case vt:
        case Xt:
        case xt:
          n < t.right.length && ot(e, E(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
          break;
      }
    t.forward();
  }
  r && Go(e, r, t.right, s, t.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return o._searchMarker && Oe(o._searchMarker, t.index, -i + n), t;
};
class Xd extends zn {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(t, n, i) {
    super(t, n), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), i.forEach((s) => {
      s === null ? this.childListChanged = !0 : this.keysChanged.add(s);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const t = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = t;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const t = (
        /** @type {Doc} */
        this.target.doc
      ), n = [];
      N(t, (i) => {
        const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
        let o = this.target._start, l = null;
        const c = {};
        let a = "", d = 0, h = 0;
        const u = () => {
          if (l !== null) {
            let f = null;
            switch (l) {
              case "delete":
                h > 0 && (f = { delete: h }), h = 0;
                break;
              case "insert":
                (typeof a == "object" || a.length > 0) && (f = { insert: a }, s.size > 0 && (f.attributes = {}, s.forEach((g, m) => {
                  g !== null && (f.attributes[m] = g);
                }))), a = "";
                break;
              case "retain":
                d > 0 && (f = { retain: d }, sh(c) || (f.attributes = nh({}, c))), d = 0;
                break;
            }
            f && n.push(f), l = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case vt:
            case Xt:
              this.adds(o) ? this.deletes(o) || (u(), l = "insert", a = o.content.getContent()[0], u()) : this.deletes(o) ? (l !== "delete" && (u(), l = "delete"), h += 1) : o.deleted || (l !== "retain" && (u(), l = "retain"), d += 1);
              break;
            case xt:
              this.adds(o) ? this.deletes(o) || (l !== "insert" && (u(), l = "insert"), a += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (l !== "delete" && (u(), l = "delete"), h += o.length) : o.deleted || (l !== "retain" && (u(), l = "retain"), d += o.length);
              break;
            case H: {
              const { key: f, value: g } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const m = s.get(f) ?? null;
                  Rt(m, g) ? g !== null && o.delete(i) : (l === "retain" && u(), Rt(g, r.get(f) ?? null) ? delete c[f] : c[f] = g);
                }
              } else if (this.deletes(o)) {
                r.set(f, g);
                const m = s.get(f) ?? null;
                Rt(m, g) || (l === "retain" && u(), c[f] = m);
              } else if (!o.deleted) {
                r.set(f, g);
                const m = c[f];
                m !== void 0 && (Rt(m, g) ? m !== null && o.delete(i) : (l === "retain" && u(), g === null ? delete c[f] : c[f] = g));
              }
              o.deleted || (l === "insert" && u(), me(
                s,
                /** @type {ContentFormat} */
                o.content
              ));
              break;
            }
          }
          o = o.right;
        }
        for (u(); n.length > 0; ) {
          const f = n[n.length - 1];
          if (f.retain !== void 0 && f.attributes === void 0)
            n.pop();
          else
            break;
        }
      }), this._delta = n;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class $t extends G {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(t) {
    super(), this._pending = t !== void 0 ? [() => this.insert(0, t)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this.doc ?? X(), this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n);
    try {
      this._pending.forEach((i) => i());
    } catch (i) {
      console.error(i);
    }
    this._pending = null;
  }
  _copy() {
    return new $t();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const t = new $t();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    super._callObserver(t, n);
    const i = new Xd(this, t, n);
    Kn(this, t, i), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? X();
    let t = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === xt && (t += /** @type {ContentString} */
      n.content.str), n = n.right;
    return t;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(t, { sanitize: n = !0 } = {}) {
    this.doc !== null ? N(this.doc, (i) => {
      const s = new Di(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        if (o.insert !== void 0) {
          const l = !n && typeof o.insert == "string" && r === t.length - 1 && s.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof l != "string" || l.length > 0) && li(i, this, s, l, o.attributes || {});
        } else o.retain !== void 0 ? nr(i, this, s, o.retain, o.attributes || {}) : o.delete !== void 0 && ir(i, s, o.delete);
      }
    }) : this._pending.push(() => this.applyDelta(t));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(t, n, i) {
    this.doc ?? X();
    const s = [], r = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let l = "", c = this._start;
    function a() {
      if (l.length > 0) {
        const h = {};
        let u = !1;
        r.forEach((g, m) => {
          u = !0, h[m] = g;
        });
        const f = { insert: l };
        u && (f.attributes = h), s.push(f), l = "";
      }
    }
    const d = () => {
      for (; c !== null; ) {
        if (Ht(c, t) || n !== void 0 && Ht(c, n))
          switch (c.content.constructor) {
            case xt: {
              const h = r.get("ychange");
              t !== void 0 && !Ht(c, t) ? (h === void 0 || h.user !== c.id.client || h.type !== "removed") && (a(), r.set("ychange", i ? i("removed", c.id) : { type: "removed" })) : n !== void 0 && !Ht(c, n) ? (h === void 0 || h.user !== c.id.client || h.type !== "added") && (a(), r.set("ychange", i ? i("added", c.id) : { type: "added" })) : h !== void 0 && (a(), r.delete("ychange")), l += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case vt:
            case Xt: {
              a();
              const h = {
                insert: c.content.getContent()[0]
              };
              if (r.size > 0) {
                const u = (
                  /** @type {Object<string,any>} */
                  {}
                );
                h.attributes = u, r.forEach((f, g) => {
                  u[g] = f;
                });
              }
              s.push(h);
              break;
            }
            case H:
              Ht(c, t) && (a(), me(
                r,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      a();
    };
    return t || n ? N(o, (h) => {
      t && Ei(h, t), n && Ei(h, n), d();
    }, "cleanup") : d(), s;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(t, n, i) {
    if (n.length <= 0)
      return;
    const s = this.doc;
    s !== null ? N(s, (r) => {
      const o = nn(r, this, t, !i);
      i || (i = {}, o.currentAttributes.forEach((l, c) => {
        i[c] = l;
      })), li(r, this, o, n, i);
    }) : this._pending.push(() => this.insert(t, n, i));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(t, n, i) {
    const s = this.doc;
    s !== null ? N(s, (r) => {
      const o = nn(r, this, t, !i);
      li(r, this, o, n, i || {});
    }) : this._pending.push(() => this.insertEmbed(t, n, i || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(t, n) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? N(i, (s) => {
      ir(s, nn(s, this, t, !0), n);
    }) : this._pending.push(() => this.delete(t, n));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(t, n, i) {
    if (n === 0)
      return;
    const s = this.doc;
    s !== null ? N(s, (r) => {
      const o = nn(r, this, t, !1);
      o.right !== null && nr(r, this, o, n, i);
    }) : this._pending.push(() => this.format(t, n, i));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? N(this.doc, (n) => {
      Cn(n, this, t);
    }) : this._pending.push(() => this.removeAttribute(t));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, n) {
    this.doc !== null ? N(this.doc, (i) => {
      as(i, this, t, n);
    }) : this._pending.push(() => this.setAttribute(t, n));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      hs(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return Fo(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(wu);
  }
}
const Zd = (e) => new $t();
class ci {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(t, n = () => !0) {
    this._filter = n, this._root = t, this._currentNode = /** @type {Item} */
    t._start, this._firstCall = !0, t.doc ?? X();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let t = this._currentNode, n = t && t.content && /** @type {any} */
    t.content.type;
    if (t !== null && (!this._firstCall || t.deleted || !this._filter(n)))
      do
        if (n = /** @type {any} */
        t.content.type, !t.deleted && (n.constructor === et || n.constructor === jt) && n._start !== null)
          t = n._start;
        else
          for (; t !== null; ) {
            const i = t.next;
            if (i !== null) {
              t = i;
              break;
            } else t.parent === this._root ? t = null : t = /** @type {AbstractType<any>} */
            t.parent._item;
          }
      while (t !== null && (t.deleted || !this._filter(
        /** @type {ContentType} */
        t.content.type
      )));
    return this._firstCall = !1, t === null ? { value: void 0, done: !0 } : (this._currentNode = t, { value: (
      /** @type {any} */
      t.content.type
    ), done: !1 });
  }
}
class jt extends G {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const t = this._first;
    return t ? t.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new jt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const t = new jt();
    return t.insert(0, this.toArray().map((n) => n instanceof G ? n.clone() : n)), t;
  }
  get length() {
    return this.doc ?? X(), this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(t) {
    return new ci(this, t);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(t) {
    t = t.toUpperCase();
    const i = new ci(this, (s) => s.nodeName && s.nodeName.toUpperCase() === t).next();
    return i.done ? null : i.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(t) {
    return t = t.toUpperCase(), Kt(new ci(this, (n) => n.nodeName && n.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, n) {
    Kn(this, t, new eu(this, n, t));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Bo(this, (t) => t.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, i) {
    const s = t.createDocumentFragment();
    return i !== void 0 && i._createAssociation(s, this), Me(this, (r) => {
      s.insertBefore(r.toDOM(t, n, i), null);
    }), s;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(t, n) {
    this.doc !== null ? N(this.doc, (i) => {
      Ho(i, this, t, n);
    }) : this._prelimContent.splice(t, 0, ...n);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(t, n) {
    if (this.doc !== null)
      N(this.doc, (i) => {
        const s = t && t instanceof G ? t._item : t;
        Sn(i, this, s, n);
      });
    else {
      const i = (
        /** @type {Array<any>} */
        this._prelimContent
      ), s = t === null ? 0 : i.findIndex((r) => r === t) + 1;
      if (s === 0 && t !== null)
        throw _t("Reference item not found");
      i.splice(s, 0, ...n);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(t, n = 1) {
    this.doc !== null ? N(this.doc, (i) => {
      zo(i, this, t, n);
    }) : this._prelimContent.splice(t, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Lo(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(t) {
    this.insert(this.length, t);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(t) {
    return $o(this, t);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(t = 0, n = this.length) {
    return Uo(this, t, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    Me(this, t);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(yu);
  }
}
const Qd = (e) => new jt();
class et extends jt {
  constructor(t = "UNDEFINED") {
    super(), this.nodeName = t, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, n) {
    super._integrate(t, n), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((i, s) => {
      this.setAttribute(s, i);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new et(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const t = new et(this.nodeName), n = this.getAttributes();
    return ih(n, (i, s) => {
      t.setAttribute(
        s,
        /** @type {any} */
        i
      );
    }), t.insert(0, this.toArray().map((i) => i instanceof G ? i.clone() : i)), t;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const t = this.getAttributes(), n = [], i = [];
    for (const l in t)
      i.push(l);
    i.sort();
    const s = i.length;
    for (let l = 0; l < s; l++) {
      const c = i[l];
      n.push(c + '="' + t[c] + '"');
    }
    const r = this.nodeName.toLocaleLowerCase(), o = n.length > 0 ? " " + n.join(" ") : "";
    return `<${r}${o}>${super.toString()}</${r}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? N(this.doc, (n) => {
      Cn(n, this, t);
    }) : this._prelimAttrs.delete(t);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, n) {
    this.doc !== null ? N(this.doc, (i) => {
      as(i, this, t, n);
    }) : this._prelimAttrs.set(t, n);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      hs(this, t)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(t) {
    return (
      /** @type {any} */
      Ko(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(t) {
    return (
      /** @type {any} */
      t ? Fd(this, t) : Fo(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, i) {
    const s = t.createElement(this.nodeName), r = this.getAttributes();
    for (const o in r) {
      const l = r[o];
      typeof l == "string" && s.setAttribute(o, l);
    }
    return Me(this, (o) => {
      s.appendChild(o.toDOM(t, n, i));
    }), i !== void 0 && i._createAssociation(s, this), s;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(bu), t.writeKey(this.nodeName);
  }
}
const tu = (e) => new et(e.readKey());
class eu extends zn {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(t, n, i) {
    super(t, i), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((s) => {
      s === null ? this.childListChanged = !0 : this.attributesChanged.add(s);
    });
  }
}
class kn extends de {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(t) {
    super(), this.hookName = t;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new kn(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const t = new kn(this.hookName);
    return this.forEach((n, i) => {
      t.set(i, n);
    }), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n = {}, i) {
    const s = n[this.hookName];
    let r;
    return s !== void 0 ? r = s.createDom(this) : r = document.createElement(this.hookName), r.setAttribute("data-yjs-hook", this.hookName), i !== void 0 && i._createAssociation(r, this), r;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(xu), t.writeKey(this.hookName);
  }
}
const nu = (e) => new kn(e.readKey());
class at extends $t {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  _copy() {
    return new at();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const t = new at();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, n, i) {
    const s = t.createTextNode(this.toString());
    return i !== void 0 && i._createAssociation(s, this), s;
  }
  toString() {
    return this.toDelta().map((t) => {
      const n = [];
      for (const s in t.attributes) {
        const r = [];
        for (const o in t.attributes[s])
          r.push({ key: o, value: t.attributes[s][o] });
        r.sort((o, l) => o.key < l.key ? -1 : 1), n.push({ nodeName: s, attrs: r });
      }
      n.sort((s, r) => s.nodeName < r.nodeName ? -1 : 1);
      let i = "";
      for (let s = 0; s < n.length; s++) {
        const r = n[s];
        i += `<${r.nodeName}`;
        for (let o = 0; o < r.attrs.length; o++) {
          const l = r.attrs[o];
          i += ` ${l.key}="${l.value}"`;
        }
        i += ">";
      }
      i += t.insert;
      for (let s = n.length - 1; s >= 0; s--)
        i += `</${n[s].nodeName}>`;
      return i;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(vu);
  }
}
const iu = (e) => new at();
class ds {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(t, n) {
    this.id = t, this.length = n;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw pt();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(t, n, i) {
    throw pt();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    throw pt();
  }
}
const su = 0;
class ft extends ds {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    n > 0 && (this.id.clock += n, this.length -= n), Do(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(su), t.writeLen(this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    return null;
  }
}
class We {
  /**
   * @param {Uint8Array} content
   */
  constructor(t) {
    this.content = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new We(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(t) {
    throw pt();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const ru = (e) => new We(e.readBuf());
class Re {
  /**
   * @param {number} len
   */
  constructor(t) {
    this.len = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new Re(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const n = new Re(this.len - t);
    return this.len = t, n;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.len += t.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    De(t.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeLen(this.len - n);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const ou = (e) => new Re(e.readLen()), qo = (e, t) => new Jt({ guid: e, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
class Ye {
  /**
   * @param {Doc} doc
   */
  constructor(t) {
    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
    const n = {};
    this.opts = n, t.gc || (n.gc = !1), t.autoLoad && (n.autoLoad = !0), t.meta !== null && (n.meta = t.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new Ye(qo(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(t) {
    throw pt();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    this.doc._item = n, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeString(this.doc.guid), t.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const lu = (e) => new Ye(qo(e.readString(), e.readAny()));
class Xt {
  /**
   * @param {Object} embed
   */
  constructor(t) {
    this.embed = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new Xt(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(t) {
    throw pt();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const cu = (e) => new Xt(e.readJSON());
class H {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(t, n) {
    this.key = t, this.value = n;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new H(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(t) {
    throw pt();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(t, n) {
    const i = (
      /** @type {YText} */
      n.parent
    );
    i._searchMarker = null, i._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeKey(this.key), t.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const au = (e) => new H(e.readKey(), e.readJSON());
class _n {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new _n(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const n = new _n(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), n;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    const i = this.arr.length;
    t.writeLen(i - n);
    for (let s = n; s < i; s++) {
      const r = this.arr[s];
      t.writeString(r === void 0 ? "undefined" : JSON.stringify(r));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const hu = (e) => {
  const t = e.readLen(), n = [];
  for (let i = 0; i < t; i++) {
    const s = e.readString();
    s === "undefined" ? n.push(void 0) : n.push(JSON.parse(s));
  }
  return new _n(n);
}, du = mn("node_env") === "development";
class Wt {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t, du && Gr(t);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new Wt(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(t) {
    const n = new Wt(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), n;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    const i = this.arr.length;
    t.writeLen(i - n);
    for (let s = n; s < i; s++) {
      const r = this.arr[s];
      t.writeAny(r);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const uu = (e) => {
  const t = e.readLen(), n = [];
  for (let i = 0; i < t; i++)
    n.push(e.readAny());
  return new Wt(n);
};
class xt {
  /**
   * @param {string} str
   */
  constructor(t) {
    this.str = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new xt(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(t) {
    const n = new xt(this.str.slice(t));
    this.str = this.str.slice(0, t);
    const i = this.str.charCodeAt(t - 1);
    return i >= 55296 && i <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.str += t.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeString(n === 0 ? this.str : this.str.slice(n));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const fu = (e) => new xt(e.readString()), pu = [
  jd,
  Yd,
  Zd,
  tu,
  Qd,
  nu,
  iu
], gu = 0, mu = 1, wu = 2, bu = 3, yu = 4, xu = 5, vu = 6;
class vt {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(t) {
    this.type = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new vt(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(t) {
    throw pt();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, n) {
    this.type._integrate(t.doc, n);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    let n = this.type._start;
    for (; n !== null; )
      n.deleted ? n.id.clock < (t.beforeState.get(n.id.client) || 0) && t._mergeStructs.push(n) : n.delete(t), n = n.right;
    this.type._map.forEach((i) => {
      i.deleted ? i.id.clock < (t.beforeState.get(i.id.client) || 0) && t._mergeStructs.push(i) : i.delete(t);
    }), t.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
    let n = this.type._start;
    for (; n !== null; )
      n.gc(t, !0), n = n.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (i) => {
        for (; i !== null; )
          i.gc(t, !0), i = i.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    this.type._write(t);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Su = (e) => new vt(pu[e.readTypeRef()](e)), Ai = (e, t) => {
  let n = t, i = 0, s;
  do
    i > 0 && (n = E(n.client, n.clock + i)), s = se(e, n), i = n.clock - s.id.clock, n = s.redone;
  while (n !== null && s instanceof R);
  return {
    item: s,
    diff: i
  };
}, us = (e, t) => {
  for (; e !== null && e.keep !== t; )
    e.keep = t, e = /** @type {AbstractType<any>} */
    e.parent._item;
}, En = (e, t, n) => {
  const { client: i, clock: s } = t.id, r = new R(
    E(i, s + n),
    t,
    E(i, s + n - 1),
    t.right,
    t.rightOrigin,
    t.parent,
    t.parentSub,
    t.content.splice(n)
  );
  return t.deleted && r.markDeleted(), t.keep && (r.keep = !0), t.redone !== null && (r.redone = E(t.redone.client, t.redone.clock + n)), t.right = r, r.right !== null && (r.right.left = r), e._mergeStructs.push(r), r.parentSub !== null && r.right === null && r.parent._map.set(r.parentSub, r), t.length = n, r;
}, sr = (e, t) => Wi(
  e,
  /** @param {StackItem} s */
  (n) => ge(n.deletions, t)
), Jo = (e, t, n, i, s, r) => {
  const o = e.doc, l = o.store, c = o.clientID, a = t.redone;
  if (a !== null)
    return ot(e, a);
  let d = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), h = null, u;
  if (d !== null && d.deleted === !0) {
    if (d.redone === null && (!n.has(d) || Jo(e, d, n, i, s, r) === null))
      return null;
    for (; d.redone !== null; )
      d = ot(e, d.redone);
  }
  const f = d === null ? (
    /** @type {AbstractType<any>} */
    t.parent
  ) : (
    /** @type {ContentType} */
    d.content.type
  );
  if (t.parentSub === null) {
    for (h = t.left, u = t; h !== null; ) {
      let b = h;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== d; )
        b = b.redone === null ? null : ot(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === d) {
        h = b;
        break;
      }
      h = h.left;
    }
    for (; u !== null; ) {
      let b = u;
      for (; b !== null && /** @type {AbstractType<any>} */
      b.parent._item !== d; )
        b = b.redone === null ? null : ot(e, b.redone);
      if (b !== null && /** @type {AbstractType<any>} */
      b.parent._item === d) {
        u = b;
        break;
      }
      u = u.right;
    }
  } else if (u = null, t.right && !s) {
    for (h = t; h !== null && h.right !== null && (h.right.redone || ge(i, h.right.id) || sr(r.undoStack, h.right.id) || sr(r.redoStack, h.right.id)); )
      for (h = h.right; h.redone; ) h = ot(e, h.redone);
    if (h && h.right !== null)
      return null;
  } else
    h = f._map.get(t.parentSub) || null;
  const g = V(l, c), m = E(c, g), w = new R(
    m,
    h,
    h && h.lastId,
    u,
    u && u.id,
    f,
    t.parentSub,
    t.content.copy()
  );
  return t.redone = m, us(w, !0), w.integrate(e, 0), w;
};
class R extends ds {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(t, n, i, s, r, o, l, c) {
    super(t, c.getLength()), this.origin = i, this.left = n, this.right = s, this.rightOrigin = r, this.parent = o, this.parentSub = l, this.redone = null, this.content = c, this.info = this.content.isCountable() ? Ms : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & Qn) > 0 !== t && (this.info ^= Qn);
  }
  get marker() {
    return (this.info & Qn) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & Os) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= Os);
  }
  get countable() {
    return (this.info & Ms) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Zn) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= Zn);
  }
  markDeleted() {
    this.info |= Zn;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= V(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= V(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === ie && this.id.client !== this.parent.client && this.parent.clock >= V(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = Gs(t, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = ot(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === ft || this.right && this.right.constructor === ft)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === R ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === R && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === ie) {
      const i = se(n, this.parent);
      i.constructor === ft ? this.parent = null : this.parent = /** @type {ContentType} */
      i.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    if (n > 0 && (this.id.clock += n, this.left = Gs(t, t.doc.store, E(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let i = this.left, s;
        if (i !== null)
          s = i.right;
        else if (this.parentSub !== null)
          for (s = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; s !== null && s.left !== null; )
            s = s.left;
        else
          s = /** @type {AbstractType<any>} */
          this.parent._start;
        const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; s !== null && s !== this.right; ) {
          if (o.add(s), r.add(s), Qe(this.origin, s.origin)) {
            if (s.id.client < this.id.client)
              i = s, r.clear();
            else if (Qe(this.rightOrigin, s.rightOrigin))
              break;
          } else if (s.origin !== null && o.has(se(t.doc.store, s.origin)))
            r.has(se(t.doc.store, s.origin)) || (i = s, r.clear());
          else
            break;
          s = s.right;
        }
        this.left = i;
      }
      if (this.left !== null) {
        const i = this.left.right;
        this.right = i, this.left.right = this;
      } else {
        let i;
        if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = i;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Do(t.doc.store, this), this.content.integrate(t, this), Js(
        t,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(t);
    } else
      new ft(this.id, this.length).integrate(t, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let t = this.right;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let t = this.left;
    for (; t !== null && t.deleted; )
      t = t.left;
    return t;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : E(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(t) {
    if (this.constructor === t.constructor && Qe(t.origin, this.lastId) && this.right === t && Qe(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return n && n.forEach((i) => {
        i.p === t && (i.p = this, !this.deleted && this.countable && (i.index -= this.length));
      }), t.keep && (this.keep = !0), this.right = t.right, this.right !== null && (this.right.left = this), this.length += t.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(t) {
    if (!this.deleted) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), De(t.deleteSet, this.id.client, this.id.clock, this.length), Js(t, n, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, n) {
    if (!this.deleted)
      throw it();
    this.content.gc(t), n ? Td(t, this, new ft(this.id, this.length)) : this.content = new Re(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(t, n) {
    const i = n > 0 ? E(this.id.client, this.id.clock + n - 1) : this.origin, s = this.rightOrigin, r = this.parentSub, o = this.content.getRef() & On | (i === null ? 0 : nt) | // origin is defined
    (s === null ? 0 : Dt) | // right origin is defined
    (r === null ? 0 : Ce);
    if (t.writeInfo(o), i !== null && t.writeLeftID(i), s !== null && t.writeRightID(s), i === null && s === null) {
      const l = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (l._item !== void 0) {
        const c = l._item;
        if (c === null) {
          const a = Ae(l);
          t.writeParentInfo(!0), t.writeString(a);
        } else
          t.writeParentInfo(!1), t.writeLeftID(c.id);
      } else l.constructor === String ? (t.writeParentInfo(!0), t.writeString(l)) : l.constructor === ie ? (t.writeParentInfo(!1), t.writeLeftID(l)) : it();
      r !== null && t.writeString(r);
    }
    this.content.write(t, n);
  }
}
const Xo = (e, t) => Cu[t & On](e), Cu = [
  () => {
    it();
  },
  // GC is not ItemContent
  ou,
  // 1
  hu,
  // 2
  ru,
  // 3
  fu,
  // 4
  cu,
  // 5
  au,
  // 6
  Su,
  // 7
  uu,
  // 8
  lu,
  // 9
  () => {
    it();
  }
  // 10 - Skip is not ItemContent
], ku = 10;
class gt extends ds {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, n) {
    it();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, n) {
    t.writeInfo(ku), A(t.restEncoder, this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, n) {
    return null;
  }
}
const Zo = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), Qo = "__ $YJS$ __";
Zo[Qo] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
Zo[Qo] = !0;
const _u = () => {
  let e = !0;
  return (t, n) => {
    if (e) {
      e = !1;
      try {
        t();
      } finally {
        e = !0;
      }
    } else n !== void 0 && n();
  };
}, Eu = /[\uD800-\uDBFF]/, Tu = /[\uDC00-\uDFFF]/, Du = (e, t) => {
  let n = 0, i = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    n++;
  for (n > 0 && Eu.test(e[n - 1]) && n--; i + n < e.length && i + n < t.length && e[e.length - i - 1] === t[t.length - i - 1]; )
    i++;
  return i > 0 && Tu.test(e[e.length - i]) && i--, {
    index: n,
    remove: e.length - n - i,
    insert: t.slice(n, t.length - i)
  };
}, Au = Du, kt = (e, t) => e >>> t | e << 32 - t, Iu = (e) => kt(e, 2) ^ kt(e, 13) ^ kt(e, 22), Ou = (e) => kt(e, 6) ^ kt(e, 11) ^ kt(e, 25), Mu = (e) => kt(e, 7) ^ kt(e, 18) ^ e >>> 3, Ru = (e) => kt(e, 17) ^ kt(e, 19) ^ e >>> 10, Nu = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Uu = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class Lu {
  constructor() {
    const t = new ArrayBuffer(320);
    this._H = new Uint32Array(t, 0, 8), this._H.set(Uu), this._W = new Uint32Array(t, 64, 64);
  }
  _updateHash() {
    const t = this._H, n = this._W;
    for (let h = 16; h < 64; h++)
      n[h] = Ru(n[h - 2]) + n[h - 7] + Mu(n[h - 15]) + n[h - 16];
    let i = t[0], s = t[1], r = t[2], o = t[3], l = t[4], c = t[5], a = t[6], d = t[7];
    for (let h = 0, u, f; h < 64; h++)
      u = d + Ou(l) + (l & c ^ ~l & a) + Nu[h] + n[h] >>> 0, f = Iu(i) + (i & s ^ i & r ^ s & r) >>> 0, d = a, a = c, c = l, l = o + u >>> 0, o = r, r = s, s = i, i = u + f >>> 0;
    t[0] += i, t[1] += s, t[2] += r, t[3] += o, t[4] += l, t[5] += c, t[6] += a, t[7] += d;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(t) {
    let n = 0;
    for (; n + 56 <= t.length; ) {
      let o = 0;
      for (; o < 16 && n + 3 < t.length; o++)
        this._W[o] = t[n++] << 24 | t[n++] << 16 | t[n++] << 8 | t[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, o, 16); n < t.length; )
          this._W[o] |= t[n] << (3 - n % 4) * 8, n++;
        this._W[o] |= nt << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const i = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let s = 0;
    for (; n < t.length; s++)
      for (let o = 3; o >= 0 && n < t.length; o--)
        this._W[s] |= t[n++] << o * 8;
    i || (this._W[s - (n % 4 === 0 ? 0 : 1)] |= nt << (3 - n % 4) * 8), this._W[14] = t.byteLength / ga, this._W[15] = t.byteLength * 8, this._updateHash();
    const r = new Uint8Array(32);
    for (let o = 0; o < this._H.length; o++)
      for (let l = 0; l < 4; l++)
        r[o * 4 + l] = this._H[o] >>> (3 - l) * 8;
    return r;
  }
}
const Pu = (e) => new Lu().digest(e), P = new Ui("y-sync"), At = new Ui("y-undo");
new Ui("yjs-cursor");
const Bu = (e) => {
  for (let n = 6; n < e.length; n++)
    e[n % 6] = e[n % 6] ^ e[n];
  return e.slice(0, 6);
}, $u = (e) => ph(Bu(Pu(gh(e)))), Tn = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && /** @type {number} */
t.sv.get(e.id.client) > e.id.clock && !ge(t.ds, e.id), Vu = [{ light: "#ecd44433", dark: "#ecd444" }], Hu = (e, t, n) => {
  if (!e.has(n)) {
    if (e.size < t.length) {
      const i = Ft();
      e.forEach((s) => i.add(s)), t = t.filter((s) => !i.has(s));
    }
    e.set(n, Ga(t));
  }
  return (
    /** @type {ColorDef} */
    e.get(n)
  );
}, zu = (e, {
  colors: t = Vu,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: i = null,
  onFirstRender: s = () => {
  },
  mapping: r
} = {}) => {
  let o = !1;
  const l = new ju(e, r), c = new wr({
    props: {
      editable: (a) => {
        const d = P.getState(a);
        return d.snapshot == null && d.prevSnapshot == null;
      }
    },
    key: P,
    state: {
      /**
       * @returns {any}
       */
      init: (a, d) => ({
        type: e,
        doc: e.doc,
        binding: l,
        snapshot: null,
        prevSnapshot: null,
        isChangeOrigin: !1,
        isUndoRedoOperation: !1,
        addToHistory: !0,
        colors: t,
        colorMapping: n,
        permanentUserData: i
      }),
      apply: (a, d) => {
        const h = a.getMeta(P);
        if (h !== void 0) {
          d = Object.assign({}, d);
          for (const u in h)
            d[u] = h[u];
        }
        return d.addToHistory = a.getMeta("addToHistory") !== !1, d.isChangeOrigin = h !== void 0 && !!h.isChangeOrigin, d.isUndoRedoOperation = h !== void 0 && !!h.isChangeOrigin && !!h.isUndoRedoOperation, l.prosemirrorView !== null && h !== void 0 && (h.snapshot != null || h.prevSnapshot != null) && po(0, () => {
          l.prosemirrorView != null && (h.restore == null ? l._renderSnapshot(
            h.snapshot,
            h.prevSnapshot,
            d
          ) : (l._renderSnapshot(
            h.snapshot,
            h.snapshot,
            d
          ), delete d.restore, delete d.snapshot, delete d.prevSnapshot, l.mux(() => {
            l._prosemirrorChanged(
              l.prosemirrorView.state.doc
            );
          })));
        }), d;
      }
    },
    view: (a) => (l.initView(a), r == null && l._forceRerender(), s(), {
      update: () => {
        const d = c.getState(a.state);
        if (d.snapshot == null && d.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (o || a.state.doc.content.findDiffStart(
          a.state.doc.type.createAndFill().content
        ) !== null)) {
          if (o = !0, d.addToHistory === !1 && !d.isChangeOrigin) {
            const h = At.getState(a.state), u = h && h.undoManager;
            u && u.stopCapturing();
          }
          l.mux(() => {
            d.doc.transact((h) => {
              h.meta.set("addToHistory", d.addToHistory), l._prosemirrorChanged(a.state.doc);
            }, P);
          });
        }
      },
      destroy: () => {
        l.destroy();
      }
    })
  });
  return c;
}, Fu = (e, t, n) => {
  if (t !== null && t.anchor !== null && t.head !== null)
    if (t.type === "all")
      e.setSelection(new xl(e.doc));
    else if (t.type === "node") {
      const i = Se(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      );
      e.setSelection(Ku(e, i));
    } else {
      const i = Se(
        n.doc,
        n.type,
        t.anchor,
        n.mapping
      ), s = Se(
        n.doc,
        n.type,
        t.head,
        n.mapping
      );
      i !== null && s !== null && e.setSelection(Li.between(e.doc.resolve(i), e.doc.resolve(s)));
    }
}, Ku = (e, t) => {
  const n = e.doc.resolve(t);
  return n.nodeAfter ? vl.create(e.doc, t) : Li.near(n);
}, Ii = (e, t) => ({
  type: (
    /** @type {any} */
    t.selection.jsonID
  ),
  anchor: An(
    t.selection.anchor,
    e.type,
    e.mapping
  ),
  head: An(
    t.selection.head,
    e.type,
    e.mapping
  )
});
class ju {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(t, n = /* @__PURE__ */ new Map()) {
    this.type = t, this.prosemirrorView = null, this.mux = _u(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = t.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = Ii(
        this,
        this.prosemirrorView.state
      ));
    }, this.afterAllTransactions = () => {
      this.beforeTransactionSelection = null;
    }, this._domSelectionInView = null;
  }
  /**
   * Create a transaction for changing the prosemirror state.
   *
   * @returns
   */
  get _tr() {
    return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
  }
  _isLocalCursorInView() {
    return this.prosemirrorView.hasFocus() ? (qr && this._domSelectionInView === null && (po(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const t = this.prosemirrorView._root.getSelection();
    if (t == null || t.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const s = n.getBoundingClientRect(), r = je.documentElement;
    return s.bottom >= 0 && s.right >= 0 && s.left <= (window.innerWidth || r.clientWidth || 0) && s.top <= (window.innerHeight || r.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(t, n) {
    n || (n = Eo(So(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(P, { snapshot: t, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const t = this.type.toArray().map(
        (i) => hn(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Je(Xe.from(t), 0, 0)
      );
      n.setMeta(P, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const t = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (s) => hn(
          /** @type {Y.XmlElement} */
          s,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((s) => s !== null), i = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Je(Xe.from(n), 0, 0)
      );
      if (t) {
        const s = le(Pt(t.anchor, 0), i.doc.content.size), r = le(Pt(t.head, 0), i.doc.content.size);
        i.setSelection(Li.create(i.doc, s, r));
      }
      this.prosemirrorView.dispatch(
        i.setMeta(P, { isChangeOrigin: !0, binding: this })
      );
    });
  }
  /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */
  _renderSnapshot(t, n, i) {
    let s = this.doc, r = this.type;
    if (t || (t = oi(this.doc)), t instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(t instanceof Uint8Array) || !(n instanceof Uint8Array)) && it(), s = new Jt({ gc: !1 }), _i(s, n), n = oi(s), _i(s, t), t = oi(s), r._item === null) {
        const o = Array.from(this.doc.share.keys()).find(
          (l) => this.doc.share.get(l) === this.type
        );
        r = s.getXmlFragment(o);
      } else {
        const o = s.store.clients.get(r._item.id.client) ?? [], l = yt(
          o,
          r._item.id.clock
        );
        r = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        o[l].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      s.transact((o) => {
        const l = i.permanentUserData;
        l && l.dss.forEach((h) => {
          Bt(o, h, (u) => {
          });
        });
        const c = (h, u) => {
          const f = h === "added" ? l.getUserByClientId(u.client) : l.getUserByDeletedId(u);
          return {
            user: f,
            type: h,
            color: Hu(
              i.colorMapping,
              i.colors,
              f
            )
          };
        }, a = Po(
          r,
          new ls(n.ds, t.sv)
        ).map((h) => !h._item.deleted || Tn(h._item, t) || Tn(h._item, n) ? hn(
          h,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          t,
          n,
          c
        ) : null).filter((h) => h !== null), d = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Je(Xe.from(a), 0, 0)
        );
        this.prosemirrorView.dispatch(
          d.setMeta(P, { isChangeOrigin: !0 })
        );
      }, P);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(t, n) {
    if (this.prosemirrorView == null) return;
    const i = P.getState(this.prosemirrorView.state);
    if (t.length === 0 || i.snapshot != null || i.prevSnapshot != null) {
      this.renderSnapshot(i.snapshot, i.prevSnapshot);
      return;
    }
    this.mux(() => {
      const s = (l, c) => this.mapping.delete(c);
      Bt(
        n,
        n.deleteSet,
        (l) => {
          if (l.constructor === R) {
            const c = (
              /** @type {Y.ContentType} */
              /** @type {Y.Item} */
              l.content.type
            );
            c && this.mapping.delete(c);
          }
        }
      ), n.changed.forEach(s), n.changedParentTypes.forEach(s);
      const r = this.type.toArray().map(
        (l) => tl(
          /** @type {Y.XmlElement | Y.XmlHook} */
          l,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((l) => l !== null);
      let o = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Je(Xe.from(r), 0, 0)
      );
      Fu(o, this.beforeTransactionSelection, this), o = o.setMeta(P, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Oo }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && o.scrollIntoView(), this.prosemirrorView.dispatch(o);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(t) {
    this.doc.transact(() => {
      Mi(this.doc, this.type, t, this), this.beforeTransactionSelection = Ii(
        this,
        this.prosemirrorView.state
      );
    }, P);
  }
  /**
   * View is ready to listen to changes. Register observers.
   * @param {any} prosemirrorView
   */
  initView(t) {
    this.prosemirrorView != null && this.destroy(), this.prosemirrorView = t, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
  }
  destroy() {
    this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
  }
}
const tl = (e, t, n, i, s, r) => {
  const o = (
    /** @type {PModel.Node} */
    n.mapping.get(e)
  );
  if (o === void 0) {
    if (e instanceof et)
      return hn(
        e,
        t,
        n,
        i,
        s,
        r
      );
    throw pt();
  }
  return o;
}, hn = (e, t, n, i, s, r) => {
  const o = [], l = (c) => {
    var a, d;
    if (c instanceof et) {
      const h = tl(
        c,
        t,
        n,
        i,
        s,
        r
      );
      h !== null && o.push(h);
    } else {
      const h = (
        /** @type {Y.ContentType} */
        (d = (a = c._item.right) == null ? void 0 : a.content) == null ? void 0 : d.type
      );
      h instanceof $t && !h._item.deleted && h._item.id.client === h.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...h.toDelta()
      ]), h.doc.transact((f) => {
        h._item.delete(f);
      }));
      const u = Wu(
        c,
        t,
        n,
        i,
        s,
        r
      );
      u !== null && u.forEach((f) => {
        f !== null && o.push(f);
      });
    }
  };
  i === void 0 || s === void 0 ? e.toArray().forEach(l) : Po(e, new ls(s.ds, i.sv)).forEach(l);
  try {
    const c = e.getAttributes(i);
    i !== void 0 && (Tn(
      /** @type {Y.Item} */
      e._item,
      i
    ) ? Tn(
      /** @type {Y.Item} */
      e._item,
      s
    ) || (c.ychange = r ? r(
      "added",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "added" }) : c.ychange = r ? r(
      "removed",
      /** @type {Y.Item} */
      e._item.id
    ) : { type: "removed" });
    const a = t.node(e.nodeName, c, o);
    return n.mapping.set(e, a), a;
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, P), n.mapping.delete(e), null;
  }
}, Wu = (e, t, n, i, s, r) => {
  const o = [], l = e.toDelta(i, s, r);
  try {
    for (let c = 0; c < l.length; c++) {
      const a = l[c];
      o.push(t.text(a.insert, Zu(a.attributes, t)));
    }
  } catch {
    return e.doc.transact((a) => {
      e._item.delete(a);
    }, P), null;
  }
  return o;
}, Yu = (e, t) => {
  const n = new at(), i = e.map((s) => ({
    // @ts-ignore
    insert: s.text,
    attributes: il(s.marks, t)
  }));
  return n.applyDelta(i), t.mapping.set(n, e), n;
}, Gu = (e, t) => {
  const n = new et(e.type.name);
  for (const i in e.attrs) {
    const s = e.attrs[i];
    s !== null && i !== "ychange" && n.setAttribute(i, s);
  }
  return n.insert(
    0,
    jn(e).map(
      (i) => Oi(i, t)
    )
  ), t.mapping.set(n, e), n;
}, Oi = (e, t) => e instanceof Array ? Yu(e, t) : Gu(e, t), rr = (e) => typeof e == "object" && e !== null, fs = (e, t) => {
  const n = Object.keys(e).filter((s) => e[s] !== null);
  let i = n.length === Object.keys(t).filter((s) => t[s] !== null).length;
  for (let s = 0; s < n.length && i; s++) {
    const r = n[s], o = e[r], l = t[r];
    i = r === "ychange" || o === l || rr(o) && rr(l) && fs(o, l);
  }
  return i;
}, jn = (e) => {
  const t = e.content.content, n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s.isText) {
      const r = [];
      for (let o = t[i]; i < t.length && o.isText; o = t[++i])
        r.push(o);
      i--, n.push(r);
    } else
      n.push(s);
  }
  return n;
}, el = (e, t) => {
  const n = e.toDelta();
  return n.length === t.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (i, s) => i.insert === /** @type {any} */
    t[s].text && Yr(i.attributes || {}).length === t[s].marks.length && ue(i.attributes, (r, o) => {
      var d;
      const l = nl(o), c = t[s].marks;
      return c.find(
        /** @param {any} mark */
        (h) => h.type.name === l
      ) ? fs(r, (d = c.find(
        /** @param {any} mark */
        (h) => h.type.name === l
      )) == null ? void 0 : d.attrs) : !1;
    })
  );
}, Ne = (e, t) => {
  if (e instanceof et && !(t instanceof Array) && Ri(e, t)) {
    const n = jn(t);
    return e._length === n.length && fs(e.getAttributes(), t.attrs) && e.toArray().every(
      (i, s) => Ne(i, n[s])
    );
  }
  return e instanceof at && t instanceof Array && el(e, t);
}, Dn = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every(
  (n, i) => t[i] === n
), or = (e, t, n) => {
  const i = e.toArray(), s = jn(t), r = s.length, o = i.length, l = le(o, r);
  let c = 0, a = 0, d = !1;
  for (; c < l; c++) {
    const h = i[c], u = s[c];
    if (Dn(n.mapping.get(h), u))
      d = !0;
    else if (!Ne(h, u))
      break;
  }
  for (; c + a < l; a++) {
    const h = i[o - a - 1], u = s[r - a - 1];
    if (Dn(n.mapping.get(h), u))
      d = !0;
    else if (!Ne(h, u))
      break;
  }
  return {
    equalityFactor: c + a,
    foundMappedChild: d
  };
}, qu = (e) => {
  let t = "", n = e._start;
  const i = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof xt ? t += n.content.str : n.content instanceof H && (i[n.content.key] = null)), n = n.right;
  return {
    str: t,
    nAttrs: i
  };
}, Ju = (e, t, n) => {
  n.mapping.set(e, t);
  const { nAttrs: i, str: s } = qu(e), r = t.map((a) => ({
    insert: (
      /** @type {any} */
      a.text
    ),
    attributes: Object.assign({}, i, il(a.marks, n))
  })), { insert: o, remove: l, index: c } = Au(
    s,
    r.map((a) => a.insert).join("")
  );
  e.delete(c, l), e.insert(c, o), e.applyDelta(
    r.map((a) => ({ retain: a.insert.length, attributes: a.attributes }))
  );
}, Xu = /(.*)(--[a-zA-Z0-9+/=]{8})$/, nl = (e) => {
  var t;
  return ((t = Xu.exec(e)) == null ? void 0 : t[1]) ?? e;
}, Zu = (e, t) => {
  const n = [];
  for (const i in e)
    n.push(t.mark(nl(i), e[i]));
  return n;
}, il = (e, t) => {
  const n = {};
  return e.forEach((i) => {
    if (i.type.name !== "ychange") {
      const s = It(t.isOMark, i.type, () => !i.type.excludes(i.type));
      n[s ? `${i.type.name}--${$u(i.toJSON())}` : i.type.name] = i.attrs;
    }
  }), n;
}, Mi = (e, t, n, i) => {
  if (t instanceof et && t.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (i.mapping.set(t, n), t instanceof et) {
    const h = t.getAttributes(), u = n.attrs;
    for (const f in u)
      u[f] !== null ? h[f] !== u[f] && f !== "ychange" && t.setAttribute(f, u[f]) : t.removeAttribute(f);
    for (const f in h)
      u[f] === void 0 && t.removeAttribute(f);
  }
  const s = jn(n), r = s.length, o = t.toArray(), l = o.length, c = le(r, l);
  let a = 0, d = 0;
  for (; a < c; a++) {
    const h = o[a], u = s[a];
    if (!Dn(i.mapping.get(h), u))
      if (Ne(h, u))
        i.mapping.set(h, u);
      else
        break;
  }
  for (; d + a + 1 < c; d++) {
    const h = o[l - d - 1], u = s[r - d - 1];
    if (!Dn(i.mapping.get(h), u))
      if (Ne(h, u))
        i.mapping.set(h, u);
      else
        break;
  }
  e.transact(() => {
    for (; l - a - d > 0 && r - a - d > 0; ) {
      const u = o[a], f = s[a], g = o[l - d - 1], m = s[r - d - 1];
      if (u instanceof at && f instanceof Array)
        el(u, f) || Ju(u, f, i), a += 1;
      else {
        let w = u instanceof et && Ri(u, f), b = g instanceof et && Ri(g, m);
        if (w && b) {
          const C = or(
            /** @type {Y.XmlElement} */
            u,
            /** @type {PModel.Node} */
            f,
            i
          ), S = or(
            /** @type {Y.XmlElement} */
            g,
            /** @type {PModel.Node} */
            m,
            i
          );
          C.foundMappedChild && !S.foundMappedChild ? b = !1 : !C.foundMappedChild && S.foundMappedChild || C.equalityFactor < S.equalityFactor ? w = !1 : b = !1;
        }
        w ? (Mi(
          e,
          /** @type {Y.XmlFragment} */
          u,
          /** @type {PModel.Node} */
          f,
          i
        ), a += 1) : b ? (Mi(
          e,
          /** @type {Y.XmlFragment} */
          g,
          /** @type {PModel.Node} */
          m,
          i
        ), d += 1) : (i.mapping.delete(t.get(a)), t.delete(a, 1), t.insert(a, [
          Oi(f, i)
        ]), a += 1);
      }
    }
    const h = l - a - d;
    if (l === 1 && r === 0 && o[0] instanceof at ? (i.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : h > 0 && (t.slice(a, a + h).forEach((u) => i.mapping.delete(u)), t.delete(a, h)), a + d < r) {
      const u = [];
      for (let f = a; f < r - d; f++)
        u.push(Oi(s[f], i));
      t.insert(a, u);
    }
  }, P);
}, Ri = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, An = (e, t, n) => {
  if (e === 0)
    return ri(t, 0, -1);
  let i = t._first === null ? null : (
    /** @type {Y.ContentType} */
    t._first.content.type
  );
  for (; i !== null && t !== i; ) {
    if (i instanceof at) {
      if (i._length >= e)
        return ri(i, e, -1);
      if (e -= i._length, i._item !== null && i._item.next !== null)
        i = /** @type {Y.ContentType} */
        i._item.next.content.type;
      else {
        do
          i = i._item === null ? null : i._item.parent, e--;
        while (i !== t && i !== null && i._item !== null && i._item.next === null);
        i !== null && i !== t && (i = i._item === null ? null : (
          /** @type {Y.ContentType} */
          /** @type Y.Item */
          i._item.next.content.type
        ));
      }
    } else {
      const s = (
        /** @type {any} */
        (n.get(i) || { nodeSize: 0 }).nodeSize
      );
      if (i._first !== null && e < s)
        i = /** @type {Y.ContentType} */
        i._first.content.type, e--;
      else {
        if (e === 1 && i._length === 0 && s > 1)
          return new vn(i._item === null ? null : i._item.id, i._item === null ? Ae(i) : null, null);
        if (e -= s, i._item !== null && i._item.next !== null)
          i = /** @type {Y.ContentType} */
          i._item.next.content.type;
        else {
          if (e === 0)
            return i = i._item === null ? i : i._item.parent, new vn(i._item === null ? null : i._item.id, i._item === null ? Ae(i) : null, null);
          do
            i = /** @type {Y.Item} */
            i._item.parent, e--;
          while (i !== t && /** @type {Y.Item} */
          i._item.next === null);
          i !== t && (i = /** @type {Y.ContentType} */
          /** @type {Y.Item} */
          /** @type {Y.Item} */
          i._item.next.content.type);
        }
      }
    }
    if (i === null)
      throw it();
    if (e === 0 && i.constructor !== at && i !== t)
      return Qu(i._item.parent, i._item);
  }
  return ri(t, t._length, -1);
}, Qu = (e, t) => {
  let n = null, i = null;
  return e._item === null ? i = Ae(e) : n = E(e._item.id.client, e._item.id.clock), new vn(n, i, t.id);
}, Se = (e, t, n, i) => {
  const s = _d(n, e);
  if (s === null || s.type !== t && !Ie(t, s.type._item))
    return null;
  let r = s.type, o = 0;
  if (r.constructor === at)
    o = s.index;
  else if (r._item === null || !r._item.deleted) {
    let l = r._first, c = 0;
    for (; c < r._length && c < s.index && l !== null; ) {
      if (!l.deleted) {
        const a = (
          /** @type {Y.ContentType} */
          l.content.type
        );
        c++, a instanceof at ? o += a._length : o += /** @type {any} */
        i.get(a).nodeSize;
      }
      l = /** @type {Y.Item} */
      l.right;
    }
    o += 1;
  }
  for (; r !== t && r._item !== null; ) {
    const l = r._item.parent;
    if (l._item === null || !l._item.deleted) {
      o += 1;
      let c = (
        /** @type {Y.AbstractType} */
        l._first
      );
      for (; c !== null; ) {
        const a = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (a === r)
          break;
        c.deleted || (a instanceof at ? o += a._length : o += /** @type {any} */
        i.get(a).nodeSize), c = c.right;
      }
    }
    r = /** @type {Y.AbstractType} */
    l;
  }
  return o - 1;
}, tf = (e) => {
  const t = At.getState(e).undoManager;
  if (t != null)
    return t.undo(), !0;
}, ef = (e) => {
  const t = At.getState(e).undoManager;
  if (t != null)
    return t.redo(), !0;
}, nf = /* @__PURE__ */ new Set(["paragraph"]), sf = (e, t) => !(e instanceof R) || !(e.content instanceof vt) || !(e.content.type instanceof $t || e.content.type instanceof et && t.has(e.content.type.nodeName)) || e.content.type._length === 0, rf = ({ protectedNodes: e = nf, trackedOrigins: t = [], undoManager: n = null } = {}) => new wr({
  key: At,
  state: {
    init: (i, s) => {
      const r = P.getState(s), o = n || new Oo(r.type, {
        trackedOrigins: new Set([P].concat(t)),
        deleteFilter: (l) => sf(l, e),
        captureTransaction: (l) => l.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: o,
        prevSel: null,
        hasUndoOps: o.undoStack.length > 0,
        hasRedoOps: o.redoStack.length > 0
      };
    },
    /**
     * @returns {any}
     */
    apply: (i, s, r, o) => {
      const l = P.getState(o).binding, c = s.undoManager, a = c.undoStack.length > 0, d = c.redoStack.length > 0;
      return l ? {
        undoManager: c,
        prevSel: Ii(l, r),
        hasUndoOps: a,
        hasRedoOps: d
      } : a !== s.hasUndoOps || d !== s.hasRedoOps ? Object.assign({}, s, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : s;
    }
  },
  view: (i) => {
    const s = P.getState(i.state), r = At.getState(i.state).undoManager;
    return r.on("stack-item-added", ({ stackItem: o }) => {
      const l = s.binding;
      l && o.meta.set(l, At.getState(i.state).prevSel);
    }), r.on("stack-item-popped", ({ stackItem: o }) => {
      const l = s.binding;
      l && (l.beforeTransactionSelection = o.meta.get(l) || l.beforeTransactionSelection);
    }), {
      destroy: () => {
        r.destroy();
      }
    };
  }
});
function ps(e) {
  return !!e.getMeta(P);
}
function of(e, t) {
  const n = P.getState(e);
  return Se(n.doc, n.type, t, n.binding.mapping) || 0;
}
function sl(e, t) {
  const n = P.getState(e);
  return An(t, n.type, n.binding.mapping);
}
var dn = class rl extends Cl {
  constructor(t, n) {
    super(t), this.yRelativePosition = n;
  }
  /**
   * Creates a CollaborationMappablePosition from a JSON object.
   */
  static fromJSON(t) {
    return new rl(t.position, t.yRelativePosition);
  }
  /**
   * Converts the CollaborationMappablePosition to a JSON object.
   */
  toJSON() {
    return {
      position: this.position,
      yRelativePosition: this.yRelativePosition
    };
  }
};
function lf(e, t) {
  const n = sl(t, e);
  return new dn(e, n);
}
function cf(e, t, n) {
  const i = e instanceof dn ? e.yRelativePosition : null;
  if (ps(t) && i) {
    const o = of(n, i);
    return {
      position: new dn(o, i),
      mapResult: null
    };
  }
  const s = Sl(e, t), r = s.position.position;
  return {
    position: new dn(
      r,
      i ?? sl(n, r)
    ),
    mapResult: s.mapResult
  };
}
Ue.create({
  name: "collaboration",
  priority: 1e3,
  addOptions() {
    return {
      document: null,
      field: "default",
      fragment: null,
      provider: null
    };
  },
  addStorage() {
    return {
      isDisabled: !1
    };
  },
  onCreate() {
    this.editor.extensionManager.extensions.find((e) => e.name === "undoRedo") && console.warn(
      '[tiptap warn]: "@tiptap/extension-collaboration" comes with its own history support and is not compatible with "@tiptap/extension-undo-redo".'
    );
  },
  onBeforeCreate() {
    this.editor.utils.getUpdatedPosition = (e, t) => cf(e, t, this.editor.state), this.editor.utils.createMappablePosition = (e) => lf(e, this.editor.state);
  },
  addCommands() {
    return {
      undo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), At.getState(t).undoManager.undoStack.length === 0 ? !1 : n ? tf(t) : !0),
      redo: () => ({ tr: e, state: t, dispatch: n }) => (e.setMeta("preventDispatch", !0), At.getState(t).undoManager.redoStack.length === 0 ? !1 : n ? ef(t) : !0)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo()
    };
  },
  addProseMirrorPlugins() {
    const e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), t = rf(this.options.yUndoOptions), n = t.spec.view;
    t.spec.view = (r) => {
      const { undoManager: o } = At.getState(r.state);
      o.restore && (o.restore(), o.restore = () => {
      });
      const l = n ? n(r) : void 0;
      return {
        destroy: () => {
          const c = o.trackedOrigins.has(o), a = o._observers;
          o.restore = () => {
            c && o.trackedOrigins.add(o), o.doc.on("afterTransaction", o.afterTransactionHandler), o._observers = a;
          }, l != null && l.destroy && l.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    };
    return [
      zu(e, i),
      t,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new Pe({
        key: new Yt("filterInvalidContent"),
        filterTransaction: (r) => {
          if (!ps(r))
            return !0;
          if (this.storage.isDisabled)
            return !1;
          if (!r.docChanged)
            return !0;
          try {
            return r.doc.check(), !0;
          } catch (o) {
            return this.storage.isDisabled = !0, this.editor.emit("contentError", {
              error: o,
              editor: this.editor,
              disableCollaboration: () => {
                var l;
                (l = e.doc) == null || l.destroy();
              }
            }), !1;
          }
        }
      })
    ].filter(Boolean);
  }
});
function lr(e) {
  if (!e.length)
    return vs.empty;
  const t = [], n = e[0].$from.node(0);
  return e.forEach((i) => {
    const s = i.$from.pos, r = i.$from.nodeAfter;
    r && t.push(
      Zl.node(s, s + r.nodeSize, {
        class: "ProseMirror-selectednoderange"
      })
    );
  }), vs.create(n, t);
}
function af(e, t, n) {
  const i = n.isText || n.isAtom ? 0 : 1;
  return {
    start: e + i,
    end: e + t - i
  };
}
function Wn(e, t, n, i = {}) {
  const s = [], r = e.node(0), { extendOnBoundaryOverlap: o = !0 } = i;
  typeof n == "number" && n >= 0 || (e.sameParent(t) ? n = Math.max(0, e.sharedDepth(t.pos) - 1) : n = e.sharedDepth(t.pos));
  const l = new Ql(e, t, n), c = l.depth === 0 ? 0 : r.resolve(l.start).posAtIndex(0);
  return l.parent.forEach((a, d) => {
    const h = c + d, u = h + a.nodeSize, f = af(h, a.nodeSize, a), g = o ? t.pos >= f.start && e.pos <= f.end : t.pos > f.start && e.pos < f.end;
    if (h < l.start || h >= l.end || !g)
      return;
    const m = new El(r.resolve(h), r.resolve(u));
    s.push(m);
  }), s;
}
var hf = class ol {
  constructor(t, n) {
    this.anchor = t, this.head = n;
  }
  map(t) {
    return new ol(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const n = t.resolve(this.anchor), i = t.resolve(this.head);
    return new Nt(n, i);
  }
}, Nt = class Mt extends Tl {
  constructor(t, n, i, s = 1) {
    const { doc: r } = t, o = t === n, l = t.pos === r.content.size && n.pos === r.content.size, c = o && !l ? r.resolve(n.pos + (s > 0 ? 1 : -1)) : n, a = o && l ? r.resolve(t.pos - (s > 0 ? 1 : -1)) : t, d = Wn(a.min(c), a.max(c), i), h = c.pos >= t.pos ? d[0].$from : d[d.length - 1].$to, u = c.pos >= t.pos ? d[d.length - 1].$to : d[0].$from;
    super(h, u, d), this.depth = i;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(t) {
    return t instanceof Mt && t.$from.pos === this.$from.pos && t.$to.pos === this.$to.pos;
  }
  map(t, n) {
    const i = t.resolve(n.map(this.anchor)), s = t.resolve(n.map(this.head));
    return new Mt(i, s);
  }
  toJSON() {
    return {
      type: "nodeRange",
      anchor: this.anchor,
      head: this.head
    };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: t } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const s = this.ranges.slice(0, -1), r = s[0].$from, o = s[s.length - 1].$to;
      return new Mt(r, o, this.depth);
    }
    const n = this.ranges[0], i = t.resolve(Math.max(0, n.$from.pos - 1));
    return new Mt(this.$anchor, i, this.depth);
  }
  extendForwards() {
    const { doc: t } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const s = this.ranges.slice(1), r = s[0].$from, o = s[s.length - 1].$to;
      return new Mt(o, r, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], i = t.resolve(Math.min(t.content.size, n.$to.pos + 1));
    return new Mt(this.$anchor, i, this.depth);
  }
  static fromJSON(t, n) {
    return new Mt(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(t, n, i, s, r = 1) {
    return new this(t.resolve(n), t.resolve(i), s, r);
  }
  getBookmark() {
    return new hf(this.anchor, this.head);
  }
};
Nt.prototype.visible = !1;
function sn(e) {
  return e instanceof Nt;
}
Ue.create({
  name: "nodeRange",
  addOptions() {
    return {
      depth: void 0,
      key: "Mod"
    };
  },
  addKeyboardShortcuts() {
    return {
      // extend NodeRangeSelection upwards
      "Shift-ArrowUp": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: i } = e, { doc: s, selection: r, tr: o } = i, { anchor: l, head: c } = r;
        if (!sn(r)) {
          const d = Nt.create(s, l, c, t, -1);
          return o.setSelection(d), n.dispatch(o), !0;
        }
        const a = r.extendBackwards();
        return o.setSelection(a), n.dispatch(o), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: i } = e, { doc: s, selection: r, tr: o } = i, { anchor: l, head: c } = r;
        if (!sn(r)) {
          const d = Nt.create(s, l, c, t);
          return o.setSelection(d), n.dispatch(o), !0;
        }
        const a = r.extendForwards();
        return o.setSelection(a), n.dispatch(o), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: e }) => {
        const { depth: t } = this.options, { view: n, state: i } = e, { doc: s, tr: r } = i, o = Nt.create(s, 0, s.content.size, t);
        return r.setSelection(o), n.dispatch(r), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: e } = this.editor.state;
    sn(e) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let e = !1, t = !1;
    return [
      new Pe({
        key: new Yt("nodeRange"),
        props: {
          attributes: () => e ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, i) => {
              const { key: s } = this.options, r = /Mac/.test(navigator.platform), o = !!i.shiftKey, l = !!i.ctrlKey, c = !!i.altKey, a = !!i.metaKey, d = r ? a : l;
              return (s == null || s === "Shift" && o || s === "Control" && l || s === "Alt" && c || s === "Meta" && a || s === "Mod" && d) && (t = !0), t && document.addEventListener(
                "mouseup",
                () => {
                  t = !1;
                  const { state: h } = n, { doc: u, selection: f, tr: g } = h, { $anchor: m, $head: w } = f;
                  if (m.sameParent(w))
                    return;
                  const b = Nt.create(u, m.pos, w.pos, this.options.depth);
                  g.setSelection(b), n.dispatch(g);
                },
                { once: !0 }
              ), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: i } = n, s = sn(i);
            if (e = !1, !t)
              return s ? (e = !0, lr(i.ranges)) : null;
            const { $from: r, $to: o } = i;
            if (!s && r.sameParent(o))
              return null;
            const l = Wn(r, o, this.options.depth);
            return l.length ? (e = !0, lr(l)) : null;
          }
        }
      })
    ];
  }
});
function df(e, t) {
  const n = getComputedStyle(e);
  if (t)
    return t.filter((s) => s.trim().length > 0).map((s) => `${s}:${n.getPropertyValue(s)};`).join("");
  let i = "";
  for (let s = 0; s < n.length; s += 1)
    i += `${n[s]}:${n.getPropertyValue(n[s])};`;
  return i;
}
function uf(e, t) {
  const n = e.cloneNode(!0), i = [e, ...Array.from(e.getElementsByTagName("*"))], s = [n, ...Array.from(n.getElementsByTagName("*"))];
  return i.forEach((r, o) => {
    s[o].style.cssText = df(r, t);
  }), n;
}
var ff = {
  id: "listItemFirstChild",
  evaluate: ({ parent: e, isFirst: t }) => t && e && ["listItem", "taskItem"].includes(e.type.name) ? 1e3 : 0
}, pf = {
  id: "listWrapperDeprioritize",
  evaluate: ({ node: e }) => {
    const t = ["listItem", "taskItem"], n = e.firstChild;
    return n && t.includes(n.type.name) ? 1e3 : 0;
  }
}, gf = {
  id: "tableStructure",
  evaluate: ({ node: e, parent: t }) => ["tableRow", "tableCell", "tableHeader"].includes(e.type.name) || t && t.type.name === "tableHeader" ? 1e3 : 0
}, mf = {
  id: "inlineContent",
  evaluate: ({ node: e }) => e.isInline || e.isText ? 1e3 : 0
}, wf = [
  ff,
  pf,
  gf,
  mf
], cr = {
  edges: ["left", "top"],
  threshold: 12,
  strength: 500
};
function ai(e) {
  return e === void 0 || e === "left" ? { ...cr } : e === "right" ? { edges: ["right", "top"], threshold: 12, strength: 500 } : e === "both" ? { edges: ["left", "right", "top"], threshold: 12, strength: 500 } : e === "none" ? { edges: [], threshold: 0, strength: 0 } : { ...cr, ...e };
}
function bf(e, t, n) {
  if (n.edges.length === 0)
    return !1;
  const i = t.getBoundingClientRect(), { threshold: s, edges: r } = n;
  return r.some((o) => o === "left" ? e.x - i.left < s : o === "right" ? i.right - e.x < s : o === "top" ? e.y - i.top < s : o === "bottom" ? i.bottom - e.y < s : !1);
}
function yf(e, t, n, i) {
  return !t || n.edges.length === 0 ? 0 : bf(e, t, n) ? n.strength * i : 0;
}
var xf = 1e3;
function ar(e, t, n, i) {
  let s = xf, r = !1;
  if (t.every((l) => {
    const c = l.evaluate(e);
    return s -= c, s <= 0 ? (r = !0, !1) : !0;
  }), r)
    return -1;
  const o = e.view.nodeDOM(e.pos);
  return s -= yf(i, o, n, e.depth), s <= 0 ? -1 : s;
}
function hr(e, t, n) {
  return Array.from({ length: t }, (s, r) => t - 1 - r).some((s) => n.includes(e.node(s).type.name));
}
function vf(e, t, n) {
  if (!Number.isFinite(t.x) || !Number.isFinite(t.y))
    return null;
  const i = e.posAtCoords({ left: t.x, top: t.y });
  if (!i)
    return null;
  const { doc: s } = e.state, r = s.resolve(i.pos), o = [];
  n.defaultRules && o.push(...wf), o.push(...n.rules);
  const c = Array.from({ length: r.depth }, (h, u) => r.depth - u).map((h) => {
    const u = r.node(h), f = r.before(h);
    if (n.allowedContainers && h > 0 && !hr(r, h, n.allowedContainers))
      return null;
    const g = h > 0 ? r.node(h - 1) : null, m = h > 0 ? r.index(h - 1) : 0, w = g ? g.childCount : 1, b = {
      node: u,
      pos: f,
      depth: h,
      parent: g,
      index: m,
      isFirst: m === 0,
      isLast: m === w - 1,
      $pos: r,
      view: e
    }, C = ar(b, o, n.edgeDetection, t);
    if (C < 0)
      return null;
    const S = e.nodeDOM(f);
    return { node: u, pos: f, depth: h, score: C, dom: S };
  }).filter((h) => h !== null), a = r.nodeAfter;
  if (a && a.isAtom && !a.isInline) {
    const h = i.pos, u = r.depth + 1, f = r.parent, g = r.index(), m = f.childCount;
    let w = !0;
    if (n.allowedContainers && (w = hr(r, u, n.allowedContainers)), w) {
      const b = {
        node: a,
        pos: h,
        depth: u,
        parent: f,
        index: g,
        isFirst: g === 0,
        isLast: g === m - 1,
        $pos: r,
        view: e
      }, C = ar(b, o, n.edgeDetection, t);
      if (C >= 0) {
        const S = e.nodeDOM(h);
        S && c.push({ node: a, pos: h, depth: u, score: C, dom: S });
      }
    }
  }
  if (c.length === 0)
    return null;
  c.sort((h, u) => u.score !== h.score ? u.score - h.score : u.depth - h.depth);
  const d = c[0];
  return d.dom ? {
    node: d.node,
    pos: d.pos,
    dom: d.dom
  } : null;
}
function Sf(e, t) {
  let n = e;
  for (; n != null && n.parentElement && n.parentElement !== t.dom; )
    n = n.parentElement;
  return (n == null ? void 0 : n.parentElement) === t.dom ? n : void 0;
}
function dr(e) {
  return Number.isFinite(e.top) && Number.isFinite(e.bottom) && Number.isFinite(e.left) && Number.isFinite(e.right) && e.width > 0 && e.height > 0;
}
function Cf(e, t, n, i = 5) {
  if (!Number.isFinite(t) || !Number.isFinite(n))
    return null;
  const s = e.dom, r = s.firstElementChild, o = s.lastElementChild;
  if (!r || !o)
    return null;
  const l = r.getBoundingClientRect(), c = o.getBoundingClientRect();
  if (!dr(l) || !dr(c))
    return null;
  const a = Math.min(Math.max(l.top + i, n), c.bottom - i), d = 0.5, h = Math.abs(l.left - c.left) < d, u = Math.abs(l.right - c.right) < d;
  let f = l;
  h && u && (f = l);
  const g = Math.min(Math.max(f.left + i, t), f.right - i);
  return !Number.isFinite(g) || !Number.isFinite(a) ? null : { x: g, y: a };
}
var ll = (e) => {
  const { x: t, y: n, editor: i, nestedOptions: s } = e, { view: r, state: o } = i, l = Cf(r, t, n, 5);
  if (!l)
    return { resultElement: null, resultNode: null, pos: null };
  const { x: c, y: a } = l;
  if (s != null && s.enabled) {
    const g = vf(r, { x: c, y: a }, s);
    return g ? {
      resultElement: g.dom,
      resultNode: g.node,
      pos: g.pos
    } : { resultElement: null, resultNode: null, pos: null };
  }
  const d = r.root.elementsFromPoint(c, a);
  let h;
  if (Array.prototype.some.call(d, (g) => {
    if (!r.dom.contains(g))
      return !1;
    const m = Sf(g, r);
    return m ? (h = m, !0) : !1;
  }), !h) {
    const g = r.posAtCoords({ left: c, top: a });
    if (g) {
      const m = o.doc.resolve(g.pos), w = Math.min(m.depth, 1), b = w > 0 ? m.before(w) : m.pos, C = o.doc.nodeAt(b);
      if (C) {
        const S = r.nodeDOM(b);
        return {
          resultElement: S instanceof HTMLElement ? S : null,
          resultNode: C,
          pos: b
        };
      }
    }
    return { resultElement: null, resultNode: null, pos: null };
  }
  let u;
  try {
    u = r.posAtDOM(h, 0);
  } catch {
    return { resultElement: null, resultNode: null, pos: null };
  }
  const f = o.doc.nodeAt(u);
  if (!f) {
    const g = o.doc.resolve(u), m = g.parent;
    return {
      resultElement: h,
      resultNode: m,
      pos: g.start()
    };
  }
  return {
    resultElement: h,
    resultNode: f,
    pos: u
  };
};
function cl(e, t) {
  const n = e.nodeDOM(t);
  if (n instanceof Element && n !== e.dom)
    return n;
  const { node: i, offset: s } = e.domAtPos(t), r = i.childNodes[s];
  return r instanceof Element ? r : i instanceof Element ? i : i.nodeType === Node.TEXT_NODE && i.parentElement ? i.parentElement : null;
}
function kf(e, t) {
  const n = cl(e, t);
  return (n ? getComputedStyle(n).direction : getComputedStyle(e.dom).direction) || "ltr";
}
function al(e) {
  var t;
  (t = e.parentNode) == null || t.removeChild(e);
}
function _f(e, t) {
  return e === "rtl" ? t : 0;
}
function Ef(e, t, n, i) {
  const { doc: s } = t.view.state;
  if (n != null && n.enabled && (i != null && i.node) && i.pos >= 0) {
    const a = i.pos, d = i.pos + i.node.nodeSize;
    return [
      {
        $from: s.resolve(a),
        $to: s.resolve(d)
      }
    ];
  }
  const r = ll({
    editor: t,
    x: e.clientX,
    y: e.clientY,
    nestedOptions: n
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const o = r.resultNode.isText || r.resultNode.isAtom ? 0 : -1, l = s.resolve(r.pos), c = s.resolve(r.pos + r.resultNode.nodeSize + o);
  return Wn(l, c, 0, { extendOnBoundaryOverlap: !1 });
}
function Tf(e, t, n, i, s) {
  const { view: r } = t;
  if (!e.dataTransfer)
    return;
  const { empty: o, $from: l, $to: c } = r.state.selection, a = Ef(e, t, n, i), d = Wn(l, c, 0, { extendOnBoundaryOverlap: !1 }), h = d.some((F) => a.find((M) => M.$from === F.$from && M.$to === F.$to)), u = o || !h ? a : d;
  if (!u.length)
    return;
  const { tr: f } = r.state, g = document.createElement("div"), m = u[0].$from.pos, w = u[u.length - 1].$to.pos, b = kf(r, m);
  g.setAttribute("dir", b);
  const C = (n == null ? void 0 : n.enabled) && (i == null ? void 0 : i.node);
  let S, T;
  C ? (S = r.state.doc.slice(m, w), T = di.create(r.state.doc, m)) : (T = Nt.create(r.state.doc, m, w), S = T.content()), u.forEach((F) => {
    const M = cl(r, F.$from.pos);
    if (!M)
      return;
    const $ = uf(M, s);
    $.style.margin = "0", g.append($);
  }), g.style.position = "absolute", g.style.top = "-10000px", document.body.append(g), e.dataTransfer.clearData();
  const W = g.getBoundingClientRect(), D = _f(b, W.width);
  e.dataTransfer.setDragImage(g, D, 0);
  let y = !1;
  const k = () => {
    y || (y = !0, al(g), document.removeEventListener("drop", k), document.removeEventListener("dragend", k));
  }, B = T instanceof di ? T : void 0;
  r.dragging = { slice: S, move: !0, node: B }, f.setSelection(T), r.dispatch(f), document.addEventListener("drop", k), document.addEventListener("dragend", k);
}
var ur = (e, t) => {
  const n = e.resolve(t), { depth: i } = n;
  return i === 0 ? t : n.pos - n.parentOffset - 1;
}, fr = (e, t) => {
  const n = e.nodeAt(t), i = e.resolve(t);
  let { depth: s } = i, r = n;
  for (; s > 0; ) {
    const o = i.node(s);
    s -= 1, s === 0 && (r = o);
  }
  return r;
}, hi = (e, t) => {
  const n = P.getState(e);
  return n ? An(t, n.type, n.binding.mapping) : null;
}, Df = (e, t) => {
  const n = P.getState(e);
  return n ? Se(n.doc, n.type, t, n.binding.mapping) || 0 : -1;
}, pr = (e, t) => {
  let n = t;
  for (; n != null && n.parentNode && n.parentNode !== e.dom; )
    n = n.parentNode;
  return n;
}, hl = new Yt("dragHandle"), dl = ({
  pluginKey: e = hl,
  element: t,
  editor: n,
  computePositionConfig: i,
  getReferencedVirtualElement: s,
  onNodeChange: r,
  onElementDragStart: o,
  onElementDragEnd: l,
  nestedOptions: c,
  dragImageProperties: a
}) => {
  const d = document.createElement("div");
  let h = !1, u = null, f = -1, g, m = null, w = null;
  function b() {
    t && (t.style.visibility = "hidden", t.style.pointerEvents = "none");
  }
  function C() {
    if (t) {
      if (!n.isEditable) {
        b();
        return;
      }
      t.style.visibility = "", t.style.pointerEvents = "auto";
    }
  }
  function S(y) {
    const k = (s == null ? void 0 : s()) || {
      getBoundingClientRect: () => y.getBoundingClientRect()
    };
    Pi(k, t, i).then((B) => {
      Object.assign(t.style, {
        position: B.strategy,
        left: `${B.x}px`,
        top: `${B.y}px`
      });
    });
  }
  function T(y) {
    o == null || o(y), Tf(y, n, c, { node: u, pos: f }, a), t && (t.dataset.dragging = "true"), setTimeout(() => {
      t && (t.style.pointerEvents = "none");
    }, 0);
  }
  function W(y) {
    l == null || l(y), b(), t && (t.style.pointerEvents = "auto", t.dataset.dragging = "false");
  }
  function D() {
    if (kl()) {
      const y = n.view.dom;
      requestAnimationFrame(() => {
        y.isContentEditable && (y.contentEditable = "false", y.contentEditable = "true");
      });
    }
  }
  return d.appendChild(t), {
    unbind() {
      t.removeEventListener("dragstart", T), t.removeEventListener("dragend", W), document.removeEventListener("drop", D), m && (cancelAnimationFrame(m), m = null, w = null);
    },
    plugin: new Pe({
      key: typeof e == "string" ? new Yt(e) : e,
      state: {
        init() {
          return { locked: !1 };
        },
        apply(y, k, B, F) {
          const M = y.getMeta("lockDragHandle"), $ = y.getMeta("hideDragHandle");
          if (M !== void 0 && (h = M), $)
            return b(), h = !1, u = null, f = -1, r == null || r({ editor: n, node: null, pos: -1 }), k;
          if (y.docChanged && f !== -1 && t)
            if (ps(y)) {
              const K = Df(F, g);
              K !== f && (f = K);
            } else {
              const K = y.mapping.map(f);
              K !== f && (f = K, g = hi(F, f));
            }
          return k;
        }
      },
      view: (y) => {
        var k;
        return t.draggable = !0, t.style.pointerEvents = "auto", t.dataset.dragging = "false", (k = n.view.dom.parentElement) == null || k.appendChild(d), d.style.pointerEvents = "none", d.style.position = "absolute", d.style.top = "0", d.style.left = "0", t.addEventListener("dragstart", T), t.addEventListener("dragend", W), document.addEventListener("drop", D), {
          update(B, F) {
            if (!t)
              return;
            if (!n.isEditable) {
              b();
              return;
            }
            if (h ? t.draggable = !1 : t.draggable = !0, y.state.doc.eq(F.doc) || f === -1)
              return;
            let M = y.nodeDOM(f);
            if (M = pr(y, M), M === y.dom || (M == null ? void 0 : M.nodeType) !== 1)
              return;
            const $ = y.posAtDOM(M, 0), K = fr(n.state.doc, $), _ = ur(n.state.doc, $);
            u = K, f = _, g = hi(y.state, f), r == null || r({ editor: n, node: u, pos: f }), S(M);
          },
          // TODO: Kills even on hot reload
          destroy() {
            t.removeEventListener("dragstart", T), t.removeEventListener("dragend", W), document.removeEventListener("drop", D), m && (cancelAnimationFrame(m), m = null, w = null), t && al(d);
          }
        };
      },
      props: {
        handleDOMEvents: {
          keydown(y) {
            return !t || h || y.hasFocus() && (b(), u = null, f = -1, r == null || r({ editor: n, node: null, pos: -1 })), !1;
          },
          mouseleave(y, k) {
            return h || k.target && !d.contains(k.relatedTarget) && (b(), u = null, f = -1, r == null || r({ editor: n, node: null, pos: -1 })), !1;
          },
          mousemove(y, k) {
            return !t || h || (w = { x: k.clientX, y: k.clientY }, m) || (m = requestAnimationFrame(() => {
              if (m = null, !w)
                return;
              const { x: B, y: F } = w;
              w = null;
              const M = ll({
                x: B,
                y: F,
                editor: n,
                nestedOptions: c
              });
              if (!M.resultElement)
                return;
              let $ = M.resultElement, K = M.resultNode, _ = M.pos;
              if (!(c != null && c.enabled)) {
                if ($ = pr(y, $), $ === y.dom || ($ == null ? void 0 : $.nodeType) !== 1)
                  return;
                const dt = y.posAtDOM($, 0);
                K = fr(n.state.doc, dt), _ = ur(n.state.doc, dt);
              }
              K !== u && (u = K, f = _ ?? -1, g = hi(y.state, f), r == null || r({ editor: n, node: u, pos: f }), S($), C());
            })), !1;
          }
        }
      }
    })
  };
};
function ul(e) {
  var t, n;
  return e === !1 || e === void 0 ? {
    enabled: !1,
    rules: [],
    defaultRules: !0,
    allowedContainers: void 0,
    edgeDetection: ai("none")
  } : e === !0 ? {
    enabled: !0,
    rules: [],
    defaultRules: !0,
    allowedContainers: void 0,
    edgeDetection: ai("left")
  } : {
    enabled: !0,
    rules: (t = e.rules) != null ? t : [],
    defaultRules: (n = e.defaultRules) != null ? n : !0,
    allowedContainers: e.allowedContainers,
    edgeDetection: ai(e.edgeDetection)
  };
}
var Ni = {
  placement: "left-start",
  strategy: "absolute"
};
Ue.create({
  name: "dragHandle",
  addOptions() {
    return {
      render() {
        const e = document.createElement("div");
        return e.classList.add("drag-handle"), e;
      },
      computePositionConfig: {},
      locked: !1,
      onNodeChange: () => null,
      onElementDragStart: void 0,
      onElementDragEnd: void 0,
      nested: !1,
      dragImageProperties: void 0
    };
  },
  addCommands() {
    return {
      lockDragHandle: () => ({ editor: e }) => (this.options.locked = !0, e.commands.setMeta("lockDragHandle", this.options.locked)),
      unlockDragHandle: () => ({ editor: e }) => (this.options.locked = !1, e.commands.setMeta("lockDragHandle", this.options.locked)),
      toggleDragHandle: () => ({ editor: e }) => (this.options.locked = !this.options.locked, e.commands.setMeta("lockDragHandle", this.options.locked))
    };
  },
  addProseMirrorPlugins() {
    const e = this.options.render(), t = ul(this.options.nested);
    return [
      dl({
        computePositionConfig: { ...Ni, ...this.options.computePositionConfig },
        getReferencedVirtualElement: this.options.getReferencedVirtualElement,
        element: e,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange,
        onElementDragStart: this.options.onElementDragStart,
        onElementDragEnd: this.options.onElementDragEnd,
        nestedOptions: t,
        dragImageProperties: this.options.dragImageProperties
      }).plugin
    ];
  }
});
var Af = (e) => {
  const {
    className: t = "drag-handle",
    children: n,
    editor: i,
    pluginKey: s = hl,
    onNodeChange: r,
    onElementDragStart: o,
    onElementDragEnd: l,
    getReferencedVirtualElement: c,
    computePositionConfig: a = Ni,
    nested: d = !1
  } = e, [h] = U(() => typeof document > "u" ? null : document.createElement("div")), u = ht(() => ul(d), [JSON.stringify(d)]);
  return Z(() => {
    h && (h.className = t, h.style.visibility = "hidden", h.style.position = "absolute", h.dataset.dragging = "false");
  }, [t, h]), Z(() => {
    if (!h || i.isDestroyed)
      return;
    const { plugin: f, unbind: g } = dl({
      editor: i,
      element: h,
      pluginKey: s,
      computePositionConfig: {
        ...Ni,
        ...a
      },
      onElementDragStart: o,
      onElementDragEnd: l,
      onNodeChange: r,
      getReferencedVirtualElement: c,
      nestedOptions: u
    });
    return i.registerPlugin(f), () => {
      i.isDestroyed || i.unregisterPlugin(s), g();
    };
  }, [
    h,
    i,
    r,
    c,
    s,
    a,
    o,
    l,
    u
  ]), h ? $i(n, h) : null;
}, If = Af;
function Bp() {
  var D, y, k, B, F, M, $, K;
  const e = j(), t = Q(), { t: n } = J(), [i, s] = U(null), [r, o] = U(-1), [l, c] = U(!1), a = (y = (D = e == null ? void 0 : e.extensionManager) == null ? void 0 : D.extensions) == null ? void 0 : y.some(
    (_) => (_ == null ? void 0 : _.name) === ic.name
  ), d = (B = (k = e == null ? void 0 : e.extensionManager) == null ? void 0 : k.extensions) == null ? void 0 : B.some(
    (_) => (_ == null ? void 0 : _.name) === ec.name
  ), h = (M = (F = e == null ? void 0 : e.extensionManager) == null ? void 0 : F.extensions) == null ? void 0 : M.some(
    (_) => (_ == null ? void 0 : _.name) === tc.name
  );
  function u() {
    const _ = e.chain();
    _.setNodeSelection(r).unsetAllMarks(), (i == null ? void 0 : i.type.name) !== "paragraph" && _.setParagraph(), _.run();
  }
  function f() {
    e.chain().focus().setNodeSelection(r).run(), document.execCommand("copy");
  }
  function g() {
    e.commands.setNodeSelection(r);
    const { $anchor: _ } = e.state.selection, dt = _.node(1) || e.state.selection.node;
    e.chain().setMeta("hideDragHandle", !0).insertContentAt(r + ((i == null ? void 0 : i.nodeSize) || 0), dt.toJSON()).run();
  }
  function m(_) {
    e.commands.setTextAlign(_);
  }
  function w() {
    const _ = Cs(e.state.tr, r, 1);
    _.setMeta("hideDragHandle", !0), e.view.dispatch && e.view.dispatch(_);
  }
  function b() {
    const _ = Cs(e.state.tr, r, -1);
    e.view.dispatch && e.view.dispatch(_);
  }
  function C() {
    e.chain().setMeta("hideDragHandle", !0).setNodeSelection(r).deleteSelection().run();
  }
  const S = O(
    (_) => {
      _.node && s(_.node), o(_.pos), requestAnimationFrame(() => {
        _.editor.commands.focus();
      });
    },
    []
  ), T = (_) => {
    var dt;
    if (_.preventDefault(), r !== -1) {
      const Ge = (i == null ? void 0 : i.nodeSize) || 0, Zt = r + Ge, gs = (i == null ? void 0 : i.type.name) === "paragraph" && ((dt = i == null ? void 0 : i.content) == null ? void 0 : dt.size) === 0, fl = gs ? r + 2 : Zt + 2;
      e.chain().command(({ dispatch: ms, tr: Yn, state: ws }) => ms ? (gs ? Yn.insertText("/", r, r + 1) : Yn.insert(
        Zt,
        ws.schema.nodes.paragraph.create(null, [ws.schema.text("/")])
      ), ms(Yn)) : !0).focus(fl).run();
    }
  };
  Z(() => (l ? e.commands.setMeta("lockDragHandle", !0) : e.commands.setMeta("lockDragHandle", !1), () => {
    e.commands.setMeta("lockDragHandle", !1);
  }), [l]);
  const W = (_) => {
    t && c(_);
  };
  return /* @__PURE__ */ p(
    If,
    {
      className: "richtext-transition-all richtext-duration-200 richtext-ease-out",
      editor: e,
      onNodeChange: S,
      pluginKey: "RichTextBubbleMenuDragHandle",
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-0.5", children: [
        /* @__PURE__ */ p(
          v,
          {
            action: T,
            disabled: !t,
            icon: "Plus",
            tooltip: n("editor.draghandle.insertBlock")
          }
        ),
        /* @__PURE__ */ p(
          v,
          {
            disabled: !t,
            icon: "Grip",
            tooltip: n("editor.draghandle.grip"),
            action: (_) => {
              _.preventDefault(), _.stopPropagation(), W(!l);
            }
          }
        ),
        /* @__PURE__ */ x(sc, { onOpenChange: W, open: l, children: [
          /* @__PURE__ */ p(rc, { className: "richtext-pointer-events-none" }),
          /* @__PURE__ */ x(
            oc,
            {
              align: "start",
              className: "richtext-w-48",
              hideWhenDetached: !0,
              side: "bottom",
              sideOffset: 0,
              children: [
                /* @__PURE__ */ x(
                  Et,
                  {
                    className: "richtext-flex richtext-gap-3 richtext-bg-opacity-10 hover:richtext-bg-red-400 hover:richtext-bg-opacity-20 focus:richtext-bg-red-400 focus:richtext-bg-opacity-30 focus:richtext-text-red-500 dark:hover:richtext-bg-opacity-20 dark:hover:richtext-text-red-500",
                    onClick: C,
                    children: [
                      /* @__PURE__ */ p(rt, { name: "Trash2" }),
                      /* @__PURE__ */ p("span", { children: n("editor.remove") })
                    ]
                  }
                ),
                h ? /* @__PURE__ */ x(
                  Et,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: u,
                    children: [
                      /* @__PURE__ */ p(rt, { name: "PaintRoller" }),
                      /* @__PURE__ */ p("span", { children: n("editor.clear.tooltip") })
                    ]
                  }
                ) : null,
                /* @__PURE__ */ x(
                  Et,
                  {
                    className: "richtext-flex richtext-gap-3",
                    onClick: f,
                    children: [
                      /* @__PURE__ */ p(rt, { name: "Clipboard" }),
                      /* @__PURE__ */ p("span", { children: n("editor.copyToClipboard") })
                    ]
                  }
                ),
                /* @__PURE__ */ x(Et, { className: "richtext-flex richtext-gap-3", onClick: g, children: [
                  /* @__PURE__ */ p(rt, { name: "Copy" }),
                  /* @__PURE__ */ p("span", { children: n("editor.copy") })
                ] }),
                a || d ? /* @__PURE__ */ p(lc, {}) : null,
                a ? /* @__PURE__ */ x(ks, { children: [
                  /* @__PURE__ */ x(_s, { className: "richtext-flex richtext-gap-3", children: [
                    /* @__PURE__ */ p(rt, { name: "AlignCenter" }),
                    /* @__PURE__ */ p("span", { children: n("editor.textalign.tooltip") })
                  ] }),
                  /* @__PURE__ */ p(Es, { children: /* @__PURE__ */ x(Ts, { children: [
                    /* @__PURE__ */ x(
                      Et,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: () => m("left"),
                        children: [
                          /* @__PURE__ */ p(rt, { name: "AlignLeft" }),
                          /* @__PURE__ */ p("span", { children: n("editor.textalign.left.tooltip") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ x(
                      Et,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: () => m("center"),
                        children: [
                          /* @__PURE__ */ p(rt, { name: "AlignCenter" }),
                          /* @__PURE__ */ p("span", { children: n("editor.textalign.center.tooltip") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ x(
                      Et,
                      {
                        className: "richtext-flex richtext-gap-3",
                        onClick: () => m("right"),
                        children: [
                          /* @__PURE__ */ p(rt, { name: "AlignRight" }),
                          /* @__PURE__ */ p("span", { children: n("editor.textalign.right.tooltip") })
                        ]
                      }
                    )
                  ] }) })
                ] }) : null,
                d ? /* @__PURE__ */ x(ks, { children: [
                  /* @__PURE__ */ x(_s, { className: "richtext-flex richtext-gap-3", children: [
                    /* @__PURE__ */ p(rt, { name: "IndentIncrease" }),
                    /* @__PURE__ */ p("span", { children: n("editor.indent") })
                  ] }),
                  /* @__PURE__ */ p(Es, { children: /* @__PURE__ */ x(Ts, { children: [
                    /* @__PURE__ */ x(
                      Et,
                      {
                        className: "richtext-flex richtext-gap-3",
                        disabled: (($ = i == null ? void 0 : i.attrs) == null ? void 0 : $.indent) >= Ss.max,
                        onClick: w,
                        children: [
                          /* @__PURE__ */ p(rt, { name: "IndentIncrease" }),
                          /* @__PURE__ */ p("span", { children: n("editor.indent.tooltip") })
                        ]
                      }
                    ),
                    /* @__PURE__ */ x(
                      Et,
                      {
                        className: "richtext-flex richtext-gap-3",
                        disabled: ((K = i == null ? void 0 : i.attrs) == null ? void 0 : K.indent) <= Ss.min,
                        onClick: b,
                        children: [
                          /* @__PURE__ */ p(rt, { name: "IndentDecrease" }),
                          /* @__PURE__ */ p("span", { children: n("editor.outdent.tooltip") })
                        ]
                      }
                    )
                  ] }) })
                ] }) : null
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const gr = {
  plaintext: "Plain Text",
  js: "JavaScript",
  ts: "TypeScript",
  css: "CSS",
  html: "HTML",
  python: "Python",
  bash: "Bash"
};
function Of({ listLanguages: e }) {
  const { t } = J(), [n, i] = U(!1), s = j(), r = ht(() => {
    const { selection: l } = s.state, c = l.$from.parent;
    if (c.type.name === "codeBlock") {
      const a = c.attrs.language || "plaintext";
      return gr[a] || a;
    }
  }, [s.state, e]), o = ht(() => {
    let l = e || [];
    return e != null && e.includes("plaintext") || (l = ["plaintext", ...l]), l.map((c) => ({
      label: gr[c] || c,
      value: c
    }));
  }, [e]);
  return /* @__PURE__ */ x(Hi, { modal: !0, onOpenChange: i, open: n, children: [
    /* @__PURE__ */ p(
      zi,
      {
        asChild: !0,
        className: "hover:richtext-bg-accent data-[state=on]:richtext-bg-accent",
        children: /* @__PURE__ */ x(v, { dataState: !!r, children: [
          r ? /* @__PURE__ */ p(I, { children: r }) : /* @__PURE__ */ p(I, { children: t("editor.paragraph.tooltip") }),
          /* @__PURE__ */ p(
            rt,
            {
              className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
              name: "MenuDown"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ p(
      Fi,
      {
        align: "start",
        className: "!richtext-w-[initial] !richtext-p-[4px]",
        hideWhenDetached: !0,
        side: "bottom",
        children: o == null ? void 0 : o.map((l) => /* @__PURE__ */ x(
          "div",
          {
            className: "richtext-flex richtext-w-full richtext-items-center richtext-gap-3 richtext-rounded-sm !richtext-border-none !richtext-bg-transparent richtext-px-2 richtext-py-1.5 richtext-text-left richtext-text-sm richtext-text-foreground !richtext-outline-none richtext-transition-colors hover:!richtext-bg-accent",
            onClick: (c) => {
              c.preventDefault(), s.chain().focus().setCodeBlock({ language: l.value }).run(), i(!1);
            },
            children: [
              /* @__PURE__ */ p("div", { className: "!richtext-min-w-[20px]", children: r === l.value && /* @__PURE__ */ p(fi, { size: 16 }) }),
              /* @__PURE__ */ p("div", { className: "richtext-flex richtext-items-center richtext-gap-1", children: l.label })
            ]
          },
          l.value
        ))
      }
    )
  ] });
}
function $p() {
  const e = Q(), t = j(), n = Vi(Gn.name), i = O(({ editor: c }) => c.isActive(Gn.name), []), s = ht(() => {
    var c, a, d;
    return n ? ((d = (a = (c = n.options) == null ? void 0 : c.lowlight) == null ? void 0 : a.listLanguages) == null ? void 0 : d.call(a)) || ["plaintext", "html", "css", "js", "ts"] : [];
  }, [n]), r = O(() => qt(Gn.name, t), [t]), o = () => {
    const { from: c } = t.state.selection, a = t.state.doc.resolve(c);
    for (let d = a.depth; d >= 0; d--) {
      const h = a.node(d);
      if (h.type.name === "codeBlock")
        return h.textContent;
    }
    return "";
  }, l = () => {
    const c = o();
    navigator.clipboard.writeText(c);
  };
  return e ? /* @__PURE__ */ p(
    st,
    {
      editor: t,
      options: { placement: "bottom", offset: 8, flip: !0 },
      pluginKey: "RichTextBubbleCodeBlock",
      shouldShow: i,
      getReferencedVirtualElement: () => {
        const { from: c } = t.state.selection, d = t.view.domAtPos(c).node.parentElement;
        return d ? {
          getBoundingClientRect: () => d.getBoundingClientRect()
        } : null;
      },
      children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-items-center richtext-gap-2 richtext-rounded-md !richtext-border !richtext-border-solid !richtext-border-border richtext-bg-popover richtext-p-1 richtext-text-popover-foreground richtext-shadow-md richtext-outline-none", children: [
        /* @__PURE__ */ p(Of, { listLanguages: s }),
        /* @__PURE__ */ p(
          Ct,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ p(v, { action: l, tooltip: "Copy", children: /* @__PURE__ */ p(Fl, { size: 16 }) }),
        /* @__PURE__ */ p(
          Ct,
          {
            className: "!richtext-mx-1 !richtext-my-2 !richtext-h-[16px]",
            orientation: "vertical"
          }
        ),
        /* @__PURE__ */ p(v, { action: r, tooltip: "Delete", children: /* @__PURE__ */ p(Ar, { size: 16 }) })
      ] })
    }
  ) : /* @__PURE__ */ p(I, {});
}
export {
  Cp as RichTextBubbleCallout,
  $p as RichTextBubbleCodeBlock,
  kp as RichTextBubbleColumns,
  _p as RichTextBubbleDrawer,
  Ep as RichTextBubbleExcalidraw,
  Tp as RichTextBubbleIframe,
  Ip as RichTextBubbleImage,
  Op as RichTextBubbleImageGif,
  Dp as RichTextBubbleKatex,
  Ap as RichTextBubbleLink,
  Bp as RichTextBubbleMenuDragHandle,
  Rp as RichTextBubbleMermaid,
  Np as RichTextBubbleTable,
  Up as RichTextBubbleText,
  Lp as RichTextBubbleTwitter,
  Mp as RichTextBubbleVideo
};
