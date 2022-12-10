import React from 'react'
import './pistol.css';

const Pistol = () => {
  return (
    <div><>
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
    <header></header>
    <section className=" gun">
      <div className="container">
        <h3 className="h3"> Pistol </h3>
        <hr />
        <div className="row">
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/p92/p92-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>P 92 </h4>
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
                className="pistol"
                style={{ backgroundImage:'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/r1895/r1895-featured.jpg")'}}/>
              <div className="card-body">
                <h4>R 1895</h4>
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
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/p1911/p1911-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>P 1911</h4>
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
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/r45/r45-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>R 45</h4>
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
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/p18c/p18c-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>P 18 C</h4>
                <i className="fas fa-star"> </i> 4.3 | 567 Reviews
                <hr />
                <span className="text-danger fw-bold">$ 1099 </span>
                <del> $1599</del>
                <p>You Save : $499(50%)</p>
                <button className="mybtn">Buy Now</button>
                <button className="mybt">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/sawed-off/sawed-off-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>Sawed-Off</h4>
                <i className="fas fa-star"> </i> 4.5 | 711 Reviews
                <hr />
                <span className="text-danger fw-bold">$ 1099 </span>
                <del> $1599</del>
                <p>You Save : $499(50%)</p>
                <button className="mybtn">Buy Now</button>
                <button className="mybt">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-mobile-guide/weapon/flare-gun/flare-gun-featured.jpg")'
                }}
              />
              <div className="card-body">
                <h4>Flare Gun</h4>
                <i className="fas fa-star"> </i> 1.9 | 51 Reviews
                <hr />
                <span className="text-danger fw-bold">$ 99 </span>
                <del> $699</del>
                <p>You Save : $599(80%)</p>
                <button className="mybtn">Buy Now</button>
                <button className="mybt">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-4 col-lg-3 mt-5">
            <div className="card">
              <div
                className="pistol"
                style={{
                  backgroundImage:
                    'url("https://zilliongamer.com/uploads/pubg-m/weapon/skorpion/skorpion-features.jpg")'
                }}
              />
              <div className="card-body">
                <h4>Skorpion</h4>
                <i className="fas fa-star"> </i> 3.9 | 121 Reviews
                <hr />
                <span className="text-danger fw-bold">$ 899 </span>
                <del> $1599</del>
                <p>You Save : $499(50%)</p>
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

export default Pistol