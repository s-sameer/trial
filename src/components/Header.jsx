const Header = () => {
  return (
    <div className="bg-black text-white">
      <nav className="flex justify-between p-5">
        <h1 className="text-2xl">Sameer</h1>
        <div className="flex gap-5">
          <button className="border border-white w-24 h-10 rounded-full">About</button>
          <button className="border border-white w-24 h-10 rounded-full">Contact</button>
        </div>
      </nav>
    </div>
  )
}

export default Header