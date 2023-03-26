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
    <>
      <tr className="flex justify-around ">
        <td className="w-full border-4 overflow-hidden">{index}</td>
        <td className="w-full border-4 overflow-hidden">{firstName}</td>
        <td className="w-full border-4 overflow-hidden">{lastName}</td>
        <td className="w-full border-4 overflow-hidden">{randomAdress}</td>
        <td className="w-full border-4 overflow-hidden">{phone}</td>
      </tr>
    </>
  );
};
