import { jsxs as C, jsx as n, Fragment as Y } from "react/jsx-runtime";
import * as U from "react";
import Q, { useState as L, useMemo as B, useCallback as ce, useEffect as ze, useRef as xe } from "react";
import { y as jt, b as _t, S as Ut } from "./index-BG0kQamI.js";
import "./theme.js";
import * as F from "@radix-ui/react-dialog";
import { NotebookPen as Bt, ExternalLink as $t, X as lt, Loader2 as Ft, WrapText as Wt, PencilRuler as Gt, FlipHorizontal as Xt, FlipVertical as Yt, CropIcon as qt, ChevronUp as Zt, Paperclip as Kt, Eye as Jt, Settings as Qt, ZoomOut as er, ZoomIn as tr, BookMarked as rr, Sigma as ir, SmilePlusIcon as nr, Replace as qe, SmilePlus as or, Frame as ar, Columns2 as Ze, PanelRight as sr, PanelLeft as lr, Clipboard as cr, Copy as dr, GripVertical as ur, Plus as hr, Columns4 as fr, Columns3 as mr, Heading6 as gr, Heading5 as pr, Heading4 as xr, Heading3 as br, Heading2 as vr, Heading1 as wr, Pilcrow as yr, ChevronsUpDown as Cr, Trash as kr, Trash2 as Mr, TableCellsSplit as zr, TableCellsMerge as Tr, BetweenVerticalEnd as Ir, BetweenVerticalStart as Sr, BetweenHorizonalStart as Nr, BetweenHorizonalEnd as Ar, Unlink as Lr, Pencil as Er, Sparkles as Rr, Table as Vr, Minimize as Dr, Maximize as Hr, Video as Or, ImageUp as Pr, Link as jr, ListTodo as _r, ListOrdered as Ur, List as Br, IndentDecrease as $r, IndentIncrease as Fr, Type as Wr, CodeXml as Gr, Code as Xr, Superscript as Yr, Subscript as qr, ChevronDown as Zr, Undo2 as Kr, Redo2 as Jr, PaintRoller as Qr, Eraser as ei, Minus as ti, Strikethrough as ri, Quote as ii, Underline as ni, Italic as oi, LoaderCircle as ai, Bold as si, Check as li } from "lucide-react";
import { c as ct, N as ci, u as di, b as ui, a as hi } from "./clsx-0OU6n9va.js";
import { N as dt, n as fi, a9 as mi, m as ut } from "./index-BblvcbTH.js";
import { I as Ke, j as Je, k as gi, u as ne, V as pi } from "./index-oj858lQO.js";
import { Slot as ht } from "@radix-ui/react-slot";
import * as be from "@radix-ui/react-tooltip";
import * as ft from "@radix-ui/react-toggle";
import { TextAlignRightIcon as xi, TextAlignLeftIcon as bi, TextAlignJustifyIcon as vi, TextAlignCenterIcon as wi } from "@radix-ui/react-icons";
import * as re from "@radix-ui/react-tabs";
import yi from "react-image-crop";
import * as Oe from "@radix-ui/react-checkbox";
import * as mt from "@radix-ui/react-label";
const _e = "-", Ci = (e) => {
  const t = Mi(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: (l) => {
      const s = l.split(_e);
      return s[0] === "" && s.length !== 1 && s.shift(), gt(s, t) || ki(l);
    },
    getConflictingClassGroupIds: (l, s) => {
      const c = r[l] || [];
      return s && i[l] ? [...c, ...i[l]] : c;
    }
  };
}, gt = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], i = t.nextPart.get(r), o = i ? gt(e.slice(1), i) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(_e);
  return (l = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : l.classGroupId;
}, Qe = /^\[(.+)\]$/, ki = (e) => {
  if (Qe.test(e)) {
    const t = Qe.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Mi = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ti(Object.entries(e.classGroups), r).forEach(([a, l]) => {
    Pe(l, i, a, t);
  }), i;
}, Pe = (e, t, r, i) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : et(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (zi(o)) {
        Pe(o(i), t, r, i);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, l]) => {
      Pe(l, et(t, a), r, i);
    });
  });
}, et = (e, t) => {
  let r = e;
  return t.split(_e).forEach((i) => {
    r.nextPart.has(i) || r.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(i);
  }), r;
}, zi = (e) => e.isThemeGetter, Ti = (e, t) => t ? e.map(([r, i]) => {
  const o = i.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([l, s]) => [t + l, s])) : a);
  return [r, o];
}) : e, Ii = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const o = (a, l) => {
    r.set(a, l), t++, t > e && (t = 0, i = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let l = r.get(a);
      if (l !== void 0)
        return l;
      if ((l = i.get(a)) !== void 0)
        return o(a, l), l;
    },
    set(a, l) {
      r.has(a) ? r.set(a, l) : o(a, l);
    }
  };
}, pt = "!", Si = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, i = t.length === 1, o = t[0], a = t.length, l = (s) => {
    const c = [];
    let d = 0, g = 0, p;
    for (let f = 0; f < s.length; f++) {
      let x = s[f];
      if (d === 0) {
        if (x === o && (i || s.slice(f, f + a) === t)) {
          c.push(s.slice(g, f)), g = f + a;
          continue;
        }
        if (x === "/") {
          p = f;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    const u = c.length === 0 ? s : s.substring(g), k = u.startsWith(pt), b = k ? u.substring(1) : u, z = p && p > g ? p - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: k,
      baseClassName: b,
      maybePostfixModifierPosition: z
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: l
  }) : l;
}, Ni = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((i) => {
    i[0] === "[" ? (t.push(...r.sort(), i), r = []) : r.push(i);
  }), t.push(...r.sort()), t;
}, Ai = (e) => ({
  cache: Ii(e.cacheSize),
  parseClassName: Si(e),
  ...Ci(e)
}), Li = /\s+/, Ei = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: i,
    getConflictingClassGroupIds: o
  } = t, a = [], l = e.trim().split(Li);
  let s = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const d = l[c], {
      modifiers: g,
      hasImportantModifier: p,
      baseClassName: u,
      maybePostfixModifierPosition: k
    } = r(d);
    let b = !!k, z = i(b ? u.substring(0, k) : u);
    if (!z) {
      if (!b) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (z = i(u), !z) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      b = !1;
    }
    const f = Ni(g).join(":"), x = p ? f + pt : f, h = x + z;
    if (a.includes(h))
      continue;
    a.push(h);
    const S = o(z, b);
    for (let m = 0; m < S.length; ++m) {
      const D = S[m];
      a.push(x + D);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Ri() {
  let e = 0, t, r, i = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = xt(t)) && (i && (i += " "), i += r);
  return i;
}
const xt = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (t = xt(e[i])) && (r && (r += " "), r += t);
  return r;
};
function Vi(e, ...t) {
  let r, i, o, a = l;
  function l(c) {
    const d = t.reduce((g, p) => p(g), e());
    return r = Ai(d), i = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const d = i(c);
    if (d)
      return d;
    const g = Ei(c, r);
    return o(c, g), g;
  }
  return function() {
    return a(Ri.apply(null, arguments));
  };
}
const V = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, bt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Di = /^\d+\/\d+$/, Hi = /* @__PURE__ */ new Set(["px", "full", "screen"]), Oi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ji = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _i = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ui = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, X = (e) => ie(e) || Hi.has(e) || Di.test(e), K = (e) => oe(e, "length", qi), ie = (e) => !!e && !Number.isNaN(Number(e)), Le = (e) => oe(e, "number", ie), de = (e) => !!e && Number.isInteger(Number(e)), Bi = (e) => e.endsWith("%") && ie(e.slice(0, -1)), T = (e) => bt.test(e), J = (e) => Oi.test(e), $i = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Fi = (e) => oe(e, $i, vt), Wi = (e) => oe(e, "position", vt), Gi = /* @__PURE__ */ new Set(["image", "url"]), Xi = (e) => oe(e, Gi, Ki), Yi = (e) => oe(e, "", Zi), ue = () => !0, oe = (e, t, r) => {
  const i = bt.exec(e);
  return i ? i[1] ? typeof t == "string" ? i[1] === t : t.has(i[1]) : r(i[2]) : !1;
}, qi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pi.test(e) && !ji.test(e)
), vt = () => !1, Zi = (e) => _i.test(e), Ki = (e) => Ui.test(e), Ji = () => {
  const e = V("colors"), t = V("spacing"), r = V("blur"), i = V("brightness"), o = V("borderColor"), a = V("borderRadius"), l = V("borderSpacing"), s = V("borderWidth"), c = V("contrast"), d = V("grayscale"), g = V("hueRotate"), p = V("invert"), u = V("gap"), k = V("gradientColorStops"), b = V("gradientColorStopPositions"), z = V("inset"), f = V("margin"), x = V("opacity"), h = V("padding"), S = V("saturate"), m = V("scale"), D = V("sepia"), v = V("skew"), R = V("space"), N = V("translate"), P = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", T, t], w = () => [T, t], y = () => ["", X, K], I = () => ["auto", ie, T], E = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", T], ye = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [ie, T];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ue],
      spacing: [X, K],
      blur: ["none", "", J, T],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", J, T],
      borderSpacing: w(),
      borderWidth: y(),
      contrast: W(),
      grayscale: G(),
      hueRotate: W(),
      invert: G(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Bi, K],
      inset: M(),
      margin: M(),
      opacity: W(),
      padding: w(),
      saturate: W(),
      scale: W(),
      sepia: G(),
      skew: W(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", T]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [J]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ye()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ye()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...E(), T]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [z]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [z]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [z]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [z]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [z]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [z]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [z]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [z]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [z]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", de, T]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", T]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", de, T]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", de, T]
        }, T]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [de, T]
        }, T]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", T]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", T]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [u]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [u]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [u]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [f]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [f]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [f]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [f]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [f]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [f]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [f]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [f]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [f]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", T, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [T, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [T, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [J]
        }, J]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [T, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [T, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [T, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [T, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", J, K]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Le]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", T]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ie, Le]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", X, T]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", T]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", X, K]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", X, T]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", T]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...E(), Wi]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Fi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...A(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: A()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...A()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, T]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [X, K]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: y()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [X, K]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", J, Yi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...j(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", J, T]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", T]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", T]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", T]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [m]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [m]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [m]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [de, T]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [v]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [v]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", T]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", T]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, K, Le]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Qi = /* @__PURE__ */ Vi(Ji);
function _(...e) {
  return Qi(ct(e));
}
let Ee;
function Re() {
  return Ee === void 0 && (Ee = navigator.platform.includes("Mac")), Ee;
}
function en(e) {
  return `${e}`.toLowerCase() === "mod" ? Re() ? "⌘" : "Ctrl" : `${e}`.toLowerCase() === "alt" ? Re() ? "⌥" : "Alt" : `${e}`.toLowerCase() === "shift" ? Re() ? "⇧" : "Shift" : e;
}
function tn(e) {
  return e.map(en).join(" ");
}
const wt = Q.forwardRef(
  (e, t) => {
    const {
      icon: r = void 0,
      // title = undefined,
      tooltip: i = void 0,
      disabled: o = !1,
      customClass: a = "",
      // color = undefined,
      loading: l = void 0,
      shortcutKeys: s = void 0,
      tooltipOptions: c = {},
      action: d = void 0,
      isActive: g = void 0,
      children: p,
      asChild: u = !1,
      upload: k = !1,
      initialDisplayedColor: b = void 0,
      dataState: z = !1,
      ...f
    } = e, x = yt[r], h = u ? ht : Ct, S = (m) => {
      if (o) {
        m.preventDefault();
        return;
      }
      d == null || d(m);
    };
    return /* @__PURE__ */ C(An, { children: [
      /* @__PURE__ */ n(Ln, { asChild: !0, children: /* @__PURE__ */ C(
        h,
        {
          className: _("richtext-h-[32px] richtext-w-[32px]", a),
          "data-state": z ? "on" : "off",
          disabled: o,
          onClick: S,
          ref: t,
          size: "sm",
          ...f,
          children: [
            x && /* @__PURE__ */ n(x, { className: "richtext-size-4" }),
            p
          ]
        }
      ) }),
      i && /* @__PURE__ */ n(kt, { ...c, className: "richtext-tooltip", children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-max-w-24 richtext-flex-col richtext-items-center richtext-text-center", children: [
        /* @__PURE__ */ n("div", { children: i }),
        !!(s != null && s.length) && /* @__PURE__ */ n("span", { children: tn(s) })
      ] }) })
    ] });
  }
);
function rn(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"
    }
  ) });
}
function nn(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 15h15m0 4H6m9-8h6m0-4h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"
    }
  ) });
}
function on() {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-h-4 richtext-w-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ n(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function an() {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      className: "richtext-h-4 richtext-w-4",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ n(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6",
          color: "currentColor"
        }
      )
    }
  );
}
function sn(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
    }
  ) });
}
function fe(e) {
  const t = yt[e.name];
  return t ? /* @__PURE__ */ n(
    t,
    {
      onClick: e == null ? void 0 : e.onClick,
      className: `richtext-h-4 richtext-w-4 ${(e == null ? void 0 : e.className) || ""}`
    }
  ) : null;
}
function ln(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M21 22H3v-2h18zm0-18H3V2h18zm-11 9.7h4l-2-5.4zM11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2z"
    }
  ) });
}
function cn(e) {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...e,
      children: /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: 4,
          d: "M36 19L24 31L12 19z"
        }
      )
    }
  );
}
function dn(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n("path", { fill: "currentColor", d: "M9 7v10h6v-2h-4V7z" }) });
}
function un(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
    }
  ) });
}
function hn(e) {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
    }
  ) });
}
function fn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6l1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6l-1.4-1.4z"
    }
  ) });
}
function mn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m-9 8h4m-2-2v4"
    }
  ) });
}
function gn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 8h4m-2-2v4"
    }
  ) });
}
function pn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 21v-4m0-4V9m0-4V3m-2 18h4M8 5v4h11l2-2l-2-2zm6 8v4H6l-2-2l2-2z"
    }
  ) });
}
function xn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M23.943 19.806a.2.2 0 0 0-.168-.034c-1.26-1.855-2.873-3.61-4.419-5.315l-.252-.284c-.001-.073-.067-.12-.134-.15l-.084-.084c-.05-.1-.169-.167-.286-.1c-.47.234-.907.585-1.327.919c-.554.434-1.109.87-1.63 1.354a5 5 0 0 0-.588.618c-.084.117-.017.217.084.267c-.37.368-.74.736-1.109 1.12a.2.2 0 0 0-.05.134c0 .05.033.1.067.117l.655.502v.016c.924.92 2.554 2.173 4.285 3.527c.251.201.52.402.773.602c.117.134.234.285.335.418c.05.066.169.084.236.033c.033.034.084.067.118.1a.24.24 0 0 0 .1.034a.15.15 0 0 0 .135-.066a.24.24 0 0 0 .033-.1c.017 0 .017.016.034.016a.2.2 0 0 0 .134-.05l3.058-3.327c.12-.116.014-.267 0-.267m-7.628-.134l-1.546-1.17l-.15-.1c-.035-.017-.068-.05-.102-.067l-.117-.1c.66-.66 1.33-1.308 2-1.956c-.488.484-1.463 1.906-1.261 2.373c.002 0 .018.042.067.084zm4.1 3.126l-1.277-.97a27 27 0 0 0-1.58-1.504c.69.518 1.277.97 1.361 1.053c.673.585.638.485 1.093.87l.554.4c-.074.103-.151.148-.151.151m.336.25l-.034-.016a1 1 0 0 0 .152-.117zM.588 3.476c.033.217.084.435.117.636c.201 1.103.403 2.106.772 2.858l.152.568c.05.217.134.485.219.552a67 67 0 0 0 3.578 2.942a.18.18 0 0 0 .219 0s0 .016.016.016a.15.15 0 0 0 .118.05a.2.2 0 0 0 .134-.05c1.798-1.989 3.142-3.627 4.1-4.998c.068-.066.084-.167.084-.25c.067-.067.118-.151.185-.201c.067-.067.067-.184 0-.235l-.017-.016c0-.033-.017-.084-.05-.1c-.42-.401-.722-.685-1.042-.986a94 94 0 0 1-2.352-2.273c-.017-.017-.034-.034-.067-.034c-.336-.117-1.025-.234-1.882-.385c-1.277-.216-3.008-.517-4.57-.986c0 0-.101 0-.118.017l-.05.05C.05.714.022.707 0 .718c.017.1.017.167.05.284c0 .033.068.301.068.334zm7.19 4.78l-.033.034a.036.036 0 0 1 .033-.034M6.553 2.238c.101.1.521.502.622.585c-.437-.2-1.529-.702-2.034-.869c.505.1 1.194.201 1.412.284M.79 1.403c.252.434.454 1.939.655 3.41c-.118-.469-.201-.936-.302-1.372C.992 2.673.84 1.988.638 1.386c.124 0 .152.021.152.017m-.286-.369c0-.016 0-.033-.017-.033c.085 0 .135.017.202.05c0 .006-.145-.017-.185-.017m23.17-.217c.017-.066-.336-.367-.219-.384c.253-.017.253-.401 0-.401c-.335.017-.688.1-1.008.15c-.587.117-1.192.234-1.78.367a80 80 0 0 0-3.949.937c-.403.117-.857.2-1.243.401c-.135.067-.118.2-.05.284c-.034.017-.051.017-.085.034c-.117.017-.218.034-.335.05c-.102.017-.152.1-.135.2c0 .017.017.05.017.067c-.706.936-1.496 1.923-2.353 2.976c-.84.969-1.73 1.989-2.62 3.042c-2.84 3.31-6.05 7.07-9.594 10.38a.16.16 0 0 0 0 .234c.016.016.033.033.05.033c-.05.05-.101.085-.152.134q-.05.05-.05.1a.4.4 0 0 0-.067.084c-.067.067-.067.184.017.234c.067.066.185.066.235-.017c.017-.017.017-.033.033-.033a.265.265 0 0 1 .37 0c.202.217.404.435.588.618l-.42-.35c-.067-.067-.184-.05-.234.016c-.068.066-.051.184.016.234l4.469 3.727c.034.034.067.034.118.034a.15.15 0 0 0 .117-.05l.101-.1c.017.016.05.016.067.016c.05 0 .084-.016.118-.05c6.049-6.05 10.922-10.614 16.5-14.693c.05-.033.067-.1.067-.15c.067 0 .118-.05.15-.117c1.026-3.125 1.228-5.9 1.295-7.27c0-.059.016-.038.016-.068c.017-.033.017-.05.017-.05a.98.98 0 0 0-.067-.619m-10.82 4.915c.268-.301.537-.619.806-.903c-1.73 2.273-4.603 5.767-8.67 9.929c2.773-3.059 5.562-6.218 7.864-9.026M5.14 23.466c-.016-.017-.016-.017 0-.017zm2.504-2.156c.135-.15.27-.284.42-.434c0 0 0 .016.017.016c-.224.198-.433.418-.437.418m.69-.668c.099-.1.14-.173.284-.318c.992-1.02 2.017-2.04 3.059-3.076l.016-.016c.252-.2.555-.418.824-.619a228 228 0 0 0-4.184 4.029M14.852 3.91c-.554.719-1.176 1.671-1.697 2.423c-1.646 2.374-6.94 8.174-7.057 8.274a1190 1190 0 0 1-4.839 4.597l-.1.1c-.085-.1-.085-.25.016-.334C8.652 11.966 13.19 6.133 15.021 3.576c-.05.116-.084.216-.168.334zm2.906 3.427c-.671-.386-.99-.987-.806-1.572l.05-.2a.8.8 0 0 1 .085-.167a1.9 1.9 0 0 1 .756-.703c.016 0 .033 0 .05-.016c-.017-.034-.017-.084-.017-.134c.017-.1.085-.167.202-.167c.202 0 .824.184 1.059.384c.067.05.134.117.202.184c.084.1.218.268.285.401c.034.017.067.184.118.268c.033.134.067.284.05.418c-.017.016 0 .116-.017.116a1.6 1.6 0 0 1-.218.619c-.03.03.006.012-.05.067a1.2 1.2 0 0 1-.32.334a1.49 1.49 0 0 1-1.26.234a2 2 0 0 0-.169-.066m4.37 1.403c0 .017-.017.05 0 .067c-.034 0-.05.017-.085.034a110 110 0 0 0-3.915 3.025c1.11-.986 2.218-1.989 3.378-2.975c.336-.301.571-.686.638-1.12l.168-1.003v-.033c.085-.201.404-.118.353.1c-.004-.001-.173.795-.537 1.905"
    }
  ) });
}
function bn() {
  return /* @__PURE__ */ C("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ n(
      "path",
      {
        fill: "currentColor",
        d: "M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z"
      }
    ),
    /* @__PURE__ */ n(
      "path",
      {
        fill: "currentColor",
        d: "M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z"
      }
    )
  ] });
}
function vn() {
  return /* @__PURE__ */ C(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      className: "icon",
      viewBox: "0 0 1024 1024",
      children: [
        /* @__PURE__ */ n(
          "path",
          {
            fill: "currentColor",
            d: "M679.253 402.364 618.77 561.015l-60.348-158.651a30.04 30.04 0 0 0-30.447-18.637 29.76 29.76 0 0 0-30.447 18.637l-60.416 158.651-60.416-158.651a30.515 30.515 0 0 0-38.843-17.272 28.945 28.945 0 0 0-17.954 37.547l88.815 233.267c4.369 11.469 15.7 19.115 28.398 19.115a30.31 30.31 0 0 0 28.468-19.115l62.395-163.908 62.396 163.84c4.437 11.605 15.701 19.183 28.4 19.183a30.31 30.31 0 0 0 28.466-19.115l88.747-233.267a28.945 28.945 0 0 0-17.886-37.547 30.447 30.447 0 0 0-38.912 17.272zm219.478 395.605-51.883-29.218c-28.672-16.18-52.224-3.072-52.224 29.082v.273H643.209a29.833 29.833 0 0 0-30.31 29.354c0 16.18 13.584 29.218 30.31 29.218h151.825c1.092 30.516 24.03 43.077 52.224 27.648l51.063-27.989c29.013-15.906 29.15-42.189.41-58.368"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            fill: "currentColor",
            d: "m810.667 913.135-.478.068H201.796c-19.865 0-36.727-11.673-36.727-25.6v-618.36h154.965c51.268 0 92.911-39.39 92.911-87.858v-87.86H810.19c19.797 0 36.522 11.742 36.522 25.669V739.26h61.987V119.262c0-46.421-44.169-84.241-98.51-84.241H328.364l-225.28 194.56v658.09c0 46.285 44.236 84.105 98.713 84.105H810.19c43.759 0 80.554-24.713 93.32-58.573h-92.842zM350.89 94.89v86.562c0 16.11-13.858 29.286-30.925 29.286H216.815L350.959 94.891z"
          }
        )
      ]
    }
  );
}
function wn() {
  return /* @__PURE__ */ n("svg", { height: "1em", viewBox: "0 0 15 15", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n(
    "path",
    {
      d: "M2.5 10.5H2v.5h.5zm2 0v.5H5v-.5zm9-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2 6v4.5h1V6zm.5 5h2v-1h-2zm2.5-.5v-2H4v2zM3 7h2V6H3zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5zM6 7h3V6H6zm0 4h3v-1H6zm1-4.5v4h1v-4zm3.5.5H13V6h-2.5zM10 6v5h1V6zm.5 3H12V8h-1.5z",
      fill: "currentColor"
    }
  ) });
}
function yn() {
  return /* @__PURE__ */ n("svg", { height: "1em", viewBox: "0 0 24 24", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ C(
    "g",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ n("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
        /* @__PURE__ */ n("path", { d: "M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6m3 0v6m-3-3h3m15-3v6h2m-9 0v-6l2 3l2-3v6m-9.5-6h3M9 15v6" })
      ]
    }
  ) });
}
function Cn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M6.5 3a.75.75 0 0 1 .697.471l3 7.5a.75.75 0 0 1-1.393.557L7.992 9.5H5.008l-.811 2.028a.75.75 0 0 1-1.393-.556l3-7.5A.75.75 0 0 1 6.5 3m0 2.77L5.608 8h1.784zm8.28-1.55a.75.75 0 1 0-1.06 1.06l.72.72h-3.69a.75.75 0 0 0 0 1.5h3.69l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm0 7.5a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0 0 1.5h10.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z"
    }
  ) });
}
function kn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 48 48", children: /* @__PURE__ */ C("g", { fill: "none", stroke: "currentColor", strokeWidth: "4", children: [
    /* @__PURE__ */ n("circle", { cx: "10", cy: "24", r: "4" }),
    /* @__PURE__ */ n("circle", { cx: "38", cy: "10", r: "4" }),
    /* @__PURE__ */ n("circle", { cx: "38", cy: "24", r: "4" }),
    /* @__PURE__ */ n("circle", { cx: "38", cy: "38", r: "4" }),
    /* @__PURE__ */ n("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M34 38H22V10h12M14 24h20" })
  ] }) });
}
function Mn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "currentColor",
      d: "M13.5 3a.75.75 0 0 0-.697.471l-3 7.5a.75.75 0 0 0 1.393.557l.812-2.028h2.984l.811 2.028a.75.75 0 0 0 1.393-.556l-3-7.5A.75.75 0 0 0 13.5 3m0 2.77L14.392 8h-1.784zM5.22 4.22a.75.75 0 0 1 1.06 1.06L5.56 6h3.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h10.69a.75.75 0 0 1 0 1.5H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z"
    }
  ) });
}
function zn() {
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ n(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548",
      color: "currentColor"
    }
  ) });
}
function Tn() {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ n(
        "path",
        {
          fill: "currentColor",
          d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81z"
        }
      )
    }
  );
}
const yt = {
  Bold: si,
  LoaderCircle: ai,
  Italic: oi,
  Underline: ni,
  Quote: ii,
  TextQuote: nn,
  Strikethrough: ri,
  Minus: ti,
  Eraser: ei,
  PaintRoller: Qr,
  Redo2: Jr,
  Undo2: Kr,
  AlignCenter: wi,
  AlignJustify: vi,
  AlignLeft: bi,
  AlignRight: xi,
  ChevronDown: Zr,
  Subscript: qr,
  Superscript: Yr,
  Code: Xr,
  Code2: Gr,
  Type: Wr,
  IndentIncrease: Fr,
  IndentDecrease: $r,
  List: Br,
  ListOrdered: Ur,
  ListTodo: _r,
  Link: jr,
  ImageUp: Pr,
  Video: Or,
  Maximize: Hr,
  Minimize: Dr,
  Table: Vr,
  Sparkles: Rr,
  Pencil: Er,
  Unlink: Lr,
  BetweenHorizonalEnd: Ar,
  BetweenHorizonalStart: Nr,
  BetweenVerticalStart: Sr,
  BetweenVerticalEnd: Ir,
  TableCellsMerge: Tr,
  TableCellsSplit: zr,
  Trash2: Mr,
  Trash: kr,
  Replace: qe,
  ChevronsUpDown: Cr,
  LineHeight: ln,
  Word: sn,
  HeadingParagraph: yr,
  Heading1: wr,
  Heading2: vr,
  Heading3: br,
  Heading4: xr,
  Heading5: pr,
  Heading6: gr,
  Columns2: Ze,
  Columns3: mr,
  Columns4: fr,
  Plus: hr,
  Grip: ur,
  Copy: dr,
  Clipboard: cr,
  PanelLeft: lr,
  PanelRight: sr,
  Columns: Ze,
  Iframe: ar,
  MenuDown: cn,
  SizeS: hn,
  SizeM: un,
  SizeL: dn,
  AspectRatio: rn,
  Emoji: or,
  DeleteColumn: on,
  DeleteRow: an,
  SearchAndReplace: qe,
  EmojiIcon: nr,
  KatexIcon: ir,
  ExportPdf: bn,
  ExportWord: vn,
  ImportWord: Tn,
  ColumnAddLeft: mn,
  ColumnAddRight: gn,
  BookMarked: rr,
  Excalidraw: xn,
  ZoomIn: tr,
  ZoomOut: er,
  Settings: Qt,
  Eye: Jt,
  TextDirection: pn,
  LeftToRight: Cn,
  RightToLeft: Mn,
  Attachment: Kt,
  GifIcon: wn,
  ChevronUp: Zt,
  Crop: qt,
  Mermaid: kn,
  Twitter: zn,
  CodeView: fn,
  FlipX: Yt,
  FlipY: Xt,
  PencilRuler: Gt,
  WrapText: Wt,
  Loader: Ft,
  X: lt,
  Html: yn,
  ExternalLink: $t,
  Callout: Bt
}, tt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, rt = ct, Ue = (e, t) => (r) => {
  var i;
  if ((t == null ? void 0 : t.variants) == null) return rt(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, l = Object.keys(o).map((d) => {
    const g = r == null ? void 0 : r[d], p = a == null ? void 0 : a[d];
    if (g === null) return null;
    const u = tt(g) || tt(p);
    return o[d][u];
  }), s = r && Object.entries(r).reduce((d, g) => {
    let [p, u] = g;
    return u === void 0 || (d[p] = u), d;
  }, {}), c = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((d, g) => {
    let { class: p, className: u, ...k } = g;
    return Object.entries(k).every((b) => {
      let [z, f] = b;
      return Array.isArray(f) ? f.includes({
        ...a,
        ...s
      }[z]) : {
        ...a,
        ...s
      }[z] === f;
    }) ? [
      ...d,
      p,
      u
    ] : d;
  }, []);
  return rt(e, l, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, In = Ue(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-1 disabled:richtext-pointer-events-none disabled:richtext-opacity-50",
  {
    variants: {
      variant: {
        default: "!richtext-bg-primary !richtext-text-primary-foreground hover:!richtext-bg-primary/90",
        destructive: "richtext-bg-destructive richtext-text-destructive-foreground hover:richtext-bg-destructive/90",
        outline: "richtext-border richtext-border-input richtext-bg-background richtext-text-foreground hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        secondary: "richtext-bg-secondary richtext-text-secondary-foreground hover:richtext-bg-secondary/80",
        ghost: "hover:richtext-bg-accent hover:richtext-text-accent-foreground",
        link: "richtext-text-primary richtext-underline-offset-4 hover:richtext-underline"
      },
      size: {
        default: "richtext-h-10 richtext-px-4 richtext-py-2",
        sm: "richtext-h-9 richtext-rounded-md richtext-px-3",
        lg: "richtext-h-11 richtext-rounded-md richtext-px-8",
        icon: "richtext-size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), $ = U.forwardRef(
  ({ className: e, variant: t, size: r, asChild: i = !1, ...o }, a) => /* @__PURE__ */ n(i ? ht : "button", { className: _(In({ variant: t, size: r, className: e })), ref: a, ...o })
);
$.displayName = "Button";
const te = U.forwardRef(
  ({ className: e, type: t, ...r }, i) => /* @__PURE__ */ n(
    "input",
    {
      ref: i,
      type: t,
      className: _(
        "richtext-flex richtext-h-10 richtext-w-full richtext-rounded-md !richtext-border richtext-border-input richtext-bg-transparent richtext-px-3 richtext-py-2 richtext-text-sm richtext-text-foreground richtext-ring-offset-background file:richtext-border-0 file:richtext-bg-transparent file:richtext-text-sm file:richtext-font-medium placeholder:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-1 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-1 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50",
        e
      ),
      ...r
    }
  )
);
te.displayName = "Input";
const Sn = Ue(
  "richtext-text-sm richtext-font-medium richtext-leading-none richtext-text-foreground peer-disabled:richtext-cursor-not-allowed peer-disabled:richtext-opacity-70"
), pe = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(mt.Root, { className: _(Sn(), e), ref: r, ...t }));
pe.displayName = mt.Root.displayName;
const Ne = re.Root, ve = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  re.List,
  {
    ref: r,
    className: _(
      "richtext-inline-flex richtext-h-10 richtext-items-center richtext-justify-center richtext-rounded-md richtext-bg-muted richtext-p-1 richtext-text-muted-foreground",
      e
    ),
    ...t
  }
));
ve.displayName = re.List.displayName;
const q = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  re.Trigger,
  {
    ref: r,
    className: _(
      "richtext-inline-flex richtext-items-center richtext-justify-center richtext-whitespace-nowrap richtext-rounded-sm richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-all focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-1 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=active]:richtext-bg-background data-[state=active]:richtext-text-foreground data-[state=active]:richtext-shadow-sm",
      e
    ),
    ...t
  }
));
q.displayName = re.Trigger.displayName;
const Z = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  re.Content,
  {
    ref: r,
    className: _(
      "richtext-mt-2 richtext-ring-offset-background focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-1",
      e
    ),
    ...t
  }
));
Z.displayName = re.Content.displayName;
const Nn = Ue(
  "richtext-inline-flex richtext-items-center richtext-justify-center richtext-rounded-md richtext-text-sm richtext-font-medium richtext-ring-offset-background richtext-transition-colors hover:richtext-bg-muted hover:richtext-text-muted-foreground focus-visible:richtext-outline-none focus-visible:richtext-ring-2 focus-visible:richtext-ring-ring focus-visible:richtext-ring-offset-1 disabled:richtext-pointer-events-none disabled:richtext-opacity-50 data-[state=on]:richtext-bg-accent data-[state=on]:richtext-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "richtext-bg-transparent",
        outline: "richtext-border richtext-border-input richtext-bg-transparent hover:richtext-bg-accent hover:richtext-text-accent-foreground"
      },
      size: {
        default: "richtext-h-10 richtext-px-3",
        sm: "richtext-h-9 richtext-px-2",
        lg: "richtext-h-11 richtext-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ct = U.forwardRef(({ className: e, variant: t, size: r, ...i }, o) => /* @__PURE__ */ n(
  ft.Root,
  {
    ref: o,
    className: _(Nn({ variant: t, size: r, className: e })),
    ...i
  }
));
Ct.displayName = ft.Root.displayName;
const Fo = be.Provider, An = be.Root, Ln = be.Trigger, kt = U.forwardRef(({ className: e, sideOffset: t = 4, ...r }, i) => /* @__PURE__ */ n(
  be.Content,
  {
    "data-richtext-portal": !0,
    ref: i,
    sideOffset: t,
    className: _(
      "richtext-z-50 richtext-overflow-hidden richtext-rounded-md !richtext-border-none richtext-bg-primary richtext-px-3 richtext-py-1.5 richtext-text-sm richtext-text-primary-foreground richtext-shadow-md richtext-animate-in richtext-fade-in-0 richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
kt.displayName = be.Content.displayName;
const En = 1, Rn = 1e6;
let Ve = 0;
function Vn() {
  return Ve = (Ve + 1) % Number.MAX_SAFE_INTEGER, Ve.toString();
}
const De = /* @__PURE__ */ new Map();
function it(e) {
  if (De.has(e))
    return;
  const t = setTimeout(() => {
    De.delete(e), me({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Rn);
  De.set(e, t);
}
function Dn(e, t) {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, En)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map((r) => r.id === t.toast.id ? { ...r, ...t.toast } : r)
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? it(r) : e.toasts.forEach((i) => {
        it(i.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (i) => i.id === r || r === void 0 ? {
            ...i,
            open: !1
          } : i
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}
const ke = [];
let Me = { toasts: [] };
function me(e) {
  Me = Dn(Me, e), ke.forEach((t) => {
    t(Me);
  });
}
function Hn({ ...e }) {
  const t = Vn(), r = (o) => me({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), i = () => me({ type: "DISMISS_TOAST", toastId: t });
  return me({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || i();
      }
    }
  }), {
    id: t,
    dismiss: i,
    update: r
  };
}
function Be() {
  const [e, t] = U.useState(Me);
  return U.useEffect(() => (ke.push(t), () => {
    const r = ke.indexOf(t);
    r > -1 && ke.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Hn,
    dismiss: (r) => me({ type: "DISMISS_TOAST", toastId: r })
  };
}
const $e = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Oe.Root,
  {
    ref: r,
    className: _(
      "!richtext-peer !richtext-h-4 !richtext-w-4 !richtext-shrink-0 !richtext-rounded-sm !richtext-border !richtext-border-primary !richtext-p-0 !richtext-ring-offset-background focus-visible:!richtext-outline-none focus-visible:!richtext-ring-2 focus-visible:!richtext-ring-ring focus-visible:!richtext-ring-offset-1 disabled:!richtext-cursor-not-allowed disabled:!richtext-opacity-50 data-[state=checked]:!richtext-bg-primary data-[state=checked]:!richtext-text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      Oe.Indicator,
      {
        className: _(
          "!richtext-flex !richtext-items-center !richtext-justify-center !richtext-p-0 !richtext-text-current"
        ),
        children: /* @__PURE__ */ n(li, { className: "!richtext-h-4 !richtext-w-4" })
      }
    )
  }
));
$e.displayName = Oe.Root.displayName;
function On(e) {
  return e = e || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: e,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(t, r) {
      const i = e.get(t);
      i ? i.push(r) : e.set(t, [r]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(t, r) {
      const i = e.get(t);
      i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : e.set(t, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(t, r) {
      let i = e.get(t);
      i && i.slice().map((o) => {
        o(r);
      }), i = e.get("*"), i && i.slice().map((o) => {
        o(t, r);
      });
    }
  };
}
const Fe = On(), Mt = Q.createContext(Fe), Pn = () => Q.useContext(Mt);
function zt(e, t) {
  const r = Pn();
  Q.useEffect(() => (t.map((i) => r.on(i, e)), () => {
    t.map((i) => r.off(i, e));
  }), [r, t, e]);
}
const Wo = Fe.emit;
function Go({ children: e }) {
  return /* @__PURE__ */ n(Mt.Provider, { value: Fe, children: e });
}
const we = F.Root, We = F.Trigger, jn = F.Portal, Tt = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  F.Overlay,
  {
    ref: r,
    className: _(
      "richtext-fixed richtext-inset-0 richtext-z-50 richtext-bg-black/80 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0",
      e
    ),
    ...t
  }
));
Tt.displayName = F.Overlay.displayName;
const ae = U.forwardRef(({ className: e, children: t, ...r }, i) => /* @__PURE__ */ C(jn, { "data-richtext-portal": !0, children: [
  /* @__PURE__ */ n(Tt, {}),
  /* @__PURE__ */ C(
    F.Content,
    {
      "data-richtext-portal": !0,
      ref: i,
      className: _(
        "richtext-fixed richtext-left-[50%] richtext-top-[50%] richtext-z-50 richtext-grid richtext-w-full richtext-max-w-lg richtext-translate-x-[-50%] richtext-translate-y-[-50%] richtext-gap-4 richtext-border !richtext-border-border richtext-bg-background richtext-p-6 richtext-shadow-lg richtext-duration-200 data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[state=closed]:richtext-slide-out-to-left-1/2 data-[state=closed]:richtext-slide-out-to-top-[48%] data-[state=open]:richtext-slide-in-from-left-1/2 data-[state=open]:richtext-slide-in-from-top-[48%] sm:richtext-rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ C(F.Close, { className: "richtext-absolute richtext-right-4 richtext-top-4 richtext-rounded-sm richtext-opacity-70 richtext-ring-offset-background richtext-transition-opacity hover:richtext-opacity-100 focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-1 disabled:richtext-pointer-events-none data-[state=open]:richtext-bg-accent data-[state=open]:richtext-text-muted-foreground", children: [
          /* @__PURE__ */ n(lt, { className: "richtext-size-4 richtext-text-accent-foreground" }),
          /* @__PURE__ */ n("span", { className: "richtext-sr-only richtext-text-accent-foreground", children: "Close" })
        ] })
      ]
    }
  )
] }));
ae.displayName = F.Content.displayName;
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: _(
        "richtext-flex richtext-flex-col richtext-space-y-1.5 richtext-text-center sm:richtext-text-left",
        e
      ),
      ...t
    }
  );
}
_n.displayName = "DialogHeader";
function It({ className: e, ...t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: _(
        "richtext-flex richtext-flex-col-reverse sm:richtext-flex-row sm:richtext-justify-end sm:richtext-space-x-2",
        e
      ),
      ...t
    }
  );
}
It.displayName = "DialogFooter";
const se = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  F.Title,
  {
    ref: r,
    className: _(
      "richtext-text-lg richtext-font-semibold richtext-leading-none richtext-tracking-tight richtext-text-foreground",
      e
    ),
    ...t
  }
));
se.displayName = F.Title.displayName;
const Un = U.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  F.Description,
  {
    className: _("richtext-text-sm richtext-text-muted-foreground", e),
    ref: r,
    ...t
  }
));
Un.displayName = F.Description.displayName;
var Bn = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, $n = dt.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", ut(this.options.HTMLAttributes, e)];
  },
  parseMarkdown: (e, t) => t.createNode("image", {
    src: e.href,
    title: e.title,
    alt: e.text
  }),
  renderMarkdown: (e) => {
    var t, r, i, o, a, l;
    const s = (r = (t = e.attrs) == null ? void 0 : t.src) != null ? r : "", c = (o = (i = e.attrs) == null ? void 0 : i.alt) != null ? o : "", d = (l = (a = e.attrs) == null ? void 0 : a.title) != null ? l : "";
    return d ? `![${c}](${s} "${d}")` : `![${c}](${s})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: e, minWidth: t, minHeight: r, alwaysPreserveAspectRatio: i } = this.options.resize;
    return ({ node: o, getPos: a, HTMLAttributes: l, editor: s }) => {
      const c = document.createElement("img");
      Object.entries(l).forEach(([p, u]) => {
        if (u != null)
          switch (p) {
            case "width":
            case "height":
              break;
            default:
              c.setAttribute(p, u);
              break;
          }
      }), c.src = l.src;
      const d = new mi({
        element: c,
        editor: s,
        node: o,
        getPos: a,
        onResize: (p, u) => {
          c.style.width = `${p}px`, c.style.height = `${u}px`;
        },
        onCommit: (p, u) => {
          const k = a();
          k !== void 0 && this.editor.chain().setNodeSelection(k).updateAttributes(this.name, {
            width: p,
            height: u
          }).run();
        },
        onUpdate: (p, u, k) => p.type === o.type,
        options: {
          directions: e,
          min: {
            width: t,
            height: r
          },
          preserveAspectRatio: i === !0
        }
      }), g = d.dom;
      return g.style.visibility = "hidden", g.style.pointerEvents = "none", c.onload = () => {
        g.style.visibility = "", g.style.pointerEvents = "";
      }, d;
    };
  },
  addCommands() {
    return {
      setImage: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      fi({
        find: Bn,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, r, i] = e;
          return { src: r, alt: t, title: i };
        }
      })
    ];
  }
}), Fn = $n, Wn = typeof global == "object" && global && global.Object === Object && global, Gn = typeof self == "object" && self && self.Object === Object && self, St = Wn || Gn || Function("return this")(), Te = St.Symbol, Nt = Object.prototype, Xn = Nt.hasOwnProperty, Yn = Nt.toString, he = Te ? Te.toStringTag : void 0;
function qn(e) {
  var t = Xn.call(e, he), r = e[he];
  try {
    e[he] = void 0;
    var i = !0;
  } catch {
  }
  var o = Yn.call(e);
  return i && (t ? e[he] = r : delete e[he]), o;
}
var Zn = Object.prototype, Kn = Zn.toString;
function Jn(e) {
  return Kn.call(e);
}
var Qn = "[object Null]", eo = "[object Undefined]", nt = Te ? Te.toStringTag : void 0;
function At(e) {
  return e == null ? e === void 0 ? eo : Qn : nt && nt in Object(e) ? qn(e) : Jn(e);
}
function Lt(e) {
  return e != null && typeof e == "object";
}
var to = "[object Symbol]";
function ro(e) {
  return typeof e == "symbol" || Lt(e) && At(e) == to;
}
var io = /\s/;
function no(e) {
  for (var t = e.length; t-- && io.test(e.charAt(t)); )
    ;
  return t;
}
var oo = /^\s+/;
function ao(e) {
  return e && e.slice(0, no(e) + 1).replace(oo, "");
}
function Ie(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ot = NaN, so = /^[-+]0x[0-9a-f]+$/i, lo = /^0b[01]+$/i, co = /^0o[0-7]+$/i, uo = parseInt;
function ge(e) {
  if (typeof e == "number")
    return e;
  if (ro(e))
    return ot;
  if (Ie(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ie(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ao(e);
  var r = lo.test(e);
  return r || co.test(e) ? uo(e.slice(2), r ? 2 : 8) : so.test(e) ? ot : +e;
}
function ho(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function fo(e, t, r) {
  return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ge(r), r = r === r ? r : 0), t !== void 0 && (t = ge(t), t = t === t ? t : 0), ho(ge(e), t, r);
}
var He = function() {
  return St.Date.now();
}, mo = "Expected a function", go = Math.max, po = Math.min;
function xo(e, t, r) {
  var i, o, a, l, s, c, d = 0, g = !1, p = !1, u = !0;
  if (typeof e != "function")
    throw new TypeError(mo);
  t = ge(t) || 0, Ie(r) && (g = !!r.leading, p = "maxWait" in r, a = p ? go(ge(r.maxWait) || 0, t) : a, u = "trailing" in r ? !!r.trailing : u);
  function k(v) {
    var R = i, N = o;
    return i = o = void 0, d = v, l = e.apply(N, R), l;
  }
  function b(v) {
    return d = v, s = setTimeout(x, t), g ? k(v) : l;
  }
  function z(v) {
    var R = v - c, N = v - d, P = t - R;
    return p ? po(P, a - N) : P;
  }
  function f(v) {
    var R = v - c, N = v - d;
    return c === void 0 || R >= t || R < 0 || p && N >= a;
  }
  function x() {
    var v = He();
    if (f(v))
      return h(v);
    s = setTimeout(x, z(v));
  }
  function h(v) {
    return s = void 0, u && i ? k(v) : (i = o = void 0, l);
  }
  function S() {
    s !== void 0 && clearTimeout(s), d = 0, i = c = o = s = void 0;
  }
  function m() {
    return s === void 0 ? l : h(He());
  }
  function D() {
    var v = He(), R = f(v);
    if (i = arguments, o = this, c = v, R) {
      if (s === void 0)
        return b(c);
      if (p)
        return clearTimeout(s), s = setTimeout(x, t), k(c);
    }
    return s === void 0 && (s = setTimeout(x, t)), l;
  }
  return D.cancel = S, D.flush = m, D;
}
var bo = "[object Number]";
function at(e) {
  return typeof e == "number" || Lt(e) && At(e) == bo;
}
var vo = "Expected a function";
function st(e, t, r) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(vo);
  return Ie(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), xo(e, t, {
    leading: i,
    maxWait: t,
    trailing: o
  });
}
const Ce = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function wo(e) {
  var N, P, H;
  const [t, r] = L({
    width: Ke,
    height: Ke
  }), [i, o] = L({
    width: 0,
    height: 0
  }), [a] = L([
    Ce.TOP_LEFT,
    Ce.TOP_RIGHT,
    Ce.BOTTOM_LEFT,
    Ce.BOTTOM_RIGHT
  ]), [l, s] = L(!1), [c, d] = L({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: g, inline: p } = (N = e == null ? void 0 : e.node) == null ? void 0 : N.attrs, u = p && (g === "left" || g === "right"), k = B(() => {
    var Ye;
    const { src: M, alt: w, width: y, height: I, flipX: E, flipY: A } = (Ye = e == null ? void 0 : e.node) == null ? void 0 : Ye.attrs, j = at(y) ? `${y}px` : y, O = at(I) ? `${I}px` : I, G = [];
    E && G.push("rotateX(180deg)"), A && G.push("rotateY(180deg)");
    const ye = G.join(" ");
    return {
      src: M || void 0,
      alt: w || void 0,
      style: {
        width: j || void 0,
        height: O || void 0,
        transform: ye || "none",
        ...u ? { float: g } : {}
      }
    };
  }, [(P = e == null ? void 0 : e.node) == null ? void 0 : P.attrs]), b = B(() => {
    const {
      style: { width: M }
    } = k;
    return { width: M === "100%" ? M : void 0 };
  }, [k]);
  function z(M) {
    o({
      width: M.target.width,
      height: M.target.height
    });
  }
  function f() {
    const { editor: M, getPos: w } = e;
    M.commands.setNodeSelection(w());
  }
  const x = ce(
    st(() => {
      const { editor: M } = e, { width: w } = getComputedStyle(M.view.dom);
      r((y) => ({
        ...y,
        width: Number.parseInt(w, 10)
      }));
    }, Je),
    [e == null ? void 0 : e.editor]
  );
  function h(M, w) {
    M.preventDefault(), M.stopPropagation();
    const y = i.width, I = i.height, E = y / I;
    let A = Number(e.node.attrs.width), j = Number(e.node.attrs.height);
    const O = t.width;
    A && !j ? (A = A > O ? O : A, j = Math.round(A / E)) : j && !A ? (A = Math.round(j * E), A = A > O ? O : A) : !A && !j ? (A = y > O ? O : y, j = Math.round(A / E)) : A = A > O ? O : A, s(!0), d({
      x: M.clientX,
      y: M.clientY,
      w: A,
      h: j,
      dir: w
    });
  }
  const S = ce(
    st((M) => {
      if (M.preventDefault(), M.stopPropagation(), !l)
        return;
      const { x: w, w: y, dir: I } = c, E = (M.clientX - w) * (/l/.test(I) ? -1 : 1), A = fo(y + E, gi, t.width);
      e.updateAttributes({
        width: A,
        height: null
      });
    }, Je),
    [l, c, t, e.updateAttributes]
  ), m = ce(
    (M) => {
      M.preventDefault(), M.stopPropagation(), l && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), s(!1), f());
    },
    [l, f]
  ), D = ce(() => {
    document == null || document.addEventListener("mousemove", S, !0), document == null || document.addEventListener("mouseup", m, !0);
  }, [S, m]), v = ce(() => {
    document == null || document.removeEventListener("mousemove", S, !0), document == null || document.removeEventListener("mouseup", m, !0);
  }, [S, m]);
  ze(() => (l ? D() : v(), () => {
    v();
  }), [l, D, v]);
  const R = B(() => new ResizeObserver(() => x()), [x]);
  return ze(() => (R.observe(e.editor.view.dom), () => {
    R.disconnect();
  }), [e.editor.view.dom, R]), /* @__PURE__ */ n(
    ci,
    {
      as: p ? "span" : "div",
      className: "image-view",
      style: {
        float: u ? g : void 0,
        margin: u ? g === "left" ? "1em 1em 1em 0" : "1em 0 1em 1em" : void 0,
        display: p ? "inline" : "block",
        textAlign: u ? void 0 : g,
        width: ((H = k.style) == null ? void 0 : H.width) ?? "auto",
        ...u ? {} : b
      },
      children: /* @__PURE__ */ C(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: b,
          className: `image-view__body ${e != null && e.selected ? "image-view__body--focused" : ""} ${l ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ n(
              "img",
              {
                alt: k.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: f,
                onLoad: z,
                src: k.src,
                style: k.style
              }
            ),
            (e == null ? void 0 : e.editor.view.editable) && ((e == null ? void 0 : e.selected) || l) && /* @__PURE__ */ n("div", { className: "image-resizer", children: a == null ? void 0 : a.map((M) => /* @__PURE__ */ n(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${M}`,
                onMouseDown: (w) => h(w, M)
              },
              `image-dir-${M}`
            )) })
          ]
        }
      )
    }
  );
}
function yo(e) {
  const { editor: t } = di(), r = U.useMemo(
    () => t,
    [e, t]
  );
  return ui({
    editor: r,
    selector(o) {
      return o.editor ? {
        editor: o.editor,
        editorState: o.editor.state,
        canCommand: o.editor.can
      } : {
        editor: null,
        editorState: void 0,
        canCommand: void 0
      };
    }
  }) || { editor: null };
}
function ee() {
  return yo().editor;
}
const Et = jt(!1);
function Rt() {
  return _t(Et);
}
function Xo() {
  return Ut(Et);
}
const Vt = () => !1;
function Yo(e = Vt) {
  const t = Rt(), [r, i] = L(() => {
    const s = e();
    return typeof s == "boolean" ? !s : s;
  }), o = ee();
  ze(() => {
    if (!o || !e) return;
    const s = () => {
      const c = e();
      i(typeof c == "boolean" ? !c : c);
    };
    return s(), o.on("selectionUpdate", s), o.on("transaction", s), () => {
      o.off("selectionUpdate", s), o.off("transaction", s);
    };
  }, [o, e]);
  const a = B(() => !t || !o ? !0 : typeof r == "boolean" ? r : !1, [t, o, r]), l = B(() => !t || !o, [t, o]);
  return {
    disabled: a,
    // can not action, opacity < 1
    dataState: r,
    // true => show background, false => no background
    editorDisabled: l
  };
}
function Ae(e = Vt) {
  const t = Rt(), [r, i] = L({}), [o, a] = L(e()), l = ee();
  ze(() => {
    if (!l || !e) return;
    const d = () => {
      a(e());
    };
    return d(), l.on("selectionUpdate", d), () => {
      l.off("selectionUpdate", d);
    };
  }, [r, l, e]);
  const s = B(() => !t || !l, [t, l]), c = B(() => !t || !l, [t, l]);
  return {
    disabled: s,
    // can not action, opacity < 1
    dataState: o,
    // true => show background, false => no background
    editorDisabled: c,
    update: () => i({})
    // force update
  };
}
function le(e) {
  const t = ee();
  return B(() => t ? t.extensionManager.extensions.find(
    (i) => i.name === e
  ) : null, [t, e]);
}
function qo(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
const Co = (e) => typeof e == "number", ko = (e) => typeof e == "string", Mo = (e) => typeof e == "function";
function zo(e, t = "px") {
  if (!e) return e;
  const r = Co(e) ? String(e) : e, i = Number.parseFloat(r), o = r.match(/[%a-z]+$/i), a = o ? o[0] : t;
  return Number.isNaN(i) ? e : i + a;
}
function Zo(e, t) {
  if (!e)
    return !1;
  const { extensions: r = [] } = (e == null ? void 0 : e.extensionManager) ?? {};
  return !!r.find((o) => o.name === t);
}
function Ko(e) {
  return e.map((t) => ko(t) ? { value: t, name: t } : t);
}
function Dt(e) {
  const t = ee(), r = le(e), { t: i } = ne();
  return B(() => {
    if (!t || !r || !i)
      return null;
    const { button: o } = r.options;
    return !o || !Mo(o) ? null : o({
      editor: t,
      extension: r,
      t: i
    });
  }, [t, r, i]);
}
function To(e, t) {
  const r = e.type, i = e.name.toLowerCase(), o = i.split(".").pop();
  if (!o) return !1;
  const l = r || {
    heif: "image/heif",
    heic: "image/heic",
    dng: "image/x-adobe-dng",
    cr2: "image/x-canon-cr2",
    nef: "image/x-nikon-nef",
    arw: "image/x-sony-arw",
    raf: "image/x-fuji-raf",
    orf: "image/x-olympus-orf"
  }[o];
  return t.some((s) => {
    if (s.startsWith("."))
      return i.endsWith(s);
    if (s.endsWith("/*")) {
      const c = s.split("/")[0];
      return l == null ? void 0 : l.startsWith(c + "/");
    }
    return l === s;
  });
}
function Ge(e, t) {
  const { acceptMimes: r, maxSize: i, t: o, toast: a } = t, l = [];
  return (Array.isArray(e) ? e : Object.values(e)).forEach((c) => {
    if (!To(c, r)) {
      t.onError ? t.onError({
        type: "type",
        message: o("editor.upload.fileTypeNotSupported", {
          fileName: c.name
        }),
        file: c
      }) : a({
        variant: "default",
        title: o("editor.upload.fileTypeNotSupported", {
          fileName: c.name
        })
      });
      return;
    }
    if (c.size > i) {
      const d = (i / 1024 / 1024).toFixed(2);
      t.onError ? t.onError({
        type: "size",
        message: o("editor.upload.fileSizeTooBig", {
          fileName: c.name,
          size: d
        }),
        file: c
      }) : a({
        variant: "default",
        title: o("editor.upload.fileSizeTooBig", {
          fileName: c.name,
          size: d
        })
      });
      return;
    }
    l.push(c);
  }), l;
}
function Jo() {
  const { t: e } = ne(), { toast: t } = Be(), r = ee(), i = Dt(Se.name), { icon: o, tooltip: a } = (i == null ? void 0 : i.componentProps) ?? {}, { editorDisabled: l } = Ae(), [s, c] = L(!1), [d, g] = L(!1), p = le(Se.name), [u, k] = L(""), [b, z] = L(""), f = xe(null), x = (p == null ? void 0 : p.options.defaultInline) || !1, [h, S] = L(x), m = B(() => (p == null ? void 0 : p.options) || Xe, [p]);
  async function D(N) {
    var M;
    const P = (M = N == null ? void 0 : N.target) == null ? void 0 : M.files;
    if (!r || r.isDestroyed || P.length === 0 || d) {
      N.target.value = "";
      return;
    }
    const H = Ge(P, {
      acceptMimes: m == null ? void 0 : m.acceptMimes,
      maxSize: m == null ? void 0 : m.maxSize,
      t: e,
      toast: t,
      onError: m.onError
    });
    if (H.length <= 0) {
      N.target.value = "";
      return;
    }
    g(!0);
    try {
      if (m != null && m.multiple) {
        const w = H.map(async (I) => {
          let E = "";
          return m.upload ? E = await m.upload(I) : E = URL.createObjectURL(I), E;
        });
        (await Promise.all(w)).forEach((I) => {
          r.chain().focus().setImageInline({ src: I, inline: h, alt: b }).run();
        });
      } else {
        const w = H[0];
        let y = "";
        m.upload ? y = await m.upload(w) : y = URL.createObjectURL(w), r.chain().focus().setImageInline({ src: y, inline: h, alt: b }).run();
      }
      c(!1), z(""), S(x);
    } catch (w) {
      console.error("Error uploading image", w), m.onError ? m.onError({
        type: "upload",
        message: e("editor.upload.error")
      }) : t({
        variant: "destructive",
        title: e("editor.upload.error")
      });
    } finally {
      g(!1), N.target.value = "";
    }
  }
  function v(N) {
    N.preventDefault(), N.stopPropagation(), r.chain().focus().setImageInline({ src: u, inline: h, alt: b }).run(), c(!1), S(x), k(""), z("");
  }
  function R(N) {
    var P;
    N.preventDefault(), (P = f.current) == null || P.click();
  }
  return i ? /* @__PURE__ */ C(we, { onOpenChange: c, open: s, children: [
    /* @__PURE__ */ n(We, { asChild: !0, children: /* @__PURE__ */ n(
      wt,
      {
        disabled: l,
        icon: o,
        tooltip: a,
        action: () => {
          l || c(!0);
        }
      }
    ) }),
    /* @__PURE__ */ C(ae, { children: [
      /* @__PURE__ */ n(se, { children: e("editor.image.dialog.title") }),
      /* @__PURE__ */ C(
        Ne,
        {
          activationMode: "manual",
          defaultValue: m.resourceImage === "both" || m.resourceImage === "upload" ? "upload" : "link",
          children: [
            m.resourceImage === "both" && /* @__PURE__ */ C(ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
              /* @__PURE__ */ n(q, { value: "upload", children: e("editor.image.dialog.tab.upload") }),
              /* @__PURE__ */ n(q, { value: "link", children: e("editor.image.dialog.tab.url") })
            ] }),
            /* @__PURE__ */ C("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
              /* @__PURE__ */ n(
                $e,
                {
                  checked: h,
                  onCheckedChange: (N) => {
                    S(N);
                  }
                }
              ),
              /* @__PURE__ */ n(pe, { children: e("editor.link.dialog.inline") })
            ] }),
            m.enableAlt && /* @__PURE__ */ C("div", { className: "richtext-my-[10px]", children: [
              /* @__PURE__ */ n(pe, { className: "mb-[6px]", children: e("editor.imageUpload.alt") }),
              /* @__PURE__ */ n(te, { onChange: (N) => z(N.target.value), required: !0, type: "text", value: b })
            ] }),
            /* @__PURE__ */ C(Z, { value: "upload", children: [
              /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
                /* @__PURE__ */ n(
                  $,
                  {
                    className: "richtext-mt-1 richtext-w-full",
                    disabled: d,
                    onClick: R,
                    size: "sm",
                    children: d ? /* @__PURE__ */ C(Y, { children: [
                      e("editor.imageUpload.uploading"),
                      /* @__PURE__ */ n(fe, { className: "richtext-ml-1 richtext-animate-spin", name: "Loader" })
                    ] }) : e("editor.image.dialog.tab.upload")
                  }
                ),
                /* @__PURE__ */ n(
                  Ht,
                  {
                    alt: b,
                    disabled: d,
                    editor: r,
                    imageInline: h,
                    onClose: () => {
                      z("");
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ n(
                "input",
                {
                  accept: m.acceptMimes.join(",") || "image/*",
                  multiple: m.multiple,
                  onChange: D,
                  ref: f,
                  style: { display: "none" },
                  type: "file"
                }
              )
            ] }),
            /* @__PURE__ */ n(Z, { value: "link", children: /* @__PURE__ */ n("form", { onSubmit: v, children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
              /* @__PURE__ */ n(
                te,
                {
                  autoFocus: !0,
                  onChange: (N) => k(N.target.value),
                  placeholder: e("editor.image.dialog.placeholder"),
                  required: !0,
                  type: "url",
                  value: u
                }
              ),
              /* @__PURE__ */ n($, { type: "submit", children: e("editor.image.dialog.button.apply") })
            ] }) }) })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ n(Y, {});
}
const Xe = {
  acceptMimes: ["image/jpeg", "image/gif", "image/png", "image/jpg"],
  maxSize: 1024 * 1024 * 5,
  // 5MB
  multiple: !0,
  resourceImage: "both",
  defaultInline: !1,
  enableAlt: !0
}, Se = /* @__PURE__ */ Fn.extend({
  group: "inline",
  inline: !0,
  defining: !0,
  draggable: !0,
  selectable: !0,
  addOptions() {
    var e;
    return {
      ...Xe,
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: () => Promise.reject("Image Upload Function"),
      button: ({
        editor: t,
        extension: r,
        t: i
      }) => {
        var o, a;
        return {
          componentProps: {
            action: () => !0,
            upload: r.options.upload,
            /* If setImage is not available(when Image Component is not imported), the button is disabled */
            disabled: !((a = (o = t.can()).setImage) != null && a.call(o, {})),
            icon: "ImageUp",
            tooltip: i("editor.image.tooltip")
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      flipX: {
        default: !1
      },
      flipY: {
        default: !1
      },
      width: {
        default: null,
        parseHTML: (t) => {
          const r = t.style.width || t.getAttribute("width") || null;
          return r ? Number.parseInt(r, 10) : null;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      },
      inline: {
        default: !1,
        parseHTML: (t) => !!t.getAttribute("inline"),
        renderHTML: (t) => ({
          inline: t.inline
        })
      },
      alt: {
        default: "",
        parseHTML: (t) => t.getAttribute("alt"),
        renderHTML: (t) => ({
          alt: t.alt
        })
      }
    };
  },
  addNodeView() {
    return hi(wo);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      setImageInline: (t) => ({ commands: r }) => r.insertContent({
        type: this.name,
        attrs: {
          ...t,
          inline: t.inline ?? this.options.defaultInline
        }
      }),
      updateImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, t),
      setAlignImage: (t) => ({ commands: r }) => r.updateAttributes(this.name, { align: t })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { flipX: t, flipY: r, align: i, inline: o } = e, a = o && (i === "left" || i === "right"), l = t || r ? `transform: rotateX(${t ? "180" : "0"}deg) rotateY(${r ? "180" : "0"}deg);` : "", s = a ? "" : `text-align: ${i};`, g = `${a ? `float: ${i};` : ""}${a ? i === "left" ? "margin: 1em 1em 1em 0;" : "margin: 1em 0 1em 1em;" : ""}${l}`;
    return [
      o ? "span" : "div",
      {
        style: s,
        class: "image"
      },
      [
        "img",
        ut(
          {
            height: "auto",
            style: g
          },
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "span.image img",
        getAttrs: (e) => {
          var a;
          const t = e == null ? void 0 : e.parentElement, r = e == null ? void 0 : e.getAttribute("width"), i = (e == null ? void 0 : e.getAttribute("flipx")) || !1, o = (e == null ? void 0 : e.getAttribute("flipy")) || !1;
          return {
            src: e == null ? void 0 : e.getAttribute("src"),
            alt: e == null ? void 0 : e.getAttribute("alt"),
            caption: e == null ? void 0 : e.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (e == null ? void 0 : e.getAttribute("align")) || ((a = t == null ? void 0 : t.style) == null ? void 0 : a.textAlign) || null,
            inline: (e == null ? void 0 : e.getAttribute("inline")) || !1,
            flipX: i === "true",
            flipY: o === "true"
          };
        }
      },
      {
        tag: "div[class=image]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), r = t == null ? void 0 : t.getAttribute("width"), i = (t == null ? void 0 : t.getAttribute("flipx")) || !1, o = (t == null ? void 0 : t.getAttribute("flipy")) || !1;
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            caption: t == null ? void 0 : t.getAttribute("caption"),
            width: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null,
            inline: (t == null ? void 0 : t.getAttribute("inline")) || !1,
            flipX: i === "true",
            flipY: o === "true"
          };
        }
      },
      {
        tag: 'img[src]:not([src^="data:"])'
      }
    ];
  }
  // addProseMirrorPlugins() {
  //   const validateFile = (file: File): boolean => {
  //     // @ts-expect-error
  //     if (!this.options.acceptMimes.includes(file.type)) {
  //       // toast({ description: t.value('editor.imageUpload.fileTypeNotSupported'), duration: 2000 });
  //       return false;
  //     }
  //     // @ts-expect-error
  //     if (file.size > this.options.maxSize) {
  //       // toast({
  //       //   description: `${t.value('editor.imageUpload.fileSizeTooBig')} ${formatFileSize(
  //       //     this.options.maxSize,
  //       //   )}.`,
  //       //   duration: 2000,
  //       // });
  //       return false;
  //     }
  //     return true;
  //   };
  //   const uploadFn = createImageUpload({
  //     validateFn: validateFile,
  //     onUpload: this.options.upload as any,
  //     // postUpload: this.options.postUpload,
  //     defaultInline: this.options.defaultInline,
  //   });
  //   return [
  //     UploadImagesPlugin(),
  //     new Plugin({
  //       key: new PluginKey(`richtextCustomPlugin${this.name}`),
  //       props: {
  //         handlePaste: (view, event) => {
  //           const hasFiles =
  //               event.clipboardData &&
  //               event.clipboardData.files &&
  //               event.clipboardData.files?.length;
  //           if (!hasFiles) {
  //             return;
  //           }
  //           const items = [...(event.clipboardData.files || [])];
  //           if (items.some(x => x.type === 'text/html')) {
  //             return false;
  //           }
  //           return handleImagePaste(view, event, uploadFn);
  //         },
  //         handleDrop: (view, event, _, moved) => {
  //           if (!(event instanceof DragEvent) || !event.dataTransfer) {
  //             return false;
  //           }
  //           handleImageDrop(view, event, moved, uploadFn);
  //           return false;
  //         },
  //       },
  //     }),
  //   ];
  // },
});
function Qo(e) {
  return e.replace(/^.*\/|\..+$/g, "");
}
function ea(e) {
  return e.split(".").pop();
}
function ta(e) {
  return e < 1024 ? `${e} Byte` : e < 1024 * 1024 ? `${(e / 1024).toFixed(2)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function ra(e) {
  return e ? e === "application/pdf" ? "pdf" : e.startsWith("application/") && [".document", "word"].some((t) => e.includes(t)) ? "word" : e.startsWith("application/") && ["presentation"].some((t) => e.includes(t)) ? "excel" : e.startsWith("application/") && ["sheet"].some((t) => e.includes(t)) ? "ppt" : e.startsWith("image") ? "image" : e.startsWith("audio") ? "audio" : e.startsWith("video") ? "video" : "file" : "file";
}
function Io(e) {
  return new Promise((t) => {
    const r = new FileReader();
    r.addEventListener(
      "load",
      () => {
        t({
          alt: e.name,
          src: r.result
        });
      },
      !1
    ), r.readAsDataURL(e);
  });
}
function So(e, t) {
  const r = e.split(","), i = r[0].match(/:(.*?);/)[1], o = atob(r[r.length - 1]);
  let a = o.length;
  const l = new Uint8Array(a);
  for (; a--; )
    l[a] = o.charCodeAt(a);
  return new File([l], t, { type: i });
}
function Ht({ editor: e, imageInline: t, onClose: r, disabled: i, alt: o }) {
  var M, w;
  const { t: a } = ne(), { toast: l } = Be(), [s, c] = L(!1), [d, g] = L(!1), p = Q.useRef(null), [u, k] = Q.useState(), [b, z] = Q.useState(""), f = xe(null), [x, h] = L({
    src: "",
    file: null
  }), S = le(Se.name), m = B(() => (S == null ? void 0 : S.options) ?? {}, [S]);
  function D(y) {
    if (p.current && y.width && y.height) {
      const I = v(p.current, y);
      z(I);
    }
  }
  function v(y, I) {
    const E = document.createElement("canvas"), A = y.naturalWidth / y.width, j = y.naturalHeight / y.height;
    E.width = I.width * A, E.height = I.height * j;
    const O = E.getContext("2d");
    return O && (O.imageSmoothingEnabled = !1, O.drawImage(
      y,
      I.x * A,
      I.y * j,
      I.width * A,
      I.height * j,
      0,
      0,
      I.width * A,
      I.height * j
    )), E.toDataURL("image/png", 1);
  }
  const R = Q.useCallback(async () => {
    var y;
    if (!d) {
      g(!0);
      try {
        const I = So(b, ((y = x == null ? void 0 : x.file) == null ? void 0 : y.name) || "image.png");
        let E = "";
        m.upload ? E = await m.upload(I) : E = URL.createObjectURL(I), e.chain().focus().setImageInline({ src: E, inline: t, alt: o }).run(), c(!1), h({
          src: "",
          file: null
        }), H(), r();
      } catch (I) {
        console.error("Error cropping image", I);
      } finally {
        g(!1);
      }
    }
  }, [
    b,
    e,
    t,
    d,
    r,
    (M = x == null ? void 0 : x.file) == null ? void 0 : M.name,
    m
  ]);
  function N(y) {
    var I;
    y.preventDefault(), (I = f.current) == null || I.click();
  }
  const P = async (y) => {
    var O;
    const I = (O = y == null ? void 0 : y.target) == null ? void 0 : O.files;
    if (!e || e.isDestroyed || I.length === 0) {
      y.target.value = "";
      return;
    }
    const E = Ge(I, {
      acceptMimes: m == null ? void 0 : m.acceptMimes,
      maxSize: m == null ? void 0 : m.maxSize,
      t: a,
      toast: l,
      onError: m.onError
    });
    if (E.length <= 0) {
      y.target.value = "";
      return;
    }
    const A = E[0], j = await Io(A);
    c(!0), h({
      src: j.src,
      file: A
    });
  }, H = () => {
    f.current && (f.current.value = "");
  };
  return /* @__PURE__ */ C(Y, { children: [
    /* @__PURE__ */ n(
      $,
      {
        className: "richtext-mt-1 richtext-w-full",
        disabled: i,
        onClick: N,
        size: "sm",
        children: a("editor.image.dialog.tab.uploadCrop")
      }
    ),
    /* @__PURE__ */ C(
      we,
      {
        open: s,
        onOpenChange: (y) => {
          c(y), y || (h({ src: "", file: null }), H());
        },
        children: [
          /* @__PURE__ */ n(We, {}),
          /* @__PURE__ */ C(ae, { children: [
            /* @__PURE__ */ n(se, { children: a("editor.image.dialog.tab.uploadCrop") }),
            /* @__PURE__ */ n("div", { children: x.src && /* @__PURE__ */ n(
              yi,
              {
                className: "richtext-w-full",
                crop: u,
                onChange: (y) => k(y),
                onComplete: (y) => D(y),
                children: /* @__PURE__ */ n("img", { alt: "Crop me", ref: p, src: x.src })
              }
            ) }),
            /* @__PURE__ */ C(It, { children: [
              /* @__PURE__ */ C(
                $,
                {
                  disabled: d,
                  onClick: () => {
                    c(!1), h({
                      src: "",
                      file: null
                    }), H();
                  },
                  children: [
                    a("editor.imageUpload.cancel"),
                    /* @__PURE__ */ n(fe, { className: "richtext-ml-1", name: "Trash2" })
                  ]
                }
              ),
              /* @__PURE__ */ n($, { className: "richtext-w-fit", disabled: d || !u, onClick: R, children: d ? /* @__PURE__ */ C(Y, { children: [
                a("editor.imageUpload.uploading"),
                /* @__PURE__ */ n(fe, { className: "richtext-ml-1 richtext-animate-spin", name: "Loader" })
              ] }) : /* @__PURE__ */ C(Y, { children: [
                a("editor.imageUpload.crop"),
                /* @__PURE__ */ n(fe, { className: "richtext-ml-1", name: "Crop" })
              ] }) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ n(
      "input",
      {
        accept: ((w = m == null ? void 0 : m.acceptMimes) == null ? void 0 : w.join(",")) || "image/*",
        multiple: !1,
        onChange: P,
        ref: f,
        style: { display: "none" },
        type: "file"
      }
    )
  ] });
}
const Ot = {
  UPLOAD_IMAGE: (e) => `UPLOAD_IMAGE-${e}`,
  UPLOAD_VIDEO: (e) => `UPLOAD_VIDEO-${e}`,
  EXCALIDRAW: (e) => `EXCALIDRAW-${e}`
};
function No() {
  const { t: e } = ne(), { toast: t } = Be(), r = ee(), { editorDisabled: i } = Ae(), [o, a] = L(!1), l = Ot.UPLOAD_IMAGE(r.id);
  zt(a, [l]);
  const [s, c] = L(!1), d = le(Se.name), [g, p] = L(""), [u, k] = L(""), b = xe(null), z = (d == null ? void 0 : d.options.defaultInline) || !1, [f, x] = L(z), h = B(() => (d == null ? void 0 : d.options) || Xe, [d]);
  async function S(v) {
    var P;
    const R = (P = v == null ? void 0 : v.target) == null ? void 0 : P.files;
    if (!r || r.isDestroyed || R.length === 0 || s) {
      v.target.value = "";
      return;
    }
    const N = Ge(R, {
      acceptMimes: h == null ? void 0 : h.acceptMimes,
      maxSize: h == null ? void 0 : h.maxSize,
      t: e,
      toast: t,
      onError: h.onError
    });
    if (N.length <= 0) {
      v.target.value = "";
      return;
    }
    c(!0);
    try {
      if (h != null && h.multiple) {
        const H = N.map(async (w) => {
          let y = "";
          return h.upload ? y = await h.upload(w) : y = URL.createObjectURL(w), y;
        });
        (await Promise.all(H)).forEach((w) => {
          r.chain().focus().setImageInline({ src: w, inline: f, alt: u }).run();
        });
      } else {
        const H = N[0];
        let M = "";
        h.upload ? M = await h.upload(H) : M = URL.createObjectURL(H), r.chain().focus().setImageInline({ src: M, inline: f, alt: u }).run();
      }
      a(!1), k(""), x(z);
    } catch (H) {
      console.error("Error uploading image", H), h.onError ? h.onError({
        type: "upload",
        message: e("editor.upload.error")
      }) : t({
        variant: "destructive",
        title: e("editor.upload.error")
      });
    } finally {
      c(!1), v.target.value = "";
    }
  }
  function m(v) {
    v.preventDefault(), v.stopPropagation(), r.chain().focus().setImageInline({ src: g, inline: f, alt: u }).run(), a(!1), x(z), p(""), k("");
  }
  function D(v) {
    var R;
    v.preventDefault(), (R = b.current) == null || R.click();
  }
  return i ? /* @__PURE__ */ n(Y, {}) : /* @__PURE__ */ n(we, { onOpenChange: a, open: o, children: /* @__PURE__ */ C(ae, { children: [
    /* @__PURE__ */ n(se, { children: e("editor.image.dialog.title") }),
    /* @__PURE__ */ C(
      Ne,
      {
        activationMode: "manual",
        defaultValue: h.resourceImage === "both" || h.resourceImage === "upload" ? "upload" : "link",
        children: [
          h.resourceImage === "both" && /* @__PURE__ */ C(ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
            /* @__PURE__ */ n(q, { value: "upload", children: e("editor.image.dialog.tab.upload") }),
            /* @__PURE__ */ n(q, { value: "link", children: e("editor.image.dialog.tab.url") })
          ] }),
          /* @__PURE__ */ C("div", { className: "richtext-my-[10px] richtext-flex richtext-items-center richtext-gap-[4px]", children: [
            /* @__PURE__ */ n(
              $e,
              {
                checked: f,
                onCheckedChange: (v) => {
                  x(v);
                }
              }
            ),
            /* @__PURE__ */ n(pe, { children: e("editor.link.dialog.inline") })
          ] }),
          h.enableAlt && /* @__PURE__ */ C("div", { className: "richtext-my-[10px]", children: [
            /* @__PURE__ */ n(pe, { className: "mb-[6px]", children: e("editor.imageUpload.alt") }),
            /* @__PURE__ */ n(te, { onChange: (v) => k(v.target.value), required: !0, type: "text", value: u })
          ] }),
          /* @__PURE__ */ C(Z, { value: "upload", children: [
            /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: [
              /* @__PURE__ */ n(
                $,
                {
                  className: "richtext-mt-1 richtext-w-full",
                  disabled: s,
                  onClick: D,
                  size: "sm",
                  children: s ? /* @__PURE__ */ C(Y, { children: [
                    e("editor.imageUpload.uploading"),
                    /* @__PURE__ */ n(fe, { className: "richtext-ml-1 richtext-animate-spin", name: "Loader" })
                  ] }) : e("editor.image.dialog.tab.upload")
                }
              ),
              /* @__PURE__ */ n(
                Ht,
                {
                  alt: u,
                  disabled: s,
                  editor: r,
                  imageInline: f,
                  onClose: () => {
                    k("");
                  }
                }
              )
            ] }),
            /* @__PURE__ */ n(
              "input",
              {
                accept: h.acceptMimes.join(",") || "image/*",
                multiple: h.multiple,
                onChange: S,
                ref: b,
                style: { display: "none" },
                type: "file"
              }
            )
          ] }),
          /* @__PURE__ */ n(Z, { value: "link", children: /* @__PURE__ */ n("form", { onSubmit: m, children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
            /* @__PURE__ */ n(
              te,
              {
                autoFocus: !0,
                onChange: (v) => p(v.target.value),
                placeholder: e("editor.image.dialog.placeholder"),
                required: !0,
                type: "url",
                value: g
              }
            ),
            /* @__PURE__ */ n($, { type: "submit", children: e("editor.image.dialog.button.apply") })
          ] }) }) })
        ]
      }
    )
  ] }) });
}
function Pt(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return !(t != null && t.length) || t.length === 1 && t[0] === "." ? !0 : t.some((i) => {
    if (i.includes("*")) {
      const o = i.replace(/\./g, String.raw`\.`).replace(/\*/g, ".*");
      return new RegExp(`^${o}$`).test(r.hostname);
    }
    return r.hostname.includes(i);
  });
}
function ia() {
  const { t: e } = ne(), t = ee(), r = Dt(je.name), { icon: i, tooltip: o } = (r == null ? void 0 : r.componentProps) ?? {}, { editorDisabled: a } = Ae(), [l, s] = L(""), c = xe(null), [d, g] = L(""), [p, u] = L(!1), k = le(je.name), b = B(() => (k == null ? void 0 : k.options) ?? {}, [k]);
  async function z(h) {
    var v;
    const S = (v = h == null ? void 0 : h.target) == null ? void 0 : v.files;
    if (!t || t.isDestroyed || S.length === 0)
      return;
    const m = S[0];
    let D = "";
    b.upload ? D = await b.upload(m) : D = URL.createObjectURL(m), t.chain().focus().setVideo({
      src: D,
      width: "100%"
    }).run(), u(!1);
  }
  function f(h) {
    h.preventDefault(), h.stopPropagation(), l && (t.chain().focus().setVideo({
      src: l,
      width: "100%"
    }).run(), u(!1), s(""));
  }
  function x(h) {
    var S;
    h.preventDefault(), (S = c.current) == null || S.click();
  }
  return /* @__PURE__ */ C(we, { onOpenChange: u, open: p, children: [
    /* @__PURE__ */ n(We, { asChild: !0, children: /* @__PURE__ */ n(
      wt,
      {
        disabled: a,
        icon: i,
        tooltip: o,
        action: () => {
          a || u(!0);
        }
      }
    ) }),
    /* @__PURE__ */ C(ae, { children: [
      /* @__PURE__ */ n(se, { children: e("editor.video.dialog.title") }),
      /* @__PURE__ */ C(
        Ne,
        {
          activationMode: "manual",
          defaultValue: (b == null ? void 0 : b.resourceVideo) === "both" || (b == null ? void 0 : b.resourceVideo) === "upload" ? "upload" : "link",
          children: [
            /* @__PURE__ */ C(ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
              ((b == null ? void 0 : b.resourceVideo) === "both" || (b == null ? void 0 : b.resourceVideo) === "upload") && /* @__PURE__ */ n(q, { value: "upload", children: e("editor.video.dialog.tab.upload") }),
              ((b == null ? void 0 : b.resourceVideo) === "both" || (b == null ? void 0 : b.resourceVideo) === "link") && /* @__PURE__ */ n(q, { value: "link", children: e("editor.video.dialog.link") })
            ] }),
            /* @__PURE__ */ C(Z, { value: "upload", children: [
              /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ n($, { className: "richtext-mt-1 richtext-w-full", onClick: x, size: "sm", children: e("editor.video.dialog.tab.upload") }) }),
              /* @__PURE__ */ n(
                "input",
                {
                  accept: "video/*",
                  multiple: !0,
                  onChange: z,
                  ref: c,
                  type: "file",
                  style: {
                    display: "none"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ C(Z, { value: "link", children: [
              /* @__PURE__ */ n("div", { children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
                /* @__PURE__ */ n(
                  te,
                  {
                    autoFocus: !0,
                    placeholder: e("editor.video.dialog.placeholder"),
                    required: !0,
                    type: "url",
                    value: l,
                    onBlur: (h) => {
                      const S = h.target.value, m = b.videoProviders || ["."];
                      S && !Pt(S, m) ? g("Invalid video URL") : g("");
                    },
                    onChange: (h) => {
                      s(h.target.value);
                    }
                  }
                ),
                /* @__PURE__ */ n($, { onClick: f, type: "button", children: e("editor.video.dialog.button.apply") })
              ] }) }),
              d && /* @__PURE__ */ n("div", { className: "richtext-my-[5px] richtext-text-red-500", children: d })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Ao(e) {
  e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/");
  const t = e.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  t && (e = `https://www.youtube.com/embed/${t[1]}`);
  const r = e.match(/^https:\/\/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (r) {
    const o = r[1], a = r[2];
    a ? e = `https://player.vimeo.com/video/${o}?h=${a}` : e = `https://player.vimeo.com/video/${o}`;
  }
  return /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const je = /* @__PURE__ */ dt.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  //@ts-expect-error
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      upload: void 0,
      frameborder: !1,
      resourceVideo: "both",
      width: pi["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper"
        // style: 'display: flex;justify-content: center;',
      },
      button: ({ editor: e, t }) => {
        var r, i;
        return {
          componentProps: {
            action: () => {
            },
            isActive: () => e.isActive("video") || !1,
            /* If setVideo is not available(when Video Component is not imported), the button is disabled */
            disabled: !((i = (r = e.can()).setVideo) != null && i.call(r, {})),
            icon: "Video",
            tooltip: t("editor.video.tooltip"),
            videoProviders: ["."],
            editor: e
          }
        };
      }
    };
  },
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Ao(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: zo(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      },
      align: {
        default: "center",
        // Default alignment
        renderHTML: ({ align: e }) => ({
          align: e
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%", align: r = "center" } = e ?? {}, i = {
      ...e,
      width: "100%",
      height: "100%"
    }, o = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, a = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, g = ["div", { style: `display: flex; justify-content: ${r};` }, ["div", { style: o }, ["div", { style: a }], ["iframe", i]]];
    return ["div", {
      ...this.options.HTMLAttributes,
      class: "iframe-wrapper",
      "data-video": ""
    }, g];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  }
});
function Lo() {
  const { t: e } = ne(), t = ee(), { editorDisabled: r } = Ae(), [i, o] = L(""), a = xe(null), [l, s] = L(""), [c, d] = L(!1), g = le(je.name), p = Ot.UPLOAD_VIDEO(t.id);
  zt(d, [p]);
  const u = B(() => (g == null ? void 0 : g.options) ?? {}, [g]);
  async function k(f) {
    var m;
    const x = (m = f == null ? void 0 : f.target) == null ? void 0 : m.files;
    if (!t || t.isDestroyed || x.length === 0)
      return;
    const h = x[0];
    let S = "";
    u.upload ? S = await u.upload(h) : S = URL.createObjectURL(h), t.chain().focus().setVideo({
      src: S,
      width: "100%"
    }).run(), d(!1);
  }
  function b(f) {
    f.preventDefault(), f.stopPropagation(), i && (t.chain().focus().setVideo({
      src: i,
      width: "100%"
    }).run(), d(!1), o(""));
  }
  function z(f) {
    var x;
    f.preventDefault(), (x = a.current) == null || x.click();
  }
  return r ? /* @__PURE__ */ n(Y, {}) : /* @__PURE__ */ n(we, { onOpenChange: d, open: c, children: /* @__PURE__ */ C(ae, { children: [
    /* @__PURE__ */ n(se, { children: e("editor.video.dialog.title") }),
    /* @__PURE__ */ C(
      Ne,
      {
        activationMode: "manual",
        defaultValue: (u == null ? void 0 : u.resourceVideo) === "both" || (u == null ? void 0 : u.resourceVideo) === "upload" ? "upload" : "link",
        children: [
          /* @__PURE__ */ C(ve, { className: "richtext-grid richtext-w-full richtext-grid-cols-2", children: [
            ((u == null ? void 0 : u.resourceVideo) === "both" || (u == null ? void 0 : u.resourceVideo) === "upload") && /* @__PURE__ */ n(q, { value: "upload", children: e("editor.video.dialog.tab.upload") }),
            ((u == null ? void 0 : u.resourceVideo) === "both" || (u == null ? void 0 : u.resourceVideo) === "link") && /* @__PURE__ */ n(q, { value: "link", children: e("editor.video.dialog.link") })
          ] }),
          /* @__PURE__ */ C(Z, { value: "upload", children: [
            /* @__PURE__ */ n("div", { className: "richtext-flex richtext-items-center richtext-gap-[10px]", children: /* @__PURE__ */ n($, { className: "richtext-mt-1 richtext-w-full", onClick: z, size: "sm", children: e("editor.video.dialog.tab.upload") }) }),
            /* @__PURE__ */ n(
              "input",
              {
                accept: "video/*",
                multiple: !0,
                onChange: k,
                ref: a,
                type: "file",
                style: {
                  display: "none"
                }
              }
            )
          ] }),
          /* @__PURE__ */ C(Z, { value: "link", children: [
            /* @__PURE__ */ n("div", { children: /* @__PURE__ */ C("div", { className: "richtext-flex richtext-items-center richtext-gap-2", children: [
              /* @__PURE__ */ n(
                te,
                {
                  autoFocus: !0,
                  placeholder: e("editor.video.dialog.placeholder"),
                  required: !0,
                  type: "url",
                  value: i,
                  onBlur: (f) => {
                    const x = f.target.value, h = u.videoProviders || ["."];
                    x && !Pt(x, h) ? s("Invalid video URL") : s("");
                  },
                  onChange: (f) => {
                    o(f.target.value);
                  }
                }
              ),
              /* @__PURE__ */ n($, { onClick: b, type: "button", children: e("editor.video.dialog.button.apply") })
            ] }) }),
            l && /* @__PURE__ */ n("div", { className: "richtext-my-[5px] richtext-text-red-500", children: l })
          ] })
        ]
      }
    )
  ] }) });
}
function Eo() {
  return /* @__PURE__ */ C(Y, { children: [
    /* @__PURE__ */ n(No, {}),
    /* @__PURE__ */ n(Lo, {})
  ] });
}
process.env.NODE_ENV !== "production" && (Eo.displayName = "SlashDialogTrigger");
export {
  Jo as $,
  wt as A,
  $ as B,
  $e as C,
  we as D,
  Ot as E,
  Rt as F,
  zt as G,
  at as H,
  fe as I,
  fo as J,
  xo as K,
  pe as L,
  cn as M,
  Xo as N,
  Fo as O,
  ra as P,
  vn as Q,
  Go as R,
  Eo as S,
  An as T,
  bn as U,
  ea as V,
  Qo as W,
  ta as X,
  _n as Y,
  je as Z,
  Xe as _,
  Ln as a,
  ia as a0,
  kt as b,
  _ as c,
  Ae as d,
  Yo as e,
  Ko as f,
  tn as g,
  ee as h,
  yt as i,
  te as j,
  Ct as k,
  en as l,
  le as m,
  Be as n,
  Zo as o,
  Se as p,
  qo as q,
  We as r,
  ae as s,
  st as t,
  Dt as u,
  se as v,
  It as w,
  So as x,
  Fn as y,
  Wo as z
};
