import Header from "@/components/Header"
import ListItem from "@/components/ListItem"

const  Home = () => {
  return ( 
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header>
        <div className="mb-2 ">
          <h1 className="text-white text-3xl font-semibold ">welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem name="tringkien" href="" image="/images/liked.png"/>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">New songs</h1>
        </div>
        <div>
          List of songs
        </div>
      </div>
    </div>
  )
}

export default Home
