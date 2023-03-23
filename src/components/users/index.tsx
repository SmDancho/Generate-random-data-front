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
    <div className="flex justify-around text-center border-4 rounded-lg mt-2">
      <div className="w-full">{index}</div>
      <div className="w-full">{firstName}</div>
      <div className="w-full">{lastName}</div>
      <div className="w-full">{randomAdress}</div>
      <div className="w-full">{phone}</div>
    </div>
  );
};
