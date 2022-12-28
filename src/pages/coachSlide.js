import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/keyboard';
import 'swiper/css/a11y';



function CoachSlide(){
    useEffect(function(){



    },[])
    return(
        <section className="CoachSlide" id ="CoachSlide">
            <h1 className="screen_out">취업코칭 사례 모음 슬라이드입니다.</h1>
            <div className="inWrap">

            <div className="slideWrap">

                <div className="slideArea" >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    modules={[ Navigation, Pagination, Scrollbar, A11y, Keyboard]}
                    // pagination={{clickable: true}}
                    className="CoachSlide"
                    a11y={true}
                    keyboard={true}
                    scrollbar
                    // navigation={true}
                    loop={true}
                    // loopedSlides={8}
                >
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#' className="coachBox">
                                <div className="contextArea">
                                    <div className="title">
                                        <h1>
                                        <span className='fontBig'>Q.</span> 현재의 스펙으로 어느직무에 지원가능할 지 알고 싶습니다.
                                        </h1>
                                    </div>
                                    <div className="context">
                                        <p>
                                        현재 제 상황과 스펙에 맞는 현실적인 기업 및 
                                        직무를 알고 싶습니다.
                                        또한, 자기소개서 첨삭과 면접 준비를 위한 팁을 
                                        알고 싶습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="cateArea">
                                    <div className="cate">
                                        <h2>취업준비ㆍ스펙분석</h2>
                                    </div>
                                    <div className="subCate">
                                        <h3 className='new'>신입</h3>
                                        <h3>영업ㆍ영업관리ㆍ영업지원</h3>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                </Swiper>
                </div>
                <div className="slideTitle shadowBox">
                    <div className="maintab">
                    <div className="titleArea">
                        <h1 className='title'>
                            취업 코칭&nbsp;
                            <span className='normal'>사례</span>
                        </h1>
                        <h2 className='subTitle'>1:1 맞춤 취업코칭 진행사례로 알아보는 <strong>성공 노하우</strong></h2>
                        </div>
                    </div>
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
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    // if(windowWidth>1500){
    //     perView = 5;
    // }else if(windowWidth>1023){
    //     perView = 4;
    // }else if(windowWidth>768){
    //     perView=3;
    // }else if(windowWidth>500){
    //     perView= 2;
    // } else{
    //     perView= 1;
    // }
    perView = 5;
}


export{CoachSlide}