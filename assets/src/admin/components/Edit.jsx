/**
 * Block dependencies
 */
import AOS from 'aos';
import escape from 'lodash.escape';
import includes from 'lodash/includes';
import classnames from 'classnames';
import { keyframes } from 'styled-components';
import Controls from './Controls.jsx';
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

	componentDidMount() {
		AOS.init( {
			startEvent: 'load'
		} );
	}

	render() {

		const { 
			hasInnerBlocks,
			backgroundColor,
			className,
			isSelected,
			attributes,
			setAttributes } = this.props;

		const { 
			width,
			isFH,
			shadow,
			ariaLabel,
			scroll,
			visible,
			spacing,
			alignment,
			border,
			shape,
			img,
			video,
			dim,
			aos,
			valign,
			allowedBlocks } = attributes;

		// Image
		const {
			id: imgID,
	        src: imgSRC,
	        width: imgWidth,
	        position: imgPosition,
	        focalPoint: imgFocalPoint,
	        repeat: imgRepeat,
	        size: imgSize,
	        effect: imgEffect } = img;
	    // Video
		const {
			id: videoID,
			src: videoSRC } = video;
	    // Scroll-to
		const {
			show: scrlShow,
			customColor: scrlColor } = scroll;
		// Spacing
		const {
			desktop: hrzDesktop,
			laptop: hrzLaptop,
			tablet: hrzTablet,
			smartphone: hrzSmartphone } = spacing;
		// Alignment
		const {
			desktop: alignDesktop,
			laptop: alignLaptop,
			tablet: alignTablet,
			smartphone: alignSmartphone } = alignment;
		// Border
		const {
			width: borderWidth,
			radius: borderRadius,
			color: borderColor } = border;
		// Visibility
		const {
			desktop: visDesktop,
			laptop: visLaptop,
			tablet: visTablet,
			smartphone: visSmartphone } = visible;
		// Animation
		const {
			type: aosType,
			once: aosOnce,
			offset: aosOffset,
			duration: aosDuration,
			delay: aosDelay,
			ease: aosEase } = aos;
		// Shape
		const {
			type: shapeType,
			height: shapeHeight,
			customColor: shapeColor } = shape;

		let keyFrames = null;
        if ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) {
            keyFrames = keyframes`
                from { background-position: 0 0 } 
                to { background-position: ${ imgEffect.includes( 'left' ) ? -Math.abs( imgWidth ) : Math.abs( imgWidth ) }px 0 }
            `;
        } // End If Statement

		return (
			<Fragment>
				{ isSelected && (
					<Controls
						{ ...this.props }
					/>
				) }
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				<div 
                    className={ classnames( 
                    	className,
                    	{
                    		'wp-block-mypreview-container--full-height': !! isFH,
                    		'wp-block-mypreview-container--scrl-icon': !! scrlShow,
                    		[`wp-block-mypreview-container--dim-${ parseInt( dim ) }`]: dim,
                    		[`wp-block-mypreview-container--shadow-${ shadow }`]: shadow,
                    		[`has-valign-${ valign }`]: isFH && valign,
                    		'has-background-img': imgID,
	            			[`has-background-img--${ imgPosition }`]: imgPosition,
	                    	[`has-background-img--${ imgRepeat }`]: imgRepeat,
	                    	[`has-background-img--${ imgSize }`]: imgSize,
		                    [`has-background-img--${ imgEffect }`]: imgEffect,
	            			'has-background-video': videoID,
	            			[`hrz-spacing-dk-${ hrzDesktop }`]: hrzDesktop,
		                    [`hrz-spacing-lp-${ hrzLaptop }`]: hrzLaptop,
		                    [`hrz-spacing-tb-${ hrzTablet }`]: hrzTablet,
		                    [`hrz-spacing-sp-${ hrzSmartphone }`]: hrzSmartphone,
							'has-border': borderColor,
		                    [`has-border--width-${ borderWidth }`]: borderWidth,
							[`has-border--radius-${ borderRadius }`]: borderRadius,
							'has-background': backgroundColor.color,
							'hide-dk': !! visDesktop,
		                    'hide-lp': !! visLaptop,
		                    'hide-tb': !! visTablet,
		                    'hide-sp': !! visSmartphone
                    	}
                	) }
                	style={ {
                		backgroundImage: imgSRC ? `url('${ encodeURI( imgSRC ) }')` : undefined,
                		borderColor: borderColor,
						backgroundColor: backgroundColor.color,
						backgroundPosition: ( imgFocalPoint && 'custom' === imgPosition ) ? `${ imgFocalPoint.x * 100 }% ${ imgFocalPoint.y * 100 }%` : undefined,
						WebkitAnimation: ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) ? `${ keyFrames } 40s linear infinite` : undefined,
            			animation: ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) ? `${ keyFrames } 40s linear infinite` : undefined
					} }
					data-aos={ aosType ? aosType : null }
					data-aos-once={ ( aosType && aosOnce ) ? 'true' : null }
					data-aos-offset={ ( aosType && aosOffset ) ? parseInt( aosOffset ) : null }
					data-aos-duration={ ( aosType && aosDuration ) ? parseInt( aosDuration ) : null }
					data-aos-delay={ ( aosType && aosDelay ) ? parseInt( aosDelay ) : null }
					data-aos-easing={ ( aosType && aosEase ) ? aosEase : null }
					aria-label={ ariaLabel ? escape( ariaLabel ) : null }
                >
                	<div 
                		className={ classnames( 
                			'wp-block-mypreview-container__wrapper',
                			{
                				[`hrz-align-dk-${ alignDesktop }`]: !! alignDesktop,
			                    [`hrz-align-lp-${ alignLaptop }`]: !! alignLaptop,
			                    [`hrz-align-tb-${ alignTablet }`]: !! alignTablet,
			                    [`hrz-align-sp-${ alignSmartphone }`]: !! alignSmartphone
                			}
	                	) }
                		style={ {
                			maxWidth: width ? `${ parseInt( width ) }px` : undefined
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
		    		{ !! scrlShow && ( 
	    				<a
	    					className="wp-block-mypreview-container__scrl"
	    					style={ {
								color: scrlColor ? scrlColor : null
							} }
	    				/>
	    			) }
	    			{ !! videoID && ( 
		    			<div 
                			className="wp-block-mypreview-container__video"
                		>
                			<video
                				id={ `wp-video-${ videoID }` }
								src={ encodeURI( videoSRC ) }
								autoPlay
								muted
								loop
							/>
                		</div>
		    		) }
		    		{ !! shapeType && (
			    		<div 
	            			className={ classnames( 
	                			'wp-block-mypreview-container__shape',
			                    {
			                    	'has-text-color': shapeColor,
	                				[`wp-block-mypreview-container__shape--${ shapeType }`]: shapeType,
			                    }
		                	) }
		                	style={ {
	                			color: shapeColor ? shapeColor : null,
	                			height: ( shapeType && shapeType.includes( 'custom' ) ) ? `${ parseFloat( shapeHeight ) }%` : null
							} }
	            		>
	            			{ shapes.hasOwnProperty( shapeType ) && (
	            				shapes[shapeType]
	            			) }
	            		</div>
            		) }
				</div>
			</Fragment>
		);
	}
} );