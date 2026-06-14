import { E as b } from "./index-BblvcbTH.js";
import { jsx as f, Fragment as v } from "react/jsx-runtime";
import { u as y, d as x, A as E } from "./index-BrsJsbds.js";
import "react";
import "./theme.js";
function P(o, i) {
  var m;
  const t = document.createElement("iframe");
  t.setAttribute("style", "position: absolute; width: 0; height: 0; top: 0; left: 0;"), document.body.appendChild(t);
  const e = t.contentDocument || ((m = t.contentWindow) == null ? void 0 : m.document);
  if (!e) return;
  const {
    paperSize: d,
    title: n = "React Tiptap Editor",
    margins: { top: s, right: a, bottom: r, left: c }
  } = i, p = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${n}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @media print {
          @page {
            size: ${d};
            margin: ${s} ${a} ${r} ${c}; /* top, right, bottom, left */
          }

          body {
            background: none;
            margin: 0;
            padding: 0;
          }

          .print-container {
            width: 100%;
            box-sizing: border-box;
          }

          .no-print {
            display: none;
          }
        }
      </style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@min98/tiptap-editor@latest/lib/style.css">
    </head>
    <body>
      <div class="print-container">
        ${o}
      </div>
    </body>
    </html>
  `;
  e.open(), e.write(p), e.close(), t.addEventListener("load", () => {
    setTimeout(() => {
      var l, u;
      try {
        (l = t.contentWindow) == null || l.focus(), (u = t.contentWindow) == null || u.print();
      } catch (g) {
        console.error("Print failed", g);
      }
      setTimeout(() => {
        document.body.removeChild(t);
      }, 100);
    }, 50);
  });
}
function h(o, i) {
  const t = o.getHTML();
  return t ? (P(t, i), !0) : !1;
}
function L() {
  const o = y(T.name), {
    icon: i = void 0,
    tooltip: t = void 0,
    shortcutKeys: e = void 0,
    tooltipOptions: d = {},
    action: n = void 0,
    isActive: s = void 0
  } = (o == null ? void 0 : o.componentProps) ?? {}, { dataState: a, disabled: r, update: c } = x(s), p = () => {
    r || n && (n(), c());
  };
  return o ? /* @__PURE__ */ f(
    E,
    {
      action: p,
      dataState: a,
      disabled: r,
      icon: i,
      shortcutKeys: e,
      tooltip: t,
      tooltipOptions: d
    }
  ) : /* @__PURE__ */ f(v, {});
}
const T = /* @__PURE__ */ b.create({
  name: "exportPdf",
  //@ts-expect-error
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      paperSize: "Letter",
      title: "Echo Editor",
      margins: {
        top: "0.4in",
        right: "0.4in",
        bottom: "0.4in",
        left: "0.4in"
      },
      button: ({ editor: i, extension: t, t: e }) => ({
        componentProps: {
          action: () => {
            h(i, t.options);
          },
          icon: "ExportPdf",
          tooltip: e("editor.exportPdf.tooltip"),
          isActive: () => !1,
          disabled: !1
        }
      })
    };
  },
  addCommands() {
    return {
      exportToPdf: () => ({ editor: o }) => h(o, this.options)
    };
  }
});
export {
  T as ExportPdf,
  L as RichTextExportPdf
};
