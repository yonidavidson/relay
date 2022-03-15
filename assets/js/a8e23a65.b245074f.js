(self.webpackChunk=self.webpackChunk||[]).push([[92975],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(n),p=r,y=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35879:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>s,toc:()=>c,default:()=>p});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),l=["components"],i={id:"local-state-management",title:"Local State Management"},d=void 0,s={unversionedId:"local-state-management",id:"version-v3.0.0/local-state-management",isDocsHomePage:!1,title:"Local State Management",description:"Relay can be used to read and write local data, and act as a single source of truth for all data in your client application.",source:"@site/versioned_docs/version-v3.0.0/Modern-LocalStateManagement.md",sourceDirName:".",slug:"/local-state-management",permalink:"/docs/v3.0.0/local-state-management",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v3.0.0/Modern-LocalStateManagement.md",tags:[],version:"v3.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1647310580,formattedLastUpdatedAt:"3/15/2022",frontMatter:{id:"local-state-management",title:"Local State Management"}},c=[{value:"Extending the server schema",id:"extending-the-server-schema",children:[],level:2},{value:"Querying local state",id:"querying-local-state",children:[],level:2},{value:"Mutating local state",id:"mutating-local-state",children:[{value:"Create",id:"create",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2},{value:"Initial local state",id:"initial-local-state",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay can be used to read and write local data, and act as a single source of truth for ",(0,o.mdx)("em",{parentName:"p"},"all")," data in your client application.\nThe Relay Compiler fully supports client-side extensions of the schema, which allows you to define local fields and types."),(0,o.mdx)("p",null,"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#extending-the-server-schema"},"Extending the server schema")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#querying-local-state"},"Querying local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#mutating-local-state"},"Mutating local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#initial-local-state"},"Initial local state"))),(0,o.mdx)("h2",{id:"extending-the-server-schema"},"Extending the server schema"),(0,o.mdx)("p",null,"To extend the server schema, create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file inside your ",(0,o.mdx)("inlineCode",{parentName:"p"},"--src")," directory.\nLet's call it ",(0,o.mdx)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql"),"."),(0,o.mdx)("p",null,"This schema describes what local data can be queried on the client.\nIt can even be used to extend an existing server schema."),(0,o.mdx)("p",null,"For example, we can create a new type called ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Note {\n  id: ID!\n  title: String\n  body: String\n}\n")),(0,o.mdx)("p",null,"And then extend the server schema type ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),", with a list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),", called ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type User {\n  notes: [Note]\n}\n")),(0,o.mdx)("h2",{id:"querying-local-state"},"Querying local state"),(0,o.mdx)("p",null,"Accessing local data is no different from querying your GraphQL server, although you are required to include atleast one server field in the query.\nThe field can be from the server schema, or it can be schema agnostic, like an introspection field (i.e. ",(0,o.mdx)("inlineCode",{parentName:"p"},"__typename"),")."),(0,o.mdx)("p",null,"Here, we use a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v3.0.0/query-renderer"},"QueryRenderer")," to get the current ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"viewer")," field, along with their id, name and the local list of notes."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return (\n      <div>\n        {props.viewer.notes.map(({id, title, body}) => (\n          <div key={id}>\n            {title}\n          </div>\n          <div key={id}>\n            {body}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      render={renderQuery}\n      environment={environment}\n      query={graphql`\n        query ExampleQuery {\n          viewer {\n            id\n            name\n            notes {\n              id\n              title\n              body\n            }\n          }\n        }\n      `}\n    />\n  );\n}\n")),(0,o.mdx)("h2",{id:"mutating-local-state"},"Mutating local state"),(0,o.mdx)("p",null,"All local data lives in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v3.0.0/relay-store"},"Relay Store"),".\nUpdating local state can be done with any ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," function.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," function is especially ideal for this, because writes to local state are usually executed outside of a mutation."),(0,o.mdx)("p",null,"To build upon the previous example, let's try creating, updating and deleting a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note")," from the list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,o.mdx)("h3",{id:"create"},"Create"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nlet tempID = 0;\n\nfunction createUserNote() {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes') || [];\n\n    // Create a unique ID.\n    const dataID = `client:Note:${tempID++}`;\n\n    //Create a new note record.\n    const newNoteRecord = store.create(dataID, 'Note');\n\n    // Add the record to the user's list of notes.\n    user.setLinkedRecords([...userNoteRecords, newNoteRecord], 'notes');\n  });\n}\n")),(0,o.mdx)("p",null,"Note that since this record will be rendered by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleQuery")," in our ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer"),", the QueryRenderer will automatically retain this data so it isn't garbage collected."),(0,o.mdx)("p",null,"If no component is rendering the local data and you want to manually retain it, you can do so by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment.retain()"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {createOperationDescriptor, getRequest} from 'relay-runtime';\n\n// Create a query that references that record\nconst localDataQuery = graphql`\n  query LocalDataQuery {\n    viewer {\n      notes {\n        __typename\n      }\n    }\n  }\n`;\n\n// Create an operation descriptor for the query\nconst request = getRequest(localDataQuery);\nconst operation = createOperationDescriptor(request, {} /* variables */);\n\n\n// Tell Relay to retain this operation so any data referenced by it isn't garbage collected\n// In this case, all the notes linked to the `viewer` will be retained\nconst disposable = environment.retain(operation);\n\n\n// Whenever you don't need that data anymore and it's okay for Relay to garbage collect it,\n// you can dispose of the retain\ndisposable.dispose();\n")),(0,o.mdx)("h3",{id:"update"},"Update"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction updateUserNote(dataID, body, title) {\n  commitLocalUpdate(environment, store => {\n    const note = store.get(dataID);\n\n    note.setValue(body, 'body');\n    note.setValue(title, 'title')\n  });\n}\n")),(0,o.mdx)("h3",{id:"delete"},"Delete"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction deleteUserNote(dataID) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes');\n\n    // Remove the note from the list of user notes.\n    const newUserNoteRecords = userNoteRecords.filter(x => x.getDataID() !== dataID);\n\n    // Delete the note from the store.\n    store.delete(dataID);\n\n    // Set the new list of notes.\n    user.setLinkedRecords(newUserNoteRecords, 'notes');\n  });\n}\n")),(0,o.mdx)("h2",{id:"initial-local-state"},"Initial local state"),(0,o.mdx)("p",null,"All new client-side schema fields default to ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," value. Often however, you will want to set the initial state before querying local data.\nYou can use an updater function via ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," to prime local state."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\ncommitLocalUpdate(environment, store => {\n  const user = store.getRoot().getLinkedRecord('viewer');\n\n  // initialize user notes to an empty array.\n  user.setLinkedRecords([], 'notes');\n});\n")))}p.isMDXComponent=!0}}]);