import {useState} from 'react'

const Part7 = () => {

  const initstate = ["Saikrishna","Facebook","Whatsapp","Telegram","Teams","Facebook1"];
  const [userData,setData] = useState();
  const [persons,setPersons] = useState(initstate)
  const [outPut,setOutPut] = useState(initstate);

  const storeInfo = (e) => {
    setData(e)

    let tempData = persons.filter(data => data.includes(e))
    setOutPut(tempData); // here we will get filtered data from personsbased on input given by the user.
  };

  return (
    <>
      <input
        value={userData}
        onChange={(e) => {
          storeInfo(e.target.value);
        }}
      />
      <div>
        {
          outPut.map((data,index)=>{
            return <div>{data}</div>
          })
        }
      </div>
    </>
  );
};

export default Part7;
