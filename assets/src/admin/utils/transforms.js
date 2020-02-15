/**
 * Internal block libraries
 */
const { createBlock } = wp.blocks;

const transforms = {
	from: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ '*' ],
			__experimentalConvert( blocks ) {
				// Avoid transforming a single `my/container` Block
				if (
					blocks.length === 1 &&
					blocks[ 0 ].name === 'my/container'
				) {
					return;
				} // End If Statement

				const alignments = [ 'wide', 'full' ];

				// Determine the widest setting of all the blocks to be grouped
				const widestAlignment = blocks.reduce(
					( accumulator, block ) => {
						const { align } = block.attributes;
						return alignments.indexOf( align ) >
							alignments.indexOf( accumulator )
							? align
							: accumulator;
					},
					undefined
				);

				// Clone the Blocks to be wrapped into a container block
				// Failing to create new block references causes the original blocks
				// to be replaced in the switchToBlockType call thereby meaning they
				// are removed both from their original location and within the
				// new container block.
				const wrapInnerBlocks = blocks.map(
					( { name, attributes, innerBlocks } ) => {
						return createBlock( name, attributes, innerBlocks );
					}
				);

				return createBlock(
					'my/container',
					{
						align: widestAlignment,
					},
					wrapInnerBlocks
				);
			},
		},
	],
};

export default transforms;
