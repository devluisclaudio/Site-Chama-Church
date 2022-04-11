import React, { useState } from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';



const CarrosselEventos = (props) => {

    const items = [
        {
            src: '/img/277253740_2085575138282523_410540083485851893_n.jpg',
            altText: 'Slide 1',
            caption: 'Slide 1',
            link: 'https://www.even3.com.br/tetelestai'
        },
        {
            src: '/img/275846867_2073795816127122_3634740963813378594_n.jpg',
            altText: 'Slide 2',
            caption: 'Slide 2',
            link: 'https://api.whatsapp.com/send?phone=5592984045474'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className='slides'
            >
                <img src={item.src}  alt={item.altText} />
                <p className="lead">
                    <a target="_blank" href={item.link} className="btn btn-outline-warning btn-lg mt-2 mb-4 click-carrosel">Saiba mais</a>
                </p>
                
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {`
                .click-carrosel{
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    font-size: 15px;
                }
                .slides img{
                    width: 680px;
                    height: 420px;
                }
                @media screen and (max-width: 700px) {
                    .slides img{
                        width: 340px;
                        height: 420px;
                    }     
                }
                `}
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default CarrosselEventos;