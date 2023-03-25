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
    <table className="flex justify-around rounded-lg mt-2 border-collapse ">
      <tr className="w-[35px] border-4 overflow-hidden">
        <td className='w-full'>{index}</td>
      </tr>
      <tr className="w-[256px] border-4 overflow-hidden">
        <td className='w-full'>{firstName}</td>
      </tr>
      <tr className="w-[256px] border-4 overflow-hidden">
        <td className='w-full'>{lastName}</td>
      </tr>
      <tr className="w-[256px] border-4 overflow-hidden">
        <td className='w-full'>{randomAdress}</td>
      </tr>
      <tr className="w-[256px] border-4 overflow-hidden">
        <td className='w-full'>{phone}</td>
      </tr>
    </table>
  );
};
