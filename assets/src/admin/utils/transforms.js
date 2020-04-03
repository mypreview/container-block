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
				// Avoid transforming a single `mypreview/container` Block
				if (
					blocks.length === 1 &&
					blocks[ 0 ].name === 'mypreview/container'
				) {
					return;
				}

				const alignments = [ 'wide', 'full' ];

				// Determine the widest setting of all the blocks to be combined
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

				// Clone the Blocks to be Grouped
				// Failing to create new block references causes the original blocks
				// to be replaced in the switchToBlockType call thereby meaning they
				// are removed both from their original location and within the
				// new container block.
				const containerInnerBlocks = blocks.map( ( block ) => {
					return createBlock(
						block.name,
						block.attributes,
						block.innerBlocks
					);
				} );

				return createBlock(
					'mypreview/container',
					{
						align: widestAlignment,
					},
					containerInnerBlocks
				);
			},
		},
	],
};

export default transforms;
