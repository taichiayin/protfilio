import './index.styl'

const feSkills = [
  { name: 'HTML', style: { '--i': '80%', '--clr': '#de4b26' } },
  { name: 'CSS', style: { '--i': '85%', '--clr': '#254bdd' } },
  { name: 'Javascript', style: { '--i': '90%', '--clr': '#ead54d' } },
  { name: 'Vue', style: { '--i': '95%', '--clr': '#3eb47f' } },
  { name: 'React', style: { '--i': '60%', '--clr': '#0074a6' } },
  { name: 'TailwindCss', style: { '--i': '60%', '--clr': '#38bdf8' } }
]

const beSkills = [
  { name: 'Node', style: { '--i': '60%', '--clr': '#8bbf3e' } },
  { name: 'Golang', style: { '--i': '40%', '--clr': '#01a7d1' } }
]

const otherSkills = [
  { name: 'Webpack', style: { '--i': '80%', '--clr': '#164e63' } },
  { name: 'Jenkins', style: { '--i': '70%', '--clr': '#164e63' } },
  { name: 'Git', style: { '--i': '70%', '--clr': '#164e63' } }
]

function Skill() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 flex justify-center items-stretch flex-wrap">
      <div className="w-[500px] m-4 p-2 shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold tracking-wider">Front End</h2>
        <div className="flex flex-wrap">
          {feSkills.map((el, key) => {
            return (
              <div className="box" key={key} style={el.style}>
                <div className="circle">
                  <h3 className="text-xl font-['Jost']">{el.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-[500px] m-4 p-2 shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold tracking-wider">Back End</h2>
        <div className="flex flex-wrap">
          {beSkills.map((el, key) => {
            return (
              <div className="box" key={key} style={el.style}>
                <div className="circle">
                  <h3 className="text-xl font-['Jost']">{el.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-[1040px] m-4 p-2 shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold tracking-wider">Other Skills</h2>
        <div className="flex flex-wrap">
          {otherSkills.map((el, key) => {
            return (
              <div className="box" key={key} style={el.style}>
                <div className="circle">
                  <h3 className="text-xl font-['Jost'] text-cyan-700">
                    {el.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skill
