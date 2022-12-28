import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

function VideoSlide(){
    useEffect(function(){



    },[])
    return(
        <section className="VideoSlide" id ="VideoSlide">
            <div className="inWrap">

            <div className="slideWrap">
                <div className="slideTitle shadowBox">
                <div className="maintab">
                    <div className="titleArea">
                    <h1 className='title'>
                        취업 교육&nbsp;
                        <span className='normal'>동영상</span>
                    </h1>
                    <h2 className='subTitle'>짧은 동영상으로 쉽게 알아가는 취업정보</h2>
                    </div>

                <div className="tabArea">
                <div className="select" onClick={selectClick}>
                        <button className="onePoint on"></button>
                        <button className="chippo"></button>
                </div>
            </div>
                <div className="subtab onePoint on" onClick={tabClick}>
                    <button className='subBtn on' data-id="prepare">취업준비</button>
                    <button className='subBtn' data-id="resume">서류전형</button>
                    <button className='subBtn' data-id="test">필기시험</button>
                    <button className='subBtn' data-id="interview">면접전형</button>
                </div>
                <div className="subtab chippo" tabIndex={-1}  onClick={tabClick}>
                    <button className='subBtn on' data-id="public">공기업</button>
                    <button className='subBtn' data-id="major">대기업</button>
                    <button className='subBtn' data-id="middle">중견기업</button>
                    <button className='subBtn' data-id="small">강소기업</button>
                    <button className='subBtn' data-id="finance">금융권</button>
                    <button className='subBtn' data-id="global">글로벌기업</button>
                    <button className='subBtn' data-id="startup">스타트업</button>
                </div>
            </div>
                </div>
                <div className="slideArea pc" >
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    modules={[ Navigation, Pagination, Scrollbar, A11y]}
                    // pagination={{clickable:true}}
                    className="mySwiper"
                    loop={true}
                    // loopedSlides={8}
                >
                        <SwiperSlide>
                        <a href=""><img  className="shadowBox" src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind01.png'} alt="취업코칭 동영상 이미지" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img  className="shadowBox" src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind02.png'} alt="취업코칭 동영상 이미지" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img   className="shadowBox"src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind03.png'} alt="취업코칭 동영상 이미지" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img  className="shadowBox"src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind05.png'} alt="취업코칭 동영상 이미지" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img  className="shadowBox"src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind06.png'} alt="취업코칭 동영상 이미지" /></a>
                        </SwiperSlide>
                </Swiper>
                </div>

            </div> 
            </div>

        </section>
    )
}

let perView;
window.addEventListener('load',setPerview);
window.addEventListener('resize',setPerview);
function setPerview(){
    // let windowWidth = window.innerWidth;
    // console.log(windowWidth);
    // if(windowWidth>1500){
    //     perView = 7;
    // }else if(windowWidth>1023){
    //     perView = 5;
    // }else if(windowWidth>768){
    //     perView=3;
    // }else if(windowWidth>500){
    //     perView= 2;
    // } else{
    //     perView= 1;
    // }
}
let tabSelect;
let tabBtnWrap;
let tabBtnWrapArr;
let subBtnArr;
let tabArr;


function selectClick(evt){
    tabSelect = document.querySelector('.VideoSlide .select');
    tabArr = tabSelect.querySelectorAll('button');
    
    for(let ie11i =0; ie11i<tabArr.length; ie11i++){
        let i = ie11i;
        tabArr[i].classList.remove('on');
    }
    tabBtnWrapArr = document.querySelectorAll('.VideoSlide .subtab');
    evt.target.classList.add('on');
    if(evt.target.classList.contains('onePoint')){        
        for(let ie11i=0; ie11i < tabBtnWrapArr.length; ie11i++){
            let i = ie11i;
            tabBtnWrapArr[i].classList.remove('on');
            tabBtnWrapArr[i].tabIndex = -1;
            if(tabBtnWrapArr[i].classList.contains('onePoint')){
                tabBtnWrapArr[i].classList.add('on');
                tabBtnWrapArr[i].tabIndex = 0;                
            }
        }
    }
    if(evt.target.classList.contains('chippo')){        
        for(let ie11i=0; ie11i < tabBtnWrapArr.length; ie11i++){
            let i = ie11i;
            tabBtnWrapArr[i].classList.remove('on');
            tabBtnWrapArr[i].tabIndex = -1;                
            if(tabBtnWrapArr[i].classList.contains('chippo')){
                tabBtnWrapArr[i].classList.add('on');
                tabBtnWrapArr[i].tabIndex = 0;                
            }
        }
    }

}


function tabClick(){
    tabBtnWrap = document.querySelector('.VideoSlide .subtab.on');
    subBtnArr = document.querySelectorAll('.subtab.on .subBtn');
    for(let ie11i =0; ie11i<subBtnArr.length; ie11i++){
        let i = ie11i;
        
        subBtnArr[i].addEventListener('click',function(){
            for(let ie11e = 0; ie11e<subBtnArr.length; ie11e++){
                let e = ie11e;
                subBtnArr[e].classList.remove('on');
            }
            subBtnArr[i].classList.add('on');
        })
    }
}


export{VideoSlide}