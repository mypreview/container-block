/**
 * Internal block libraries
 */
const { _x } = wp.i18n;

const colors = [];

// White
colors.push( {
	name: _x( 'White', 'color pallet', 'container-block' ),
	slug: 'white',
	color: '#FFFFFF',
} );
// Black
colors.push( {
	name: _x( 'Black', 'color pallet', 'container-block' ),
	slug: 'black',
	color: '#000000',
} );
// Blue
colors.push( {
	name: _x( 'Blue', 'color pallet', 'container-block' ),
	slug: 'blue',
	color: '#59BACC',
} );
// Green
colors.push( {
	name: _x( 'Green', 'color pallet', 'container-block' ),
	slug: 'green',
	color: '#58AD69',
} );
// Orange
colors.push( {
	name: _x( 'Orange', 'color pallet', 'container-block' ),
	slug: 'orange',
	color: '#FFBC49',
} );
// Red
colors.push( {
	name: _x( 'Red', 'color pallet', 'container-block' ),
	slug: 'red',
	color: '#E2574C',
} );

export default colors;
