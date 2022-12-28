import {useState, useEffect} from 'react';
import {Mainvisual} from './mainvisual';
import{VideoSlide} from './videoSlide';
import{CoachSlide} from './coachSlide';
import{ServiceIntroduce} from './serviceIntroduce.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import 'swiper/css';

function Main(){
    useEffect(
        function(){
            let topBtn = document.querySelector('.topBtn');
            let swiperSlide = document.querySelectorAll('.swiper-slide');

            var observer = new MutationObserver(function (event) {
                console.log(event)   
              })

              function callback(mutationsList, observer) {
                console.log('Mutations:', mutationsList)
                console.log('Observer:', observer)
            }
            
            const mutationObserver = new MutationObserver(callback)

            mutationObserver.observe(
                swiperSlide[0],
                { attributes: true }
            )

            function callback(mutationsList) {
                mutationsList.forEach(mutation => {
                    if (mutation.attributeName === 'class') {
                        if(swiperSlide[0].classList.contains('swiper-slide-active')){
                            topBtn.classList.remove('on');
                        }else{
                            topBtn.classList.add('on');
                        }
                    }
                })
            }

            let bullets = document.querySelectorAll('.swiper-pagination-bullet');
            topBtn.addEventListener('click',function(){
                bullets[0].click();
            })
        }
    )
        
   
    return(
        <div className="Main">
            <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="fullPageSwiper"
      >
            <SwiperSlide>
                <Mainvisual></Mainvisual>
            </SwiperSlide>
            <SwiperSlide>
                <VideoSlide></VideoSlide>
            </SwiperSlide>
            <SwiperSlide>
                <CoachSlide></CoachSlide>
            </SwiperSlide>
            <SwiperSlide>
                <ServiceIntroduce></ServiceIntroduce>
            </SwiperSlide>
            <div className="topBtnWrap">
                <button className="topBtn">
                    Top
                </button>
            </div>
        </Swiper>
        </div>
    )
}





export{Main}