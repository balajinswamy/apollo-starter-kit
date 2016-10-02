/*
core of any GraphQL server is a schema. 
The schema defines types and their relationships. It also specifies which queries can be made against the server.

ApolloServer uses the GraphQL schema language notation, which it then compiles to a GraphQL-JS schema.

*/

const typeDefinitions = `
type Query {
  testString: String
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
