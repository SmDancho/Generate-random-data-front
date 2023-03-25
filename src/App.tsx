import { useState, useEffect } from 'react';
import axios from 'axios';
import { Users } from '../src/components/users';

function App() {
  const [country, setCountry] = useState('USA');
  const [seed, setSeed] = useState(0);
  const [errors, serErrors] = useState<any>(0);
  const [page, setPage] = useState(1);
  const [userNums, setuserNums] = useState(10);

  const [data, setData] = useState<any[]>([]);
  console.log(page);
  const scrollHandler = (e: any) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) <=
      100
    ) {
      setPage((prev) => prev++);
      setuserNums((prev) => (prev += 10));
    } else {
      return;
    }
  };

  useEffect(() => {
    const block = document.querySelector('.scrollBlock');
    block?.addEventListener('scroll', scrollHandler);
    return document.removeEventListener('scroll', (e) => scrollHandler(e));
  }, []);

  useEffect(() => {
    axios
      .post('https://generate-random-data-back.vercel.app/users/get', {
        errorRate: errors,
        seed: seed,
        region: country,
        currentPage: page,
        userNums: userNums,
      })
      .then((response) => setData(response.data.users));
  }, [seed, errors, country, page, userNums]);

  return (
    <div className="App">
      <div className="w-[1280px] m-auto">
        <div className="w-full flex justify-between items-center h-[150px]">
          <div>
            <div>Region</div>
            <select
              className="outline-none cursor-pointer border-2 rounded-lg p-2"
              name="countrySelect"
              id="1"
              onChange={(e: any) => {
                setCountry(e.target.value);
              }}
            >
              <option value="USA">USA</option>
              <option value="Poland">Poland</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
          <div>
            <div className="flex flex-col items-start">
              <div>seed</div>
              <input
                className="outline-none cursor-pointer border-2 rounded-lg p-2"
                type="number"
                placeholder="seed"
                value={seed}
                onChange={(e) => setSeed(Number(e.target.value))}
              />
              <button
                onClick={() => {
                  setSeed(0);
                }}
              >
                set 0
              </button>
              <button
                onClick={() => {
                  const seed = [...new Array(10)].map((i) =>
                    Math.floor(Math.random() * 10)
                  );

                  setSeed(Number(seed.join('')));
                }}
              >
                Generate
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div>Errors</div>
            <input
              onChange={(e) => {
                serErrors(e.target.value);
              }}
              className="outline-none cursor-pointer border-2 rounded-lg p-2"
              type="range"
              min="0"
              max="50"
              step="0.5"
              placeholder="Error rate from 1 to 1000"
              maxLength={4}
              value={errors}
            />
            <input
              onChange={(e) => {
                serErrors(e.target.value);
              }}
              className="outline-none cursor-pointer border-2 rounded-lg p-2"
              type="text"
              min="0.5"
              max="50"
              step="0.5"
              placeholder="Error rate from 1 to 1000"
              maxLength={4}
              value={errors}
            />
          </div>
        </div>
      </div>

      <div className="w-[1280px] m-auto h-[400px] overflow-auto scrollBlock">
        <div className="flex justify-around font-bold  ">
          <div className="w-[35px]">id</div>
          <div className="w-[256px]">Name</div>
          <div className="w-[256px]">lastName</div>
          <div className="w-[256px]">address</div>
          <div className="w-[256px]">number</div>
        </div>
        {data.map((users, index) => (
          <Users {...users} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
