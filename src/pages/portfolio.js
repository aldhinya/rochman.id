import Layout from "../components/layout"
import { Link } from "gatsby";
import React from "react"
import SEO from "../components/seo"
import ahs from "../images/portfolio/ahs.png";
import temanbelanja from "../images/portfolio/temanbelanja.png";
import amn from "../images/portfolio/amn.png";
import wings from "../images/portfolio/wings.png";
import econtract from "../images/portfolio/econtract.png";
// import berita from "../images/portfolio/1-berita.jpg";
import bliwuh from "../images/portfolio/6-bliwuh.jpg";
import jasabor from "../images/portfolio/5-jasabor.jpg";
import lbp from "../images/portfolio/2-lbp.jpg";
import prawitaria from "../images/portfolio/7-prawitaria.jpg";
import robatal from "../images/portfolio/3-robatal.jpg";
import smkcerme from "../images/portfolio/4-smkcerme.jpg";
import smanic from "../images/portfolio/10-smanic.png";
// import lainnya from "../images/portfolio/lainnya.jpg";

const AboutPage = () => (
    <Layout>
        <SEO title={"Portfolio"} />
        <div className={"panel"}>
            <div className={"nama"}>
                <span>Portfolio</span>
            </div>
            <div className={"deskripsi"}>
                <br />
                <h4>Development :</h4>
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

                <h4>Project :</h4>
                <br />

                <div className={"portfolio-row"}>
                    <h4>Analisa Harga Satuan (PT Akkarya Jaya Pratama)</h4>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <Link to={ahs} target={"_blank"} rel={"noreferrer"} title={"Analisa Harga Satuan"} >
                                <img src={ahs} alt="Analisa Harga Satuan" title={'Analisa Harga Satuan'} />
                            </Link>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <p>
                                Analisa Harga Satuan merupakan aplikasi berbasis web yang berguna untuk manajemen proyek konstruksi.<br /><br />
                                <strong>Fitur :</strong><br />
                                • Multiple Project<br />
                                • Rencana Anggaran Biaya (RAB)<br />
                                • Analisa Kebutuhan<br />
                                • Harga Satuan<br />
                                • Analisa Terpakai<br />
                                • Schedule<br />
                                • Rencana Anggaran Pelaksanaan (RAP)<br />
                                • Purchasing Order (PO)<br />
                                • Marketplace<br />
                                • Report<br />
                                • Dll<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <h4>Teman Belanja (PT Catur Sentosa Adiprana)</h4>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <Link to={temanbelanja} target={"_blank"} rel={"noreferrer"} title={"Teman Belanja"} >
                                <img src={temanbelanja} alt="Teman Belanja" title={'Teman Belanja'} />
                            </Link>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <p>
                                Teman Belanja merupakan aplikasi berbasis web yang menghubungkan transaksi antara distributor, grosir dan konsumen.<br /><br />
                                <strong>Fitur :</strong><br />
                                • Multi User<br />
                                • Data produk dengan multiple satuan dan harga<br />
                                • Promo<br />
                                • PO Distributor<br />
                                • POS (Point of Sales)<br />
                                • Miniweb<br />
                                • WhatsApp BOT<br />
                                • Dll<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <h4>Company Profile & Job Portal (PT Adhitama Mitra Nusantara)</h4>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <Link to={amn} target={"_blank"} rel={"noreferrer"} title={"PT Adhitama Mitra Nusantara"} >
                                <img src={amn} alt="PT Adhitama Mitra Nusantara" title={'PT Adhitama Mitra Nusantara'} />
                            </Link>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <p>
                                Website Company Profile dan Job Portal, memudahkan calon pelamar dan recruiter dalam melakukan proses rekrutmen.<br /><br />
                                <strong>Fitur :</strong><br />
                                • Landing page company profile<br />
                                • News<br />
                                • Job List<br />
                                • Register dan Login Pelamar<br />
                                • Notifikasi Email dan WhatsApp<br />
                                • Dll<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <h4>Wings Analytics (PT Sayap Mas Utama)</h4>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <Link to={wings} target={"_blank"} rel={"noreferrer"} title={"Wings Analytics"} >
                                <img src={wings} alt="Wings Analytics" title={'Wings Analytics'} />
                            </Link>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <p>
                                Maintenance aplikasi Android dengan menambahkan Firebase Analytics dan membuat web report untuk monitoring.<br /><br />
                                <strong>Fitur :</strong><br />
                                • Scroll Tracking<br />
                                • View Tracking<br />
                                • Click Tracking<br />
                                • Transaction Duration<br />
                                • Dll<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <h4>E-Contract (PT Adhitama Mitra Nusantara)</h4>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <Link to={econtract} target={"_blank"} rel={"noreferrer"} title={"E-Contract"} >
                                <img src={econtract} alt="E-Contract" title={'E-Contract'} />
                            </Link>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <p>
                            Membuat dan mengembangkan dashboard web internal E-Contract yang digunakan untuk monitoring dan manajemen data. E-Contract merupakan aplikasi digital signature yang berfungsi sebagai pengganti tanda tangan kontrak fisik yang dilakukan sales ke toko.<br /><br />
                                <strong>Fitur :</strong><br />
                                • Master user RSM, ASM, SPV, Sales<br />
                                • Multiple Dokumen<br />
                                • Multiple Kontrak<br />
                                • Live Monitoring<br />
                                • Report<br />
                                • Dll<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <a href={smanic} target={"_blank"} rel={"noreferrer"} title={"Web SMA Negeri 1 Cerme"} >
                                <img src={smanic} alt="Web SMA Negeri 1 Cerme" title={'Web SMA Negeri 1 Cerme'} />
                            </a>
                            <h4>Web SMA Negeri 1 Cerme</h4>
                            {/* <p>WordPress</p> */}
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <a href={robatal} target={"_blank"} rel={"noreferrer"} title={"Web Sekolah SMKN 1 Robatal"} >
                                <img src={robatal} alt="Web Sekolah SMKN 1 Robatal" title={'Web Sekolah SMKN 1 Robatal'} />
                            </a>
                            <h4>Web SMKN 1 Robatal</h4>
                            {/* <p>WordPress</p> */}
                        </div>
                    </div>

                </div>

                <div className={"portfolio-row"}>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <a href={smkcerme} target={"_blank"} rel={"noreferrer"} title={"Web SMKN 1 Cerme Gresik"} >
                                <img src={smkcerme} alt=" Web SMKN 1 Cerme Gresik" title={'Web SMKN 1 Cerme Gresik'} />
                            </a>
                            <h4>Web SMKN 1 Cerme Gresik</h4>
                            {/* <p>WordPress</p> */}
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <a href={lbp} target={"_blank"} rel={"noreferrer"} title={"Blog Lab Bahasa Pemrograman"} >
                                <img src={lbp} alt="Blog Lab Bahasa Pemrograman" title={'Blog Lab Bahasa Pemrograman'} />
                            </a>
                            <h4>Blog Lab Bahasa Pemrograman</h4>
                            {/* <p>Laravel, Bootstrap</p> */}
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <a href={jasabor} target={"_blank"} rel={"noreferrer"} title={"Web Jasa Bor"} >
                                <img src={jasabor} alt="Web Jasa Bor" title={'Web Jasa Bor'} />
                            </a>
                            <h4>Web Jasa Bor</h4>
                            {/* <p>WordPress</p> */}
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"content right"}>
                            <a href={bliwuh} target={"_blank"} rel={"noreferrer"} title={"Web Produk Bliwuh Spray"} >
                                <img src={bliwuh} alt="Web Produk Bliwuh Spray" title={'Web Produk Bliwuh Spray'} />
                            </a>
                            <h4>Web Produk Bliwuh Spray</h4>
                            {/* <p>WordPress</p> */}
                        </div>
                    </div>
                </div>

                <div className={"portfolio-row"}>
                    <div className={"column"}>
                        <div className={"content left"}>
                            <a href={prawitaria} target={"_blank"} rel={"noreferrer"} title={"Web Sanggar Prawitaria"} >
                                <img src={prawitaria} alt="Web Sanggar Prawitaria" title={'Web Sanggar Prawitaria'} />
                            </a>
                            <h4>Web Sanggar Prawitaria</h4>
                            {/* <p>Bootstrap</p> */}
                        </div>
                    </div>
                </div>

            </div>
            <p>Ingin dibuatkan Website? Buka halaman <Link to="/contact/" title={'Go to Contact Page'}>berikut</Link> untuk menghubungi saya.</p>
        </div>
    </Layout>
)

export default AboutPage
