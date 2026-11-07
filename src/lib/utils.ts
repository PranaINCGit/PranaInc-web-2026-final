import { createCn } from "cn/config"

// Our fluid type scale (globals.css @theme) must merge as font-size,
// otherwise `text-h2 text-cream` drops the size.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: ["eyebrow", "lead", "h3", "h2", "h1", "display", "stat"] }],
    },
  },
})
