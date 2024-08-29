import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Edit() {
	const blockProps = useBlockProps({ })
	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = [ 'core/group', 'core/columns', 'core/column', 'core/heading', 'core/paragraph', 'core/buttons', 'core/button', 'core/image', 'test-jcommaret/button-with-arrow' ];

	// Utilisation des fonctions core de wordpress 
	const BASE_TEMPLATE = [	
		[ 'core/columns', {}, [
			[ 'core/column', {}, [
				[ 'core/heading', { placeholder: __( 'Votre titre', 'test-jcommaret' ) } ],
				[ 'core/paragraph', { placeholder: __( 'Votre contenu', 'test-jcommaret' ) } ],
				[ 'test-jcommaret/button-with-arrow', {} ]
			]],
			[ 'core/column', {}, [
				[ 'core/image', { placeholder: __( 'Votre image', 'test-jcommaret' ) } ]
			]],
		]],
	];

	return (
		<section { ...blockProps }>
			<InnerBlocks
				template={ BASE_TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }	
			/>
		</section>
	)
}