import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { arrowPosition } = attributes;

    const blockProps = useBlockProps({
        className: `button-arrow button-arrow-${arrowPosition}`,
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Réglages de flêche', 'button-arrow') }>
                    <SelectControl
                        label={ __('Position de la flêche', 'button-arrow') }
                        value={ arrowPosition }
                        options={ [
                            { label: __('Pas de flêche', 'button-arrow'), value: 'none' },
                            { label: __('Gauche', 'button-arrow'), value: 'left' },
                            { label: __('Droite', 'button-arrow'), value: 'right' },
                        ] }
                        onChange={ (newPosition) => setAttributes({ arrowPosition: newPosition }) }
                    />
                </PanelBody>
            </InspectorControls>
            
            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={['core/button']}
                    template={[['core/button']]}
                />
            </div>
        </>
    );
}

