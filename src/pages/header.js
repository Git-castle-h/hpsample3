import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Header(){
    let navigate = useNavigate();
    return(
        <header className="header on">
            <div className="inWrap">
                <div className="topHeader">
                    <div className="logoWrap">
                        <button onClick={()=>{navigate("/")}} className="">
                            <img src={`${process.env.PUBLIC_URL}/images/common/main_logo_black.png`} alt="학교로고" />
                        </button>
                    </div>

                </div>
                <div className="subHeader" onMouseEnter={subMenuDown} onMouseLeave={subMenuLeave}>
                    <div className="leftMenuWrap">
                        <ul>
                            <li><button onClick={()=>{navigate("/login")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu1_ico_grey.png'} alt="" /><span>My 페이지</span></button></li>
                            <li><button onClick={()=>{navigate("/subpage")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu2_ico_grey.png'} alt="" /><span>취업교육 동영상</span></button></li>
                            <li><button onClick={()=>{navigate("/subpage")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu3_ico_grey.png'}alt="" /><span>Job Tube</span></button></li>
                            <li><button onClick={()=>{navigate("/subpage")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu4_ico_grey.png'} alt="" /><span>선배들의 코칭사례</span></button></li>
                            <li><button onClick={()=>{navigate("/subpage")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu5_ico_grey.png'} alt="" /><span>서비스 안내</span></button></li>
                            <li class="mb"><button onClick={()=>{navigate("/login")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu6_ico_grey.png'} alt="" /><span>로그인</span></button></li>
                        </ul>
                    </div>
                </div>
                <div className="loginHeader">
                    <div className="loginWrap">
                        <ul>
                            <li><button onClick={()=>{navigate("/login")}} onFocus={subMenuDown} onBlur={subMenuLeave}><img src={process.env.PUBLIC_URL+'/images/common/menu6_ico_grey.png'} alt="" /><span>로그인</span></button></li>
                        </ul>
                    </div>
                </div>
                <div className="hamburgerWrap">
                        <button onClick={menuClick} className="center">
                            <div className=""></div>
                        </button>
                </div>
            </div>
        </header>
    )
}

function menuClick(evt){
    console.log('clicked');
    let hamburger = document.querySelector('.hamburgerWrap .center');
    let subMenu = document.querySelector('.subHeader');
    if(hamburger.classList.contains('on')){
        hamburger.classList.remove('on');
    subMenu.classList.remove('on');
        
    }else{
        hamburger.classList.add('on');
    subMenu.classList.add('on');
    }
    
}

function subMenuDown(evt){
    let subMenu = document.querySelector('.subHeader');
    subMenu.classList.add('on');
}

function subMenuLeave(evt){
    let subMenu = document.querySelector('.subHeader');
    subMenu.classList.remove('on');
    let hamburger = document.querySelector('.hamburgerWrap .center');
    hamburger.classList.remove('on');
    
}


export{Header};