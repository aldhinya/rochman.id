import React from "react"
import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

const Tags = props => {
    // If the current post does not have any tags then stop rendering the component.
    if (!props.listOfTags.length) {
        return null
    }

    return (
            <div className="tag-artikel">
                {props.listOfTags.map((tag, index) => (
                    <Link to={`/blog/tags/${kebabCase(tag)}/`} key={index} title={tag}>
                        <div className="kotak-kecil" style={{ marginRight:'6px', marginBottom:'5px'}}>#{tag}</div>
                    </Link>
                ))}
            </div>
    )
}

export default Tags