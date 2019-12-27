/**
 * Block dependencies
 */
import classnames from 'classnames';
import includes from 'lodash/includes';
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

		const { 
			attributes } = this.props;

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
            link,
			img,
			video,
			dim,
			aos,
			valign,
            backgroundColor,
            customBackgroundColor,
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
            target: scrlTarget,
            color: scrlColor,
            customColor: customScrlColor } = scroll;
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
            color: borderColor,
            customColor: customBorderColor } = border;
        // Link-to
        const {
            url: linkUrl,
            target: linkTarget } = link;
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
            color: shapeColor,
            customColor: customShapeColor } = shape;

        let keyFrames = null;
        if ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) {
            keyFrames = keyframes`
                from { background-position: 0 0 } 
                to { background-position: ${ imgEffect.includes( 'left' )  ?  -Math.abs( imgWidth )  :  Math.abs( imgWidth ) }px 0 }
            `;
        } // End If Statement

        const shapeColorClass = getColorClassName( 'color', shapeColor ),
              scrlColorClass = getColorClassName( 'color', scrlColor ),
              borderColorClass = getColorClassName( 'border-color', borderColor ),
              backgroundColorClass = getColorClassName( 'background-color', backgroundColor );

        // Wrapper
        const wrapperClasses = classnames( 
            {
                'has-border': borderColorClass || customBorderColor,
                [ borderColorClass ]: borderColorClass,
                'has-background': backgroundColor || customBackgroundColor,
                [ backgroundColorClass ]: backgroundColorClass
            },
            isFH  ?  'wp-block-mypreview-container--full-height'  :  null,
            scrlShow  ?  'wp-block-mypreview-container--scrl-icon'  :  null,
            dim  ?  `wp-block-mypreview-container--dim-${ parseInt( dim ) }` : null,
            shadow  ?  `wp-block-mypreview-container--shadow-${ shadow }`  :  null,
            ( isFH && valign )  ?  `has-valign-${ valign }`  :  null,
            imgID  ?  'has-background-img'  :  null,
            imgPosition  ?  `has-background-img--${ imgPosition }`  :  null,
            imgRepeat  ?  `has-background-img--${ imgRepeat }`  :  null,
            imgSize  ?  `has-background-img--${ imgSize }`  :  null,
            imgEffect  ?  `has-background-img--${ imgEffect }`  :  null,
            videoID  ?  'has-background-video'  :  null,
            hrzDesktop  ?  `hrz-spacing-dk-${ hrzDesktop }`  :  null,
            hrzLaptop  ?  `hrz-spacing-lp-${ hrzLaptop }`  :  null,
            hrzTablet  ?  `hrz-spacing-tb-${ hrzTablet }`  :  null,
            hrzSmartphone   ?  `hrz-spacing-sp-${ hrzSmartphone }`  :  null,
            borderColor  ?  'has-border'  :  null,
            borderWidth  ?  `has-border--width-${ borderWidth }`  :  null,
            borderRadius  ?  `has-border--radius-${ borderRadius }`  :  null,
            visDesktop  ?  'hide-dk'  :  null,
            visLaptop  ?  'hide-lp'  :  null,
            visTablet  ?  'hide-tb'  :  null,
            visSmartphone  ?  'hide-sp'  :  null
        );
        const wrapperStyles = {
            backgroundImage: imgSRC  ?  `url('${ encodeURI( imgSRC ) }')` : undefined,
            borderColor: borderColorClass  ?  undefined  :  customBorderColor,
            backgroundColor: backgroundColorClass  ?  undefined  :  customBackgroundColor,
            backgroundPosition: ( imgFocalPoint && 'custom' === imgPosition )  ?  `${ imgFocalPoint.x * 100 }% ${ imgFocalPoint.y * 100 }%`  :  undefined,
            WebkitAnimation: ( imgID && imgEffect && imgEffect.includes( 'animate' ) )  ?  `${ keyFrames } 40s linear infinite`  :  undefined,
            animation: ( imgID && imgEffect && imgEffect.includes( 'animate' ) )  ?  `${ keyFrames } 40s linear infinite`  :  undefined
        };

        // Inner `div`
        const innerClasses = classnames( 
            'wp-block-mypreview-container__wrapper',
            alignDesktop  ?  `hrz-align-dk-${ alignDesktop }`  :  null,
            alignLaptop  ?  `hrz-align-lp-${ alignLaptop }`  :  null,
            alignTablet  ?  `hrz-align-tb-${ alignTablet }`  :  null,
            alignSmartphone  ?  `hrz-align-sp-${ alignSmartphone }`  :  null
        );
        const innerStyles  =  {
            maxWidth: width  ?  `${ parseInt( width ) }px`  :  undefined
        };

        // Scroll icon
        const scrlIconClasses = classnames( 
            {
                [ scrlColorClass ]: scrlColorClass,
                'has-text-color': scrlColor || customScrlColor
            },
            'wp-block-mypreview-container__scrl'
        );

        // Separator (Shape divider)
        const shapeClasses = classnames( 
            {
                'has-text-color': shapeColor || customShapeColor,
                [ shapeColorClass ]: shapeColorClass
            },
            'wp-block-mypreview-container__shape',
            shapeType  ?  `wp-block-mypreview-container__shape--${ shapeType }`  :  null,
        );
        const shapeStyles = {
            color: shapeColorClass  ?  undefined  :  customShapeColor,
            height: ( shapeType && shapeType.includes( 'custom' ) )  ?  `${ parseFloat( shapeHeight ) }%`  :  null
        };

        return (
            <div 
                className={ wrapperClasses }
                style={ wrapperStyles }
                data-href={ linkUrl  ?  encodeURI( linkUrl ) : null }
                data-href-target={ ( linkUrl && linkTarget )  ?  '_blank' : null }
                data-aos={ aosType  ?  aosType  :  null }
                data-aos-once={ ( aosType && aosOnce )  ?  'true'  :  null }
                data-aos-offset={ ( aosType && aosOffset )  ?  parseInt( aosOffset )  :  null }
                data-aos-duration={ ( aosType && aosDuration )  ?  parseInt( aosDuration )  :  null }
                data-aos-delay={ ( aosType && aosDelay )  ?  parseInt( aosDelay )  :  null }
                data-aos-easing={ ( aosType && aosEase )  ?  aosEase  :  null }
                aria-label={ ariaLabel  ?  escape( ariaLabel )  :  null }
            >
                { ( imgID && imgEffect && imgEffect.includes( 'animate' ) ) && (
                    <style dangerouslySetInnerHTML=
                        { { __html: `
                            @keyframes ${ keyFrames } {
                                from { background-position: 0 0 } 
                                to { background-position: ${ imgEffect.includes( 'left' )  ?  -Math.abs( imgWidth )  :  Math.abs( imgWidth ) }px 0 }
                            }` 
                        } }
                    />
                ) }
                <div 
                    className={ innerClasses }
                    style={ innerStyles }
                >
                    <InnerBlocks.Content /> 
                </div>
                { scrlShow && ( 
                    <a
                        href={ scrlTarget  ?  `#${ scrlTarget }` : null }
                        className={ scrlIconClasses }
                    />
                ) }
                { videoID && ( 
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
                { shapeType && ( 
                    <div 
                        className={ shapeClasses }
                        style={ shapeStyles }
                    >
                        { shapes.hasOwnProperty( shapeType ) && (
                            shapes[shapeType]
                        ) }
                    </div>
                ) }
            </div>
        );
	}
};