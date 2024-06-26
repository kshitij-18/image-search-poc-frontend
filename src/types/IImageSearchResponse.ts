type IImageData = {
    imageUrl: string,
    score: number,
}

type IImageSearchResponse = {
    total: number,
    limit: number,
    skip: number,
    data: IImageData[]
}

export default IImageSearchResponse;