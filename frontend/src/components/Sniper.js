import React from 'react'
import './sniper.css';

const Sniper = () => {
  return (
    <div><>
    
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossOrigin="anonymous"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"/>

    <section className=" sniper">
      <div className="container">
        <h3 className="h3"> One Shot One K!LL </h3>
        <hr />
        <div className="row">
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="thumbnail"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/sr/win94/win94-pubgm-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>WIN 94 </h4>
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
                className="thumbnail"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/sr/awm/awm-pubgm-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>AWM</h4>
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
                className="thumbnail"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/sr/m24/m24-pubgm-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>M 24</h4>
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
                className="thumbnail"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile/weapon/type/sr/kar98k/kar98k-pubgm-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>Kar 98K</h4>
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

export default Sniper