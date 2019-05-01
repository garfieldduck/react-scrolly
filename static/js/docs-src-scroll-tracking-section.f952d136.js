(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/src/ScrollTracking/Section.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),c=n("./packages/core/src/index.ts"),r=n("./node_modules/docz/dist/index.esm.js"),a=n("./docs/src/components/DemoWrapper.jsx"),s=n("./docs/src/components/DemoSection.jsx"),l=n("./docs/src/components/CenterBox.jsx"),b=n("./docs/src/config/theme.js"),d={},p="wrapper";function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"section"},"Section"),Object(i.b)("h2",{id:"basic-scroll-tracking-of-a-component"},"Basic scroll tracking of a component"),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"<Section>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<PageContext>"),", you can track the following information of a component (",Object(i.b)("inlineCode",{parentName:"p"},"<Section>"),") when it is scrolling with ease:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Visibility"),": Whether the component is intersecting with the viewport."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Scroll progress"),": The ratio of the component being scrolled."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Position"),": The position of the component relative to the viewport.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(a.a,{mdxType:"DemoWrapper"},Object(i.b)(c.b,{mdxType:"PageProvider"},Object(i.b)(s.a,{color:b.a.gray,height:"80vh",mdxType:"BorderedDemoSection"},function(e){var t=e.isIntersecting,n=e.scrolledRatio;return Object(i.b)(l.a,{mdxType:"CenterBox"},Object(i.b)("h4",null,"Section #1"),Object(i.b)("li",null,"isIntersecting: ",Object(i.b)("b",null,"".concat(t))),Object(i.b)("li",null,"scrolledRatio: ",Object(i.b)("b",null,n.toFixed(4))))}),Object(i.b)(s.a,{color:b.a.gray,height:"100vh",mdxType:"BorderedDemoSection"},function(e){var t=e.isIntersecting,n=e.scrolledRatio;return Object(i.b)(l.a,{mdxType:"CenterBox"},Object(i.b)("h4",null,"Section #2"),Object(i.b)("li",null,"isIntersecting: ",Object(i.b)("b",null,"".concat(t))),Object(i.b)("li",null,"scrolledRatio: ",Object(i.b)("b",null,n.toFixed(4))))}))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"make-sure-to-wrap-pagecontext-at-the-page-level"},"Make sure to wrap ",Object(i.b)("inlineCode",{parentName:"h3"},"<PageContext>")," at the page level"),Object(i.b)("p",null,"Before we get started, it is important to note that you have to wrap ",Object(i.b)("inlineCode",{parentName:"p"},"<PageContext>")," at the page level to track window scrolling and resizing."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<PageContext>")," contains observers which are essential to ",Object(i.b)("inlineCode",{parentName:"p"},"<Section>"),",\nby allowing it to subscribe to the events such as window scrolling and resizing."),Object(i.b)("h3",{id:"use-section-to-get-sectioninfo"},"Use ",Object(i.b)("inlineCode",{parentName:"h3"},"<Section>")," to get ",Object(i.b)("inlineCode",{parentName:"h3"},"sectionInfo")),Object(i.b)("p",null,"Import ",Object(i.b)("inlineCode",{parentName:"p"},"<Section>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { PageProvider, Section } from '@react-scrolly/core';\n")),Object(i.b)("p",null,"Use it in your component:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<PageProvider>\n  ...\n  <Section>\n    {(sectionInfo) => (\n      <div>{sectionInfo.isIntersecting}, {sectionInfo.scrolledRatio}</div>\n    )}\n  </Section>\n  <Section>...</Section>\n  ...\n</PageProvider>\n")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"What does ",Object(i.b)("inlineCode",{parentName:"p"},"sectionInfo")," provides?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"isIntersecting"),": ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," - Whether the section is intersecting with the viewport."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scrollInfo"),": ",Object(i.b)("inlineCode",{parentName:"li"},"object")," - With the following properties:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scrollTop"),": ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - The top of the viewport, i.e., ",Object(i.b)("inlineCode",{parentName:"li"},"pageYOffset")," of the window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scrollBottom"),": ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - The bottom of the viewport, i.e., the ",Object(i.b)("inlineCode",{parentName:"li"},"pageYOffset")," + height of the window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"windowHeight"),": ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - The height of the window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scrollOffset"),": ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - The difference between the current scrolltop and previous scrolltop. Positive: if the user scroll down the page."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scrolledRatio"),": ",Object(i.b)("inlineCode",{parentName:"li"},"number")," - Ratio of the section being scrolled. It is computed by the ratio of the section surpasses the bottom of the viewport.")),Object(i.b)("h2",{id:"advanced-usages"},"Advanced usages"),Object(i.b)("p",null,"If you don't want to use the render props to get ",Object(i.b)("inlineCode",{parentName:"p"},"sectionInfo"),", you can also use the hooks to get the same information by yourself:"),Object(i.b)("h3",{id:"usesectionratio-hook"},Object(i.b)("inlineCode",{parentName:"h3"},"useSectionRatio")," hook"),Object(i.b)("p",null,"Import the hooks:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { useIntersectionObservable, useSectionRatio } from '@react-scrolly/core';\n")),Object(i.b)("p",null,"Use them in your functional components:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const sectionRef = useRef(null);\nconst intersectObsr$ = useIntersectionObservable(sectionRef, trackingId);\nconst sectionInfo = useSectionRatio(sectionRef, intersectObsr$, trackingId);\n\nreturn (\n  <div\n    ref={sectionRef}\n    className={className}\n    style={style}\n    {...restProps}\n  >\n    {children(sectionInfo)}\n  </div>\n)\n")),Object(i.b)("h3",{id:"adding-trackingid-to-sections-you-want-to-track-in-plot"},"Adding ",Object(i.b)("inlineCode",{parentName:"h3"},"trackingId")," to sections you want to track in ",Object(i.b)("inlineCode",{parentName:"h3"},"<Plot>")),Object(i.b)("p",null,"Components like ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/scroll_tracking/plot"}),"Plot")," or ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/pinning_sections/sticky_plot"}),"StickyPlot"),"\nallow you to track the ID and the scroll progress of the ",Object(i.b)("inlineCode",{parentName:"p"},"<Section>")," closest to the bottom of the viewport."),Object(i.b)("p",null,"By adding ",Object(i.b)("inlineCode",{parentName:"p"},"trackingId")," to sections, ",Object(i.b)("inlineCode",{parentName:"p"},"<PageProvider>")," select the section closest to the bottom of the viewport while scrolling:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Section trackingId="TRACKING_ID">...</Section>\n')),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"const sectionInfo = useSectionRatio(sectionRef, intersectObsr$, 'TRACKING_ID');\n")),Object(i.b)("h2",{id:"complete-example"},"Complete Example"),Object(i.b)(r.c,{__position:1,__code:"<div style={{ width: '100%' }}>\n  <PageProvider>\n    <Section style={sectionStyle}>\n      {({ isIntersecting, scrolledRatio }) => (\n        <div>\n          Section # 1: {`${isIntersecting}`}, {scrolledRatio}\n        </div>\n      )}\n    </Section>\n    <Section style={sectionStyle}>\n      {({ isIntersecting, scrolledRatio }) => (\n        <div>\n          Section # 2: {`${isIntersecting}`}, {scrolledRatio}\n        </div>\n      )}\n    </Section>\n  </PageProvider>\n</div>",__scope:{props:this?this.props:n,PageProvider:c.b,Section:c.c,Playground:r.c,Link:r.b,Props:r.d,DemoWrapper:a.a,BorderedDemoSection:s.a,CenterBox:l.a,defaultColors:b.a,sectionStyle:b.b},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABVcNJoKEVguAyJZnC2btzHkV1jXaAABU1JXNOByCEBJEgBLo_X5O1IJgqBXESFIhFCDAlgAGTQbYlgQyhBywo1ZXaA8AC8qIg9goK1GAiEoAB1TI5gydh-LddoPQPOBJDgARyABdN9E0qSZPk2ZYTEmiJPYa8hSnbIjMoNDJQGTDsME9TTk07TdM-dcaEM6SHPQ5zzPVSz7H0DJrJ8FScPcs4tJ0vTfIITTwr0AQopC-0oMwMAwigAhHCgIU4CWOAguoZwCESWBlNc91pA8hLvOoSAUkkCZpJgLKNTNer5TNdowVQXQUWOU5hKqmr4HYbgJPWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1WgAWbb2AANm23b1jAYCADFvWgRJVv4ZxDgRB1MBgoR-CWGTUEoOADoRG7qzumhnAgYTLnYABGE69vkYbRqmABBOZZvYCMoPIGwoHQMNlI5WaxGx6MZHYFFpu4YARKmrF5C3GtgDx6BCeCAAyTnxkSeZKGaNmCaJ7hRblMAWKc6h2nYAB-DZ2bDCMSauIWOdQZHqykGQqzfMwYVC3L8qmZXSfJrWMeXasE0DSUcHuzIUivAhmZrWtKep2BaagnF0AmVa4bWtaAFIZfkJmVzdxhYPgxDkIEV23ZrRhHIwqnqq94Byql1AGZgCPraTt3gBxzg4AadLs5iGcypIygEmyEVogGYmzajQui6jnXI87t3U-c9gAGJ4auYBigAEmAWwK9oAQq4KeRiiUCTiNI2B0Cb7tNd7ovtdjHui45bed6kfvqET3ez_MT2YFp-fKoz_OL87kuoOnyugprqm64bjfm-HeQJNuBk3bjvJOMZZAHx3lfIe7AABMo8J5T3Lh_JyM5F7Lyzj_dem8BjHzAdubuHdO5HygduK-z9twxxgDxJCU5n570gYXKQtsCD20ds7ZmUhLa6zMF-EAGlmpJWoAZSQ9kTKKQEP-OAWBAK6BAgYMC1FQo33QGuERfl-qqPND5DRKU_T6ywBZVG7BxEKVhFjVR6iMwpRwDIYo6wDqdgKFcOBXRZRw3cSqasi1lpXDhjgAAHO49ga1vEWA8BKbYTE2gYCuIPMAiSknhPYF4AQU5zSZBYHkK4ABWbaKTqhET8CcEYVwNpwzgedOBVSfAbSWpEiMa1FDNOaTgNaF0ORLA2ldHwCNzr1JSI01pLTFDtKTB-MwxRvH8MEV5YRNj_IySvtI2R2h5H6AYMo-0qitGP3QDox0ei4A9UsjAmKgl8KaiItg8iVBKLeNtKFKCaTbLoDznVAS7oPS6DalpPwXQDk3xOY850RjQomPsjAuaqiIxXw5A4_aQMXjOSuF0eiMRWAwBSZsCAKRCBXEnqXXF-KphzXaIHNarA8BhyAWTElhB5CFKiTEliBz-RwVhkSqCTEOwQBdOSqAaBxQCHNLylg-gIwRCHDMJYg8YAXRgAATjAHA0Jwc5VBDAHDMAF14ZB2DhyWlZtxX8poEy9YRS4AlNGOU-G-SfBJjWgMicQzXBNNGW0uGcMumhMuudOGvS_UNPdSMtpa1AmTOrK8jImS-U5PgQUharglpoH8SEsJUzQUG3tCY6y6SLjoChRVcwML9lwpLQiyeMbAV50XjMpQAimrzN0YsyQaVZ5RVWXI4CmylHiSsUcxZezpoHNbQZU5RAACO_UcA_NaniyQR4WCuHNFOhkcIQVPOyscGAeVQgFSKiVT5qk50AlQH8zqR4DFguMdQMaHbIreEsfs6xBk7FsERRYQU-QMJXFcB4OA9dwjYvWBEGYeSQ4pNgGAAgkHg4pNRO4OAd0BBECuEh1AcAMUwAjOaXJIclj4ZDlGiwEMLT5Bhv4nAnjpLQdsBRx-VxAbOlBRYSe06TymlntYdwj4ZIeGgN1BFK5yNEWhrDAJuSvHrCXsNCweATrzULpEnYrK4nsEnkbA9hV64lRwKp6JzEMAWsLiwYG9EXqcFQEK505oPDFR2Ck79h0XGhJoxmnA0m6MrhrXG7J9x_VYGc4WYqZZNN0z3cbI9c8cD9g5QIRIpm3a-LQOaGDcH2DmjWl5mT1ZNaWuU27JxR0UjlPad52UOW4GVZC35rJEAE1bWC75llxn0BordRGGruSlg9b67k3r7nAm5NIzWKgYXCWv1SfXNRemjhzW04e-bcADNQAZK3YBM2CYxeS8peT7AhWIECKh7owAVwbJoFcfggAiAn4CFkrBRMl4oJfDPLbsJtCim0t3TYXVu8qSykzW0y-GNrmYlX5i6r1_gAus3toEgJYdFGeLUWN2jyrAEmGASYLo3pzVMExP2Yt2Dmud_a_RFpWZFCjvaES2uxI63KBJSZMeY7BhYWgWBMvo7gYEuB5AkwnXZ6kTIVn0eBNcEqi6Hg4bC4cwyVag84YeAAOwXW1cLkYNhaCK6SUk4XgKrjU61LTvYmQZyw3R4kwJMA4EeGF4kecxUylM8SegC6a1XDC6YkEFaTO4EnXQK4FXQvTczD6GSS3g9Akq8G-7sGBXb0QvvVMe-udH5YzJxYVLfv2hhAiMLhl3OnXUuF598LROVtrYZKbmtVxijNapvXLgEXK9_a4wxReYfXPHTlLR60puc-WF4qtc0zW5c2QyE3ALq1x9IwbcocHLUL2LutSm7IRFH6rdhxQeHijwIWVxnAOwFy5TaPHX5U5UEhWkuCKf9ogohXWuyENf0qBtnNhnV8tS86V_tWXRAKuuuhkPyluu_uJDlFFjpsTierFL_pepsNetmuCrminjNgWrWhnnNGcHAF-n2Min-hOPOM3FiikjnuaOBlcGPkmtWNyr4DAC9lMIAmbEXnLOwMUEXlNkXovOwMxgelAHtnXhFqXOXljG3vpgDptmTMUHAl5udEBkKjkJPDfoQHQE0jgHAhyBGOXkfEvIUpPqKg1gmrUmxr4LkkVjWGJpRpJhVu9jWOQZQVliYSuOQRllQc4YXOXt9lActu3lri8PnHVvTmyocpNsIbjPNmIT4b9vppzkwXSqFkKHthYOZmSAxFcGgLZjAPZo5tsA9j3mVu5jVp5rHnYREgYf5o1oFh4W7BxlOlxuKDxn4KgPxpQIJr6CJsQlYRJtRnDLViuHJvllmqDovs2hDguv_tkIAWuhuqAdIj2noAjh_pZGkM6JkLQHqFMa4LAYJNogAUARuokDeiYtOljKsRkFkJsSujjOsOUNsI4e0CrjbgPusPREtJbirmtNJMLgQABrANzh7l5t8YPm0UJqdIqi8RrFGoYhZD9uwNOgviACDNsJytItQAsQogwFnuwPwKgN6IyEgDiUBOUH8KWOaD-JHn9OsPwFinPM5PwNdiADlsyVSdWPwOUCRBADMBhAyUSWjFTNRLVBSbVJgGSJQI7jkHkAUEQWaIciScSKCCAKbvwFEGgLyfwKoNgNIqyRYOyTAPMOGCNKAbydibqYIJqOqSAAAHqBpBI4AXQ6k1jskTSWk2ntI4BJiOlmnn5DoGSuknQ0YelelEmP62B4CunVZBlKkrj8B7FbEzEZCJCumyEBJwzBn8AEQWhWium2mBL2n8DrCazyD8LFjVAfATFomoAYl9ogDnYgC0A-hZAMn8AkSNHZGZnmimT8DFnhzyBAA",mdxType:"Playground"},Object(i.b)("div",{style:{width:"100%"}},Object(i.b)(c.b,{mdxType:"PageProvider"},Object(i.b)(c.c,{style:b.b,mdxType:"Section"},function(e){var t=e.isIntersecting,n=e.scrolledRatio;return Object(i.b)("div",null,"Section # 1: ","".concat(t),", ",n)}),Object(i.b)(c.c,{style:b.b,mdxType:"Section"},function(e){var t=e.isIntersecting,n=e.scrolledRatio;return Object(i.b)("div",null,"Section # 2: ","".concat(t),", ",n)})))),Object(i.b)(r.d,{of:c.c,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/src/ScrollTracking/Section.mdx"}}),m.isMDXComponent=!0},"./docs/src/components/DemoSection.jsx":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./packages/core/src/index.ts"),r=n("./docs/src/config/shared-styles.js");function a(){var e=Object(o.a)(["",""]);return a=function(){return e},e}function s(){var e=Object(o.a)(["\n  position: relative;\n  height: ",";\n  background-image: ",";\n  box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 6px 16px 0 rgba(0,0,0,.08);\n  border-radius: 2px;\n  margin: 1rem 0;\n"]);return s=function(){return e},e}var l=Object(i.d)(c.c)(s(),function(e){var t=e.height;return void 0===t?"100vh":t},function(e){var t=e.gradient;return void 0===t?"linear-gradient(to top, #e6e9f2 0%, #eef1f6 100%)":t});"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DemoSection",filename:"docs/src/components/DemoSection.jsx"}});var b=Object(i.d)(c.c)(a(),r.a);"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderedDemoSection",filename:"docs/src/components/DemoSection.jsx"}})},"./docs/src/config/shared-styles.js":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./node_modules/polished/dist/polished.es.js"),r=n("./docs/src/config/media-queries.js"),a=n("./docs/src/config/theme.js");function s(){var e=Object(o.a)(["\n      font-size: 1.15rem;\n    "]);return s=function(){return e},e}function l(){var e=Object(o.a)(["\n  position: relative;\n  margin-top: -3px;\n  ",";\n  border: ",";\n  border-radius: 2px;\n\n  h5 {\n    font-size: 1.05rem;\n    margin-top: -2px;\n    margin-left: -2px;\n    color: ",";\n    background-color: ",";\n    display: inline-block;\n    padding: 0.25rem 0.75rem;\n    border-radius: 2px;\n    ","\n  }\n"]);return l=function(){return e},e}var b=Object(i.c)(l(),function(e){var t=e.height;return t?"height: ".concat(t):null},function(e){var t=e.color,n=void 0===t?a.a.gray:t;return"2.5px solid ".concat(Object(c.a)(.2)(n))},a.a.white,function(e){var t=e.color;return void 0===t?a.a.text:t},r.a.greaterThan("mobile")(s()));"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"borderedStyle",filename:"docs/src/config/shared-styles.js"}})}}]);
//# sourceMappingURL=docs-src-scroll-tracking-section.78f717c3336bf95f6f28.js.map