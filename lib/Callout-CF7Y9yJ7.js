import { N as U, m as E } from "./index-BblvcbTH.js";
import { N as W, c as N, a as F } from "./clsx-0OU6n9va.js";
import { c as l, h as Y, u as _, d as $, D as K, r as q, A as S, s as G, v as J, L as p, j as C, w as Q, B as w } from "./index-BrsJsbds.js";
import { jsxs as c, jsx as e, Fragment as X } from "react/jsx-runtime";
import * as d from "react";
import { useState as x } from "react";
import "./theme.js";
import { ChevronDown as A, Check as Z, ChevronUp as tt, Info as et, Lightbulb as rt, AlertCircle as it, TriangleAlert as at, OctagonAlert as ct } from "lucide-react";
import * as a from "@radix-ui/react-select";
import { u as ot } from "./index-oj858lQO.js";
const lt = a.Root, nt = a.Value, L = d.forwardRef(({ className: t, children: r, ...i }, o) => /* @__PURE__ */ c(
  a.Trigger,
  {
    ref: o,
    className: l(
      "richtext-flex richtext-h-10 richtext-w-full richtext-items-center richtext-justify-between richtext-rounded-md richtext-border richtext-border-input richtext-bg-background richtext-px-3 richtext-py-2 richtext-text-sm richtext-text-foreground richtext-ring-offset-background placeholder:richtext-text-muted-foreground focus:richtext-outline-none focus:richtext-ring-2 focus:richtext-ring-ring focus:richtext-ring-offset-1 disabled:richtext-cursor-not-allowed disabled:richtext-opacity-50 [&>span]:richtext-line-clamp-1",
      t
    ),
    ...i,
    children: [
      r,
      /* @__PURE__ */ e(a.Icon, { asChild: !0, children: /* @__PURE__ */ e(A, { className: "richtext-size-4 richtext-opacity-50" }) })
    ]
  }
));
L.displayName = a.Trigger.displayName;
const I = d.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ e(
  a.ScrollUpButton,
  {
    ref: i,
    className: l(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e(tt, { className: "richtext-size-4" })
  }
));
I.displayName = a.ScrollUpButton.displayName;
const R = d.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ e(
  a.ScrollDownButton,
  {
    ref: i,
    className: l(
      "richtext-flex richtext-cursor-default richtext-items-center richtext-justify-center richtext-py-1",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e(A, { className: "richtext-size-4" })
  }
));
R.displayName = a.ScrollDownButton.displayName;
const B = d.forwardRef(({ className: t, children: r, position: i = "popper", ...o }, n) => /* @__PURE__ */ e(a.Portal, { children: /* @__PURE__ */ c(
  a.Content,
  {
    "data-richtext-portal": !0,
    position: i,
    ref: n,
    className: l(
      "richtext-relative richtext-z-50 richtext-max-h-60 richtext-min-w-[8rem] richtext-overflow-hidden richtext-overflow-y-auto richtext-rounded-md richtext-border !richtext-border-border richtext-bg-popover richtext-text-popover-foreground richtext-shadow-md data-[state=open]:richtext-animate-in data-[state=closed]:richtext-animate-out data-[state=closed]:richtext-fade-out-0 data-[state=open]:richtext-fade-in-0 data-[state=closed]:richtext-zoom-out-95 data-[state=open]:richtext-zoom-in-95 data-[side=bottom]:richtext-slide-in-from-top-2 data-[side=left]:richtext-slide-in-from-right-2 data-[side=right]:richtext-slide-in-from-left-2 data-[side=top]:richtext-slide-in-from-bottom-2",
      i === "popper" && "data-[side=bottom]:richtext-translate-y-1 data-[side=left]:richtext--translate-x-1 data-[side=right]:richtext-translate-x-1 data-[side=top]:richtext--translate-y-1",
      t
    ),
    ...o,
    children: [
      /* @__PURE__ */ e(I, {}),
      /* @__PURE__ */ e(
        a.Viewport,
        {
          className: l(
            "richtext-p-1",
            i === "popper" && "richtext-h-[var(--radix-select-trigger-height)] richtext-w-full richtext-min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ e(R, {})
    ]
  }
) }));
B.displayName = a.Content.displayName;
const st = d.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ e(
  a.Label,
  {
    className: l(
      "richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-font-semibold",
      t
    ),
    ref: i,
    ...r
  }
));
st.displayName = a.Label.displayName;
const k = d.forwardRef(({ className: t, children: r, ...i }, o) => /* @__PURE__ */ c(
  a.Item,
  {
    ref: o,
    className: l(
      "richtext-relative richtext-flex richtext-w-full richtext-cursor-default richtext-select-none richtext-items-center richtext-rounded-sm richtext-py-1.5 richtext-pl-8 richtext-pr-2 richtext-text-sm richtext-outline-none focus:richtext-bg-accent focus:richtext-text-accent-foreground data-[disabled]:richtext-pointer-events-none data-[disabled]:richtext-opacity-50",
      t
    ),
    ...i,
    children: [
      /* @__PURE__ */ e("span", { className: "richtext-absolute richtext-left-2 richtext-flex richtext-size-3.5 richtext-items-center richtext-justify-center", children: /* @__PURE__ */ e(a.ItemIndicator, { children: /* @__PURE__ */ e(Z, { className: "richtext-size-4" }) }) }),
      /* @__PURE__ */ e(a.ItemText, { children: r })
    ]
  }
));
k.displayName = a.Item.displayName;
const dt = d.forwardRef(({ className: t, ...r }, i) => /* @__PURE__ */ e(
  a.Separator,
  {
    className: l("richtext--mx-1 richtext-my-1 richtext-h-px richtext-bg-muted", t),
    ref: i,
    ...r
  }
));
dt.displayName = a.Separator.displayName;
const T = [
  {
    value: "note",
    label: "Note",
    icon: et,
    color: "#1f6feb",
    background: "#1f6feb1f"
  },
  {
    value: "tip",
    label: "Tip",
    icon: rt,
    color: "#238636",
    background: "#2386361f"
  },
  {
    value: "important",
    label: "Important",
    icon: it,
    color: "#ab7df8",
    background: "#ab7df81f"
  },
  {
    value: "warning",
    label: "Warning",
    icon: at,
    color: "#d29922",
    background: "#d299221f"
  },
  {
    value: "caution",
    label: "Caution",
    icon: ct,
    color: "#f85149",
    background: "#f851491f"
  }
];
function ht({ node: t }) {
  const { type: r = "note", title: i = "", body: o = "" } = t.attrs, h = (T.find((u) => u.value === r) || T[0]).icon;
  return /* @__PURE__ */ e(W, { children: /* @__PURE__ */ c(
    "div",
    {
      className: N(
        "richtext-relative richtext-my-4 richtext-rounded-lg richtext-border richtext-p-4",
        {
          "richtext-bg-[#1f6feb1f] richtext-border-[#1f6feb]": r === "note",
          "richtext-bg-[#2386361f] richtext-border-[#238636]": r === "tip",
          "richtext-bg-[#ab7df81f] richtext-border-[#ab7df8]": r === "important",
          "richtext-bg-[#d299221f] richtext-border-[#d29922]": r === "warning",
          "richtext-bg-[#f851491f] richtext-border-[#f85149]": r === "caution"
        }
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: N("richtext-mb-2 richtext-flex richtext-items-center richtext-gap-2", {
              "richtext-text-[#1f6feb]": r === "note",
              "richtext-text-[#238636]": r === "tip",
              "richtext-text-[#ab7df8]": r === "important",
              "richtext-text-[#d29922]": r === "warning",
              "richtext-text-[#f85149]": r === "caution"
            }),
            children: [
              /* @__PURE__ */ e(h, { className: "richtext-size-5" }),
              /* @__PURE__ */ e("span", { className: "richtext-font-semibold", children: i })
            ]
          }
        ),
        o && /* @__PURE__ */ e("p", { className: "richtext-pl-[28px]", children: o })
      ]
    }
  ) });
}
const ut = [
  { value: "note", label: "Note", icon: "Info" },
  { value: "tip", label: "Tip", icon: "Lightbulb" },
  { value: "important", label: "Important", icon: "AlertCircle" },
  { value: "warning", label: "Warning", icon: "TriangleAlert" },
  { value: "caution", label: "Caution", icon: "OctagonAlert" }
];
function Ct() {
  const { t } = ot(), r = Y(), i = _(xt.name), [o, n] = x(!1), [h, u] = x("note"), [f, b] = x(""), [g, y] = x(""), {
    icon: D = void 0,
    tooltip: z = void 0,
    shortcutKeys: O = void 0,
    tooltipOptions: V = {},
    isActive: j = void 0
  } = (i == null ? void 0 : i.componentProps) ?? {}, { dataState: H, disabled: v } = $(j), M = () => {
    r && (r.chain().focus().setCallout({ type: h, title: f, body: g }).run(), n(!1), u("note"), b(""), y(""));
  }, P = () => {
    v || n(!0);
  };
  return i ? /* @__PURE__ */ c(K, { onOpenChange: n, open: o, children: [
    /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
      S,
      {
        action: P,
        dataState: H,
        disabled: v,
        icon: D,
        shortcutKeys: O,
        tooltip: z,
        tooltipOptions: V
      }
    ) }),
    /* @__PURE__ */ c(G, { children: [
      /* @__PURE__ */ e(J, { children: t("editor.callout.dialog.title") }),
      /* @__PURE__ */ c("div", { className: "richtext-space-y-4 richtext-py-4", children: [
        /* @__PURE__ */ c("div", { className: "richtext-space-y-2", children: [
          /* @__PURE__ */ e(p, { children: t("editor.callout.dialog.type") }),
          /* @__PURE__ */ c(lt, { onValueChange: u, value: h, children: [
            /* @__PURE__ */ e(L, { children: /* @__PURE__ */ e(nt, { placeholder: t("editor.callout.dialog.type.placeholder") }) }),
            /* @__PURE__ */ e(B, { children: ut.map((s) => /* @__PURE__ */ e(k, { value: s.value, children: t(`editor.callout.type.${s.value}`) }, s.value)) })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "richtext-space-y-2", children: [
          /* @__PURE__ */ e(p, { children: t("editor.callout.dialog.title.label") }),
          /* @__PURE__ */ e(
            C,
            {
              onChange: (s) => b(s.target.value),
              placeholder: t("editor.callout.dialog.title.placeholder"),
              value: f
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "richtext-space-y-2", children: [
          /* @__PURE__ */ e(p, { children: t("editor.callout.dialog.body.label") }),
          /* @__PURE__ */ e(
            C,
            {
              onChange: (s) => y(s.target.value),
              placeholder: t("editor.callout.dialog.body.placeholder"),
              value: g
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c(Q, { children: [
        /* @__PURE__ */ e(w, { onClick: () => n(!1), variant: "outline", children: t("editor.callout.dialog.button.cancel") }),
        /* @__PURE__ */ e(w, { onClick: M, children: t("editor.callout.dialog.button.apply") })
      ] })
    ] })
  ] }) : /* @__PURE__ */ e(X, {});
}
function m(t) {
  return (r) => r.getAttribute(t);
}
const xt = /* @__PURE__ */ U.create({
  name: "callout",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  //@ts-expect-error
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "callout"
      },
      button: ({ editor: r, t: i }) => ({
        component: S,
        componentProps: {
          action: () => !0,
          isActive: () => r.isActive("callout"),
          disabled: !1,
          icon: "Callout",
          tooltip: i("editor.callout.tooltip")
        }
      })
    };
  },
  parseHTML() {
    return [{ tag: "div.callout" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "div",
      E(this.options && this.options.HTMLAttributes || {}, t)
    ];
  },
  addAttributes() {
    return {
      type: {
        default: "",
        parseHTML: m("type")
      },
      title: {
        default: "",
        parseHTML: m("title")
      },
      body: {
        default: "",
        parseHTML: m("body")
      }
    };
  },
  addCommands() {
    return {
      setCallout: (t) => ({ chain: r }) => r().insertContent({
        type: this.name,
        attrs: t
      }).run()
    };
  },
  addNodeView() {
    return F(ht);
  }
});
export {
  xt as C,
  Ct as R,
  lt as S,
  L as a,
  nt as b,
  B as c,
  k as d
};
