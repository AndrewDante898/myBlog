import Image from "next/image";

import classes from "./hero.module.css"

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/arthurmorgan.jpg'
                    alt='This is an image of Arthur Morgan'
                    width={300}
                    height={300}
                ></Image>
            </div>
            <h1>Hi I am Arthur Morgan</h1>
            <p>I blog about Web Development</p>
        </section>
    )
}

export default Hero;