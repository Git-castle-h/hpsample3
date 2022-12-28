function Footer(){
    return(
    <section className='Footer'>
        <div className="footerWrap">
            <div className="f_address">
                <p>
                    <span className='tabletBlock'>
                        고객센터 : 02-6413-0308 (평일 09:00 ~ 18:00)
                        <span className='margin'></span>
                    </span>
                    <span className='tabletBlock'>
                        이메일 : help@coachjob.net
                        <span className='margin'></span>
                        <a href="/kmu/policy_type">개인정보취급방침</a>
                        <span className='margin'></span>
                        <a href="/kmu/info_type">이용약관</a>
                    </span>
                </p>
                <p>Copyright ⓒ WEDAS Company All Right Reserved.</p>
            </div>
        </div>
    </section>
    )
}
export{Footer}