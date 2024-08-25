import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comment = () => {
  return (
    <div className="py-2 px-2 bg-gray-200 rounded-lg mt-2 my-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-600">@mallikarjuna</h3>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-500 text-sm">24/08/2024</p>
            <p className="text-gray-500 text-sm">16:12</p>

            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>

          </div>
        </div>
      
      <p className="px-4 mt-2">Nice information</p>
      </div>
  )
}

export default Comment
