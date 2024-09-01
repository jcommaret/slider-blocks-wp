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
			[ 'core/buttons', {}, [
				[ 'test-jcommaret/button-with-arrow', {} ],
				[ 'test-jcommaret/button-with-arrow', {} ],
			]],
	
		]],
	];
	
    return (
        <>
            <section {...blockProps} className="main-bloc">				
				<InnerBlocks			
                    allowedBlocks={blocksAllowed}
                    template={template}
                />
            </section>
        </>
    );
}