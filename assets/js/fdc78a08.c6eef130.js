(self.webpackChunk=self.webpackChunk||[]).push([[86982],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,h=u["".concat(o,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(79973),a=n(67294),i=n(73727),o=n(52263),l=n(13919),s=n(10412),d=(0,a.createContext)({collectLink:function(){}}),u=n(44996),m=n(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,n,p=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,b=void 0===x||x,w=(0,r.Z)(e,c),N=(0,o.default)().siteConfig,k=N.trailingSlash,C=N.baseUrl,q=(0,u.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(d),E=h||f,T=(0,l.Z)(E),P=null==E?void 0:E.replace("pathname://",""),R=void 0!==P?(n=P,b&&function(e){return e.startsWith("/")}(n)?q(n):n):void 0;R&&T&&(R=(0,m.applyTrailingSlash)(R,{trailingSlash:k,baseUrl:C}));var j=(0,a.useRef)(!1),M=p?i.OL:i.rU,_=s.default.canUseIntersectionObserver,D=(0,a.useRef)();(0,a.useEffect)((function(){return!_&&T&&null!=R&&window.docusaurus.prefetch(R),function(){_&&D.current&&D.current.disconnect()}}),[D,R,_,T]);var I=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,L=!R||!T||I;return R&&T&&!I&&!g&&O.collectLink(R),L?a.createElement("a",Object.assign({href:R},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(M,Object.assign({},w,{onMouseEnter:function(){j.current||null==R||(window.docusaurus.preload(R),j.current=!0)},innerRef:function(e){var t,n;_&&e&&T&&(t=e,n=function(){null!=R&&window.docusaurus.prefetch(R)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),n())}))})),D.current.observe(t))},to:R||""},p&&{isActive:y,activeClassName:v}))}},13919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var r=n(52263),a=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(36742),a=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null),i.createElement(u,null))},c=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(u,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(m,null),external:i.createElement(c,null)})}},79664:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>m,toc:()=>c,default:()=>h});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o=n(68629),l=n(44256),s=["components"],d={id:"testing-relay-with-preloaded-queries",title:"Testing Relay with Preloaded Queries",slug:"/guides/testing-relay-with-preloaded-queries/"},u=void 0,m={unversionedId:"guides/testing-relay-with-preloaded-queries",id:"version-v11.0.0/guides/testing-relay-with-preloaded-queries",isDocsHomePage:!1,title:"Testing Relay with Preloaded Queries",description:"Components that use preloaded queries (useQueryLoader and usePreloadedQuery hooks) require slightly different and more convoluted test setup.",source:"@site/versioned_docs/version-v11.0.0/guides/testing-relay-with-preloaded-queries.md",sourceDirName:"guides",slug:"/guides/testing-relay-with-preloaded-queries/",permalink:"/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guides/testing-relay-with-preloaded-queries.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1649097137,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"testing-relay-with-preloaded-queries",title:"Testing Relay with Preloaded Queries",slug:"/guides/testing-relay-with-preloaded-queries/"},sidebar:"version-v11.0.0/docs",previous:{title:"Testing Relay Components",permalink:"/docs/v11.0.0/guides/testing-relay-components/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/v11.0.0/migration-and-compatibility/"}},c=[{value:"Symptoms that something is wrong",id:"symptoms-that-something-is-wrong",children:[],level:2},{value:"TL;DR",id:"tldr",children:[{value:"Configure the query resolver to generate the response",id:"configure-the-query-resolver-to-generate-the-response",children:[],level:3},{value:"Record a pending queue invocation",id:"record-a-pending-queue-invocation",children:[],level:3},{value:"Example diffs",id:"example-diffs",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2},{value:"Epilogue",id:"epilogue",children:[],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Components that use preloaded queries (",(0,i.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," hooks) require slightly different and more convoluted test setup."),(0,i.mdx)("p",null,"In short, there are two steps that need to be performed ",(0,i.mdx)("strong",{parentName:"p"},"before rendering the component")),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Configure the query resolver to generate the response via ",(0,i.mdx)("inlineCode",{parentName:"li"},"environment.mock.queueOperationResolver")),(0,i.mdx)("li",{parentName:"ol"},"Record a pending queue invocation via ",(0,i.mdx)("inlineCode",{parentName:"li"},"environment.mock.queuePendingOperation"))),(0,i.mdx)("h2",{id:"symptoms-that-something-is-wrong"},"Symptoms that something is wrong"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The test doesn't do what is expected from it."),(0,i.mdx)("li",{parentName:"ol"},"The query seems to be blocking instead of executing",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"E.g. the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspend"),' doesn\'t switch from "waiting" to "data loaded" state'))),(0,i.mdx)("li",{parentName:"ol"},"If you add the ",(0,i.mdx)("inlineCode",{parentName:"li"},"console.log")," before and after ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),', only the "before" call is hit')),(0,i.mdx)("h2",{id:"tldr"},"TL;DR"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {RelayEnvironmentProvider} = require('react-relay');\nconst { MockPayloadGenerator, createMockEnvironment } = require('relay-test-utils');\nconst {render} = require('testing-library-react');\n// at the time of writing, act is not re-exported by our internal testing-library-react\n// but is re-exported by the \"external\" version\nconst {act} = require('ReactTestUtils');\ntest(\"...\", () => {\n  // arrange\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(operation => {\n      return MockPayloadGenerator.generate(operation, {\n        CurrencyAmount() {\n          return {\n            formatted_amount: \"1234$\",\n          };\n        },\n      });\n    });\n  const query = YourComponentGraphQLQueryGoesHere; // can be the same, or just identical\n  const variables = {\n    // ACTUAL variables for the invocation goes here\n  };\n  environment.mock.queuePendingOperation(YourComponentGraphQLQuery, variables);\n\n // act\n  const {getByTestId, ..otherStuffYouMightNeed} = render(\n    <RelayEnvironmentProvider environment={environment}>\n        <YourComponent data-testid=\"1234\" {...componentPropsIfAny}/>\n    </RelayEnvironmentProvider>\n  );\n  // trigger the loading - click a button, emit an event, etc. or ...\n  act(() => jest.runAllImmediates()); // ... if loadQuery is in the useEffect()\n  // assert\n  // your assertions go here\n});\n")),(0,i.mdx)("h3",{id:"configure-the-query-resolver-to-generate-the-response"},"Configure the query resolver to generate the response"),(0,i.mdx)("p",null,"This is done via ",(0,i.mdx)("inlineCode",{parentName:"p"},"environment.mock.queueOperationResolver(operation)")," call, but getting it right might be tricky."),(0,i.mdx)("p",null,"The crux of this call is to return a mocked graphql result in a very particular format (as ",(0,i.mdx)("inlineCode",{parentName:"p"},"MockResolvers")," type, to be precise). This is done via a second parameter to ",(0,i.mdx)("inlineCode",{parentName:"p"},"generate")," - it is an object, whose keys are GraphQL types that we want to mock. (See ",(0,i.mdx)("a",{parentName:"p",href:"../testing-relay-components/#mock-payload-generator-and-the-relay_test_operation-directive"},(0,i.mdx)("inlineCode",{parentName:"a"},"mock-payload-generator")),")."),(0,i.mdx)("p",null,"Continuing on the above example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'return MockPayloadGenerator.generate(operation, {\n  CurrencyAmount() { // <-- the GraphQL type\n    return {\n      formatted_amount: "response_value" <-- CurrencyAmount fields, selected in the query\n    };\n  }\n});\n')),(0,i.mdx)("p",null,"The tricky thing here is to obtain the name of the GraphQL type and fields to return. This can be done in two ways:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Call ",(0,i.mdx)("inlineCode",{parentName:"li"},"console.log(JSON.stringify(operation, null, 2))")," and look for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"concreteType")," that corresponds to what we want to mock. Then look at the sibling ",(0,i.mdx)("inlineCode",{parentName:"li"},"selections")," array, which describes the fields that are selected from that object.")),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This is somewhat intense - P139017123 is the output for ",(0,i.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/irqurgj9"},"this query"),". Rule of thumb - one nested call in the query produces one nested object in the output."),(0,i.mdx)("li",{parentName:"ul"},"Look up the type in the graphiql (bunnylol graphiql), then specify the fields listed on the query.")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The type you need seems to be the type returned by the ",(0,i.mdx)("em",{parentName:"p"},"innermost function call")," (or calls, if you have multiple functions called in one query - see D23078476). This needs to be confirmed - in both example diffs the target types was also leafs.")))),(0,i.mdx)("p",null,"It is ",(0,i.mdx)("strong",{parentName:"p"},"possible")," to return different data for different query variables via ",(0,i.mdx)("a",{parentName:"p",href:"../testing-relay-components/#mock-resolver-context"},"Mock Resolver Context"),". The query variables will be available on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"context.args"),", but only to the ",(0,i.mdx)("em",{parentName:"p"},"innermost function call")," (for the query above, only ",(0,i.mdx)("inlineCode",{parentName:"p"},"offer_ids")," are available)"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'CurrencyAmount(context) {\n  console.log(JSON.stringify(context, null, 2)); // <--\n  return { formatted_amount: mockResponse }\n}\n// <-- logs { ...snip..., "name": "subtotal_price_for_offers", args: { offer_ids: [...] } }\n')),(0,i.mdx)("h3",{id:"record-a-pending-queue-invocation"},"Record a pending queue invocation"),(0,i.mdx)("p",null,"This is more straightforward - it is done via a call to ",(0,i.mdx)("inlineCode",{parentName:"p"},"environment.mock.queuePendingOperation(query, variables)")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Query")," needs to match the query issues by the component. Simplest (and most robust agains query changes) is to export the query from the component module and use it in the test, but having an ",(0,i.mdx)("em",{parentName:"li"},"identical")," (but not the same) query works as well."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables")," has to match the variables that will be used in this test invocation.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Beware of nested objects and arrays - they are compared via ",(0,i.mdx)("inlineCode",{parentName:"li"},"areEqual")," (",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/relay/blob/046f758c6b411608371d4cc2f0a594ced331864e/packages/relay-test-utils/RelayModernMockEnvironment.js#L233"},"invocation code"),")",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Arrays are compared by values (not by reference), but the order of elements matter"),(0,i.mdx)("li",{parentName:"ul"},'Nested objects - performs deep compare, order of keys is not relevant (this is not confirmed - please update this doc if you used a graphql query with "deep" structure',(0,i.mdx)("em",{parentName:"li"},")"))))))),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("h3",{id:"example-diffs"},"Example diffs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://internalfb.com/intern/diff/D23078476"},"D23078476")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/diff/D23101739"},"D23101739")))),(0,i.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"console.log"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"console.log")," everywhere! Recommended places:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"component: before and after ",(0,i.mdx)("inlineCode",{parentName:"li"},"useQueryLoader, usePreloadedQuery, loadQuery")),(0,i.mdx)("li",{parentName:"ul"},"test: in ",(0,i.mdx)("inlineCode",{parentName:"li"},"queueOperationResolver")," callback"),(0,i.mdx)("li",{parentName:"ul"},"library: in ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayModernMockEnvironment.execute,"),"after the ",(0,i.mdx)("inlineCode",{parentName:"li"},"const currentOperation = ...")," call (",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/relay/blob/046f758c6b411608371d4cc2f0a594ced331864e/packages/relay-test-utils/RelayModernMockEnvironment.js#L230"},"here"),")"))),(0,i.mdx)("li",{parentName:"ul"},"If ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery"),' is not called - make sure to issue the triggering event. Depending on your component implementation it could be a user-action (like button click or key press), javascript event (via event emitter mechanisms) or a simple "delayed execution" with ',(0,i.mdx)("inlineCode",{parentName:"li"},"useEffect"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"useEffect")," case is probably easiest to miss - make sure to call ",(0,i.mdx)("inlineCode",{parentName:"li"},"act(() => jest.runAllImmediates())")," ",(0,i.mdx)("strong",{parentName:"li"},"after")," rendering the component"))),(0,i.mdx)("li",{parentName:"ul"},'If "before" ',(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),' is hit, but "after" is not - the query suspends. This entire guide is written to resolve it - you might want to re-read it. But most likely it is either:',(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Used a different query - the query resolver would not be called, ",(0,i.mdx)("inlineCode",{parentName:"li"},"currentOperation")," will be ",(0,i.mdx)("inlineCode",{parentName:"li"},"null")),(0,i.mdx)("li",{parentName:"ul"},"Query variables don't match - the query resolver would not be called, ",(0,i.mdx)("inlineCode",{parentName:"li"},"currentOperation")," will be ",(0,i.mdx)("inlineCode",{parentName:"li"},"null")," (make sure to inspect the ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),").",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Also, make sure arrays are in the same order, if any (or better yet, use sets, if at all possible)."))))),(0,i.mdx)("li",{parentName:"ul"},"If data returned rom the query is not what you expect, make sure you're generating the right graphql type.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You can tell you're mocking the wrong one if the return values look something like ",(0,i.mdx)("inlineCode",{parentName:"li"},'<mock-value-for-field-"formatted_amount">'))))),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Make sure the component and the test use the same environment (i.e. there's no ",(0,i.mdx)("inlineCode",{parentName:"p"},"<RelayEnvironmentProvider environment={RelayFBEnvironment}>")," somewhere nested in your test React tree."))),(0,i.mdx)("h2",{id:"epilogue"},"Epilogue"),(0,i.mdx)("p",null,"Examples here use ",(0,i.mdx)("inlineCode",{parentName:"p"},"testing-library-react"),", but it works with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-test-renderer")," as well."),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/diff/D23078476"},"D23078476"),".")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);