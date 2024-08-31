import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="citeo-slider">
            <InnerBlocks.Content />
        </div>
    );
}