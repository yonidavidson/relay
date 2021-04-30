(window.webpackJsonp=window.webpackJsonp||[]).push([[777],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(r,".").concat(m)]||d[m]||p[m]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},858:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),o=(n(0),n(1142)),r={id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"},c={unversionedId:"converting-mutations",id:"version-v10.1.1/converting-mutations",isDocsHomePage:!1,title:"Converting Mutations",description:"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment.",source:"@site/versioned_docs/version-v10.1.1/Modern-ConvertingMutations.md",slug:"/converting-mutations",permalink:"/docs/v10.1.1/converting-mutations",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.1/Modern-ConvertingMutations.md",version:"v10.1.1",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1619806593},l=[{value:"Simplifying FatQueries to Standard GraphQL Queries",id:"simplifying-fatqueries-to-standard-graphql-queries",children:[]},{value:"Migrating Configs",id:"migrating-configs",children:[{value:"FIELDS_CHANGE",id:"fields_change",children:[]},{value:"REQUIRED_CHILDREN",id:"required_children",children:[]},{value:"RANGE_ADD",id:"range_add",children:[]},{value:"RANGE_DELETE",id:"range_delete",children:[]},{value:"NODE_DELETE",id:"node_delete",children:[]}]},{value:"Converting a Simple Mutation",id:"converting-a-simple-mutation",children:[{value:"Converting <code>getMutation()</code> and <code>getFatQuery()</code>",id:"converting-getmutation-and-getfatquery",children:[]},{value:"Converting <code>getConfigs()</code>",id:"converting-getconfigs",children:[]},{value:"Converting <code>getVariables()</code>",id:"converting-getvariables",children:[]},{value:"Final Result",id:"final-result",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment."),Object(o.b)("h2",{id:"simplifying-fatqueries-to-standard-graphql-queries"},"Simplifying FatQueries to Standard GraphQL Queries"),Object(o.b)("p",null,"FatQueries in Relay Classic mutations was a concept that was confusing for a number of people. It required Relay to keep track of a significant amount of metadata regarding each record and automatically figure out the query to send to the server for the mutation. The logic to deduce the queries to send to the server was both complicated to maintain and slow to run. On top of that, we often had questions about why a particular field is included or skipped. We decided to allow people to have more control by allowing them write out exactly what data they want to update as the result of a mutation. Both individual fields and fragments can be included in these queries. Similar to container fragments, this is subjected to masking. That means only fields listed out directly will be accessible in the callbacks and the updater functions. The data fetched by in referenced fragments will still be updated in the store."),Object(o.b)("p",null,"Example of existing fat query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  RelayClassic.QL`\n    fragment on MarkReadNotificationResponsePayload @relay(pattern: true) {\n      notification\n    }\n  `;\n")),Object(o.b)("p",null,"Example of converted mutation query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationData!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState # include fields to be updated\n        ... MyNotificationComponent_notification # reuse fragments from components to be updated\n      }\n    }\n  }\n`;\n")),Object(o.b)("h2",{id:"migrating-configs"},"Migrating Configs"),Object(o.b)("h3",{id:"fields_change"},"FIELDS_CHANGE"),Object(o.b)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Relay will normalized the data using the mutation query and id to update the store automatically. You can remove it completely."),Object(o.b)("h3",{id:"required_children"},"REQUIRED_CHILDREN"),Object(o.b)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Simply include any fields that you need as part of the mutation query without specifying the config."),Object(o.b)("h3",{id:"range_add"},"RANGE_ADD"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RANGE_ADD")," needs one additional property in the config named ",Object(o.b)("inlineCode",{parentName:"p"},"connectionInfo")," to work with the new environment. Learn more about ",Object(o.b)("inlineCode",{parentName:"p"},"connectionInfo")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations#range-add"}),"Mutation/RANGE_ADD")),Object(o.b)("h3",{id:"range_delete"},"RANGE_DELETE"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RANGE_DELETE")," needs one additional property in the config named ",Object(o.b)("inlineCode",{parentName:"p"},"connectionKeys")," to work with the new environment. Learn more about ",Object(o.b)("inlineCode",{parentName:"p"},"connectionKeys")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations#range-delete"}),"Mutation/RANGE_DELETE")),Object(o.b)("h3",{id:"node_delete"},"NODE_DELETE"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NODE_DELETE")," config will work as-is with the new environment. No change is needed."),Object(o.b)("h2",{id:"converting-a-simple-mutation"},"Converting a Simple Mutation"),Object(o.b)("p",null,"Take this example of a simple mutation in Relay Classic:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class LikeStoryMutation extends RelayClassic.Mutation {\n  getMutation() {\n    return RelayClassic.QL`mutation {likeStory}`;\n  }\n\n  getVariables() {\n    return {storyID: this.props.story.id};\n  }\n\n  getFatQuery() {\n    return RelayClassic.QL`\n      fragment on LikeStoryPayload @relay(pattern: true) {\n        story {\n          likers,\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id\n      }\n    `,\n  };\n}\n")),Object(o.b)("h3",{id:"converting-getmutation-and-getfatquery"},"Converting ",Object(o.b)("inlineCode",{parentName:"h3"},"getMutation()")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"getFatQuery()")),Object(o.b)("p",null,"We combine these two into a regular GraphQL mutation, which list out specific fields that needs to be updated."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story(data: $input) {\n      likers {\n        count\n      }\n      likeSentence\n      viewerDoesLike\n    }\n  }\n`;\n")),Object(o.b)("h3",{id:"converting-getconfigs"},"Converting ",Object(o.b)("inlineCode",{parentName:"h3"},"getConfigs()")),Object(o.b)("p",null,"As specified above, ",Object(o.b)("inlineCode",{parentName:"p"},"FIELDS_CHANGE")," configs can be omitted."),Object(o.b)("h3",{id:"converting-getvariables"},"Converting ",Object(o.b)("inlineCode",{parentName:"h3"},"getVariables()")),Object(o.b)("p",null,"To convert ",Object(o.b)("inlineCode",{parentName:"p"},"getVariables()"),", we take the return value from the original function and wrap it in an object that contains a property that matches the variable name for the mutation. In this case, the mutation has a ",Object(o.b)("inlineCode",{parentName:"p"},"input")," variable that is of type ",Object(o.b)("inlineCode",{parentName:"p"},"LikeStoryData"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const variables = {\n  input: {\n    storyID: args.storyID\n  }\n}\n")),Object(o.b)("h3",{id:"final-result"},"Final Result"),Object(o.b)("p",null,"As you can see, our resulting mutation is a lot simpler and more like regular GraphQL than the Relay Classic version we started out with."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story {\n      likers {\n        count\n      },\n      likeSentence,\n      viewerDoesLike\n    }\n  }\n`;\n\n// environment should be passed in from your component as this.props.relay.environment\nfunction commit(environment: CompatEnvironment, args) {\n  const variables = {\n    input: {\n      storyID: args.storyID\n    }\n  };\n\n  return commitMutation(environment, {\n    mutation,\n    variables,\n  });\n}\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mutations"}),"Mutation")," for additional options on ",Object(o.b)("inlineCode",{parentName:"p"},"commitMutation")," for more complex mutations."))}u.isMDXComponent=!0}}]);