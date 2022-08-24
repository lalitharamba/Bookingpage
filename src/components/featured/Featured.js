import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGluJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdGluJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1599233068253-dd2fda2458db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>153 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured