import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit() {
    const blockProps = useBlockProps();

	const blocksAllowed = [
		'core/heading',
		'core/paragraph',
		'core/media-text',
		'core/buttons',
			'test-jcommaret/button-with-arrow',
	]
	
	const template = [	
		[ 'core/media-text', {}, [
			[ 'core/heading', {} ],	
			[ 'core/paragraph', { placeholder: __( 'Votre contenu', 'test-jcommaret' ) } ],		
			[ 'test-jcommaret/button-with-arrow', {} ],
		]],
	];
	
    return (
        <>
            <div {...blockProps}>				
				<InnerBlocks			
                    allowedBlocks={blocksAllowed}
                    template={template}
                />
            </div>
        </>
    );
}