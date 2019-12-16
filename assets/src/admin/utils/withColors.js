/**
 * Internal block libraries
 */
const { withColors } = wp.blockEditor;

/**
 * Generate block colors.
 */
const applyWithColors = withColors(
	'backgroundColor'
);

export default applyWithColors;