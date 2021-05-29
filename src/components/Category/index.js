import React from 'react'
import { Image, CategoryTitle, Wrapper } from "./styles"

function Category({imageUrl, name}) {
    return (
        <Wrapper>
            <Image src={imageUrl}/>
            <CategoryTitle>{name}</CategoryTitle>
        </Wrapper>
    )
}

export default Category
