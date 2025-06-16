import React, { useEffect, useState } from 'react'
import "./Myaddresses.css"
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, editAddress, removeAddress } from '../../Redux/Store';
import { useForm } from 'react-hook-form';
function Myaddresses() {
  const [newaddress,setnewaddress]=useState(false)
  const dispatch=useDispatch()
  const addresses = useSelector(state => state.slice.addresses);

  // edit address
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  



  // Save to localStorage when Redux address state changes
  useEffect(() => {
    localStorage.setItem("userAddresses", JSON.stringify(addresses));
  }, [addresses]);

  function handleaddaddress()
  {
    setnewaddress(true);
    setIsEditMode(false);
    setEditId(null);
    reset(); // Clear form
  }

  function handledeleteaddress(item)
  {
    dispatch(removeAddress(item))
  }

  function handleeditaddress(item)
  {
    setIsEditMode(true);
    setEditId(item.id);
    setnewaddress(true);

    // Set values into form fields
    setValue("houseno", item.houseNo);
    setValue("floor", item.floor);
    setValue("towerblock", item.block);
    setValue("landmark", item.landmark);
    setValue("name", item.name);
    setValue("phoneno", item.phoneno);
  }

  const {
      register,
      handleSubmit,
      setValue,
      reset,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
      criteriaMode: "all"
    });

  useEffect(() => {
  if (isEditMode && editId !== null) {
    const editItem = addresses.find(addr => addr.id === editId);
    if (editItem) {
      setValue("houseno", editItem.houseNo);
      setValue("floor", editItem.floor);
      setValue("towerblock", editItem.block);
      setValue("landmark", editItem.landmark);
      setValue("name", editItem.name);
      setValue("phone", editItem.phone);
    }
  }
}, [isEditMode, editId, setValue]);


  function onAddressSubmit(data) {
  const { houseno, floor, towerblock, landmark, name, phoneno } = data;
  const payload = {
    houseNo: houseno,
    floor,
    block: towerblock,
    landmark,
    name,
    phoneno,
  };

  if (isEditMode) {
    dispatch(editAddress({ id: editId, updatedData: payload }));
  } else {
    dispatch(addAddress(payload));
  }

  reset();
  setIsEditMode(false);
  setEditId(null);
  setnewaddress(false);
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
        <form onSubmit={handleSubmit(onAddressSubmit)}>
          <div className="inputfiels">
            <div className="upperfields">
              <input
                className="inputssss"
                placeholder='House number *'
                {...register("houseno", {required: "House Number is required"})}
              />
              {errors.houseno && <p className='error'>{errors.houseno.message}</p>}

              <input
                className="inputssss"
                placeholder='Floor *'
                {...register("floor", {required: "Floor is required"})}
              />
              {errors.floor && <p className='error'>{errors.floor.message}</p>}

              <input
                className="inputssss"
                placeholder='Tower / Block (optional)'
                {...register("towerblock", {required: "towerblock is required"})}
              />
              {errors.towerblock && <p className='error'>{errors.towerblock.message}</p>}

              <input
                className="inputssss"
                placeholder='Nearby landmark (optional)'
                {...register("landmark", {required: "landmark is required"})}
              />
              {errors.landmark && <p className='error'>{errors.landmark.message}</p>}

            </div>
            <div className="lowerfields">
              <p id="del-exp">Enter your details for seamless delivery experience</p>
              <input
                className="inputssss"
                placeholder='Your name *'
                {...register("name", {required: "name is required"})}
              />
              {errors.name && <p className='error'>{errors.name.message}</p>}

              <input
                className="inputssss"
                placeholder='Your Phone number (optional) *'
                maxLength={10}
                {...register("phoneno", {required: "phoneno is required",pattern: {value: /^\d{10}$/,message: "Phone number must be exactly 10 digits"}})}
              />
              {errors.phoneno && <p className='error'>{errors.phoneno.message}</p>}

            </div>
            <div className="save-bttn">
              <button
                id="savebutton"
                type="submit"
                disabled={!isEditMode && !isValid}>
                {isEditMode ? "Update Address" : "Save Address"}
              </button>
            </div>
          </div>
        </form>
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
                  <p id="len1">{addr.name}, {addr.phoneno}</p>
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