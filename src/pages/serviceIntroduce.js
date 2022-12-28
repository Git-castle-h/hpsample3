import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function ServiceIntroduce(){
    return(
        <section className='ServiceIntro' id='ServiceIntro'>
            <h1 className="screen_out">온라인 취업코칭에 대한 설명입니다.</h1>
            <div className="cardArea">
                <div className="cardText">
                    <h1 className="title">온라인 취업코칭</h1>
                    <p className="context">
                        이제는 취업 · 진로에 대한<br></br>
                        상담과 전략은<br></br>
                        <strong>전문가에게 맡기세요</strong>
                    </p>
                    <div className="btnArea">
                        <a href='subpage' className="btn">취업코칭 신청하기</a>
                    </div>
                </div>
                <div className="cardWrap">
                    <div className="bg"></div>
                    <div className="card">
                        <div className="imgWrap">
                            <img src={process.env.PUBLIC_URL+'/images/main/service_online.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                언제 어디서나 <strong>모바일을 통한</strong> <span style={{display:'inline-block'}}>온라인 코칭 신청 가능</span>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgWrap">
                        <img src={process.env.PUBLIC_URL+'/images/main/service_talyored.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                전담코치가 1:1 <span style={{display:'inline-block'}}><strong>온라인 맞춤 코칭</strong> 제공</span>
                            </p>
                        </div>
                    </div><div className="card">
                        <div className="imgWrap">
                        <img src={process.env.PUBLIC_URL+'/images/main/service_mobile.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                나에게 맞는 <span style={{display:'inline-block'}}>맞춤 <strong>추천 채용정보</strong> 제공</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}


export{ServiceIntroduce}