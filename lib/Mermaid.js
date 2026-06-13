import { s as G, m as U } from "./index-BblvcbTH.js";
import { t as q, q as X, h as Z, u as Y, d as J, D as K, r as Q, A as tt, s as et, v as rt, w as it, B as st, x as at, y as nt } from "./index-BrsJsbds.js";
import { N as ot, a as lt } from "./clsx-0OU6n9va.js";
import { jsx as n, jsxs as H, Fragment as ct } from "react/jsx-runtime";
import { useState as m, useMemo as P, useCallback as A, useEffect as R, useRef as dt } from "react";
import { I as V, j as W, k as ut } from "./index-oj858lQO.js";
import { s as ht, i as mt } from "./shortId-WJVkrvml.js";
import { T as gt } from "./textarea-CpxXPky_.js";
const C = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function pt({ editor: e, node: t, updateAttributes: i, getPos: a, selected: w }) {
  const [T, c] = m({
    width: V,
    height: V
  }), [S, D] = m({
    width: 0,
    height: 0
  }), [y] = m([
    C.TOP_LEFT,
    C.TOP_RIGHT,
    C.BOTTOM_LEFT,
    C.BOTTOM_RIGHT
  ]), [o, _] = m(!1), [L, d] = m({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: k } = t == null ? void 0 : t.attrs, g = P(() => {
    const { src: r, alt: p, width: f, height: b } = t == null ? void 0 : t.attrs, x = G(f) ? `${f}px` : f, s = G(b) ? `${b}px` : b;
    return {
      src: r || void 0,
      alt: p || void 0,
      style: {
        width: x || void 0,
        height: s || void 0
      }
    };
  }, [t == null ? void 0 : t.attrs]), O = P(() => {
    const {
      style: { width: r }
    } = g;
    return { width: r === "100%" ? r : void 0 };
  }, [g]);
  function B(r) {
    D({
      width: r.target.width,
      height: r.target.height
    });
  }
  function I() {
    e.commands.setNodeSelection(a());
  }
  const E = A(
    q(() => {
      const { width: r } = getComputedStyle(e.view.dom);
      c((p) => ({
        ...p,
        width: Number.parseInt(r, 10)
      }));
    }, W),
    [e]
  );
  function F(r, p) {
    r.preventDefault(), r.stopPropagation();
    const f = S.width, b = S.height, x = f / b;
    let s = Number(t.attrs.width), v = Number(t.attrs.height);
    const h = T.width;
    s && !v ? (s = s > h ? h : s, v = Math.round(s / x)) : v && !s ? (s = Math.round(v * x), s = s > h ? h : s) : !s && !v ? (s = f > h ? h : f, v = Math.round(s / x)) : s = s > h ? h : s, _(!0), d({
      x: r.clientX,
      y: r.clientY,
      w: s,
      h: v,
      dir: p
    });
  }
  const l = A(
    q((r) => {
      if (r.preventDefault(), r.stopPropagation(), !o)
        return;
      const { x: p, w: f, dir: b } = L, x = (r.clientX - p) * (/l/.test(b) ? -1 : 1), { width: s, height: v } = t == null ? void 0 : t.attrs, h = s / v, $ = X(f + x, ut, T.width), j = Math.round($ / h);
      i({
        width: $,
        height: j
      });
    }, W),
    [o, L, T, i, t == null ? void 0 : t.attrs]
  ), u = A(
    (r) => {
      r.preventDefault(), r.stopPropagation(), o && (d({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), _(!1), I());
    },
    [o, I]
  ), z = A(() => {
    document == null || document.addEventListener("mousemove", l, !0), document == null || document.addEventListener("mouseup", u, !0);
  }, [l, u]), N = A(() => {
    document == null || document.removeEventListener("mousemove", l, !0), document == null || document.removeEventListener("mouseup", u, !0);
  }, [l, u]);
  R(() => (o ? z() : N(), () => {
    N();
  }), [o, z, N]);
  const M = P(() => new ResizeObserver(() => E()), [E]);
  return R(() => (M.observe(e.view.dom), () => {
    M.disconnect();
  }), [e.view.dom, M]), /* @__PURE__ */ n(
    ot,
    {
      className: "image-view",
      style: { ...O, width: "100%", textAlign: k },
      children: /* @__PURE__ */ H(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...O, background: "#fff" },
          className: `image-view__body ${w ? "image-view__body--focused" : ""} ${o ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ n(
              "img",
              {
                alt: g.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: I,
                onLoad: B,
                src: g.src,
                style: g.style
              }
            ),
            e.view.editable && (w || o) && /* @__PURE__ */ n("div", { className: "image-resizer", children: y == null ? void 0 : y.map((r) => /* @__PURE__ */ n(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${r}`,
                onMouseDown: (p) => F(p, r)
              },
              `image-dir-${r}`
            )) })
          ]
        }
      )
    }
  );
}
const ft = `graph TB
a-->b`;
function At() {
  const e = Z(), t = Y(vt.name), { tooltipOptions: i = {}, isActive: a = void 0, upload: w } = (t == null ? void 0 : t.componentProps) ?? {}, { editorDisabled: T } = J(a), [c, S] = m(ft), [D, y] = m(""), [o, _] = m(!1), L = dt(null), [d, k] = m(null), [g, O] = m(!0), B = A((l) => {
    l && import("mermaid").then((u) => {
      k(u.default);
    }).finally(() => O(!1));
  }, []), I = async (l) => {
    try {
      const { svg: u } = await d.render("mermaid-svg", l);
      y(u);
    } catch {
      y("");
    }
  }, E = () => {
    d.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), I(c);
  };
  return R(() => {
    !g && d && o && E();
  }, [d, o]), R(() => {
    !g && d && o && I(c);
  }, [d && c]), /* @__PURE__ */ H(K, { onOpenChange: _, open: o, children: [
    /* @__PURE__ */ n(Q, { asChild: !0, children: /* @__PURE__ */ n(
      tt,
      {
        disabled: T,
        icon: "Mermaid",
        tooltip: "Mermaid",
        tooltipOptions: i,
        action: () => {
          T || _(!0);
        }
      }
    ) }),
    /* @__PURE__ */ H(et, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
      /* @__PURE__ */ n(rt, { children: "Mermaid" }),
      /* @__PURE__ */ n("div", { ref: B, style: { height: "100%", border: "1px solid hsl(var(--border))" }, children: g ? /* @__PURE__ */ n("p", { children: "Loading..." }) : /* @__PURE__ */ n(ct, { children: /* @__PURE__ */ H("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
        /* @__PURE__ */ n(
          gt,
          {
            autoFocus: !0,
            className: "richtext-flex-1",
            onChange: (l) => S(l.target.value),
            placeholder: "Text",
            required: !0,
            rows: 10,
            value: c,
            style: {
              color: "hsl(var(--foreground))"
            }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
            dangerouslySetInnerHTML: { __html: D },
            ref: L,
            style: {
              height: "100%",
              borderWidth: 1,
              minHeight: 500,
              background: "#fff"
            }
          }
        )
      ] }) }) }),
      /* @__PURE__ */ n(it, { children: /* @__PURE__ */ n(st, { disabled: !d, onClick: async () => {
        if (c !== "") {
          if (c) {
            const l = L.current.querySelector("svg"), { width: u, height: z } = l.getBoundingClientRect(), N = `mermaid-${ht()}.svg`;
            let M = mt(l.outerHTML);
            if (w) {
              const r = at(M, N);
              M = await w(r);
            }
            e == null || e.chain().focus().setMermaid(
              {
                type: "mermaid",
                src: M,
                alt: encodeURIComponent(c),
                width: u,
                height: z
              },
              !!c
            ).run();
          }
          _(!1);
        }
      }, type: "button", children: "Save changes" }) })
    ] })
  ] });
}
const vt = /* @__PURE__ */ nt.extend({
  name: "mermaid",
  //@ts-expect-error
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "mermaid"
      },
      button: ({ editor: t, t: i, extension: a }) => {
        var w;
        return {
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: t,
            icon: "Mermaid",
            tooltip: i("editor.mermaid.tooltip"),
            upload: (w = a == null ? void 0 : a.options) == null ? void 0 : w.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const i = t.querySelector("img"), a = i == null ? void 0 : i.getAttribute("width");
          return a ? Number.parseInt(a, 10) : 320;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      height: {
        default: null,
        parseHTML: (t) => {
          const i = t.querySelector("img"), a = i == null ? void 0 : i.getAttribute("height");
          return a ? Number.parseInt(a, 10) : 212;
        },
        renderHTML: (t) => ({
          height: t.height
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return lt(pt);
  },
  // @ts-ignore
  addCommands() {
    return {
      setMermaid: (e, t) => ({ commands: i, editor: a }) => t ? i.insertContent({
        type: this.name,
        attrs: e
      }) : i.insertContentAt(a.state.selection.anchor, {
        type: this.name,
        attrs: e
      }),
      setAlignImageMermaid: (e) => ({ commands: t }) => t.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageMermaid"
      },
      [
        "img",
        U(
          // @ts-ignore
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageMermaid]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), i = t == null ? void 0 : t.getAttribute("width"), a = t == null ? void 0 : t.getAttribute("height");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            width: i ? Number.parseInt(i, 10) : null,
            height: a ? Number.parseInt(a, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  vt as Mermaid,
  At as RichTextMermaid
};
