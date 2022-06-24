import Layout from "../components/layout"
import {Link} from "gatsby";
import React from "react"
import SEO from "../components/seo"
import berita from "../images/portfolio/1-berita.jpg";
import bliwuh from "../images/portfolio/6-bliwuh.jpg";
import jasabor from "../images/portfolio/5-jasabor.jpg";
import lbp from "../images/portfolio/2-lbp.jpg";
import prawitaria from "../images/portfolio/7-prawitaria.jpg";
import robatal from "../images/portfolio/3-robatal.jpg";
import smkcerme from "../images/portfolio/4-smkcerme.jpg";
import ahs from "../images/portfolio/8-ahs.png";
import temanbelanja from "../images/portfolio/9-temanbelanja.png";
import lainnya from "../images/portfolio/lainnya.jpg";

const AboutPage = () => (
  <Layout>
    <SEO title={"Portfolio"} />
    <div className={"panel"}>
      <div className={"kotak-kecil"}>Fadhilatur Rochman</div>
      <br />
      <div className={"nama"}>
        <span>Portfolio</span>
      </div>
      <div className={"deskripsi"}>
        <br/>
        <h4>Development</h4>
        <p>
          GitHub -{" "}
          <a
            href={"https://github.com/aldhinya/"}
            target={"_blank"}
            rel={"noreferrer"}
            title={"GitHub Aldhinya Aldhi"}
          >
            github.com/aldhinya
          </a>
          <br />
          GitLab -{" "}
          <a
            href={"https://gitlab.com/aldhinya/"}
            target={"_blank"}
            rel={"noreferrer"}
            title={"GitLab Aldhinya Aldhi"}
          >
            gitlab.com/aldhinya
          </a>
        </p>

        <h4>Project yang Pernah Saya Kerjakan</h4>
        <br/>
        
        <div className={"portfolio-row"}>
            <div className={"column"}>
                <div className={"content"}>
                <a href={berita} target={"_blank"} rel={"noreferrer"} title={"Blog Sederhana"} >
                    <img src={berita} alt="Portal Berita" title={'Portal Berita'}/>
                </a>
                    <h4>Web Portal Berita</h4>
                    <p>Laravel, Bootstrap</p>
                </div>
            </div>
            <div className={"column"}>
                <div className={"content"}>
                <a href={lbp} target={"_blank"} rel={"noreferrer"} title={"Blog Lab Bahasa Pemrograman"} >
                    <img src={lbp} alt="Blog Lab Bahasa Pemrograman" title={'Blog Lab Bahasa Pemrograman'}/>
                </a>
                    <h4>Blog Lab Bahasa Pemrograman</h4>
                    <p>Laravel, Bootstrap</p>
                </div>
            </div>
        </div>
        
        <div className={"portfolio-row"}>
            <div className={"column"}>
                <div className={"content"}>
                <a href={smkcerme} target={"_blank"} rel={"noreferrer"} title={"Web SMKN 1 Cerme Gresik"} >
                    <img src={smkcerme} alt=" Web SMKN 1 Cerme Gresik" title={'Web SMKN 1 Cerme Gresik'}/>
                </a>
                    <h4>Web SMKN 1 Cerme Gresik</h4>
                    <p>WordPress</p>
                </div>
                
            </div>
            <div className={"column"}>
                <div className={"content"}>
                <a href={robatal} target={"_blank"} rel={"noreferrer"} title={"Web Sekolah SMKN 1 Robatal"} >
                    <img src={robatal} alt="Web Sekolah SMKN 1 Robatal" title={'Web Sekolah SMKN 1 Robatal'}/>
                </a>
                    <h4>Web SMKN 1 Robatal</h4>
                    <p>WordPress</p>
                </div>
            </div>
        </div>
        
        <div className={"portfolio-row"}>
            <div className={"column"}>
                <div className={"content"}>
                <a href={jasabor} target={"_blank"} rel={"noreferrer"} title={"Web Jasa Bor"} >
                    <img src={jasabor} alt="Web Jasa Bor" title={'Web Jasa Bor'}/>
                </a>
                    <h4>Web Jasa Bor</h4>
                    <p>WordPress</p>
                </div>
            </div>
            <div className={"column"}>
                <div className={"content"}>
                <a href={bliwuh} target={"_blank"} rel={"noreferrer"} title={"Web Produk Bliwuh Spray"} >
                    <img src={bliwuh} alt="Web Produk Bliwuh Spray" title={'Web Produk Bliwuh Spray'}/>
                </a>
                    <h4>Web Produk Bliwuh Spray</h4>
                    <p>WordPress</p>
                </div>
            </div>
        </div>
       
        {/* <div className={"portfolio-row"}>
            <div className={"column"}>
                <div className={"content"}>
                <a href={prawitaria} target={"_blank"} rel={"noreferrer"} title={"Web Sanggar Prawitaria"} >
                    <img src={prawitaria} alt="Web Sanggar Prawitaria" title={'Web Sanggar Prawitaria'}/>
                </a>
                    <h4>Web Sanggar Prawitaria</h4>
                    <p>Bootstrap</p>
                </div>
            </div>
            <div className={"column"}>
                <div className={"content"}>
                <Link to={ahs} target={"_blank"} rel={"noreferrer"} title={"Analisa Harga Satuan"} >
                    <img src={ahs} alt="Analisa Harga Satuan" title={'Analisa Harga Satuan'}/>
                </Link>
                    <h4>Web Analisa Harga Satuan</h4>
                    <p>Laravel</p>
                </div>
            </div>
        </div>
        
        <div className={"portfolio-row"}>
            <div className={"column"}>
                <div className={"content"}>
                <a href={temanbelanja} target={"_blank"} rel={"noreferrer"} title={"Teman Belanja"} >
                    <img src={temanbelanja} alt="Teman Belanja" title={'Teman Belanja'}/>
                </a>
                    <h4>Web Teman Belanja</h4>
                    <p>Laravel</p>
                </div>
            </div>
            <div className={"column"}>
                <div className={"content"}>
                <Link to="/contact/" target={"_blank"} rel={"noreferrer"} title={"Project Laravel lainnya"} >
                    <img src={lainnya} alt="Project Laravel lainnya" title={'Project Laravel lainnya'}/>
                </Link>
                    <h4>DLL</h4>
                    <p>Project Laravel lainnya.</p>
                </div>
            </div>
        </div> */}
      </div>
      <p>Ingin dibuatkan Website? Buka halaman <Link to="/contact/" title={'Go to Contact Page'}>berikut</Link> untuk menghubungi saya.</p>
    </div>
  </Layout>
)

export default AboutPage
