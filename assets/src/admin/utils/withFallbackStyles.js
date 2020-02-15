/**
 * Internal block libraries
 */
const { getComputedStyle } = window;
const { withFallbackStyles } = wp.components;

/**
 * Generate block data.
 */
const applyWithFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { backgroundColor } = ownProps.attributes,
		editableNode = node.querySelector( '[contenteditable="true"]' ),
		computedStyles = editableNode ? getComputedStyle( editableNode ) : null;

	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles
				? undefined
				: getComputedStyle.backgroundColor,
	};
} );

export default applyWithFallbackStyles;
