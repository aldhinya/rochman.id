import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <div className="panel">
            <div className="kotak-kecil">Fadhilatur Rochman</div>
            <br/>
            <div className="nama"><span>404: Page Not Found</span></div>
            <div className="deskripsi">
                <p>The Page You Requested Could Not Found.</p>
                <p>← Back to <Link to="/" title={'Home'}>Home Page</Link> or search article <Link to="/blog" title={'Blog'}>here</Link>.</p>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
