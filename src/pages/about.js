import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="panel">
            <div className="kotak-kecil">Fadhilatur Rochman</div>
            <br/>
            <div className="nama"><span>About</span></div>
            <div className="deskripsi">
                   <p>Punya nama lengkap Fadhilatur Rochman dan dipanggil Aldhi. Anak pertama dari dua bersaudara. Tinggal di Indonesia, Lahir di Surabaya dan dibesarkan di Gresik. Sedang berkuliah di salah satu perguruan tinggi swasta di Surabaya
                    yaitu Institut Teknologi Adhi Tama Surabaya.</p>
                <p>Suka rebahan dan scroll sosial media seperti facebook, twitter, dan instagram sampai tamat.</p>
                <b>Blog</b>
                <p>
                    Aldhinya Web - <a href="https://www.aldhinya.com/" target="_blank" rel="noreferrer" title={'Aldhinya Web'}>aldhinya.com</a>
                    <br/>Rochman Blog - <a href="https://blog.rochman.id/" target="_blank" rel="noreferrer" title={'blog.rochman.id'}>blog.rochman.id</a>
                </p>
                <b>Organisasi</b>
                <p>
                    Laboratorium Teknik Informatika ITATS - <a href="https://labinformatika.itats.ac.id/" target="_blank" rel="noreferrer" title={'Laboratorium Teknik Informatika ITATS'}>labinformatika.itats.ac.id</a>
                    <br/> Laboratorium Bahasa Pemrograman ITATS - <a href="https://inforlabs.net/" target="_blank" rel="noreferrer" title={'Laboratorium Bahasa Pemrograman ITATS'}>inforlabs.net</a>
                </p>
                <b>Development</b>
                <p>
                    GitHub - <a href="https://github.com/aldhinya/" target="_blank" rel="noreferrer" title={'GitHub Aldhinya Aldhi'}>github.com/aldhinya</a>
                    <br/>GitLab - <a href="https://gitlab.com/aldhinya/" target="_blank" rel="noreferrer" title={'GitLab Aldhinya Aldhi'}>gitlab.com/aldhinya</a>
                </p>
                <b>Mini Project</b>
                <p>
                    Blog Lab Bahasa Pemrograman (Laravel, Bootstrap) - <a href="https://inforlabs.net/" target="_blank" rel="noreferrer" title={'Blog Lab Bahasa Pemrograman'}>inforlabs.net</a><br/>
                    Blog Sederhana (Laravel, Bootstrap) - <a href="https://beritaku.rochman.id/" target="_blank" rel="noreferrer" title={'Blog Sederhana'}>beritaku.rochman.id</a><br/>
                </p>
                <h4>Pengetahuan Dasar</h4>

                <p>Berikut adalah hal-hal yang pernah saya kerjakan dan atau saat ini saya gunakan sehari-hari.</p>

                <div className="grid-container">
                    <div className="grid-item">
                        <b>Bahasa</b>
                        <p>CSS & HTML<br/>
                            Java<br/>
                            PHP<br/>
                            JavaScript<br/>
                            C++</p>
                    </div>
                    <div className="grid-item">
                        <b>Frontend</b>
                        <p>Bootstrap<br/>
                            Gatsby.js</p>
                    </div>
                    <div className="grid-item">
                        <b>Backend</b>
                        <p>Laravel<br/>
                            MariaDB / MySQL</p>
                    </div>
                    <div className="grid-item">
                        <b>CMS</b>
                        <p>WordPress</p>
                    </div>
                    <div className="grid-item">
                        <b>Alat Tempur</b>
                        <p>PhpStorm<br/>
                            Visual Studio Code<br/>
                            NetBeans<br/>
                            GitKraken / SmartGit<br/>
                            Postman<br/>
                            CodeBlocks
                            </p>
                    </div>
                    <div className="grid-item">
                        <b>Infrastruktur</b>
                        <p>HawkHost<br/>
                            Vultr<br/>
                            Vercel<br/>
                            Netlify</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
