/**
 * Block dependencies
 */
import './style.css';
import 'aos/dist/aos.css';
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
			`mypreview/${ name }`, 
			{ 
				category, 
				icon: { 
					src: icon,
					foreground: '#555d66',
					background: '#F4F5FA'
				}, 
				...settings 
			} 
		);
	} );
};

registerBlocks();