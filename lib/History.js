import { O as N, x as se, F as V, v as W, T as j, u as Y, S as x, Q as X, R as le, E as b, U as ae, V as ce, W as _, o as de } from "./index-BblvcbTH.js";
import { Plugin as A, PluginKey as T } from "@tiptap/pm/state";
import { DecorationSet as O, Decoration as L } from "@tiptap/pm/view";
import { k as pe, D as ue, a as he } from "./index-D-Ouz0vF.js";
import { jsx as R, Fragment as Z } from "react/jsx-runtime";
import { u as J, e as Q, A as $, i as fe } from "./index-BrsJsbds.js";
import "react";
import "./theme.js";
function me(o = {}) {
  return new N({
    view(e) {
      return new ge(e, o);
    }
  });
}
class ge {
  constructor(e, t) {
    var n;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = t.width) !== null && n !== void 0 ? n : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let i = (s) => {
        this[r](s);
      };
      return e.dom.addEventListener(r, i), { name: r, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, r = this.editorView.dom, i = r.getBoundingClientRect(), s = i.width / r.offsetWidth, l = i.height / r.offsetHeight;
    if (t) {
      let d = e.nodeBefore, u = e.nodeAfter;
      if (d || u) {
        let h = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
        if (h) {
          let m = h.getBoundingClientRect(), y = d ? m.bottom : m.top;
          d && u && (y = (y + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let P = this.width / 2 * l;
          n = { left: m.left, right: m.right, top: y - P, bottom: y + P };
        }
      }
    }
    if (!n) {
      let d = this.editorView.coordsAtPos(this.cursorPos), u = this.width / 2 * s;
      n = { left: d.left - u, right: d.left + u, top: d.top, bottom: d.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let c, p;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, p = -pageYOffset;
    else {
      let d = a.getBoundingClientRect(), u = d.width / a.offsetWidth, h = d.height / a.offsetHeight;
      c = d.left - a.scrollLeft * u, p = d.top - a.scrollTop * h;
    }
    this.element.style.left = (n.left - c) / s + "px", this.element.style.top = (n.top - p) / l + "px", this.element.style.width = (n.right - n.left) / s + "px", this.element.style.height = (n.bottom - n.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), r = n && n.type.spec.disableDropCursor, i = typeof r == "function" ? r(this.editorView, t, e) : r;
    if (t && !i) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = se(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
class f extends x {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    return f.valid(n) ? new f(n) : x.near(n);
  }
  content() {
    return W.empty;
  }
  eq(e) {
    return e instanceof f && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new f(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new F(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.inlineContent || !ve(e) || !we(e))
      return !1;
    let n = t.type.spec.allowGapCursor;
    if (n != null)
      return n;
    let r = t.contentMatchAt(e.index()).defaultType;
    return r && r.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, n = !1) {
    e: for (; ; ) {
      if (!n && f.valid(e))
        return e;
      let r = e.pos, i = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          i = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        r += t;
        let a = e.doc.resolve(r);
        if (f.valid(a))
          return a;
      }
      for (; ; ) {
        let s = t > 0 ? i.firstChild : i.lastChild;
        if (!s) {
          if (i.isAtom && !i.isText && !Y.isSelectable(i)) {
            e = e.doc.resolve(r + i.nodeSize * t), n = !1;
            continue e;
          }
          break;
        }
        i = s, r += t;
        let l = e.doc.resolve(r);
        if (f.valid(l))
          return l;
      }
      return null;
    }
  }
}
f.prototype.visible = !1;
f.findFrom = f.findGapCursorFrom;
x.jsonID("gapcursor", f);
class F {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new F(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return f.valid(t) ? new f(t) : x.near(t);
  }
}
function q(o) {
  return o.isAtom || o.spec.isolating || o.spec.createGapCursor;
}
function ve(o) {
  for (let e = o.depth; e >= 0; e--) {
    let t = o.index(e), n = o.node(e);
    if (t == 0) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = n.child(t - 1); ; r = r.lastChild) {
      if (r.childCount == 0 && !r.inlineContent || q(r.type))
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function we(o) {
  for (let e = o.depth; e >= 0; e--) {
    let t = o.indexAfter(e), n = o.node(e);
    if (t == n.childCount) {
      if (n.type.spec.isolating)
        return !0;
      continue;
    }
    for (let r = n.child(t); ; r = r.firstChild) {
      if (r.childCount == 0 && !r.inlineContent || q(r.type))
        return !0;
      if (r.inlineContent)
        return !1;
    }
  }
  return !0;
}
function ye() {
  return new N({
    props: {
      decorations: Ee,
      createSelectionBetween(o, e, t) {
        return e.pos == t.pos && f.valid(t) ? new f(t) : null;
      },
      handleClick: be,
      handleKeyDown: Ce,
      handleDOMEvents: { beforeinput: Pe }
    }
  });
}
const Ce = pe({
  ArrowLeft: I("horiz", -1),
  ArrowRight: I("horiz", 1),
  ArrowUp: I("vert", -1),
  ArrowDown: I("vert", 1)
});
function I(o, e) {
  const t = o == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(n, r, i) {
    let s = n.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof j) {
      if (!i.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = n.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = f.findGapCursorFrom(l, e, a);
    return c ? (r && r(n.tr.setSelection(new f(c))), !0) : !1;
  };
}
function be(o, e, t) {
  if (!o || !o.editable)
    return !1;
  let n = o.state.doc.resolve(e);
  if (!f.valid(n))
    return !1;
  let r = o.posAtCoords({ left: t.clientX, top: t.clientY });
  return r && r.inside > -1 && Y.isSelectable(o.state.doc.nodeAt(r.inside)) ? !1 : (o.dispatch(o.state.tr.setSelection(new f(n))), !0);
}
function Pe(o, e) {
  if (e.inputType != "insertCompositionText" || !(o.state.selection instanceof f))
    return !1;
  let { $from: t } = o.state.selection, n = t.parent.contentMatchAt(t.index()).findWrapping(o.state.schema.nodes.text);
  if (!n)
    return !1;
  let r = V.empty;
  for (let s = n.length - 1; s >= 0; s--)
    r = V.from(n[s].createAndFill(null, r));
  let i = o.state.tr.replace(t.pos, t.pos, new W(r, 0, 0));
  return i.setSelection(j.near(i.doc.resolve(t.pos + 1))), o.dispatch(i), !1;
}
function Ee(o) {
  if (!(o.selection instanceof f))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", ue.create(o.doc, [he.widget(o.selection.head, e, { key: "gapcursor" })]);
}
var D = 200, g = function() {
};
g.prototype.append = function(e) {
  return e.length ? (e = g.from(e), !this.length && e || e.length < D && this.leafAppend(e) || this.length < D && e.leafPrepend(this) || this.appendInner(e)) : this;
};
g.prototype.prepend = function(e) {
  return e.length ? g.from(e).append(this) : this;
};
g.prototype.appendInner = function(e) {
  return new Me(this, e);
};
g.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? g.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
g.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
g.prototype.forEach = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
};
g.prototype.map = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length);
  var r = [];
  return this.forEach(function(i, s) {
    return r.push(e(i, s));
  }, t, n), r;
};
g.from = function(e) {
  return e instanceof g ? e : e && e.length ? new ee(e) : g.empty;
};
var ee = /* @__PURE__ */ (function(o) {
  function e(n) {
    o.call(this), this.values = n;
  }
  o && (e.__proto__ = o), e.prototype = Object.create(o && o.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(r, i) {
    return r == 0 && i == this.length ? this : new e(this.values.slice(r, i));
  }, e.prototype.getInner = function(r) {
    return this.values[r];
  }, e.prototype.forEachInner = function(r, i, s, l) {
    for (var a = i; a < s; a++)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, l) {
    for (var a = i - 1; a >= s; a--)
      if (r(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(r) {
    if (this.length + r.length <= D)
      return new e(this.values.concat(r.flatten()));
  }, e.prototype.leafPrepend = function(r) {
    if (this.length + r.length <= D)
      return new e(r.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
})(g);
g.empty = new ee([]);
var Me = /* @__PURE__ */ (function(o) {
  function e(t, n) {
    o.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
  }
  return o && (e.__proto__ = o), e.prototype = Object.create(o && o.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(n) {
    return n < this.left.length ? this.left.get(n) : this.right.get(n - this.left.length);
  }, e.prototype.forEachInner = function(n, r, i, s) {
    var l = this.left.length;
    if (r < l && this.left.forEachInner(n, r, Math.min(i, l), s) === !1 || i > l && this.right.forEachInner(n, Math.max(r - l, 0), Math.min(this.length, i) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(n, r, i, s) {
    var l = this.left.length;
    if (r > l && this.right.forEachInvertedInner(n, r - l, Math.max(i, l) - l, s + l) === !1 || i < l && this.left.forEachInvertedInner(n, Math.min(r, l), i, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(n, r) {
    if (n == 0 && r == this.length)
      return this;
    var i = this.left.length;
    return r <= i ? this.left.slice(n, r) : n >= i ? this.right.slice(n - i, r - i) : this.left.slice(n, i).append(this.right.slice(0, r - i));
  }, e.prototype.leafAppend = function(n) {
    var r = this.right.leafAppend(n);
    if (r)
      return new e(this.left, r);
  }, e.prototype.leafPrepend = function(n) {
    var r = this.left.leafPrepend(n);
    if (r)
      return new e(r, this.right);
  }, e.prototype.appendInner = function(n) {
    return this.left.depth >= Math.max(this.right.depth, n.depth) + 1 ? new e(this.left, new e(this.right, n)) : new e(this, n);
  }, e;
})(g);
const Ae = 500;
class v {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let n = this.items.length;
    for (; ; n--)
      if (this.items.get(n - 1).selection) {
        --n;
        break;
      }
    let r, i;
    t && (r = this.remapping(n, this.items.length), i = r.maps.length);
    let s = e.tr, l, a, c = [], p = [];
    return this.items.forEach((d, u) => {
      if (!d.step) {
        r || (r = this.remapping(n, u + 1), i = r.maps.length), i--, p.push(d);
        return;
      }
      if (r) {
        p.push(new w(d.map));
        let h = d.step.map(r.slice(i)), m;
        h && s.maybeStep(h).doc && (m = s.mapping.maps[s.mapping.maps.length - 1], c.push(new w(m, void 0, void 0, c.length + p.length))), i--, m && r.appendMap(m, i);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return l = r ? d.selection.map(r.slice(i)) : d.selection, a = new v(this.items.slice(0, n).append(p.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, n, r) {
    let i = [], s = this.eventCount, l = this.items, a = !r && l.length ? l.get(l.length - 1) : null;
    for (let p = 0; p < e.steps.length; p++) {
      let d = e.steps[p].invert(e.docs[p]), u = new w(e.mapping.maps[p], d, t), h;
      (h = a && a.merge(u)) && (u = h, p ? i.pop() : l = l.slice(0, l.length - 1)), i.push(u), t && (s++, t = void 0), r || (a = u);
    }
    let c = s - n.depth;
    return c > Ie && (l = Te(l, c), s -= c), new v(l.append(i), s);
  }
  remapping(e, t) {
    let n = new le();
    return this.items.forEach((r, i) => {
      let s = r.mirrorOffset != null && i - r.mirrorOffset >= e ? n.maps.length - r.mirrorOffset : void 0;
      n.appendMap(r.map, s);
    }, e, t), n;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new v(this.items.append(e.map((t) => new w(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let n = [], r = Math.max(0, this.items.length - t), i = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, r);
    let a = t;
    this.items.forEach((u) => {
      let h = i.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let m = i.maps[h];
      if (u.step) {
        let y = e.steps[h].invert(e.docs[h]), P = u.selection && u.selection.map(i.slice(a + 1, h));
        P && l++, n.push(new w(m, y, P));
      } else
        n.push(new w(m));
    }, r);
    let c = [];
    for (let u = t; u < s; u++)
      c.push(new w(i.maps[u]));
    let p = this.items.slice(0, r).append(c).append(n), d = new v(p, l);
    return d.emptyItemCount() > Ae && (d = d.compress(this.items.length - n.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), n = t.maps.length, r = [], i = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        r.push(s), s.selection && i++;
      else if (s.step) {
        let a = s.step.map(t.slice(n)), c = a && a.getMap();
        if (n--, c && t.appendMap(c, n), a) {
          let p = s.selection && s.selection.map(t.slice(n));
          p && i++;
          let d = new w(c.invert(), a, p), u, h = r.length - 1;
          (u = r.length && r[h].merge(d)) ? r[h] = u : r.push(d);
        }
      } else s.map && n--;
    }, this.items.length, 0), new v(g.from(r.reverse()), i);
  }
}
v.empty = new v(g.empty, 0);
function Te(o, e) {
  let t;
  return o.forEach((n, r) => {
    if (n.selection && e-- == 0)
      return t = r, !1;
  }), o.slice(t);
}
class w {
  constructor(e, t, n, r) {
    this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new w(t.getMap().invert(), t, this.selection);
    }
  }
}
class C {
  constructor(e, t, n, r, i) {
    this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
  }
}
const Ie = 20;
function Se(o, e, t, n) {
  let r = t.getMeta(E), i;
  if (r)
    return r.historyState;
  t.getMeta(Re) && (o = new C(o.done, o.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return o;
  if (s && s.getMeta(E))
    return s.getMeta(E).redo ? new C(o.done.addTransform(t, void 0, n, S(e)), o.undone, B(t.mapping.maps), o.prevTime, o.prevComposition) : new C(o.done, o.undone.addTransform(t, void 0, n, S(e)), null, o.prevTime, o.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = o.prevTime == 0 || !s && o.prevComposition != l && (o.prevTime < (t.time || 0) - n.newGroupDelay || !xe(t, o.prevRanges)), c = s ? k(o.prevRanges, t.mapping) : B(t.mapping.maps);
    return new C(o.done.addTransform(t, a ? e.selection.getBookmark() : void 0, n, S(e)), v.empty, c, t.time, l ?? o.prevComposition);
  } else return (i = t.getMeta("rebased")) ? new C(o.done.rebased(t, i), o.undone.rebased(t, i), k(o.prevRanges, t.mapping), o.prevTime, o.prevComposition) : new C(o.done.addMaps(t.mapping.maps), o.undone.addMaps(t.mapping.maps), k(o.prevRanges, t.mapping), o.prevTime, o.prevComposition);
}
function xe(o, e) {
  if (!e)
    return !1;
  if (!o.docChanged)
    return !0;
  let t = !1;
  return o.mapping.maps[0].forEach((n, r) => {
    for (let i = 0; i < e.length; i += 2)
      n <= e[i + 1] && r >= e[i] && (t = !0);
  }), t;
}
function B(o) {
  let e = [];
  for (let t = o.length - 1; t >= 0 && e.length == 0; t--)
    o[t].forEach((n, r, i, s) => e.push(i, s));
  return e;
}
function k(o, e) {
  if (!o)
    return null;
  let t = [];
  for (let n = 0; n < o.length; n += 2) {
    let r = e.map(o[n], 1), i = e.map(o[n + 1], -1);
    r <= i && t.push(r, i);
  }
  return t;
}
function Oe(o, e, t) {
  let n = S(e), r = E.get(e).spec.config, i = (t ? o.undone : o.done).popEvent(e, n);
  if (!i)
    return null;
  let s = i.selection.resolve(i.transform.doc), l = (t ? o.done : o.undone).addTransform(i.transform, e.selection.getBookmark(), r, n), a = new C(t ? l : i.remaining, t ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(s).setMeta(E, { redo: t, historyState: a });
}
let z = !1, K = null;
function S(o) {
  let e = o.plugins;
  if (K != e) {
    z = !1, K = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        z = !0;
        break;
      }
  }
  return z;
}
const E = new X("history"), Re = new X("closeHistory");
function De(o = {}) {
  return o = {
    depth: o.depth || 100,
    newGroupDelay: o.newGroupDelay || 500
  }, new N({
    key: E,
    state: {
      init() {
        return new C(v.empty, v.empty, null, 0, -1);
      },
      apply(e, t, n) {
        return Se(t, n, e, o);
      }
    },
    config: o,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let n = t.inputType, r = n == "historyUndo" ? ne : n == "historyRedo" ? oe : null;
          return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
        }
      }
    }
  });
}
function te(o, e) {
  return (t, n) => {
    let r = E.getState(t);
    if (!r || (o ? r.undone : r.done).eventCount == 0)
      return !1;
    if (n) {
      let i = Oe(r, t, o);
      i && n(e ? i.scrollIntoView() : i);
    }
    return !0;
  };
}
const ne = te(!1, !0), oe = te(!0, !0);
b.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      autoTrim: !0,
      mode: "textSize",
      textCounter: (o) => o.length,
      wordCounter: (o) => o.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (o) => {
      const e = (o == null ? void 0 : o.node) || this.editor.state.doc;
      if (((o == null ? void 0 : o.mode) || this.options.mode) === "textSize") {
        const n = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(n);
      }
      return e.nodeSize;
    }, this.storage.words = (o) => {
      const e = (o == null ? void 0 : o.node) || this.editor.state.doc, t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let o = !1;
    return [
      new A({
        key: new T("characterCount"),
        appendTransaction: (e, t, n) => {
          if (o)
            return;
          const r = this.options.limit, i = this.options.autoTrim;
          if (r == null || r === 0 || i === !1) {
            o = !0;
            return;
          }
          const s = this.storage.characters({ node: n.doc });
          if (s > r) {
            const l = s - r, a = 0, c = l;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${r} characters. Content was automatically trimmed.`
            );
            const p = n.tr.deleteRange(a, c);
            return o = !0, p;
          }
          o = !0;
        },
        filterTransaction: (e, t) => {
          const n = this.options.limit;
          if (!e.docChanged || n === 0 || n === null || n === void 0)
            return !0;
          const r = this.storage.characters({ node: t.doc }), i = this.storage.characters({ node: e.doc });
          if (i <= n || r > n && i > n && i <= r)
            return !0;
          if (r > n && i > n && i > r || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = i - n, c = l - a, p = l;
          return e.deleteRange(c, p), !(this.storage.characters({ node: e.doc }) > n);
        }
      })
    ];
  }
});
b.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [me(this.options)];
  }
});
b.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new A({
        key: new T("focus"),
        props: {
          decorations: ({ doc: o, selection: e }) => {
            const { isEditable: t, isFocused: n } = this.editor, { anchor: r } = e, i = [];
            if (!t || !n)
              return O.create(o, []);
            let s = 0;
            this.options.mode === "deepest" && o.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(r >= c && r <= c + a.nodeSize - 1))
                return !1;
              s += 1;
            });
            let l = 0;
            return o.descendants((a, c) => {
              if (a.isText || !(r >= c && r <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && s - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              i.push(
                L.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), O.create(o, i);
          }
        }
      })
    ];
  }
});
b.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [ye()];
  },
  extendNodeSchema(o) {
    var e;
    const t = {
      name: o.name,
      options: o.options,
      storage: o.storage
    };
    return {
      allowGapCursor: (e = ae(ce(o, "allowGapCursor", t))) != null ? e : null
    };
  }
});
function H(o) {
  const {
    editor: e,
    placeholder: t,
    dataAttribute: n,
    pos: r,
    node: i,
    isEmptyDoc: s,
    hasAnchor: l,
    classes: { emptyNode: a, emptyEditor: c }
  } = o, p = [a];
  return s && p.push(c), L.node(r, r + i.nodeSize, {
    class: p.join(" "),
    [n]: typeof t == "function" ? t({
      editor: e,
      node: i,
      pos: r,
      hasAnchor: l
    }) : t
  });
}
function ke(o) {
  const e = getComputedStyle(o), t = `${e.overflow} ${e.overflowY} ${e.overflowX}`;
  return /auto|scroll|overlay/.test(t);
}
function ze(o) {
  let e = o;
  for (; e; ) {
    if (ke(e))
      return e;
    const t = e.parentElement;
    if (!t) {
      const n = e.getRootNode();
      if (n instanceof ShadowRoot) {
        e = n.host;
        continue;
      }
      return window;
    }
    e = t;
  }
  return window;
}
function Ne(o) {
  return o === window ? { top: 0, bottom: window.innerHeight } : o.getBoundingClientRect();
}
function Le({
  doc: o,
  view: e,
  scrollContainer: t
}) {
  const n = e.dom.getBoundingClientRect(), r = t ? Ne(t) : { top: 0, bottom: window.innerHeight }, i = Math.max(n.top, r.top), s = Math.min(n.bottom, r.bottom);
  if (i >= s)
    return { top: 0, bottom: o.content.size };
  const a = getComputedStyle(e.dom).direction === "rtl" ? Math.max(n.right - 2, n.left + 2) : n.left + 2, c = e.posAtCoords({ left: a, top: i + 2 }), p = e.posAtCoords({ left: a, top: s - 2 });
  return {
    top: c ? c.pos : 0,
    bottom: p ? p.pos : o.content.size
  };
}
function Fe(o, e) {
  let t = null;
  return { call: ((...i) => {
    t || (o(...i), t = setTimeout(() => {
      t = null;
    }, e));
  }), cancel: () => {
    t && (clearTimeout(t), t = null);
  } };
}
var G = "placeholder";
function Ve(o) {
  return o.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
var M = new T("tiptap__placeholder");
b.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      dataAttribute: G,
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    const o = this.options.dataAttribute ? `data-${Ve(this.options.dataAttribute)}` : `data-${G}`;
    return [
      new A({
        state: {
          init() {
            return {
              // null means "no viewport info yet" — decoration callback falls
              // back to full document scan until the scroll handler fires.
              topPos: null,
              bottomPos: null
            };
          },
          apply(e, t) {
            const n = e.getMeta(M);
            return n != null && n.positions ? {
              topPos: n.positions.top,
              bottomPos: n.positions.bottom
            } : e.docChanged ? {
              topPos: t.topPos !== null ? e.mapping.map(t.topPos) : null,
              bottomPos: t.bottomPos !== null ? e.mapping.map(t.bottomPos) : null
            } : t;
          }
        },
        key: M,
        view(e) {
          const t = ze(e.dom), n = () => {
            const l = Le({
              view: e,
              doc: e.state.doc,
              scrollContainer: t
            }), a = M.getState(e.state);
            if (a.topPos === l.top && a.bottomPos === l.bottom)
              return;
            const c = e.state.tr.setMeta(M, { positions: l }).setMeta("tiptap__viewportUpdate", !0);
            e.dispatch(c);
          }, { call: r, cancel: i } = Fe(n, 250), s = t;
          return s.addEventListener("scroll", r, { passive: !0 }), n(), {
            update(l, a) {
              e.state.doc.content.size !== a.doc.content.size && n();
            },
            destroy: () => {
              i(), s.removeEventListener("scroll", r);
            }
          };
        },
        props: {
          decorations: ({ doc: e, selection: t }) => {
            var n, r;
            if (!(this.editor.isEditable || !this.options.showOnlyWhenEditable))
              return null;
            const { anchor: s } = t, l = [], a = this.editor.isEmpty;
            if (this.options.showOnlyCurrent && !this.options.includeChildren) {
              const p = e.resolve(s);
              if (p.depth > 0) {
                const d = p.node(1), u = p.before(1);
                if (d.type.isTextblock && _(d)) {
                  const h = s >= u && s <= u + d.nodeSize, m = H({
                    node: d,
                    dataAttribute: o,
                    hasAnchor: h,
                    placeholder: this.options.placeholder,
                    classes: {
                      emptyEditor: this.options.emptyEditorClass,
                      emptyNode: this.options.emptyNodeClass
                    },
                    editor: this.editor,
                    isEmptyDoc: a,
                    pos: p.before(1)
                  });
                  l.push(m);
                }
              }
            } else {
              const p = M.getState(this.editor.state), d = (n = p.topPos) != null ? n : 0, u = (r = p.bottomPos) != null ? r : e.content.size;
              e.nodesBetween(d, u, (h, m) => {
                const y = s >= m && s <= m + h.nodeSize, P = !h.isLeaf && _(h);
                if (!h.type.isTextblock)
                  return this.options.includeChildren;
                if ((y || !this.options.showOnlyCurrent) && P) {
                  const ie = H({
                    classes: { emptyEditor: this.options.emptyEditorClass, emptyNode: this.options.emptyNodeClass },
                    editor: this.editor,
                    isEmptyDoc: a,
                    dataAttribute: o,
                    hasAnchor: y,
                    placeholder: this.options.placeholder,
                    node: h,
                    pos: m
                  });
                  l.push(ie);
                }
                return this.options.includeChildren;
              });
            }
            return O.create(e, l);
          }
        }
      })
    ];
  }
});
b.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: o, options: e } = this;
    return [
      new A({
        key: new T("selection"),
        props: {
          decorations(t) {
            return t.selection.empty || o.isFocused || !o.isEditable || de(t.selection) || o.view.dragging ? null : O.create(t.doc, [
              L.inline(t.selection.from, t.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
var _e = "skipTrailingNode";
function U({ types: o, node: e }) {
  return e && Array.isArray(o) && o.includes(e.type) || (e == null ? void 0 : e.type) === o;
}
b.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var o;
    const e = new T(this.name), t = this.options.node || ((o = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : o.name) || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, r]) => r).filter((r) => (this.options.notAfter || []).concat(t).includes(r.name));
    return [
      new A({
        key: e,
        appendTransaction: (r, i, s) => {
          const { doc: l, tr: a, schema: c } = s, p = e.getState(s), d = l.content.size, u = c.nodes[t];
          if (!r.some((h) => h.getMeta(_e)) && p)
            return a.insert(d, u.create());
        },
        state: {
          init: (r, i) => {
            const s = i.tr.doc.lastChild;
            return !U({ node: s, types: n });
          },
          apply: (r, i) => {
            if (!r.docChanged || r.getMeta("__uniqueIDTransaction"))
              return i;
            const s = r.doc.lastChild;
            return !U({ node: s, types: n });
          }
        }
      })
    ];
  }
});
var Be = b.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: o, dispatch: e }) => ne(o, e),
      redo: () => ({ state: o, dispatch: e }) => oe(o, e)
    };
  },
  addProseMirrorPlugins() {
    return [De(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
function Ze() {
  var p;
  const o = J(re.name), {
    icon: e = void 0,
    tooltip: t = void 0,
    shortcutKeys: n = void 0,
    tooltipOptions: r = {},
    action: i = void 0,
    isActive: s = void 0
  } = ((p = o == null ? void 0 : o.componentProps) == null ? void 0 : p.undo) ?? {}, { disabled: l } = Q(s), a = fe[e], c = () => {
    l || i && i();
  };
  return !o || !a ? /* @__PURE__ */ R(Z, {}) : /* @__PURE__ */ R(
    $,
    {
      action: c,
      disabled: l,
      icon: e,
      shortcutKeys: n,
      tooltip: t,
      tooltipOptions: r
    }
  );
}
function Je() {
  var c;
  const o = J(re.name), {
    icon: e = void 0,
    tooltip: t = void 0,
    shortcutKeys: n = void 0,
    tooltipOptions: r = {},
    action: i = void 0,
    isActive: s = void 0
  } = ((c = o == null ? void 0 : o.componentProps) == null ? void 0 : c.redo) ?? {}, { disabled: l } = Q(s), a = () => {
    l || i && i();
  };
  return o ? /* @__PURE__ */ R(
    $,
    {
      action: a,
      disabled: l,
      icon: e,
      shortcutKeys: n,
      tooltip: t,
      tooltipOptions: r
    }
  ) : /* @__PURE__ */ R(Z, {});
}
const re = /* @__PURE__ */ Be.extend({
  //@ts-expect-error
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: e, t, extension: n }) => {
        var r, i;
        return {
          componentProps: {
            undo: {
              action: () => {
                e.chain().focus().undo().run();
              },
              shortcutKeys: ((r = n.options.shortcutKeys) == null ? void 0 : r[0]) ?? ["mod", "Z"],
              isActive: () => e.can().undo(),
              icon: "Undo2",
              tooltip: t("editor.undo.tooltip")
            },
            redo: {
              action: () => {
                e.chain().focus().redo().run();
              },
              shortcutKeys: ((i = n.options.shortcutKeys) == null ? void 0 : i[1]) ?? ["shift", "mod", "Z"],
              isActive: () => e.can().redo(),
              icon: "Redo2",
              tooltip: t("editor.redo.tooltip")
            }
          }
        };
      }
    };
  }
});
export {
  re as History,
  Je as RichTextRedo,
  Ze as RichTextUndo
};
