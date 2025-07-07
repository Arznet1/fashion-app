

const Header = () => {
  return (
   <header>
    <div className="header_tittle">
      <a href="#">
        <h2 className="logo">sofiyat<span className="design"> design</span> </h2>
      </a>
      <ul className="list">
        <li><a href="#">home</a></li>
        <li><a href="#collection">collection</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
        <li className="order"><a href="#">order</a></li>
      </ul>
    </div>
   </header>
  )
}

export default Header