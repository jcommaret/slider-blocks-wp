import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/gallery'];

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <section {...blockProps} className="custom-slider" >
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={[['core/gallery']]}
                templateLock={false} 
            />
        </section>
    );
}