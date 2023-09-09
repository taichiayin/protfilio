import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState(
    {
      from_email: '',
      from_name: '',
      message: ''
    }
  )

  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_co6sxyo', 'template_m8klcwe', form, 'dff2HN_tEPwQMdTSL')
      .then((result) => {
        console.log(result.text);
        setForm({
          from_email: '',
          from_name: '',
          message: ''
        })
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className="w-[1200px] mx-auto p-4">
      <div className="w-4/5 mx-auto p-6 rounded-xl flex flex-col justify-center items-center shadow-xl dark:shadow-[0_4px_6px_-1px_rgba(100,100,100,.5)] dark:bg-gray-700">
        <div className="w-full text-center">
          <p className="font-thin dark:text-white">ASK ME QUESTION</p>
          <h1 className="text-4xl font-bold tracking-widest dark:text-white">Contact Me</h1>
        </div>
        <div className="w-full flex flex-col mt-4">
          <form className="mb-0 space-y-6" onSubmit={sendEmail}>
            <div>
              <label className="block text-lg font-medium dark:text-white">Your Email</label>
              <div className="mt-1">
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-yellow-400 dark:focus:border-blue-400 dark:focus:ring-blue-400
                focus:ring-1 focus:ring-yellow-400" name="from_email" type="email" autoComplete="email" required value={form.from_email} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium dark:text-white">Your Name</label>
              <div className="mt-1">
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-yellow-400 dark:focus:border-blue-400  dark:focus:ring-blue-400
                focus:ring-1 focus:ring-yellow-400" name="from_name" type="text" required value={form.from_name} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium dark:text-white">Your Message</label>
              <div className="mt-1">
                <textarea className="w-full h-40 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none 
                focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"  name="message" type="text" required value={form.message} onChange={handleChange} />
              </div>
            </div>
            <div className="">
              <button type="submit" className="inline-block py-2 px-10 mt-2 rounded-full text-lg border border-transparent 
              bg-yellow-400 text-white font-['Jost'] hover:text-yellow-400 hover:bg-white hover:border 
              hover:border-yellow-400 dark:bg-blue-400 dark:hover:bg-white dark:hover:text-blue-400 dark:hover:border-blue-400">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
