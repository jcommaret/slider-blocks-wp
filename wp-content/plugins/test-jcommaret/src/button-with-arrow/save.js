import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

// The save function defines how the block will be rendered on the front end.
export default function save({ attributes }) {
    // Destructuring to extract the arrowPosition attribute from the block's attributes.
    const { arrowPosition } = attributes;

    // Get the block's props for the save function, including necessary attributes like className.
    const blockProps = useBlockProps.save();

    return (
        // Render the block's wrapper element, applying blockProps and dynamically adding a class
        // based on the arrowPosition attribute.
        <div {...blockProps} className={`button-arrow button-arrow-${arrowPosition}`}>
            {/* Render the content of the InnerBlocks that the user has added in the editor. */}
            <InnerBlocks.Content />
        </div>
    );
}