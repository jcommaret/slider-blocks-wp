import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Main Edit function for the block
export default function Edit(props) {
    const { attributes, setAttributes } = props; // Destructure props to get attributes and setAttributes
    const { arrowPosition } = attributes; // Get the arrowPosition attribute

    // Define block properties with dynamic class based on arrowPosition
    const blockProps = useBlockProps({
        className: `button-arrow button-arrow-${arrowPosition}`,
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Réglages de flêche', 'button-arrow') }> {/* Panel for settings */}
                    <SelectControl
                        label={ __('Position de la flêche', 'button-arrow') } // Label for the select control
                        value={ arrowPosition } // Current value of arrowPosition
                        options={ [ // Options for the select control
                            { label: __('Pas de flêche', 'button-arrow'), value: 'none' },
                            { label: __('Gauche', 'button-arrow'), value: 'left' },
                            { label: __('Droite', 'button-arrow'), value: 'right' },
                        ] }
                        onChange={ (newPosition) => setAttributes({ arrowPosition: newPosition }) } // Update arrowPosition on change
                    />
                </PanelBody>
            </InspectorControls>
            
            <div {...blockProps}> {/* Main block container */}
                <InnerBlocks
                    allowedBlocks={['core/button']} // Specify allowed inner blocks
                    template={[['core/button']]} // Default template for inner blocks
                />
            </div>
        </>
    );
}

