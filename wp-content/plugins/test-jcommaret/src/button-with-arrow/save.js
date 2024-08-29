import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
    const { attributes } = props;
    const { arrowPosition } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className={`button-arrow button-arrow-${arrowPosition}`}>
            <InnerBlocks.Content
                renderAppender={false}
            />
        </div>
    );
}