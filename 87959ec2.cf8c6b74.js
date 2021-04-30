(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},668:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),l=(t(0),t(1142)),i={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},o={unversionedId:"installation-and-setup",id:"version-v10.1.3/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v10.1.3/Introduction-InstallationAndSetup.md",slug:"/installation-and-setup",permalink:"/docs/v10.1.3/installation-and-setup",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/Introduction-InstallationAndSetup.md",version:"v10.1.3",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1619806593,sidebar:"version-v10.1.3/docs",previous:{title:"Prerequisites",permalink:"/docs/v10.1.3/prerequisites"},next:{title:"Quick Start Guide",permalink:"/docs/v10.1.3/quick-start-guide"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Install React and Relay using ",Object(l.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add react react-dom react-relay\n\n")),Object(l.b)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),Object(l.b)("p",null,"The below configuration of ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",Object(l.b)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",Object(l.b)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relay-tools/vscode-apollo-relay"}),"vscode-apollo-relay"),")."),Object(l.b)("p",null,"Install the package:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add --dev relay-config\n\n")),Object(l.b)("p",null,"And create the configuration file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),Object(l.b)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),Object(l.b)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add --dev babel-plugin-relay graphql\n\n")),Object(l.b)("p",null,"Add ",Object(l.b)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",Object(l.b)("inlineCode",{parentName:"p"},".babelrc")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),Object(l.b)("p",null,"Please note that the ",Object(l.b)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"}),"documentation on this topic"),"."),Object(l.b)("p",null,"Alternatively, instead of using ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),"babel-plugin-macros"),". After installing ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const graphql = require('babel-plugin-relay/macro');\n")),Object(l.b)("p",null,"If you need to configure ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",Object(l.b)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md#config-experimental"}),"specifying the options in a number of ways"),"."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),Object(l.b)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),Object(l.b)("p",null,"Relay's ahead-of-time compilation requires the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#relay-compiler"}),"Relay Compiler"),", which you can install via ",Object(l.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn add --dev relay-compiler\n\n")),Object(l.b)("p",null,"This installs the bin script ",Object(l.b)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",Object(l.b)("inlineCode",{parentName:"p"},"yarn"),"/",Object(l.b)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),Object(l.b)("p",null,"or if you are using jsx:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),Object(l.b)("p",null,"Then, after making edits to your application files, just run the ",Object(l.b)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn run relay\n\n")),Object(l.b)("p",null,"Alternatively, you can pass the ",Object(l.b)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",Object(l.b)("strong",{parentName:"p"},"Note:")," Requires ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/watchman"}),"watchman")," to be installed):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"\nyarn run relay --watch\n\n")),Object(l.b)("p",null,"For more details, check out our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#relay-compiler"}),"Relay Compiler docs"),"."),Object(l.b)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),Object(l.b)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),Object(l.b)("p",null,"However, Relay Modern expects modern JavaScript global types (",Object(l.b)("inlineCode",{parentName:"p"},"Map"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Set"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"Promise"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," or\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"@babel/polyfill"),"."),Object(l.b)("p",null,"A polyfilled environment for Relay using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," to support older browsers\nmight look like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}s.isMDXComponent=!0}}]);