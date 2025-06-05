import React, { useEffect, useState } from 'react'
import "./Myaddresses.css"
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, editAddress, removeAddress } from '../../Redux/Store';
function Myaddresses() {
  const [newaddress,setnewaddress]=useState(false)
  const dispatch=useDispatch()
  const addresses = useSelector(state => state.slice.addresses);


  // edit address
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  
  // Fields
  const [houseNo, setHouseNo] = useState("");
  const [floor, setFloor] = useState("");
  const [block, setBlock] = useState("");
  const [landmark, setLandmark] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  // Save to localStorage when Redux address state changes
  useEffect(() => {
    localStorage.setItem("userAddresses", JSON.stringify(addresses));
  }, [addresses]);

  function handleaddaddress()
  {
    setnewaddress(!newaddress)
    clearform()
  }

  function handlesaveaddress()
  {
    const data = { houseNo, floor, block, landmark, name, phone };

    if (isEditMode) {
      dispatch(editAddress({ id: editId, updatedData: data }));
    } else {
      dispatch(addAddress(data));
    }

    // Clear all
    setHouseNo(""); setFloor(""); setBlock("");
    setLandmark(""); setName(""); setPhone("");
    setIsEditMode(false); setEditId(null);
    setnewaddress(false);
  };

  function handledeleteaddress(item)
  {
    dispatch(removeAddress(item))
  }

  function handleeditaddress(item)
  {
    setHouseNo(item.houseNo);
    setFloor(item.floor);
    setBlock(item.block);
    setLandmark(item.landmark);
    setName(item.name);
    setPhone(item.phone);
    setEditId(item.id);
    setIsEditMode(true);
    setnewaddress(true);
  }

  function clearform()
  {
  setHouseNo("");
  setFloor("");
  setBlock("");
  setLandmark("");
  setName("");
  setPhone("");
  setIsEditMode(false);
  setEditId(null);
  };
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
            <button id="savebutton">{isEditMode ? "Update Address" : "Save Address"}</button>
          </div>
        </div>
      </div>
      :""
    }
    
    <div className="myaddresses">
      <h3 id="myaddresshead">My Addresses</h3>
      <div className="newaddress" onClick={handleaddaddress}>
        <FaPlus id="plusicon"/> <p id="newadd">Add new address</p>
      </div>
      {addresses.length === 0 ? (
          <p>No Addresses Saved</p>
        ) : (
          <div className="addresscontainer">
          {
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
                <div className="buttonsss">
                  <button className='address-bttn' onClick={()=>handleeditaddress(addr)}><MdEdit />Edit</button>
                  <button className='address-bttn' onClick={()=>handledeleteaddress(addr)}><MdDelete />Delete</button>
                  {index === 0 && <button className="default-btn">Default</button>}
                </div>
              </div>
              
            </div>
          ))
          }
          </div>
        )}
    </div>
    </>
  )
}

export default Myaddresses