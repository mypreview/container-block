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
	    // Image
		const {
			id: videoID,
			src: videoSRC } = video;
	    // Scroll-to
		const {
			show: scrlShow,
			color: scrlColor } = scroll;
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
			color: shapeColor } = shape;

		let keyFrames = '';
        if ( imgID && ( 'animate-left' === imgEffect || 'animate-right' === imgEffect ) ) {
            keyFrames = keyframes`
                from { background-position: 0 0 } 
                to { background-position: ${ 'animate-left' === imgEffect  ?  -Math.abs( imgWidth )  :  Math.abs( imgWidth ) }px 0 }
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
            			isFH  ?  'wp-block-my-container--full-height'  :  null,
            			scrlShow  ?  'wp-block-my-container--scrl-icon'  :  null,
						dim  ?   `wp-block-my-container--dim-${ parseInt( dim ) }` : null,
						shadow  ?  `wp-block-my-container--shadow-${ shadow }`  :  null,
            			( isFH && valign )  ?  `has-valign-${ valign }`  :  null,
            			imgID  ?  'has-background-img'  :  null,
            			imgPosition  ?  `has-background-img--${ imgPosition }`  :  null,
                    	imgRepeat  ?  `has-background-img--${ imgRepeat }`  :  null,
                    	imgSize  ?  `has-background-img--${ imgSize }`  :  null,
	                    imgEffect  ?  `has-background-img--${ imgEffect }`  :  null,
            			videoID  ?  'has-background-video'  :  null,
            			hrzDesktop	 ?  `hrz-spacing-dk-${ hrzDesktop }`  :  null,
	                    hrzLaptop	?  `hrz-spacing-lp-${ hrzLaptop }`	  :  null,
	                    hrzTablet	?  `hrz-spacing-tb-${ hrzTablet }`	  :  null,
	                    hrzSmartphone	?  `hrz-spacing-sp-${ hrzSmartphone }`  :  null,
						borderColor  ?  'has-border'  :  null,
	                    borderWidth  ?  `has-border--width-${ borderWidth }`	 :  null,
						borderRadius  ?  `has-border--radius-${ borderRadius }`  :  null,
						backgroundColor.color  ?  'has-background'  :  null,
						visDesktop  ?  'hide-dk'  :  null,
	                    visLaptop  ?  'hide-lp'  :  null,
	                    visTablet  ?  'hide-tb'  :  null,
	                    visSmartphone  ?  'hide-sp'  :  null
                	) }
                	style={ {
                		backgroundImage: imgSRC  ?  `url('${ encodeURI( imgSRC ) }')` : undefined,
                		borderColor: borderColor,
						backgroundColor: backgroundColor.color,
						backgroundPosition: ( imgFocalPoint && 'custom' === imgPosition )  ?  `${ imgFocalPoint.x * 100 }% ${ imgFocalPoint.y * 100 }%`  :  undefined,
						WebkitAnimation: ( imgID && ( 'animate-left' === imgEffect || 'animate-right' === imgEffect ) )  ?  `${ keyFrames } 40s linear infinite`  :  undefined,
            			animation: ( imgID && ( 'animate-left' === imgEffect || 'animate-right' === imgEffect ) )  ?  `${ keyFrames } 40s linear infinite`  :  undefined
					} }
					data-aos={ aosType  ?  aosType  :  null }
					data-aos-once={ ( aosType && aosOnce )  ?  'true'  :  null }
					data-aos-offset={ ( aosType && aosOffset )  ?  parseInt( aosOffset )  :  null }
					data-aos-duration={ ( aosType && aosDuration )  ?  parseInt( aosDuration )  :  null }
					data-aos-delay={ ( aosType && aosDelay )  ?  parseInt( aosDelay )  :  null }
					data-aos-easing={ ( aosType && aosEase )  ?  aosEase  :  null }
					aria-label={ ariaLabel  ?  escape( ariaLabel )  :  null }
                >
                	<div 
                		className={ classnames( 
                			'wp-block-my-container__wrapper',
	                    	alignDesktop  ?  `hrz-align-dk-${ alignDesktop }`  :  null,
		                    alignLaptop  ?  `hrz-align-lp-${ alignLaptop }`  :  null,
		                    alignTablet  ?  `hrz-align-tb-${ alignTablet }`  :  null,
		                    alignSmartphone  ?  `hrz-align-sp-${ alignSmartphone }`  :  null
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
		    		{ scrlShow && ( 
	    				<a
	    					className="wp-block-my-container__scrl-icon"
	    					style={ {
								color: scrlColor  ?  scrlColor  :  null
							} }
	    				/>
	    			) }
	    			{ videoID && ( 
		    			<div 
                			className="wp-block-my-container__video"
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
		    		{ shapeType && (
			    		<div 
	            			className={ classnames( 
	                			'wp-block-my-container__shape',
	                			shapeType  ?  `wp-block-my-container__shape--${ shapeType }`  :  null,
			                    shapeColor  ?  'has-text-color'  :  null
		                	) }
		                	style={ {
	                			color: shapeColor  ?  shapeColor  :  null,
	                			height: ( shapeType && shapeType.includes( 'custom' ) )  ?  `${ parseFloat( shapeHeight ) }%`  :  null
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