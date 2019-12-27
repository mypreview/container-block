/**
 * Block dependencies
 */
import './style.css';
import './utils/block-category.js';

/**
 * Import custom/built-in editor blocks.
 */
import * as container from './index.jsx';

export function registerBlocks () {
	[
		container,
	].forEach( block => {

		if ( ! block ) {
			return;
		} // End If Statement

		const { name, category, icon, settings } = block;

		wp.blocks.registerBlockType( 
			`my/${ name }`, 
			{ 
				category, 
				icon: { 
					src: icon
				}, 
				...settings 
			} 
		);
	} );
};

registerBlocks();