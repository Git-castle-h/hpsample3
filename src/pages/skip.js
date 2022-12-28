import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Skip(){
    return(
    <div className='skip' id="skip">
        <a href="#mainVisual"><span>메인비주얼</span></a>
        <a href="#VideoSlide"><span>취업교육 동영상</span></a>
        <a href="#CoachSlide"><span>취업코칭 사례</span></a>
        <a href="#ServiceIntro"><span>온라인 취업코칭 활용방법</span></a>
    </div>
    )
}

export {Skip}