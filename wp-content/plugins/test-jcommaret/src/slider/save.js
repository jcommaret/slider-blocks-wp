import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { images } = attributes;

    return (
        <div {...useBlockProps.save()} className="my-slider-gallery">
            <div className="slides">
                {images.map((image, index) => (
                    <div key={image.id} className={`slide ${index === 0 ? 'active' : ''}`}>
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="slider-button-prev">Previous</button>
            <button className="slider-button-next">Next</button>
        </div>
    );
}