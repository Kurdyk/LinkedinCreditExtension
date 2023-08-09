export type LinkDescription = {
    name: string,
    url: string,
    imgSrc?: string,
}

export type Author = {
    name: string,
    links? : LinkDescription[],
    avatarImgUrl?: string,
    description?: string,
    backgroundImgUrl?: string,
}