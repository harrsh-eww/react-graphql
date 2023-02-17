import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      result {
        id
        name
        contactNumber
        email
        password
      }
      message
      status
    }
  }
`;

const Client = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  console.log(data, loading, error);

  return loading ? (
    <div>Loading...</div>
  ) : data && data.clients.result ? (
    <div>
      {data.clients.result.map((client: ClientType) => {
        return (
          <div key={client.id}>
            ID: {client.id}
            <br />
            Name: {client.name}
          </div>
        );
      })}
    </div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div> || "Error"</div>
  );
};

export default Client;

type ClientType = {
  id: string;
  name: string;
  contactNumber: string;
  email: string;
  password: string;
};
