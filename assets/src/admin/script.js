/**
 * Block dependencies
 */
import './style.css';

/**
 * Import custom/built-in editor blocks.
 */
import * as container from './index.jsx';
import * as loader from './loader/index.jsx';

export function registerBlocks () {
	[
		container,
		// loader
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