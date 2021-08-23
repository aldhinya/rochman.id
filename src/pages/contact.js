import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title={'Contact'} />
        <div className={'panel'}>
            <div className={'kotak-kecil'}>Fadhilatur Rochman</div>
            <br />
            <div className={'nama'}><span>Contact</span></div>
            <div className={'deskripsi'}>
                <p>Anda dapat terhubung dengan saya melalui email <a href={'mailto:hi@rochman.id'} title={'Contact via Email'}>hi@rochman.id</a>, atau melalui media sosial di bawah.</p>
                <p>
                    LinkedIn - <a href={'https://www.linkedin.com/in/fadhil-rochman'} target={'_blank'} rel={'noreferrer'} title={"LinkedIn"}>linkedin.com/in/fadhil-rochman</a>
                    <br />Telegram - <a href={'https://t.me/aldhinya'} target={'_blank'} rel={'noreferrer'} title={"Telegram"}>t.me/aldhinya</a>
                    <br />Instagram - <a href={'https://www.instagram.com/aldhinya/'} target={'_blank'} rel={'noreferrer'} title={"Instagram"}>instagram.com/aldhinya</a>
                    <br />Twitter - <a href={'https://twitter.com/aldhinya'} target={'_blank'} rel={'noreferrer'} title={"Twitter"}>twitter.com/aldhinya</a>
                    <br />Facebook - <a href={'https://www.facebook.com/aldhi.onlyone'} target={'_blank'} rel={'noreferrer'} title={"Facebook"}>facebook.com/aldhi.onlyone</a>
                    <br />Line - <a href={'https://line.me/ti/p/~aldhinya.aldhi'} target={'_blank'} rel={'noreferrer'} title={"Line"}>line.me/ti/p/~aldhinya.aldhi</a>
                </p>
            </div>
        </div>
    </Layout>
)

export default ContactPage
