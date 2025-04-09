import './story.css'
{/* Az alábbiakat állítsd be a story.css-ben */}

{/* 767px fölöt kerüljenek egymás mellé a story_data és story_images egymás mellé */}

{/* Story_-title mérete legyen h1-font-size */}

/* Section__title szövegét alakítsd át nagybetűssé */



const Story = () => {
  return (
    <section className="story">
    <div className="story__container">
        <div className="story__data">
            <h2 className="section__title story__section-title">
                Our Story
            </h2>

            <h1 className="story__title">
                Inspirational Watch of <br/> this year
            </h1>

            <p className="story__description">
                The latest and modern watches of this year, is available in various 
                presentations in this store, discover them now.
            </p>

            <a href="#" className="button button--small">Discover</a>
        </div>

        <div className="story__images">
            {/* Itt jelenítsd meg a story.png képet, add hozzá a story__img osztályt */}
            <img src="img/story.png" alt="story" className='story__img'/>
            <div className="story__square"></div>
        </div>
    </div>
</section>
  )
}

export default Story