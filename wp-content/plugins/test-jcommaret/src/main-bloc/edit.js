import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Edit() {
	const blockProps = useBlockProps({ })
	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = [ 'core/group', 'test-jcommaret/button-with-arrow', 'core/columns', 'core/column', 'core/heading', 'core/paragraph', 'core/buttons', 'core/button', 'core/image' ];

	// Utilisation des fonctions core de wordpress 
	const BASE_TEMPLATE = [	
				[ 'core/heading', { placeholder: __( 'Votre titre', 'test-jcommaret' ) } ],
				[ 'core/paragraph', { placeholder: __( 'Votre contenu', 'test-jcommaret' ) } ],
				[ 'test-jcommaret/button-with-arrow', {} ],
				[ 'core/image', { placeholder: __( 'Votre image', 'test-jcommaret' ) } ]
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