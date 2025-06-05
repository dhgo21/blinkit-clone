import React, { useState } from 'react'
import "./Changeaddress.css"
import { IoArrowBack } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { FaHome } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { addAddress, chooseAddress, editAddress, removeAddress } from '../Redux/Store';
function Changeaddress({setAddToCart,AddToCart,setischange,setSelectedAddress}) {

    const addresses = useSelector(state => state.slice.addresses);
    const dispatch=useDispatch()

    // Fields
      const [houseNo, setHouseNo] = useState("");
      const [floor, setFloor] = useState("");
      const [block, setBlock] = useState("");
      const [landmark, setLandmark] = useState("");
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");


      // edit address
        const [isEditMode, setIsEditMode] = useState(false);
        const [editId, setEditId] = useState(null);

        const [newaddress,setnewaddress]=useState(false)
    function handleback()
    {
        setAddToCart(!AddToCart)
        setischange(false)
    }
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

    function handleaddaddress()
  {
    setnewaddress(!newaddress)
    clearform()
  }

  function handlechooseaddress(item) {
  dispatch(chooseAddress(item)); // Optional: if you still want to keep in Redux
  setSelectedAddress(item);
  setischange(false)      // For display purpose
}
  return (
    <>
    {
          newaddress ?
          <div className="new1">
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
    <div className="change-add">
        <div className="selectadd">
            <div className="back-bttn" onClick={handleback}>
                <IoArrowBack />
            </div>
            <div className="selectaddhead">
                Select Delivery Address
            </div>
        </div>
        <div className="addnew" onClick={handleaddaddress}>
            <FaPlus id="plus-icon"/> <p id="newa-dd">Add a new address</p>
        </div>
        <div className="alladdresses">
            <div className="all-add-head">
                Your saved addresses
            </div>
            <div className="addressesmapping">
                {
                    addresses.map((curr,index)=>{
                        return (
                            <>
                            <div key={index} className="addressdivv" onClick={()=>handlechooseaddress(curr)}>
                                <div className="homeicon">
                                <FaHome />
                                </div>
                                <div className="add-de">
                                <div className="detailssss">
                                    <p id="len3">{curr.name}, {curr.phone}</p>
                                    <p id="len4">{curr.houseNo}, {curr.floor}, {curr.block}, {curr.landmark}</p>
                                </div>
                                <div className="buttonsss">
                                    <button className='address-bttn' onClick={()=>handleeditaddress(curr)}><MdEdit />Edit</button>
                                    <button className='address-bttn' onClick={()=>handledeleteaddress(curr)}><MdDelete />Delete</button>
                                    {index === 0 && <button className="default-btn">Default</button>}
                                </div>
                                </div>
                                
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Changeaddress