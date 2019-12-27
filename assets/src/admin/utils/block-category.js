/**
 * Block dependencies
 */
import icons from './../icons.jsx';

/**
 * Internal block libraries
 */
const { _x } = wp.i18n;
const { getCategories, setCategories } = wp.blocks;

setCategories( [
	{
		slug: 'mypreview',
		title: _x( 'MyPreview', 'block category', 'container-block' ),
		icon: icons.mypreview
	},
	...getCategories().filter( ( { slug } ) => slug !== 'mypreview' ),
] );