// Importing the necessary functions and components from WordPress
import { registerBlockType } from '@wordpress/blocks';

// Importing the Edit and Save components for the block
import Edit from './edit';
import save from './save';
// Importing metadata for the block from a JSON file
import metadata from './block.json';

// Importing the styles for the block
import "./style.scss";

// Registering a new block type with the specified metadata
registerBlockType( metadata.name, {
	// Specifying the edit component for the block
	edit: Edit,
	// Specifying the save component for the block
	save,
} );

