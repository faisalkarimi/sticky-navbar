import React from 'react'

const ContentContainer = ({children}) => {
    return (
<section className="container content" style={{minHeight: '61vh', marginTop: '6rem'}}>
    {children}
    </section>
    )
}

export default ContentContainer
