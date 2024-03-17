"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[64195],{62579:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(94184),r=a.n(n),l=a(67294),o=function(e){var t,a=r()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?l.createElement("div",{className:"wrapper"},e.children):e.children,l.createElement("div",{className:a,id:e.id},t)};o.defaultProps={background:null,padding:[],wrapper:!0};const i=o},29260:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(21073),r=a(94184),l=a.n(r),o=a(67294),i=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),a=l()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),n=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),r=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return o.createElement("div",{className:a,key:t.title},n,o.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),t.content),r)},a.renderBlockImage=function(e,t,a){return e?o.createElement("div",{className:"blockImage"},t?o.createElement("a",{href:t},o.createElement("img",{src:e,alt:a})):o.createElement("img",{src:e,alt:a})):null},a.renderBlockTitle=function(e){return e?o.createElement("h2",null,e):null},a.render=function(){return o.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(o.Component);i.defaultProps={align:"left",contents:[],layout:"twoColumn"};const c=i},25651:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(86668),r=a(67294),l=a(67985),o="#081686",i="#590000",c="#444",s="#793735",m={'code[class*="language-"]':{whiteSpace:"pre",color:"#403f53"},'pre[class*="language-"]':{whiteSpace:"pre",margin:0},comment:{color:c},prolog:{color:c},doctype:{color:c},cdata:{color:c},punctuation:{color:"#403f53"},property:{color:o},tag:{color:"#6a0352"},boolean:{color:i},number:{color:i},constant:{color:i},symbol:{color:i},selector:{color:i},"attr-name":{color:o},string:{color:i},char:{color:i},builtin:{color:s},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},"attr-value":{color:i},keyword:{color:i},regex:{color:s},important:{color:s,fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"},deleted:{color:"red"},"class-name":{color:o},"maybe-class-name":{color:o},parameter:{color:o}},u="#8889e6",d="#e98785",p="#ccc",g="#c96765",h={'code[class*="language-"]':{whiteSpace:"pre",color:"#eee"},'pre[class*="language-"]':{whiteSpace:"pre",margin:0},comment:{color:p},prolog:{color:p},doctype:{color:p},cdata:{color:p},punctuation:{color:"#908fa3"},property:{color:u},tag:{color:"#da39b2"},boolean:{color:d},number:{color:d},constant:{color:d},symbol:{color:d},selector:{color:d},"attr-name":{color:u},string:{color:d},char:{color:d},builtin:{color:g},operator:{color:g},entity:{color:g,cursor:"help"},url:{color:g},"attr-value":{color:d},keyword:{color:d},regex:{color:g},important:{color:g,fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"},deleted:{color:"red"},"class-name":{color:u},"maybe-class-name":{color:u},parameter:{color:u}};const f=function(e){var t=e.children,a=(0,n.L)().isDarkTheme;return r.createElement(l.Z,{language:"jsx",style:a?h:m},t)};var y=a(62579),E=a(29260),b=a(39960),k=a(44996),v=a(52263),w=a(34660);function R(){return r.createElement(b.default,{to:"/docs/api-reference/load-query/"},r.createElement("code",null,"loadQuery"))}function A(){return r.createElement(b.default,{to:"/docs/api-reference/use-preloaded-query/"},r.createElement("code",null,"usePreloadedQuery"))}function N(){return r.createElement(b.default,{to:"/docs/guided-tour/rendering/queries/"},"Queries")}function S(){return r.createElement(b.default,{to:"/docs/api-reference/use-fragment/"},r.createElement("code",null,"useFragment"))}function q(){return r.createElement("div",{className:"homeBanner"},"Support Ukraine \ud83c\uddfa\ud83c\udde6"," ",r.createElement(b.default,{to:"https://opensource.facebook.com/support-ukraine"},"Help Provide Humanitarian Aid to Ukraine"),".")}var C=function(){var e=(0,v.default)().siteConfig;return r.createElement("div",null,r.createElement("div",null,r.createElement(q,null)),r.createElement("div",{className:"homeContainer"},r.createElement("div",{className:"homeSplashFade"},r.createElement("div",{className:"logo"},r.createElement("img",{src:(0,k.default)("img/relay-white.svg")})),r.createElement("div",{className:"wrapper homeWrapper"},r.createElement("h2",{className:"projectTitle"},e.title,r.createElement("small",null,e.tagline),r.createElement("small",null,e.subtagline))))))},L=function(){var e=(0,v.default)().siteConfig,t=(0,k.useBaseUrlUtils)().withBaseUrl,a=((0,n.L)().isDarkTheme,e.customFields.users.filter((function(e){return e.pinned})).map((function(e,a){return r.createElement("a",{href:e.infoLink,key:a},r.createElement("img",{src:t(e.image),title:e.caption}),r.createElement("div",null,r.createElement("h6",null,e.caption),r.createElement("p",null,e.description)))})));return r.createElement("div",null,r.createElement(C,null),r.createElement("div",{className:"homePage mainContainer"},r.createElement(y.Z,{className:"textSection",background:"light"},r.createElement("h2",null,"Built for scale"),r.createElement("p",null,"Relay is designed for high performance at any scale. Relay keeps management of data-fetching easy, whether your app has tens, hundreds, or thousands of components. And thanks to Relay\u2019s incremental compiler, it keeps your iteration speed fast even as your app grows."),r.createElement(E.Z,{layout:"threeColumn",contents:[{title:"Keeps iteration quick",content:r.createElement("span",null,r.createElement("p",null,"Relay is data-fetching turned ",r.createElement("b",null,"declarative"),". Components declare their data dependencies, without worrying about how to fetch them. Relay guarantees that the data each component needs is fetched and available. This keeps components decoupled and promotes reuse."),r.createElement("p",null,"With Relay, components and their data dependencies can be quickly modified without modifying other parts of the system. That means you won't accidentally break other components as you refactor or make changes to your app."))},{title:"Automatic optimizations",content:r.createElement("span",null,r.createElement("p",null,"Relay's compiler aggregates and optimizes the data requirements for your entire app, so that they can be efficiently fetched in a single GraphQL request."),r.createElement("p",null,"Relay handles the heavy lifting to ensure the data declared by your components is fetched in the most efficient way. For example, by deduplicating identical fields, and precomputing information used at runtime, among other optimizations."))},{title:"Data consistency",content:r.createElement("span",null,r.createElement("p",null,"Relay automatically keeps all of your components up to date when data that affects them changes, and efficiently updates them only when strictly necessary. This means no unnecessary re-renders."),r.createElement("p",null,"Relay also supports executing GraphQL Mutations, optionally with optimistic updates, and updates to local data, while ensuring that visible data on the screen is always kept up to date."))}]})),r.createElement(y.Z,{className:"exampleSection",background:"dark"},r.createElement("div",{className:"wrapperInner"},r.createElement("div",{className:"radiusRight"},r.createElement("h2",null,"Fetching query data"),r.createElement("p",null,"The simplest way to fetch query data is to directly call"," ",r.createElement(R,null),"."),r.createElement("p",null,"Later, you can read the data from the store in a functional React component by calling the ",r.createElement(A,null)," hook."),r.createElement("p",null,"Relay encourages you to call ",r.createElement(R,null)," in response to an event, such as when a user presses on a link to navigate to a particular page or presses a button. See the guided tour section on ",r.createElement(N,null)," for more.")),r.createElement("div",{className:"radiusLeft"},r.createElement("pre",{className:"outerPre"},r.createElement(f,null,'\nimport React from "react";\nimport { graphql, usePreloadedQuery, /* ... */ } from "react-relay";\n\nconst artistsQuery = graphql`\n  query ArtistQuery($artistID: String!) {\n    artist(id: $artistID) {\n      name\n      ...ArtistDescription_artist\n    }\n  }\n`;\nconst artistsQueryReference = loadQuery(\n  environment,\n  artistsQuery,\n  {artistID: "1"}\n);\n\nexport default function ArtistPage() {\n  return (\n    <EnvironmentProvider environment={environment}>\n      <React.Suspense fallback={<LoadingIndicator />}>\n        <ArtistView />\n      </React.Suspense>\n    </EnvironmentProvider>\n  )\n}\n\nfunction ArtistView() {\n  const data = usePreloadedQuery(artistsQuery, artistsQueryReference);\n  return (\n    <>\n      <Name>{data?.artist?.name}</Name>\n      {data?.artist && <ArtistCard artist={data?.artist} />}\n    </>\n  );\n}\n'))))),r.createElement(y.Z,{className:"exampleSection",background:"light"},r.createElement("div",{className:"wrapperInner"},r.createElement("div",null,r.createElement("h2",null,"Fragments"),r.createElement("p",null,"Step two is to render a tree of React components powered by Relay. Components use fragments to declare their data dependencies, and read data from the Relay store by calling"," ",r.createElement(S,null),"."),r.createElement("p",null,"A fragment is a snippet of GraphQL that is tied to a GraphQL type (like ",r.createElement("code",null,"Artist"),") and which specifies ",r.createElement("i",null,"what")," ","data to read from an item of that type."),r.createElement("p",null,r.createElement(S,null)," takes two parameters: a fragment literal and a fragment reference. A fragment reference specifies"," ",r.createElement("i",null,"which")," entity to read that data from."),r.createElement("p",null,"Fragments cannot be fetched by themselves; instead, they must ultimately be included in a parent query. The Relay compiler will then ensure that the data dependencies declared in such fragments are fetched as part of that parent query.")),r.createElement("div",null,r.createElement("pre",{className:"outerPre"},r.createElement(f,null,'\nimport React from "react";\nimport { graphql, useFragment} from "react-relay";\n\nexport default function ArtistCard(props) {\n  const {href, image, bio} = useFragment(\n    graphql`\n      fragment ArtistHeader_artist on Artist {\n        href\n        bio\n        image {\n          url\n        }\n      }\n    `,\n    props.artist\n  );\n  const imageUrl = image && image.url;\n\n  return (\n    <Card>\n      <Link href={href}>\n        <Image imageUrl={imageUrl} />\n        <Bio>{bio}</Bio>\n      </Link>\n    </Card>\n  );\n}\n                    '))))),r.createElement(y.Z,{className:"textSection graphqlSection",background:"dark"},r.createElement("h2",null,"GraphQL best practices baked in"),r.createElement("p",null,"Relay applies and relies on GraphQL best practices. To get the most from Relay's features, you'll want your GraphQL server to conform to these standard practices."),r.createElement(E.Z,{layout:"threeColumn",contents:[{title:"Fragments",content:r.createElement("div",null,r.createElement("p",null,"A GraphQL"," ",r.createElement("a",{href:"https://graphql.org/learn/queries/#fragments",target:"_blank"},"Fragment")," ","is a reusable selection of fields for a given GraphQL type. It can be composed by including it in other Fragments, or including it as part of GraphQL Queries."),r.createElement("p",null,"Relay uses Fragments to declare data requirements for components, and compose data requirements together."),r.createElement("p",null,"See the ",r.createElement(b.default,{to:"/docs/guided-tour/"},"guided tour")))},{title:"Connections",content:r.createElement("div",null,r.createElement("p",null,"GraphQL"," ",r.createElement("a",{href:"https://graphql.org/learn/pagination/#complete-connection-model",target:"_blank"},"Connections")," ","are a model for representing lists of data in GraphQL, so that they can easily be paginated in any direction, as well as to be able to encode rich relationship data."),r.createElement("p",null,"GraphQL Connections are considered a best practice for"," ",r.createElement("a",{href:"https://graphql.org/learn/pagination/"},"Pagination in GraphQL"),", and Relay provides first class support for these, as long as your GraphQL server supports them."),r.createElement("p",null,"See the"," ",r.createElement(b.default,{to:"docs/guides/graphql-server-specification#connections"},"Connections")," ","docs"))},{title:"Global Object Identification",content:r.createElement("div",null,r.createElement("p",null,"Relay relies on"," ",r.createElement("a",{href:"https://graphql.org/learn/global-object-identification/",target:"_blank"},"Global Object Identification")," ","to provide reliable caching and refetching, and to make it possible to automatically merge updates for objects."),r.createElement("p",null,"Global Object Identification consists on providing globally unique ids across your entire schema for every type, built using the Node GraphQL interface."),r.createElement("p",null,r.createElement(b.default,{to:"docs/guides/graphql-server-specification#object-identification"},"See the Object Identification docs")))}]})),r.createElement(y.Z,{className:"textSection declarativeSection",background:"light"},r.createElement("h2",null,"Flexible Mutations"),r.createElement(E.Z,{layout:"threeColumn",contents:[{title:"Describe data changing",content:r.createElement("div",null,r.createElement("p",null,"Using GraphQL mutations, you can declaratively define and request the data that will be affected by executing a mutation in a ",r.createElement("em",null,"single round trip"),", and Relay will automatically merge and propagate those changes."))},{title:"Automatic updates",content:r.createElement("div",null,r.createElement("p",null,"Using Global Object Identification, Relay is capable of automatically merging mutation updates for any affected objects, and updating only the affected components."),r.createElement("p",null,"For more complex cases where updates cannot automatically be merged, Relay provides apis to manually update the local Relay data in response to a mutation."))},{title:"Designed for great UX",content:r.createElement("div",null,r.createElement("p",null,"Relay's mutation API supports making optimistic updates to show immediate feedback to users, as well as error handling and automatically reverting changes when mutations fail."))}]})),r.createElement(y.Z,{className:"textSection aheadSection",background:"dark"},r.createElement("h2",null,"Ahead-of-time Safety"),r.createElement(E.Z,{layout:"threeColumn",contents:[{title:"Peace of mind",content:r.createElement("div",null,r.createElement("p",null,"While you work on a Relay project, the Relay compiler will guide you to ensure project-wide consistency and correctness against your GraphQL schema."))},{title:"Optimized runtime",content:r.createElement("div",null,r.createElement("p",null,"Relay pre-computes a lot of work (like processing and optimizing queries) ahead of time, during build time, in order to make the runtime on the browser or device as efficient as possible."))},{title:"Type safety",content:r.createElement("div",null,r.createElement("p",null,"Relay generates Flow or TypeScript types for each of your React components that use Relay, which represent the data that each component receives, so you can make changes more quickly and safely while knowing that correctness is guaranteed."))}]})),r.createElement(y.Z,{className:"textSection relaySection",background:"light"},r.createElement("h2",null,"Can Relay Work For Me?"),r.createElement(E.Z,{layout:"twoColumn",contents:[{title:"Adopt Incrementally",content:r.createElement("div",null,r.createElement("p",null,"If you already can render React components, you're most of the way there. Relay requires a Babel plugin, and to also run the Relay Compiler."),r.createElement("p",null,"You can use Relay out of the box with Create React App and Next.js."))},{title:"Make Complexity Explicit",content:r.createElement("div",null,r.createElement("p",null,"Relay requires a bit more up-front setup and tools, in favour of supporting an architecture of isolated components which can scale with your team and app complexity."),r.createElement("p",null,"Learn these principles once, then spend more time working on business logic instead of pipelining data."))},{title:"Used at Facebook Scale",content:r.createElement("div",null,r.createElement("p",null,"Relay is critical infrastructure in Facebook, there are tens of thousands of components using it. Relay was built in tandem with GraphQL and has full-time staff working to improve it."))},{title:"Not Just for Big Apps",content:r.createElement("div",null,r.createElement("p",null,"If you're the sort of team that believes in using Flow or TypeScript to move error detection to dev-time, then Relay is likely a good fit for you."),r.createElement("p",null,"It's probable you'd otherwise re-create a lot of Relay's caching, and UI best practices independently."))}]})),r.createElement(y.Z,{className:"textSection",background:"light"},r.createElement("h2",null,"Proudly Used Elsewhere"),r.createElement("p",null,"Relay was originally created for the React Native sections of the Facebook app, and it has been used adapted and improved by other teams internally and externally."),r.createElement("div",null,r.createElement("div",{className:"logosHomepage"},a)),r.createElement("div",{className:"more-users"},r.createElement(b.default,{className:"button",to:"/users"},"More Relay Users")))))};const Q=function(e){return r.createElement(w.Z,null,r.createElement(L,e))}}}]);