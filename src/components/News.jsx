import React from "react";

const News = ({news}) => {
    console.log(news)
  return (
    
    
     <div className="cards">
        {
            news.map(item=>(
                <div key={item.id} className="card">
                    <img src={item.image.url} alt={item.provider.name} />
                    <h1>{item.title}</h1>
                </div>
            ))
        }
    </div> 
    
  )};

export default News;
/* 
"https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/0/f7/0f7abde3-5de7-566a-9877-73c98d2fa72c/644237d8e7516.image.jpg?crop=1763%2C926%2C0%2C125&amp;resize=1200%2C630&amp;order=crop%2Cresize"
"https://www.lokmattimes.com/lifestyle/eid-ul-fitr-2023-find-out-how-muslims-are-celebrating-holy-festival/"
"https://massispost.com/wp-content/uploads/2016/04/Istanbul-3.jpg"
"https://tnimage.s3.hicloud.net.tw/photos/2023/AP/20230421/a4b970c3525f475d8f13e7b88067ab18.jpg"
"https://i0.wp.com/boingboing.net/wp-content/uploads/2023/04/istanbul.png?fit=522%2C346&#038;ssl=1"
"https://d3lcr32v2pp4l1.cloudfront.net/Pictures/1024x536/7/1/2/93712_blenheimbicesterheritage_563984_crop.jpg"
"https://assets.nst.com.my/images/articles/resi29_NSTfield_image_socialmedia.var_1682083352.jpg"
"https://ca-times.brightspotcdn.com/dims4/default/a0c9e79/2147483647/strip/true/crop/3543x1860+0+251/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F97%2F7c%2F810c2336e86ae8f801e3597d6976%2F2e1a395bee654c0490135189dd1dbe14"
*/

{/* <div className="manset">
        {
            news.map(item=>(
                <div key={item.id} className="manset-card">
                    <img src={item.image.url} alt={item.provider.name} />
                    <h1>{item.title}</h1>
                </div>
            ))
        }
    </div> */} 