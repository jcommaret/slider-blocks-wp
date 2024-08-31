import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/gallery'];

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={[['core/gallery']]}
                templateLock={true} // Permet d'ajouter plusieurs galeries ou d'autres blocs si besoin
            />
        </div>
    );
}
