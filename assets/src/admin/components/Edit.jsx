/**
 * Block dependencies
 */
import AOS from 'aos';
import escape from 'lodash.escape';
import includes from 'lodash/includes';
import classnames from 'classnames';
import { keyframes } from 'styled-components';
// import Controls from './Controls.jsx';
import Inspector from './Inspector.jsx';
import shapes from './../utils/shapes';
import applyWithColors from './../utils/withColors';
import applyWithSelect from './../utils/withSelect';

/**
 * Internal block libraries
 */
const { Fragment, Component } = wp.element;
const { compose } = wp.compose;
const { InnerBlocks } = wp.blockEditor;

export default compose( applyWithColors, applyWithSelect ) ( class Edit extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const { 
			hasInnerBlocks,
			className,
			isSelected,
			attributes,
			setAttributes } = this.props;

		const { 
			width,
			allowedBlocks } = attributes;

		return (
			<Fragment>
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				<div 
                    className={ classnames( 
                    	className
                	) }
                >
                	<div 
                		className={ classnames( 
                			'wp-block-my-container__wrapper'
	                	) }
                		style={ {
                			maxWidth: width  ?  `${ parseInt( width ) }px`  :  undefined
						} }
                	>
                		{ ( Array.isArray( allowedBlocks ) && allowedBlocks.length ) ? (
                			<InnerBlocks 
			    				templateLock={ false }
			    				allowedBlocks={ allowedBlocks }
			    				renderAppender={ ! hasInnerBlocks && InnerBlocks.ButtonBlockAppender }
			    			/>
                		) : 
                			<InnerBlocks 
			    				renderAppender={ ! hasInnerBlocks && InnerBlocks.ButtonBlockAppender }
			    			/>
                		}
		    		</div>
				</div>
			</Fragment>
		);
	}
} );