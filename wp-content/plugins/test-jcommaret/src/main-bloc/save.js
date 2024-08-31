import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save();

	return (
		<section { ...blockProps } className='main-bloc'>
				<InnerBlocks.Content />
		</section>
	)
}