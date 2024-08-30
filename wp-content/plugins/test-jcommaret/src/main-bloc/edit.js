import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();
	
	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = [ 
		'core/columns', 
		'core/column', 
		'core/heading', 
		'core/paragraph', 
		'core/image',
		'core/buttons',
		'test-jcommaret/button-with-arrow',
		'test-jcommaret/slider'
	];

	// Utilisation des fonctions core de wordpress 
	const BASE_TEMPLATE = [	
		[ 'core/columns', {}, [
			// Première colonne
			[ 'core/column', {}, [
				[ 'core/heading', { placeholder: __( 'Votre titre', 'test-jcommaret' ) } ],
				[ 'core/paragraph', { placeholder: __( 'Votre contenu', 'test-jcommaret' ) } ],
				[ 'core/buttons', {}, [
					[ 'test-jcommaret/button-with-arrow', {} ],
					[ 'test-jcommaret/button-with-arrow', {} ],
				]],
			]], // Fin du premier 'core/column'
			// Deuxième colonne
			[ 'core/column', {}, [
				[ 'core/image', { placeholder: __( 'Votre image', 'test-jcommaret' ) } ]
			]],
		]],
		['test-jcommaret/slider', {}] // Fin du bloc 'core/columns'
	];

	return (
		<>
			<section { ...blockProps }>
				<InnerBlocks
					template={ BASE_TEMPLATE }
					allowedBlocks={ ALLOWED_BLOCKS }	
				/>
			</section>
		</>
	)
}