import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../features/api/contactApi";
import Cookie from "js-cookie";
import { MdDelete } from "react-icons/md";
import EditModel from "./EditModel";

const Table = () => {
  const [deleteContact] = useDeleteContactMutation();
  const token = Cookie.get("token");
  const { data } = useGetContactsQuery({ token });
  //   console.log(data);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.contacts?.data?.map((contact) => (
            <tr
              key={contact.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contact.name}
              </th>
              <td className="px-6 py-4">{contact?.email}</td>
              <td className="px-6 py-4">{contact.phone}</td>
              <td className="px-6 py-4 flex gap-4 items-center">
                <EditModel contact={contact}/>
                <MdDelete
                  onClick={() => deleteContact({ id: contact.id })}
                  className="text-2xl cursor-pointer hover:text-red-400 hover:scale-105"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
