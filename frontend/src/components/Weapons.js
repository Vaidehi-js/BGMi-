import React from 'react'
import { Link } from 'react-router-dom'
import './weapons.css';


const Weapons = () => {


  
  return (
    <div>
        <>
 
  <title>Document</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <section className=" sha">
    <div className="container">
      <h3 className="h3"> Choose Your Warrior </h3>
      <hr />
      <div className="row">
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="bard">
            <div
              className="numb"
              style={{
                backgroundImage:
                  'url("https://cdn.firstsportz.com/wp-content/uploads/2021/06/23215714/Adobe_Post_20210626_2113510.6228766932767853-1024x576.jpg")'
              }}
            />
            <div className="card-body">
             <Link to={'/Ar'}><h4 className="sl"> Assault Rifles</h4></Link> 
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="bard">
            <div
              className="numb"
              style={{
                backgroundImage:
                  'url("https://esportsgen.com/wp-content/uploads/2021/08/f5369-15931510316533-800.jpg")'
              }}
            />
            <div className="card-body">
             <Link to={'/Sniper'}> <h4 className="sl">Sniper</h4> </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="bard">
            <div
              className="numb"
              style={{
                backgroundImage:
                  'url("https://technobrotherzz.in/wp-content/uploads/2020/08/image-42.png")'
              }}
            />
            <div className="card-body">
              <Link to={'/Pistol'}><h4 className="sl">Pistol</h4></Link>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="bard">
            <div
              className="numb"
              style={{
                backgroundImage:
                  'url("http://m.gettywallpapers.com/wp-content/uploads/2022/07/BGMI-Wallpaper-4k.jpg")'
              }}
            />
            <div className="card-body">
              <Link to = {'/Shotgun'}><h4 className="sl"> Shotgun</h4></Link>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="bard">
            <div
              className="numb"
              style={{
                backgroundImage:
                  'url("https://wallpaperaccess.com/full/2360833.jpg")'
              }}
            />
            <div className="card-body">
              <Link to ={'/Autosniper'}> <h4 className="sl"> Auto Sniper</h4> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Weapons