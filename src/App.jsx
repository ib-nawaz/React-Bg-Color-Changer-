import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor, setbgColor] = useState("white")
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="h-screen w-screen transition-all" style={{
        backgroundColor: bgcolor, color: color
      }}>
        <h1 className="text-3xl font-bold underline flex items-center justify-center text-emerald-300 ">
          Color & Background-Changer
          <br></br> <br></br>
        </h1>
        <hr></hr>

        <br></br>
     


        <p className='m-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quas, sit asperiores similique, sapiente qui, sed officiis quos non facilis obcaecati dolorum! Totam placeat tempore, nihil voluptates quod eveniet incidunt architecto quis modi rem iste, suscipit necessitatibus! Doloremque quia deserunt tenetur nesciunt, illo, cum officia praesentium neque, exercitationem voluptatem consequuntur soluta corporis excepturi quos commodi dicta dolores mollitia ad. Deleniti soluta optio autem. Placeat exercitationem voluptatum, consectetur molestiae, tempora est optio excepturi eveniet at ullam eos repellat iure perspiciatis repudiandae? Facere esse exercitationem, natus cumque odio veniam quibusdam praesentium consequatur ipsam, laboriosam assumenda, aperiam et hic deleniti corrupti ducimus non. Exercitationem dolor explicabo et velit officia quis esse ad corrupti recusandae, quaerat architecto quisquam tenetur doloribus sit, distinctio quam magnam, asperiores ea corporis.</p>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>

       <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-gray-400 rounded-2xl p-3 sm:p-5 flex flex-wrap justify-center items-center gap-3 sm:gap-4 shadow-xl">

  <button onClick={() => { setbgColor("orangered"); setColor("white") }}
    className="bg-orange-500 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-amber-400 active:scale-90 transition-transform duration-200">
    Orange
  </button>

  <button onClick={() => { setbgColor("red"); setColor("pink") }}
    className="bg-red-500 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-red-400 active:scale-90 transition-transform duration-200">
    Red
  </button>

  <button onClick={() => { setbgColor("yellow"); setColor("purple") }}
    className="bg-yellow-500 cursor-pointer text-black px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-yellow-400 active:scale-90 transition-transform duration-200">
    Yellow
  </button>

  <button onClick={() => { setbgColor("green"); setColor("white") }}
    className="bg-green-500 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-green-400 active:scale-90 transition-transform duration-200">
    Green
  </button>

  <button onClick={() => { setbgColor("brown"); setColor("aqua") }}
    className="bg-amber-800 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-amber-700 active:scale-90 transition-transform duration-200">
    Brown
  </button>

  <button onClick={() => { setbgColor("purple"); setColor("aqua") }}
    className="bg-purple-500 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md active:bg-purple-400 active:scale-90 transition-transform duration-200">
    Purple
  </button>

</div>
</div>

    </>
  )
}

export default App
