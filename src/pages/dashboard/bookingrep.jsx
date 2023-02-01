import React from 'react'
import Footerreports from '../../components/Footerreports'
import Headerreports from '../../components/Headerreports'
import Nav from "../../components/navbar"

const para =["S.No","Student Name","Registration Number","Branch","Room No.","Booking Type","Total Amount"]


function Bookingrep() {
    return (
        <>
        <div>
            <Nav/> 
            <Headerreports/>
            <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-solid border-2 border-black">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-solid border-2 border-black">
                            <tr class="border-solid border-2 border-black" >
                                {para.map((value,index)=> (
                                    <th scope="col" class="px-6 py-3">
                                     {value}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody class="" >
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1.
                                </th>
                                <td class="px-6 py-4">
                                    Venkat
                                </td>
                                <td class="px-6 py-4">
                                    RA2011003010165
                                </td>
                                <td class="px-6 py-4">
                                    B.tech
                                </td>
                                <td class="px-6 py-4">
                                    101
                                </td>
                                <td class="px-6 py-4">
                                    Online
                                </td>
                                <td class="px-6 py-4">
                                    92000.00
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>   

         <Footerreports/>
        </div>
    </>
        
    )
}

export default Bookingrep
