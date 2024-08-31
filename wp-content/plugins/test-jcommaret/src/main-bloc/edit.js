import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
	const { mediaPosition = 'right' } = attributes;
	
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
			<InspectorControls>
                <PanelBody>
                    <SelectControl
                        value={ mediaPosition }
						onChange={ handleMediaPositionChange } 
                    />
                </PanelBody>
            </InspectorControls>
			
            <div {...blockProps}>				
				<InnerBlocks			
                    allowedBlocks={blocksAllowed}
                    template={template}
                />
            </div>
        </>
    );
}