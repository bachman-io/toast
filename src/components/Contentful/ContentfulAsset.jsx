import React from 'react';

function ContentfulAsset(props) {
  const { node } = props;
  const GIF = 'image/gif';
  const IMAGES = ['image/jpeg', 'image/png'];
  const WEBP = 'image/webp';
  const description = node.data.target.fields.description['en-US'];
  const file = node.data.target.fields.file['en-US'];
  const baseUrl = file.url;

  if (IMAGES.includes(file.contentType) || WEBP === file.contentType) {
    const width100 = file.details.image.width;
    const width50 = Math.floor(width100 / 2);
    const width25 = Math.floor(width50 / 2);
    const height100 = file.details.image.height;
    const height50 = Math.floor(height100 / 2);
    const height25 = Math.floor(height50 / 2);
    const quality = 50;

    if (IMAGES.includes(file.contentType)) {
      const src = `${baseUrl}?w=${width100}&h=${height100}&q=${quality}`;
      const srcSet = `${baseUrl}?w=${width25}&h=${height25}&q=${quality} ${width25}w,\n
      ${baseUrl}?w=${width50}&h=${height50}&q=${quality} ${width50}w,\n
      ${baseUrl}?w=${width100}&h=${height100}&q=${quality} ${width100}w`;
      const srcSetWebp = `${baseUrl}?w=${width25}&h=${height25}&q=${quality}&fm=webp ${width25}w,\n
      ${baseUrl}?w=${width50}&h=${height50}&q=${quality}&fm=webp ${width50}w,\n
      ${baseUrl}?w=${width100}&h=${height100}&q=${quality}&fm=webp ${width100}w`;
      return (
        <picture>
          <source type="image/webp" srcSet={srcSetWebp} />
          <source type={file.contentType} srcSet={srcSet} />
          <img className="img-fluid mb-4" src={src} alt={description} />
        </picture>
      );
    }
    if (WEBP === file.contentType) {
      const src = `${baseUrl}?w=${width100}&h=${height100}&q=${quality}&fm=png`;
      const srcSet = `${baseUrl}?w=${width25}&h=${height25}&q=${quality} ${width25}w,\n
      ${baseUrl}?w=${width50}&h=${height50}&q=${quality} ${width50}w,\n
      ${baseUrl}?w=${width100}&h=${height100}&q=${quality} ${width100}w`;
      const srcSetPng = `${baseUrl}?w=${width25}&h=${height25}&q=${quality}&fm=png ${width25}w,\n
      ${baseUrl}?w=${width50}&h=${height50}&q=${quality}&fm=png ${width50}w,\n
      ${baseUrl}?w=${width100}&h=${height100}&q=${quality}&fm=png ${width100}w`;
      return (
        <picture>
          <source type={file.contentType} srcSet={srcSet} />
          <source type="image/png" srcSet={srcSetPng} />
          <img className="img-fluid mb-4" src={src} alt={description} />
        </picture>
      );
    }
  }
  if (GIF === file.contentType) {
    return (
      <img className="img-fluid mb-4" src={baseUrl} alt={description} />
    );
  }
}

export default ContentfulAsset;
