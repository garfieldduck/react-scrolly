(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/src/ScrollTracking/Plot.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),r=n.n(i),c=n("./node_modules/@mdx-js/react/dist/index.es.js"),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./packages/core/src/index.ts"),l=n("./packages/plot/src/index.ts"),b=n("./docs/src/components/DemoWrapper.jsx"),d=n("./docs/src/components/DemoSection.jsx"),p=n("./docs/src/components/CenterBox.jsx"),u=n("./docs/src/config/theme.js"),m={},j="wrapper";function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(j,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"plot"},"Plot"),Object(c.b)("h2",{id:"track-scroll-progress-of-the-section-closest-to-the-bottom-of-the-viewport"},"Track scroll progress of the section closest to the bottom of the viewport"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<Plot>")," is another kind of section which allows you to track the reading progress of ",Object(c.b)("inlineCode",{parentName:"p"},"<Section>")," users are currently viewing\n(closest to the bottom of the viewport)."),Object(c.b)("p",null,"This is particularly handy when you want to display some effects based on the section and its progress users are currently reading."),Object(c.b)("p",null,"Before you start using ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>"),", you have to assign unique ",Object(c.b)("inlineCode",{parentName:"p"},"trackingId")," to sections you are going to track:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Section trackingId="GREEN">...</Section>\n')),Object(c.b)("p",null,"After that, ",Object(c.b)("inlineCode",{parentName:"p"},"<PageProvider>")," will keep the scrolling information of all the sections of ",Object(c.b)("inlineCode",{parentName:"p"},"trackingId"),",\nand ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>")," will to be updated with the scrolling information of the section closet to the bottom of the viewport when it is scrolled into the viewport."),Object(c.b)("p",null,"In other words, ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>")," provides:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"All the information provided by ",Object(c.b)("inlineCode",{parentName:"li"},"<Section>")),Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"trackingId")," of the ",Object(c.b)("inlineCode",{parentName:"li"},"<Section>")," currently closet to the bottom of the viewport, and its scroll progress.")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(b.a,{mdxType:"DemoWrapper"},Object(c.b)(s.b,{mdxType:"PageProvider"},Object(c.b)(l.a,{renderOverlay:Object(c.b)(r.a.Fragment,null,Object(c.b)(d.a,{trackingId:"RED",color:u.a.red,height:"100vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"RED")}),Object(c.b)(d.a,{trackingId:"ORANGE",color:u.a.orange,height:"50vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"ORANGE")}),Object(c.b)(d.a,{trackingId:"YELLOW",color:u.a.yellow,height:"50vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"YELLOW")}),Object(c.b)(d.a,{trackingId:"GREEN",color:u.a.green,height:"50vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"GREEN")}),Object(c.b)(d.a,{trackingId:"BLUE",color:u.a.blue,height:"50vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"BLUE")}),Object(c.b)(d.a,{trackingId:"PURPLE",color:u.a.purple,height:"60vh",mdxType:"BorderedDemoSection"},function(){return Object(c.b)("h5",null,"PURPLE")})),mdxType:"StickyPlot"},function(e){var t=e.activeSection;return t&&Object(c.b)(p.a,{boldColor:u.a[t.id.toLowerCase()],mdxType:"CenterBox"},Object(c.b)("li",null,"You are viewing ",Object(c.b)("b",null,t.id)," section"),Object(c.b)("li",null,"Reading Ratio: ",t.ratio.toFixed(4)))}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Import ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { PageProvider } from '@react-scrolly/core';\nimport { Plot } from '@react-scrolly/plot';\n")),Object(c.b)("p",null,"Use it in your component:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<PageProvider>\n  ...\n  <Plot>\n    {({ sectionInfo, activeSection }) => (\n      <div>\n        <h2>Scroll info of this Plot</h2>\n        <span>{sectionInfo.isIntersecting}, {sectionInfo.scrolledRatio}</span>\n      </div>\n      <div>\n        <h2>Section closet to the bottom of viewport</h2>\n        <span>`trackingId`:  {activeSection.id}</span>\n        <span>Ratio of the scrolling progress: {activeSection.ratio}</span>\n      </div>\n    )}\n  </Plot>\n  <Section trackingId="RED">...</Section>\n  <Section trackingId="ORANGE">...</Section>\n  <Section trackingId="YELLOW">...</Section>\n  ...\n</PageProvider>\n')),Object(c.b)("h3",{id:"stickyplot"},Object(c.b)("inlineCode",{parentName:"h3"},"<StickyPlot>")),Object(c.b)("p",null,"If you want to stick the ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>")," like the demo above,\nyou can use ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"/pinning_sections/sticky_plot"}),"StickyPlot")," which provides the same information in the render props as ",Object(c.b)("inlineCode",{parentName:"p"},"<Plot>"),",\nwhile sticking the background content in the viewport when its foreground content is visible the viewport."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"isIntersecting"),": same as the ",Object(c.b)("inlineCode",{parentName:"li"},"isIntersecting")," of ",Object(c.b)("inlineCode",{parentName:"li"},"sectionInfo")," in ",Object(c.b)("a",Object.assign({parentName:"li"},{href:"/scroll_tracking/section#properties"}),"Section")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"scrolledRatio"),": same as the ",Object(c.b)("inlineCode",{parentName:"li"},"isIntersecting")," of ",Object(c.b)("inlineCode",{parentName:"li"},"sectionInfo")," in ",Object(c.b)("a",Object.assign({parentName:"li"},{href:"/scroll_tracking/section#properties"}),"Section")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"activeSection")," provides:")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"id"),": ",Object(c.b)("inlineCode",{parentName:"li"},"trackingId")," of the tracked ",Object(c.b)("inlineCode",{parentName:"li"},"<Section>")," closest to the bottom of"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ratio"),": Ratio of the tracked ",Object(c.b)("inlineCode",{parentName:"li"},"<Section>")," closest to the bottom being read")),Object(c.b)("h2",{id:"advanced-usages"},"Advanced usages"),Object(c.b)("h3",{id:"useactivesectioninfo-hook"},Object(c.b)("inlineCode",{parentName:"h3"},"useActiveSectionInfo")," hook"),Object(c.b)("p",null,"Import the hooks:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { useIntersectionObservable, useSectionRatio } from '@react-scrolly/core';\nimport { useActiveSectionInfo } from '@react-scrolly/plot';\n")),Object(c.b)("p",null,"You can get the same information using the hooks:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"// assign the ref to the component\nconst plotRef = useRef<HTMLDivElement>(null);\n\nconst intersectObsr$ = useIntersectionObservable(plotRef, trackingId);\nconst sectionInfo = useSectionRatio(plotRef, intersectObsr$, trackingId);\nconst activeSection = useActiveSectionInfo(intersectObsr$);\n")),Object(c.b)(a.d,{of:l.a,mdxType:"Props"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/src/ScrollTracking/Plot.mdx"}}),O.isMDXComponent=!0},"./docs/src/components/DemoSection.jsx":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./packages/core/src/index.ts"),c=n("./docs/src/config/shared-styles.js");function a(){var e=Object(o.a)(["",""]);return a=function(){return e},e}function s(){var e=Object(o.a)(["\n  position: relative;\n  height: ",";\n  background-image: ",";\n  box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 6px 16px 0 rgba(0,0,0,.08);\n  border-radius: 2px;\n  margin: 1rem 0;\n"]);return s=function(){return e},e}var l=Object(i.d)(r.c)(s(),function(e){var t=e.height;return void 0===t?"100vh":t},function(e){var t=e.gradient;return void 0===t?"linear-gradient(to top, #e6e9f2 0%, #eef1f6 100%)":t});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DemoSection",filename:"docs/src/components/DemoSection.jsx"}});var b=Object(i.d)(r.c)(a(),c.a);"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderedDemoSection",filename:"docs/src/components/DemoSection.jsx"}})},"./docs/src/config/shared-styles.js":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/polished/dist/polished.es.js"),c=n("./docs/src/config/media-queries.js"),a=n("./docs/src/config/theme.js");function s(){var e=Object(o.a)(["\n      font-size: 1.15rem;\n    "]);return s=function(){return e},e}function l(){var e=Object(o.a)(["\n  position: relative;\n  margin-top: -3px;\n  ",";\n  border: ",";\n  border-radius: 2px;\n\n  h5 {\n    font-size: 1.05rem;\n    margin-top: -2px;\n    margin-left: -2px;\n    color: ",";\n    background-color: ",";\n    display: inline-block;\n    padding: 0.25rem 0.75rem;\n    border-radius: 2px;\n    ","\n  }\n"]);return l=function(){return e},e}var b=Object(i.c)(l(),function(e){var t=e.height;return t?"height: ".concat(t):null},function(e){var t=e.color,n=void 0===t?a.a.gray:t;return"2.5px solid ".concat(Object(r.a)(.2)(n))},a.a.white,function(e){var t=e.color;return void 0===t?a.a.text:t},c.a.greaterThan("mobile")(s()));"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderedStyle",filename:"docs/src/config/shared-styles.js"}})},"./packages/plot/src/index.ts":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/rxjs/_esm5/internal/observable/of.js"),r=n("./node_modules/rxjs/_esm5/internal/operators/map.js"),c=n("./node_modules/rxjs/_esm5/internal/operators/merge.js"),a=n("./node_modules/rxjs/_esm5/internal/operators/switchMap.js"),s=n("./node_modules/rxjs/_esm5/internal/operators/filter.js"),l=n("./node_modules/react/index.js"),b=n.n(l),d=n("./packages/core/src/index.ts");function p(e){var t=Object(l.useContext)(d.a).activeSectionObs$,n=Object(d.h)(null).setSubscription,b=Object(l.useState)(null),p=Object(o.a)(b,2),u=p[0],m=p[1],j=Object(l.useRef)(e.pipe(Object(r.a)(function(e){return e.isIntersecting}))),O=Object(l.useRef)(Object(i.a)(!0).pipe(Object(c.a)(j.current)).pipe(Object(a.a)(function(e){return e?t.pipe(Object(r.a)(function(e){return e})):Object(i.a)(void 0)}),Object(s.a)(function(e){return"undefined"!==typeof e})));return Object(l.useEffect)(function(){n(O.current.subscribe({next:function(e){m(e)}}))},[]),{activeSection:u}}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useActiveSectionInfo",filename:"packages/plot/src/hooks/useActiveSectionInfo.ts"}});var u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),j=function(e){var t=e.className,n=e.style,o=e.children,i=e.trackingId,r=Object(m.a)(e,["className","style","children","trackingId"]),c=Object(l.useRef)(null),a=Object(d.f)(c,i),s=Object(d.g)(c,a,i),j=p(a);return b.a.createElement("div",Object.assign({ref:c,className:t,style:n},r),o(Object(u.a)({},s,j)))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Plot",filename:"packages/plot/src/components/Plot.tsx"}}),"undefined"!==typeof StickyPlotProps&&StickyPlotProps&&StickyPlotProps===Object(StickyPlotProps)&&Object.isExtensible(StickyPlotProps)&&Object.defineProperty(StickyPlotProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StickyPlotProps",filename:"packages/plot/src/components/StickyPlot.tsx"}});var O=function(e){var t=e.className,n=e.style,o=e.children,i=e.trackingId,r=e.renderOverlay,c=Object(m.a)(e,["className","style","children","trackingId","renderOverlay"]),a=Object(u.a)({},n,{position:"relative"}),s=Object(l.useRef)(null),j=Object(d.f)(s,i),O=Object(d.g)(s,j,i),f=p(j),g=Object(d.e)(O);return b.a.createElement("div",Object.assign({ref:s,className:t,style:a},c),b.a.createElement("div",{style:g},o(Object(u.a)({},O,f))),b.a.createElement("div",{style:{position:"relative"}},r))};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StickyPlot",filename:"packages/plot/src/components/StickyPlot.tsx"}}),n.d(t,"a",function(){return O})}}]);
//# sourceMappingURL=docs-src-scroll-tracking-plot.78f717c3336bf95f6f28.js.map