import React, { useEffect, useState } from 'react'
import "./Myaddresses.css"
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";

function Myaddresses() {
  const [newaddress,setnewaddress]=useState(false)

  // Initialize addresses state with localStorage data
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("userAddresses")
    return savedAddresses ? JSON.parse(savedAddresses) : []
  })

  // Fields
  const [houseNo, setHouseNo] = useState("");
  const [floor, setFloor] = useState("");
  const [block, setBlock] = useState("");
  const [landmark, setLandmark] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  // 💾 Save to localStorage whenever addresses change
  useEffect(() => {
    localStorage.setItem("userAddresses", JSON.stringify(addresses));
  }, [addresses]);

  function handleaddaddress()
  {
    setnewaddress(!newaddress)
  }

  function handlesaveaddress()
  {
    const newEntry = {houseNo,floor,block,landmark,name,phone};
    // Add new address
    setAddresses([...addresses, newEntry])
    // Clear fields
    setHouseNo(""); setFloor(""); setBlock("")
    setLandmark(""); setName(""); setPhone("")
    // Close modal
    setnewaddress(false)
  }
  return (
    <>
    {
      newaddress ?
      <div className="new">
        <div className="newadd">
          <h3 id="enteradd">Enter complete address</h3>
          <IoMdClose id="clo-icon" onClick={()=>setnewaddress(false)}/>
        </div>
        <div className="inputfiels">
          <div className="upperfields">
            <input className="inputssss" placeholder='House number *' value={houseNo} onChange={(e) => setHouseNo(e.target.value)}/>
            <input className="inputssss"placeholder='Floor *' value={floor} onChange={(e) => setFloor(e.target.value)}/>
            <input  className="inputssss"placeholder='Tower / Block (optional)' value={block} onChange={(e) => setBlock(e.target.value)}/>
            <input  className="inputssss"placeholder='Nearby landmark (optional)' value={landmark} onChange={(e) => setLandmark(e.target.value)}/>
          </div>
          <div className="lowerfields">
            <p id="del-exp">Enter your details for seamless delivery experience</p>
            <input  className="inputssss"placeholder='Your name *' value={name} onChange={(e) => setName(e.target.value)}/>
            <input  className="inputssss"placeholder='Your Phone number (optional) *' value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="save-bttn" onClick={handlesaveaddress}>
            <button id="savebutton">Save Address</button>
          </div>
        </div>
      </div>
      :""
    }
    <div className="myaddresses">
      <h3 id="myaddresshead">My addresses</h3>
      <div className="newaddress" onClick={handleaddaddress}>
        <FaPlus id="plusicon"/> <p id="newadd">Add new address</p>
      </div>
      {addresses.length === 0 ? (
          <p>No addresses saved</p>
        ) : (
          addresses.map((addr, index) => (
            <div key={index} className="addressdiv">
              <div className="homeicon">
                <FaHome />
              </div>
              <div className="add-de">
                <div className="detailssss">
                  <p id="len1">{addr.name}, {addr.phone}</p>
                  <p id="len2">{addr.houseNo}, {addr.floor}, {addr.block}, {addr.landmark}</p>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
    </>
  )
}

export default Myaddresses