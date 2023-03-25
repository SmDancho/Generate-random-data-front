import { FC } from 'react';

interface users {
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  index: number;
}

export const Users: FC<users> = ({
  firstName,
  lastName,
  address,
  phone,
  index,
}) => {
  const randomAdress = address.street || address.city || address.state;

  return (
    <table  className="flex justify-around rounded-lg mt-2 border-collapse ">
      <td className="w-full border-4 border-collapse">
        <tr>{index}</tr>
      </td>
      <td className="w-full border-4 ">
        <tr>{firstName}</tr>
      </td>
      <td className="w-full border-4">
        <tr>{lastName}</tr>
      </td>
      <td className="w-full border-4">
        <tr>{randomAdress}</tr>
      </td>
      <td className="w-full border-4">
        <tr>{phone}</tr>
      </td>
    </table>
  );
};
