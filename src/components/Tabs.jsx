import { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  //styles according to toggleState

    //for Tabs' title
  const activeTab = `font-bold`;
  const unActiveTab = `border rounded 
  font-semibold `;

    //for content
  const activeContent = "grow text-slate-400 py-4 px-3";
  const unActiveContent = "hidden";

  return (
    <div className='flex justify-center py-16'>

      <div className='main-container  bg-slate-900 w-1/2 border rounded'>

        <div className='tabs-titles flex grow'>          
          <div
            onClick={()=>toggleTab(1)} 
            className={`rounded px-5 py-2 text-slate-100
            w-1/3 cursor-pointer ${toggleState === 1 ? activeTab: unActiveTab}`}>
            Tab 1
          </div>

          <div
            onClick={()=>toggleTab(2)}  
            className={`rounded px-5 py-2 text-slate-100
            w-1/3 cursor-pointer ${toggleState === 2 ? activeTab: unActiveTab}` }>
            Tab 2
          </div>

          <div
            onClick={()=>toggleTab(3)}   
            className={`rounded px-5 py-2 text-slate-100
            w-1/3 cursor-pointer ${toggleState === 3 ? activeTab: unActiveTab}`}>
            Tab 3
          </div>

        </div>

        <div className='tabs-contents flex'>
          <div className={toggleState === 1 ? activeContent : unActiveContent}>
            <h2 className='pb-2 font-semibold text-xl'>Table title 1</h2>
            <hr />
            <p className='pt-2'>Table content of the table N°1</p>
            <div className="flex justify-end">
            <button 
              onClick={()=>{toggleTab(2)}}
              className="bg-slate-700 rounded px-5 py-1 mt-3"              
              >Next ➡</button>
            </div>
          </div>

          <div className={toggleState === 2 ? activeContent : unActiveContent}>
            <h2 className='pb-2 font-semibold text-xl'>Table title 2</h2>
            <hr />
            <p className='pt-2'>Table content of the table N°2</p>
            <div className="flex justify-between">
              <button 
                onClick={()=>{toggleTab(1)}}
                className="bg-slate-700 rounded px-5 py-1 mt-3"              
                >⬅ Previous</button>
              <button 
                onClick={()=>{toggleTab(3)}}
                className="bg-slate-700 rounded px-5 py-1 mt-3 justify-end"              
                >Next ➡</button>
            </div>
          </div>
          <div className={toggleState === 3 ? activeContent : unActiveContent}>
            <h2 className='pb-2 font-semibold text-xl'>Table title 3</h2>
            <hr />
            <p className='pt-2'>Table content of the table N°3</p>
            <button 
              onClick={()=>{toggleTab(2)}}
              className="bg-slate-700 rounded px-5 py-1 mt-3"              
              >⬅ Previous</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tabs