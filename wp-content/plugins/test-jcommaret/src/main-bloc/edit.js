import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function Edit() {
	const blockProps = useBlockProps();
	
	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = [ 
		'core/group', 
		'test-jcommaret/button-with-arrow', 
		'core/columns', 
		'core/column', 
		'core/heading', 
		'core/paragraph', 
		'core/buttons', 
		'core/button', 
		'core/image' 
	];

	// Utilisation des fonctions core de WordPress 
	const BASE_TEMPLATE = [	
		['core/columns', {}, // Utilisation correcte de core/columns pour encapsuler core/column
			['core/column', {},
				['core/heading', { placeholder: __('Votre titre', 'test-jcommaret') }],
				['core/paragraph', { placeholder: __('Votre contenu', 'test-jcommaret') }],
				['core/buttons', {},
					//['test-jcommaret/button-with-arrow', {}],
					//['test-jcommaret/button-with-arrow', {}],
				],
			],
			['core/column', {},
				['core/image', { placeholder: __('Votre image', 'test-jcommaret') }],
			],
		],
	];

	return (
		<section { ...blockProps }>
			<InnerBlocks
				template={ BASE_TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }	
			/>
		</section>
	);
}