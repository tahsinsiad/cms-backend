import {gql} from 'apollo-server-express';

export default gql`
    type AvailableComponent {
        id: ID!
        importSignature: String!
        name: String!
        props: JSONObject!
    }
    extend type Query {
        allAvailableComponents(projectId: String!, limit: Int, skip: Int): [AvailableComponent!]
        availableComponentById(id: String!): AvailableComponent
    }
    extend type Mutation {
        addComponent(componentId: String!, parent: JSONObject, projectId: String!, page: String!): Boolean
        addComponents(componentIds: [String!], parent: JSONObject, projectId: String!, page: String!): Boolean
    }
`;
