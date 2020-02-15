/**
 * Block dependencies
 */
import classnames from 'classnames';
import { keyframes } from 'styled-components';
import shapes from './../utils/shapes';

/**
 * Internal block libraries
 */
const { Component } = wp.element;
const { InnerBlocks, getColorClassName } = wp.blockEditor;

export default class Save extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const { attributes } = this.props;

		const {
			width,
			isFH,
			shadow,
			ariaLabel,
			scroll,
			visible,
			spacing,
			margin,
			alignment,
			border,
			shape,
			link,
			img,
			video,
			dim,
			aos,
			valign,
			backgroundColor,
			customBackgroundColor,
		} = attributes;

		// Image
		const {
			id: imgID,
			src: imgSRC,
			width: imgWidth,
			position: imgPosition,
			focalPoint: imgFocalPoint,
			repeat: imgRepeat,
			size: imgSize,
			effect: imgEffect,
		} = img;
		// Video
		const { id: videoID, src: videoSRC } = video;
		// Scroll-to
		const {
			show: scrlShow,
			target: scrlTarget,
			color: scrlColor,
			customColor: customScrlColor,
		} = scroll;
		// Spacing
		const {
			desktop: hrzDesktop,
			laptop: hrzLaptop,
			tablet: hrzTablet,
			smartphone: hrzSmartphone,
		} = spacing;
		// Margin
		const {
			top: marginTop,
			right: marginRight,
			bottom: marginBottom,
			left: marginLeft,
		} = margin;
		// Alignment
		const {
			desktop: alignDesktop,
			laptop: alignLaptop,
			tablet: alignTablet,
			smartphone: alignSmartphone,
		} = alignment;
		// Border
		const {
			width: borderWidth,
			radius: borderRadius,
			color: borderColor,
		} = border;
		// Link-to
		const { url: linkUrl, target: linkTarget } = link;
		// Visibility
		const {
			desktop: visDesktop,
			laptop: visLaptop,
			tablet: visTablet,
			smartphone: visSmartphone,
		} = visible;
		// Animation
		const {
			type: aosType,
			once: aosOnce,
			offset: aosOffset,
			duration: aosDuration,
			delay: aosDelay,
			ease: aosEase,
		} = aos;
		// Shape
		const {
			type: shapeType,
			height: shapeHeight,
			color: shapeColor,
			customColor: customShapeColor,
		} = shape;

		let keyFrames = null;
		if ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) {
			keyFrames = keyframes`
                from { background-position: 0 0 } 
                to { background-position: ${
					imgEffect.includes( 'left' )
						? -Math.abs( imgWidth )
						: Math.abs( imgWidth )
				}px 0 }
            `;
		} // End If Statement

		const shapeColorClass = getColorClassName( 'color', shapeColor ),
			scrlColorClass = getColorClassName( 'color', scrlColor ),
			backgroundColorClass = getColorClassName(
				'background-color',
				backgroundColor
			);

		// Wrapper
		const wrapperClasses = classnames( {
			'wp-block-mypreview-container--full-height': !! isFH,
			'wp-block-mypreview-container--scrl-icon': !! scrlShow,
			[ `wp-block-mypreview-container--dim-${ parseInt( dim ) }` ]: dim,
			[ `wp-block-mypreview-container--shadow-${ shadow }` ]: shadow,
			[ `has-valign-${ valign }` ]: isFH && valign,
			'has-background-img': imgID,
			[ `has-background-img--${ imgPosition }` ]: imgPosition,
			[ `has-background-img--${ imgRepeat }` ]: imgRepeat,
			[ `has-background-img--${ imgSize }` ]: imgSize,
			[ `has-background-img--${ imgEffect }` ]: imgEffect,
			'has-background-video': videoID,
			[ `hrz-spacing-dk-${ hrzDesktop }` ]: hrzDesktop,
			[ `hrz-spacing-lp-${ hrzLaptop }` ]: hrzLaptop,
			[ `hrz-spacing-tb-${ hrzTablet }` ]: hrzTablet,
			[ `hrz-spacing-sp-${ hrzSmartphone }` ]: hrzSmartphone,
			'has-border': borderColor,
			[ `has-border--width-${ borderWidth }` ]: borderWidth,
			[ `has-border--radius-${ borderRadius }` ]: borderRadius,
			'has-background': backgroundColor || customBackgroundColor,
			[ backgroundColorClass ]: backgroundColorClass,
			'hide-dk': !! visDesktop,
			'hide-lp': !! visLaptop,
			'hide-tb': !! visTablet,
			'hide-sp': !! visSmartphone,
		} );
		const wrapperStyles = {
			backgroundImage: imgSRC
				? `url('${ encodeURI( imgSRC ) }')`
				: undefined,
			borderColor: borderColor ? borderColor : undefined,
			backgroundColor: backgroundColorClass
				? undefined
				: customBackgroundColor,
			backgroundPosition:
				imgFocalPoint && 'custom' === imgPosition
					? `${ imgFocalPoint.x * 100 }% ${ imgFocalPoint.y * 100 }%`
					: undefined,
			WebkitAnimation:
				imgID && imgEffect && imgEffect.includes( 'animate' )
					? `${ keyFrames } 40s linear infinite`
					: undefined,
			animation:
				imgID && imgEffect && imgEffect.includes( 'animate' )
					? `${ keyFrames } 40s linear infinite`
					: undefined,
			marginTop: marginTop ? marginTop : undefined,
			marginRight: marginRight ? marginRight : undefined,
			marginBottom: marginBottom ? marginBottom : undefined,
			marginLeft: marginLeft ? marginLeft : undefined,
		};

		// Inner `div`
		const innerClasses = classnames(
			'wp-block-mypreview-container__wrapper',
			{
				[ `hrz-align-dk-${ alignDesktop }` ]: !! alignDesktop,
				[ `hrz-align-lp-${ alignLaptop }` ]: !! alignLaptop,
				[ `hrz-align-tb-${ alignTablet }` ]: !! alignTablet,
				[ `hrz-align-sp-${ alignSmartphone }` ]: !! alignSmartphone,
			}
		);
		const innerStyles = {
			maxWidth: width ? `${ parseInt( width ) }px` : undefined,
		};

		// Scroll icon
		const scrlIconClasses = classnames(
			'wp-block-mypreview-container__scrl',
			{
				'has-text-color': scrlColor || customScrlColor,
				[ scrlColorClass ]: scrlColorClass,
			}
		);

		// Separator (Shape divider)
		const shapeClasses = classnames(
			'wp-block-mypreview-container__shape',
			{
				'has-text-color': shapeColor || customShapeColor,
				[ shapeColorClass ]: shapeColorClass,
				[ `wp-block-mypreview-container__shape--${ shapeType }` ]: shapeType,
			}
		);
		const shapeStyles = {
			color: shapeColorClass ? undefined : customShapeColor,
			height:
				shapeType && shapeType.includes( 'custom' )
					? `${ parseFloat( shapeHeight ) }%`
					: null,
		};

		return (
			<div
				className={ wrapperClasses }
				style={ wrapperStyles }
				data-href={ linkUrl ? encodeURI( linkUrl ) : null }
				data-href-target={ linkUrl && linkTarget ? '_blank' : null }
				data-aos={ aosType ? aosType : null }
				data-aos-once={ aosType && aosOnce ? 'true' : null }
				data-aos-offset={
					aosType && aosOffset ? parseInt( aosOffset ) : null
				}
				data-aos-duration={
					aosType && aosDuration ? parseInt( aosDuration ) : null
				}
				data-aos-delay={
					aosType && aosDelay ? parseInt( aosDelay ) : null
				}
				data-aos-easing={ aosType && aosEase ? aosEase : null }
				aria-label={ ariaLabel ? escape( ariaLabel ) : null }
			>
				{ imgID && imgEffect && imgEffect.includes( 'animate' ) && (
					<style
						dangerouslySetInnerHTML={ {
							__html: `
                            @keyframes ${ keyFrames } {
                                from { background-position: 0 0 } 
                                to { background-position: ${
									imgEffect.includes( 'left' )
										? -Math.abs( imgWidth )
										: Math.abs( imgWidth )
								}px 0 }
                            }`,
						} }
					/>
				) }
				<div className={ innerClasses } style={ innerStyles }>
					<InnerBlocks.Content />
				</div>
				{ !! scrlShow && (
					<a
						href={ scrlTarget ? `#!${ scrlTarget }` : null }
						className={ scrlIconClasses }
					/>
				) }
				{ !! videoID && (
					<div className="wp-block-mypreview-container__video">
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
					<div className={ shapeClasses } style={ shapeStyles }>
						{ shapes.hasOwnProperty( shapeType ) &&
							shapes[ shapeType ] }
					</div>
				) }
			</div>
		);
	}
}
