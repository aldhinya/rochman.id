import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title={"About"} />
    <div className={"panel"}>
      <div className={"nama"}>
        <span>About</span>
      </div>
      <div className={"deskripsi"}>
        <p>
          Punya nama lengkap Fadhilatur Rochman dan biasa dipanggil Aldhi. Anak
          pertama dari dua bersaudara. Tinggal di Indonesia, Lahir di Surabaya
          dan dibesarkan di Gresik.
          <br /><br />
          Lulusan Teknik Informatika dari Institut Teknologi Adhi Tama Surabaya tahun 2021, lulus tepat waktu dengan IPK 3,62. Memiliki pengalaman sebagai Web Developer Laravel, membuat dan mengembangkan beberapa website, dapat mengoperasikan WordPress, konfigurasi server, serta hal lain yang berhubungan dengan IT. Aktif terlibat dalam proyek beberapa perusahaan. Dengan pengalaman yang saya miliki, saya berusaha agar dapat terus berkembang dan memberikan kontribusi yang baik.
        </p>
        <br />
        <h4 style={{ borderBottom: '1px solid #fff', display: 'inline' }}>Pendidikan</h4>
        <p>
          (2005 - 2011) <b>SDN Cerme Lor</b><br />
          (2011 - 2014) <b>SMPN 5 Gresik</b><br />
          (2014 - 2017) <b>SMKN 1 Cerme</b> - Teknik Komputer dan Jaringan
          <ul>
            <li>Magang di PT. Petro Jordan Abadi sebagai IT Support. Melakukan maintenance website, monitoring jaringan internet, dan konfigurasi perangkat (November 2015 - Februari 2016)</li>
          </ul>
          (2017 - 2021) <b>Institut Teknologi Adhi Tama Surabaya</b> - Teknik Informatika - IPK 3,62<br />
          <ul>
            <li>Asisten Laboratorium Bahasa pemrograman</li>
            <li>Koordinator Laboratorium Bahasa Pemrograman</li>
            <li>Publikasi 1 jurnal Software Engineering - <a href={"http://ejurnal.itats.ac.id/snestik/article/view/1748"} target={"_blank"} rel={"noreferrer"} title={"Pembuatan Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) Berbasis Web di MDTA Tauhidullah Surabaya Menggunakan Model Waterfall"}>Link</a></li>
            <li>Tugas akhir "Rancang Bangun Aplikasi Simulasi Nilai Borang Akreditasi Berbasis Web Menggunakan V-Model di Jurusan Teknik Informatika ITATS"</li>
          </ul>
        </p>

        <h4 style={{ borderBottom: '1px solid #fff', display: 'inline' }}>Pengalaman Kerja</h4>
        <p>
          <b>PT Adhitama Mitra Nusantara</b> - Full Time (WFO)<br />
          <i>IT Support</i>  (November 2021 - Sekarang)<br />
          <ul>
            <li>Develop Website Company Profile dan Job Portal</li>
            <li>Develop WhatsApp BOT</li>
            <li>Develop E-Document System</li>
            <li>Develop Point of Sales and ECommerce System</li>
            <li>Develop Human Resource Information System (HRIS)</li>
            <li>Develop Transport Management System (TMS)</li>
            <li>Develop fitur baru pada website dashboard monitoring AdhiTech (https://adhitech.id)</li>
            <li>Develop fitur baru pada website dan API internal perusahaan</li>
            <li>Maintenance server</li>
            <li>Online training & helpdesk</li>
            <li>Daily Report</li>
            <li>Memastikan semua perangkat komputer dan jaringan internet di perusahaan dapat berfungsi normal</li>
            <li>Mengerjakan tugas yang berhubungan dengan IT</li>
          </ul>
          <b>PT Akkarya Jaya Pratam</b> - Part Time (WFA)<br />
          <i>Web Developer</i>  (Juli 2020 - Sekarang)<br />
          Develop dan Maintenance website manajemen proyek konstruksi dengan fitur sebagai berikut:

          <ul>
            <li>Rencana Anggaran Biaya (RAB)</li>
            <li>Analisa Kebutuhan</li>
            <li>Harga Satuan</li>
            <li>Analisa Terpakai</li>
            <li>Schedule</li>
            <li>Rencana Anggaran Pelaksanaan (RAP)</li>
            <li>Purchasing Order (PO)</li>
            <li>Marketplace</li>
          </ul>
          <b>PT Petro Jordan Abadi</b> - Internship<br />
          <i>IT Support</i>  (November 2015 - Februari 2016)<br />
          <ul>
            <li>Memastikan semua perangkat komputer dan jaringan internet dapat berfungsi normal</li>
            <li>Maintenance website perusahaan</li>
            <li>Konfigurasi Email Client</li>
            <li>Mengerjakan tugas yang berhubungan dengan IT</li>
          </ul>
        </p>
        <br />
        <h4 style={{ borderBottom: '1px solid #fff', display: 'inline' }}>Skills</h4>
        <p>
          PHP, HTML, CSS, Bootstrap, JavaScript, AJAX, Laravel, CodeIgniter. NodeJS. MySQL, GIT, Linux, VPS, Server Configuration.
        </p>
        {/* <h4 style={{ borderBottom: '1px solid #fff', display: 'inline' }}>Project</h4>
        <p>
          <b>Company Profile & Job Portal</b> (PT Adhitama Mitra Nusantara)<br />
          <i>Backend Developer (Laravel)</i>  (Februari 2022 - Sekarang)<br />
          <ul>
            <li>Membuat, maintenance, fix bug, mengembangkan fitur baru pada website company profile dan recruitment perusahaan</li>
            <li>Memudahkan calon pelamar dan recruiter dalam melakukan proses rekrutmen</li>
            <li>Deploy aplikasi dan konfigurasi Server VPS</li>
            <li>Link: <a href={"https://adhitamamitranusantara.com"} target={"_blank"} rel={"noreferrer"} title={"PT Adhitama Mitra Nusantara"} > adhitamamitranusantara.com </a></li>
          </ul>

          <b>eContract</b> (PT Adhitama Mitra Nusantara)<br />
          <i>Backend Developer (Laravel)</i>  (Desember 2021 - Sekarang)<br />
          <ul>
            <li>Membuat dan mengembangkan dashboard web eContract yang digunakan untuk monitoring dan manajemen data</li>
            <li>eContract merupakan aplikasi yang berfungsi sebagai pengganti tanda tangan kontrak fisik yang dilakukan sales ke toko</li>
            <li>Deploy aplikasi dan konfigurasi Server VPS</li>
            <li>Link: private</li>
          </ul>

          <b>Teman Belanja </b> (PT Procter & Gamble dan PT Catur Sentosa Adiprana Tbk)<br />
          <i>Backend Developer (Laravel)</i>  (Maret 2021 - Agustus 2022)<br />
          <ul>
            <li>Membuat dan mengembangkan aplikasi Teman Belanja berbasis web dari P&G dan CSA</li>
            <li>Teman Belanja merupakan aplikasi berbasis web yang menghubungkan transaksi antara distributor, grosir dan konsumen dengan fitur BOT WhatsApp, marketplace miniweb, dan fitur POS (Point of Sales)</li>
            <li>Deploy aplikasi dan konfigurasi Server VPS</li>
            <li>Link: private</li>
          </ul>

          <b>Analisa Harga Satuan </b>(PT Akkarya Jaya Pratama)<br />
          <i>Backend Developer (Laravel)</i>  (Juli 2020 - Sekarang)<br />
          <ul>
            <li>Membuat dan mengembangkan website pembuatan Rencana Anggaran Biaya (RAB), Analisa Satuan, Harga Satuan, Analisa Terpakai, Purchasing Order (PO), Schedule, dan Marketplace</li>
            <li>Deploy aplikasi dan konfigurasi Server VPS</li>
            <li>Link: <a href={"https://analisahargasatuan.com/"} target={"_blank"} rel={"noreferrer"} title={"Analisa Harga Satuan"} > analisahargasatuan.com </a></li>
          </ul>
        </p> */}

        <br />
        <h4 style={{ borderBottom: '1px solid #fff', display: 'inline' }}>Blog</h4>
        <p>
          <ul>
            <li>
              <b>Aldhinya Web</b> -{" "}
              <a href={"https://www.aldhinya.com/"} target={"_blank"} rel={"noreferrer"} title={"Aldhinya Web"} >
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
        {/* <h4>Skills</h4>
        <p>
          Programming Languages & Tools:
        </p> */}
        {/* <div className={"grid-container"}>
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
        </div> */}
      </div>
    </div>
  </Layout>
)

export default AboutPage
