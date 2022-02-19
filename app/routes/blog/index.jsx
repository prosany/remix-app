import axios from "axios";
import { useLoaderData } from "remix";

export async function loader() {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    users: data,
  };
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Remix Blog Page.
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            <h6>{user.name}</h6>
            <p>{user.email}</p>
            <div>
              <p>{user.address.street}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
            </div>
            <div>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
            <div>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
