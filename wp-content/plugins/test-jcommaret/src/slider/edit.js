import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { images } = attributes;

    const onSelectImages = (newImages) => {
        setAttributes({
            images: newImages.map((image) => ({
                id: image.id,
                url: image.url,
                alt: image.alt,
            })),
        });
    };

    return (
        <div {...blockProps}>
            {images.length > 0 ? (
                <ul className="blocks-gallery-grid">
                    {images.map((image) => (
                        <li key={image.id} className="blocks-gallery-item">
                            <img src={image.url} alt={image.alt} data-id={image.id} />
                        </li>
                    ))}
                </ul>
            ) : (
                <MediaPlaceholder
                    icon="format-gallery"
                    labels={{
                        title: __('Add Images to Slider', 'test-jcommaret'),
                        instructions: __('Select images for your slider.', 'test-jcommaret'),
                    }}
                    onSelect={onSelectImages}
                    allowedTypes={['image']}
                    multiple
                    gallery
                />
            )}
        </div>
    );
}

