import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Login() {

    useEffect(function () {
        let loginBtn = document.querySelector('.loginBtn');
        let IDFind = document.querySelector('.IDFind');
        let pwFind = document.querySelector('.pwFind');


        loginBtn.addEventListener('click', function () {
            alert("아이디 혹은 비밀번호가 틀렸습니다.");
        })

    })
    return (
        <section className="Login">
            <div className="loginArea">
                <div className="logoWrap">
                    <img src={process.env.PUBLIC_URL + '/images/common/univjob_text_logo3.png'} alt="" />
                </div>
                <div className="loginBox">
                    <div className="accountArea">
                        <div className="inputArea">
                            <div className="id">
                                <input type="email" placeholder='아이디' className="id" />
                            </div>
                            <div className="pw">
                                <input type="password" placeholder='비밀번호' className="pw" />
                            </div>
                        </div>
                        <div className="btnArea">
                            <button className="loginBtn">로그인</button>
                        </div>
                    </div>
                    <div className="subBtnArea">
                        <button className="pwFind">비밀번호 찾기</button>
                        <span className='between'></span>
                        <button className="IDFind">아이디 찾기</button>
                        <span className='between'></span>
                        <button className="register">회원가입</button>
                    </div>
                </div>
            </div>
        </section>



    )
}
export { Login }