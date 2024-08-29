import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { arrowPosition } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Arrow Settings', 'button-arrow') }>
                    <SelectControl
                        label={ __('Arrow Position', 'button-arrow') }
                        value={ arrowPosition }
                        options={ [
                            { label: __('None', 'button-arrow'), value: 'none' },
                            { label: __('Left', 'button-arrow'), value: 'left' },
                            { label: __('Right', 'button-arrow'), value: 'right' },
                        ] }
                        onChange={ (newPosition) => setAttributes({ arrowPosition: newPosition }) }
                    />
                </PanelBody>
            </InspectorControls>
            
            <div {...blockProps} className={`button-arrow button-arrow-${arrowPosition}`}>
                <InnerBlocks
                    allowedBlocks={['core/button']}
                    template={[['core/button']]}
                />
            </div>
        </>
    );
}
