/*
	Source : https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.z0fgxiegf
	
	Core of any GraphQL server is a schema. 
	The schema defines types and their relationships. It also specifies which queries can be made against the server.

	ApolloServer uses the GraphQL schema language notation, which it then compiles to a GraphQL-JS schema.

	Author is going to have four fields: id, firstName, lastName and posts. Posts is an array that refers to that author’s posts.
 	Post is going to have five fields: id, title, text, views and author. Author refers to the author type we just defined:

*/


const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}

type Query {
  author(firstName: String, lastName: String, id: Int): Author
  getFortuneCookie: String
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
