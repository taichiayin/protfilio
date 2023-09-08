function Footer() {
  return (
    <div className="w-[1200px] mx-auto flex justify-between items-start">
      <div className="">
        <div className="">Davis Tai</div>
        <div className="">感謝您的瀏覽，若剛好我是你需要的，就快點聯絡我吧！</div>
      </div>
      <div className="">
        <div className="">Quick Links</div>
        <div className="flex flex-col">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Skill</a></li>
            <li><a href="">Protfolio</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="">Contact Details</div>
        <div className="flex flex-col ">
          <ul>
            <li>taichiayin@livemail.tw</li>
            <li>Line: taichiayin</li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="">Follow Me</div>
        <ul>
          <li><i>icon1</i></li>
          <li><i>icon2</i></li>
          <li><i>icon3</i></li>
          <li><i>icon3</i></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
