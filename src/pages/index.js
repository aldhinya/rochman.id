import Layout from "../components/layout"
import {Link} from "gatsby";
import React from "react"
import SEO from "../components/seo"
import fotoHome from "../images/home.jpg";
import fotoku from "../images/foto-home.jpg";

const IndexPage = () => (
    <Layout>
        <SEO
            title={'Home'}
            featuredImage={fotoHome}
        />
        <div className={'panel'}>
            <div className={'foto'}>
                <img src={fotoku} alt="Foto Fadhilatur Rochman" title={'Foto Fadhilatur Rochman'}/>
                {/*<img src={'https://4.bp.blogspot.com/-SkL4zL4a5qM/Xs--iOb6jBI/AAAAAAAABVU/ncwaBarFIKcK3Y1dYXrvlMyJsW2E8EHmQCK4BGAYYCw/s260/fotoku.jpg'} alt={'Foto Fadhilatur Rochman'} title={'Foto Fadhilatur Rochman'}/>*/}
            </div>
            <div className={'kotak-kecil'}>
                aldhi
            </div>
            <br/>
            <div className={'nama'}><span>Hi, saya Fadhilatur Rochman <span role={'img'} aria-label={'emoji'}>👋</span></span></div>
            <div className={'deskripsi'}>
                <p>Untuk kenal lebih jauh silahkan buka halaman <Link to="/about/" title={'Go to About Page'}>About</Link> atau buka halaman <Link to="/contact/" title={'Go to Contact Page'}>Contact</Link> untuk menghubungi saya.</p>
                <p style={{ fontStyle:'italic'}}>"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job" - Mosher’s Law of Software Engineering</p>
            </div>
        </div>
    </Layout>
)

export default IndexPage
