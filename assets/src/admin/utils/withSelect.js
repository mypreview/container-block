/**
 * Internal block libraries
 */
const { withSelect } = wp.data;

/**
 * Generate block data.
 */
const applyWithSelect = withSelect( ( select, { clientId } ) => {
    const { 
    	getBlock,
    	getSettings } = select( 'core/block-editor' );
    	
    const block = getBlock( clientId );

    return {
    	colors: getSettings().colors,
        hasInnerBlocks: !! ( block && block.innerBlocks.length )
    };
} );

export default applyWithSelect;