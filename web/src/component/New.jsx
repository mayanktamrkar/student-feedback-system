import React from 'react'
import "../App.css";

const New = () => {
    const user = {
        name: "Director",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe7QsMCy-xxgOphAHaTHv0jfUQRA_qDIckQ&usqp=CAU",
        imageSize: 120,
      };
      const user1 = {
        name: "Dean",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPoF6ABM86ZXyzT_2YHf5o7qic39REusBEQ&usqp=CAU",
        imageSize: 120,
      };
      const user2 = {
        name: "HOI",
        imageUrl: "data:image/jpeg;base64,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",
        imageSize: 120,
      };
      const user3 = {
        name: "HOD",
        imageUrl: "data:image/jpeg;base64,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",
        imageSize: 120,
      };
    
    
    
    
  return (
    <div>
           <div class="grid-container">
        <div class="grid-item">
          <div className="c">
            <div>
              <h1>{user.name}</h1>
              <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                }}
              />
            </div>
            <div>
              <p className='big'>Ratan Tata</p>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum perferendis culpa quam, laudantium ad. Vitae esse at dolorum provident!
              </p>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div className="c">
            <div>
              <h1>{user1.name}</h1>
              <img
                className="avatar"
                src={user1.imageUrl}
                alt={"Photo of " + user1.name}
                style={{
                  width: user1.imageSize,
                  height: user1.imageSize,
                }}
              />
            </div>
            <div>
              <p className='big'>Mark jukarbarg</p>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corrupti molestiae debitis. Magnam ullam dolores esse id quaerat exercitationem nesciunt?
              </p>
            </div>
          </div>
        </div>
        <div class="grid-item">
        <div className="c">
            <div>
              <h1>{user2.name}</h1>
              <img
                className="avatar"
                src={user2.imageUrl}
                alt={"Photo of " + user2.name}
                style={{
                  width: user2.imageSize,
                  height: user2.imageSize,
                }}
              />
            </div>
            <div>
              <p className='big'>Bill Gates</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita non dicta? Recusandae incidunt et autem optio rem dignissimos impedit!
              </p>
            </div>
          </div>
        </div>
        
        <div class="grid-item">
        <div className="c">
            <div>
              <h1>{user3.name}</h1>
              <img
                className="avatar"
                src={user3.imageUrl}
                alt={"Photo of " + user3.name}
                style={{
                  width: user3.imageSize,
                  height: user3.imageSize,
                }}
              />
            </div>
            <div>
              <p className='big'>Elon musk</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis aspernatur, corporis inventore voluptates neque corrupti molestiae esse pariatur debitis.
              </p>
            </div>
          </div>
        </div>
      
      </div>
      
 




    </div>
  )
}
export default New ;
