function Contact() {
  return (
    <div className="w-[1200px] mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-center">
          <p className="font-thin">ASK ME QUESTION</p>
          <h1 className="text-4xl font-bold tracking-widest">Contact Me</h1>
        </div>
        <div className="w-full flex flex-col mt-4">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
              <div className="mt-1">
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-yellow-400
                focus:ring-1 focus:ring-yellow-400" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div>
              <label htmlFor="title" className="block text-lg font-medium">Title</label>
              <div className="mt-1">
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-yellow-400
                focus:ring-1 focus:ring-yellow-400" name="title" type="text" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
              <div className="mt-1">
                <textarea className="w-full h-40 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-yellow-400
                focus:ring-1 focus:ring-yellow-400"  name="message" type="text" required />
              </div>
            </div>
            <div className="">
              <button type="submit" className="inline-block py-2 px-4 mt-2 rounded-full text-2xl bg-yellow-400 text-white font-['Jost']">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
