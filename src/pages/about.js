import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title={"About"} />
    <div className={"panel"}>
      <div className={"kotak-kecil"}>Fadhilatur Rochman</div>
      <br />
      <div className={"nama"}>
        <span>About</span>
      </div>
      <div className={"deskripsi"}>
        <p>
          Punya nama lengkap Fadhilatur Rochman dan biasa dipanggil Aldhi. Anak
          pertama dari dua bersaudara. Tinggal di Indonesia, Lahir di Surabaya
          dan dibesarkan di Gresik. Sedang berkuliah di salah satu perguruan
          tinggi swasta di Surabaya.
        </p>
        <p>
         Sekarang sedang aktif mengerjakan beberapa project Laravel.
        </p>
        <h4>Pendidikan</h4>
        <p>
          <ul>
            <li><b>SDN Cerme Lor</b> (2005 - 2011)</li>
            <li><b>SMPN 5 Gresik</b> (2011 - 2014)</li>
            <li><b>SMKN 1 Cerme</b> (2014 - 2017)<br/>Teknik Komputer dan Jaringan</li>
            <li><b>Institut Teknologi Adhi Tama Surabaya</b> (2017 - sekarang)<br/>Teknik Informatika</li>
          </ul>
        </p>
        <h4>Organisasi</h4>
        <p>
        <ul>
            <li><b>Asisten Laboratorium Bahasa Pemrograman</b> (2018 - 2019)</li>
            <li><b>Koordinator Laboratorium Bahasa Pemrograman</b> (2019 - 2020)</li>
          </ul>
        </p>
        <h4>Blog</h4>
        <p>
          <ul>
            <li>
              <b>Aldhinya Web</b> -{" "}
              <a
                href={"https://www.aldhinya.com/"}
                target={"_blank"}
                rel={"noreferrer"}
                title={"Aldhinya Web"}
              >
                aldhinya.com
              </a>
            </li>
            <li>
            <b>Rochman Blog</b> -{" "}
              <a
                href={"https://blog.rochman.id/"}
                target={"_blank"}
                rel={"noreferrer"}
                title={"blog.rochman.id"}
              >
                blog.rochman.id
              </a>
            </li>
            <li>
            <b>KUY</b> -{" "}
              <a
                href={"https://kuy.web.id/"}
                target={"_blank"}
                rel={"noreferrer"}
                title={"kuy.web.id"}
              >
                kuy.web.id
              </a>
            </li>
          </ul>
        </p>
        <h4>Skills</h4>
        <p>
          Programming Languages & Tools:
        </p>
        <div className={"grid-container"}>
          <div className={"grid-item"}>
            <b>Languages</b>
            <p>
              CSS & HTML
              <br />
              PHP
              <br />
              Java
              <br />
              JavaScript
              <br />
              C++
            </p>
          </div>
          <div className={"grid-item"}>
            <b>Frontend</b>
            <p>
              Bootstrap
              <br />
              Gatsby.js
            </p>
          </div>
          <div className={"grid-item"}>
            <b>Backend</b>
            <p>
              Laravel
              <br />
              MariaDB / MySQL
            </p>
          </div>
          <div className={"grid-item"}>
            <b>CMS</b>
            <p>WordPress</p>
          </div>
          <div className={"grid-item"}>
            <b>Tools</b>
            <p>
              PhpStorm
              <br />
              Visual Studio Code
              <br />
              NetBeans
              <br />
              Adobe XD
              <br />
              GitKraken
              <br />
              SmartGit
              <br />
              Postman
              <br />
              CodeBlocks
            </p>
          </div>
          <div className={"grid-item"}>
            <b>Infrastructure</b>
            <p>
              HawkHost
              <br />
              Vercel
              <br />
              IDCloudHost
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
