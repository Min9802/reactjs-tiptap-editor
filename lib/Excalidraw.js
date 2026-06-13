import { N as k, n as $, m as B } from "./index-BblvcbTH.js";
import { N as U, c as R, a as j } from "./clsx-0OU6n9va.js";
import { jsx as t, jsxs as T } from "react/jsx-runtime";
import { Resizable as F } from "re-resizable";
import { useRef as X, useState as o, useCallback as v, useEffect as M, useMemo as q } from "react";
import { F as G, q as Y, A as S, h as J, u as K, m as Q, d as ee, E as te, G as re, D as ae, r as ne, s as ie, v as se, w as oe, B as le } from "./index-BrsJsbds.js";
import { n as de, g as D } from "./dom-dataset-CIEeltF6.js";
const ce = "_wrap_dra8y_1", ue = "_renderWrap_dra8y_7", he = "_handlerWrap_dra8y_30", pe = "_disabled_dra8y_40", x = {
  wrap: ce,
  renderWrap: ue,
  handlerWrap: he,
  disabled: pe
}, me = 10, ge = 200, W = 15, H = { width: "100%", height: "100%", maxWidth: "100%" };
function fe({ editor: e, node: l, updateAttributes: c }) {
  const p = X(null), u = G(), m = e.isActive(C.name), { data: d, width: n, height: A } = l.attrs, [g, N] = o(null), [b, I] = o(!0), [i, h] = o(null), [E, y] = o(100), f = v((r) => () => {
    y(
      (s) => Y(
        r === "minus" ? s - W : s + W,
        me,
        ge
      )
    );
  }, []);
  M(() => {
    let r = !1;
    return import("@excalidraw/excalidraw").then((s) => {
      r || (p.current = s.exportToSvg);
    }).catch((s) => !r && h(s)).finally(() => !r && I(!1)), () => {
      r = !0;
    };
  }, [d]), M(() => {
    let r = !1;
    return (async () => {
      if (!p.current || r || b || i || !d) return;
      const w = await p.current(d);
      r || (w.setAttribute("width", "100%"), w.setAttribute("height", "100%"), w.setAttribute("display", "block"), N(w));
    })(), () => {
      r = !0;
    };
  }, [d, b, i]);
  const L = (r) => {
    c({ width: r.width, height: r.height });
  };
  return /* @__PURE__ */ t(
    U,
    {
      className: R(x.wrap, {
        [x.active]: m,
        [x.disabled]: !u
      }),
      children: /* @__PURE__ */ t(
        F,
        {
          size: {
            width: Number.parseInt(n),
            height: Number.parseInt(A)
          },
          onResizeStop: (r, s, w, _) => {
            L({
              width: Number.parseInt(n) + _.width,
              height: Number.parseInt(A) + _.height
            });
          },
          children: /* @__PURE__ */ T(
            "div",
            {
              className: R(x.renderWrap, "render-wrapper"),
              style: { ...H, overflow: "hidden" },
              children: [
                i && /* @__PURE__ */ t("div", { style: H, children: /* @__PURE__ */ t("p", { children: i.message || i }) }),
                b && /* @__PURE__ */ t("p", { children: "Loading..." }),
                !b && !i && g && /* @__PURE__ */ t(
                  "div",
                  {
                    dangerouslySetInnerHTML: { __html: (g == null ? void 0 : g.outerHTML) ?? "" },
                    style: {
                      height: "100%",
                      maxHeight: "100%",
                      padding: 24,
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: `scale(${E / 100})`,
                      transition: "all ease-in-out .3s"
                    }
                  }
                ),
                /* @__PURE__ */ T("div", { className: x.handlerWrap, children: [
                  /* @__PURE__ */ t(
                    S,
                    {
                      action: f("minus"),
                      disabled: !u,
                      icon: "ZoomOut",
                      tooltip: "Zoom Out"
                    }
                  ),
                  /* @__PURE__ */ t(
                    S,
                    {
                      action: f("plus"),
                      disabled: !u,
                      icon: "ZoomIn",
                      tooltip: "Zoom In"
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    }
  );
}
function ye() {
  const e = J(), l = K(C.name), c = Q(C.name), { tooltipOptions: p = {}, isActive: u = void 0 } = (l == null ? void 0 : l.componentProps) ?? {}, { editorDisabled: m } = ee(u), d = q(() => (c == null ? void 0 : c.options) || {}, [c]), [n, A] = o(null), [g, N] = o({}), [b, I] = o({
    elements: [],
    appState: { isLoading: !1 },
    files: null
  }), [i, h] = o(!1), [E, y] = o(!0), [f, L] = o(null), r = v(
    (a) => {
      a && import("@excalidraw/excalidraw").then((O) => {
        A(O.Excalidraw);
      }).catch(L).finally(() => y(!1));
    },
    [y]
  ), s = v((a) => {
    setTimeout(() => {
      a.refresh();
    });
  }, []), w = v((a, O, P) => {
    N({
      elements: a,
      appState: { isLoading: !1 },
      files: P
    });
  }, []), _ = v(() => {
    if (!n) {
      h(!1);
      return;
    }
    e.chain().focus().setExcalidraw({ data: g }).run(), h(!1);
  }, [n, e, g, h]), V = (a) => {
    h(!0), a != null && a.data && I(a == null ? void 0 : a.data);
  }, z = te.EXCALIDRAW(e.id);
  return re(V, [z]), M(() => {
    !E && n && i && setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 400);
  }, [E, n, i]), /* @__PURE__ */ T(ae, { onOpenChange: h, open: i, children: [
    /* @__PURE__ */ t(ne, { asChild: !0, children: /* @__PURE__ */ t(
      S,
      {
        disabled: m,
        icon: "Excalidraw",
        tooltip: "Excalidraw",
        tooltipOptions: p,
        action: () => {
          m || h(!0);
        }
      }
    ) }),
    /* @__PURE__ */ T(ie, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
      /* @__PURE__ */ t(se, { children: "Excalidraw" }),
      /* @__PURE__ */ T("div", { style: { height: "100%", borderWidth: 1 }, children: [
        E && /* @__PURE__ */ t("p", { children: "Loading..." }),
        f && /* @__PURE__ */ t("p", { children: f && f.message || "Error" }),
        /* @__PURE__ */ t("div", { ref: r, style: { width: "100%", height: 600 }, children: !E && !f && n ? /* @__PURE__ */ t(
          n,
          {
            initialData: b,
            langCode: "en",
            onChange: w,
            ref: s,
            ...d.excalidrawProps
          }
        ) : null })
      ] }),
      /* @__PURE__ */ t(oe, { children: /* @__PURE__ */ t(le, { disabled: !n, onClick: _, type: "button", children: "Save changes" }) })
    ] })
  ] });
}
const Z = { elements: [] }, C = /* @__PURE__ */ k.create({
  name: "excalidraw",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  addAttributes() {
    return {
      defaultShowPicker: {
        default: !1
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%",
        parseHTML: D("width")
      },
      height: {
        default: 240,
        parseHTML: D("height")
      },
      data: {
        default: Z,
        parseHTML: D("data", !0)
      }
    };
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "excalidraw"
      },
      excalidrawProps: {},
      button: () => ({
        componentProps: {}
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: l }) {
    return [
      "div",
      B(this.options.HTMLAttributes, e, de(l))
    ];
  },
  addCommands() {
    return {
      setExcalidraw: (e) => ({ tr: l, commands: c, chain: p }) => {
        var u, m, d;
        return e = e || {}, e.data = e.data || Z, ((d = (m = (u = l.selection) == null ? void 0 : u.node) == null ? void 0 : m.type) == null ? void 0 : d.name) == this.name ? c.updateAttributes(this.name, e) : p().insertContent({
          type: this.name,
          attrs: e
        }).run();
      }
    };
  },
  addNodeView() {
    return j(fe);
  },
  addInputRules() {
    return [
      $({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  }
});
export {
  C as Excalidraw,
  ye as RichTextExcalidraw
};
