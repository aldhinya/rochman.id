import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import fotoku from "../images/fotoku.jpg";
import fotoHome from "../images/home.jpg";
import {Link} from "gatsby";

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
            <div className={'nama'}><span>Hi, I'm Fadhilatur Rochman <span role={'img'} aria-label={'emoji'}>👋</span></span></div>
            <div className={'deskripsi'}>
                <p>Hubungi saya melalui email di <a href={'mailto:hi@rochman.id'} title={'Contact via Email'}>hi@rochman.id</a> atau kunjungi halaman <Link to="/contact/" title={'Go to Contact Page'}>Contact</Link> untuk informasi lebih lanjut.</p>
                <p style={{ fontStyle:'italic'}}>"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job" - Mosher’s Law of Software Engineering</p>
            </div>
        </div>
    </Layout>
)

export default IndexPage
