import React from 'react'
import './autosniper.css';

const Autosniper = () => {
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
  <section className=" same">
    <div className="container">
      <h3 className="h3"> TAP-TAP </h3>
      <hr />
      <div className="row">
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="card">
            <div
              className="nail"
              style={{
                backgroundImage:
                  'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/dmr/slr/slr-pubgm-featured.jpg")'
              }}
            />
            <div className="card-body">
              <h4>SLR </h4>
              <i className="fas fa-star"> </i> 4.7 | 161 Reviews
              <hr />
              <span className="text-danger fw-bold">$ 2999 </span>
              <del> $3599</del>
              <p className="pr">You Save : $1599(35%)</p>
              <button className="mybtn">Buy Now</button>
              <button className="mybt"> Add to cart</button>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="card">
            <div
              className="nail"
              style={{
                backgroundImage:
                  'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/dmr/mini-14/mini14-pubgm-featured.jpg")'
              }}
            />
            <div className="card-body">
              <h4>Mini 14</h4>
              <i className="fas fa-star"> </i> 4.5 | 711 Reviews
              <hr />
              <span className="text-danger fw-bold">$ 899 </span>
              <del> $1399</del>
              <p className="pr">You Save : $499(50%)</p>
              <button className="mybtn">Buy Now</button>
              <button className="mybt"> Add to cart</button>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="card">
            <div
              className="nail"
              style={{
                backgroundImage:
                  'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/dmr/vss/vss-pubgm-featured.jpg")'
              }}
            />
            <div className="card-body">
              <h4>VSS</h4>
              <i className="fas fa-star"> </i> 4.8 | 261 Reviews
              <hr />
              <span className="text-danger fw-bold">$ 2999 </span>
              <del> $3599</del>
              <p className="pr">You Save : 1599(63%)</p>
              <button className="mybtn">Buy Now</button>
              <button className="mybt"> Add to cart</button>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
          <div className="card">
            <div
              className="nail"
              style={{
                backgroundImage:
                  'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/dmr/sks/sks-pubgm-featured.jpg")'
              }}
            />
            <div className="card-body">
              <h4>SKS</h4>
              <i className="fas fa-star"> </i> 4.7 | 871 Reviews
              <hr />
              <span className="text-danger fw-bold">$ 1999 </span>
              <del> $4999</del>
              <p className="pr">You Save : $3599(33%)</p>
              <button className="mybtn">Buy Now</button>
              <button className="mybt">Add to cart</button>
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

export default Autosniper