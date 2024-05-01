'use client'
import { useState } from "react";
import ReviewList from "./components/ReviewList" ;
import  {reviews} from "@/app/test/test";
import Select from "./components/select";

export default function Home() {
  const [filter,setFilter]=useState<string>('');
  const array:string[]=['За рейтингом','За датою'];	


//  const Filter=():Review[]=>{
//   if(filter==='За рейтингом'){
//     // логіка фільтрації
//    return reviews;
//   } if(filter==='За датою')
//   {
//      // логіка фільтрації
//      return reviews;
//   } 
//  };

  return (
    <>
      <Select  value={filter} setValue={setFilter} array={array}/>
      <ReviewList reviews={reviews}></ReviewList>      
    </>   
  )
}