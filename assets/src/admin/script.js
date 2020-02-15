/**
 * Block dependencies
 */
import './style.css';
import 'aos/dist/aos.css';
import './utils/category';

/**
 * Import custom/built-in editor blocks.
 */
import * as container from './index';

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
					foreground: '#007CBA'
				}, 
				...settings 
			} 
		);
	} );
};

registerBlocks();