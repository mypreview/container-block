/**
 * All of the the public-facing JavaScript code for Gutenberg editor's built-in
 * container block reside in this file.
 *
 * @requires    wp-block-editor
 * @package     container-block
 * @author     	MyPreview (Github: @mahdiyazdani, @mypreview)
 */

/**
 * Block dependencies
 */
import './style.css';
import 'aos/dist/aos.css';
import $ from 'jquery';
import jump from 'jump.js';

( function( wp, $ ) {

	const container = {

		cache: function() {
			container.els = {};
			container.vars = {};
			container.vars.wpAdminBar = '#wpadminbar';
			container.vars.el = '.wp-block-my-container';
			container.els.href = $( `${ container.vars.el }[data-href]` );
			container.els.scrl = $( `${ container.vars.el }__scrl[href^="#!"]` );
			container.els.svgs = $( `${ container.vars.el }__shape > svg` );
		},
		// Run after the window is loaded
		ready: function() {
			container.cache();
			container.onHref();
			container.onJump();
			container.svgShim();
		},
		onHref: function() {
			container.els.href.on( 'click', function( event ) {
				// Default action of the event should not be triggered.
	    		event.preventDefault();
	    		// Prevents the event from bubbling up the DOM tree.
	    		event.stopPropagation();

	    		const href = $( this ).data( 'href' ) ? $( this ).data( 'href' ) : null,
	    			  target = $( this ).data( 'href-target' ) ? $( this ).data( 'href-target' ) : '_self';

	    		if ( href && href.length && target && target.length ) {
	    			// Open in a new window
	    			if ( '_blank' === target ) {
	    				// Avoid returning a reference from the window that opened this URL using open().
	    				var windowOpen = window.open();
						windowOpen.opener = null;
						windowOpen.location = encodeURI( href );
						windowOpen.target = '_blank';
					// Open in the same tab
	    			} else {
	    				window.open( encodeURI( href ), '_self' );
	    			} // End If Statement
	    		} // End If Statement
	    	} );
		},
		onJump: function() {
			container.els.scrl.on( 'click', function( event ) {
				// Default action of the event should not be triggered.
	    		event.preventDefault();
	    		// Prevents the event from bubbling up the DOM tree.
	    		event.stopPropagation();

	    		const offset = $( container.vars.wpAdminBar ).length ? $( container.vars.wpAdminBar ).height() : 0,
	    			  target = $( this ).attr( 'href' ).replace( '#!', '#' ).trim();

	    		if ( $( target ).length ) {
	    			jump( target, {
	    				offset: -Math.abs( offset ),
	    				a11y: true
	    			} );
	    		} // End If Statement
	    	} );
		},
		svgShim: function() {
			/MSIE \d|Trident.*rv:/.test( navigator.userAgent ) && [].forEach.call( container.els.svgs, function( target ) {
				! function( target ) {
					let color = window.getComputedStyle( target, null ).getPropertyValue( 'color' ),
						element = ( new XMLSerializer ).serializeToString( target );
					element = "data:image/svg+xml," + ( element = ( element = ( element = ( element = ( element = ( element = element.replace( /currentColor/g, color ) ).replace(/\s\s+/g, ' ' ) ).replace( /</g, '%3C' ) ).replace( />/g, '%3E' ) ).replace( /#/g, '%23' ) ).replace( /"/g, "'" ) );
					let object = document.createElement( 'img' );
					object.src = element, object.alt = '...';
					let node = target.parentNode;
					node.appendChild( object ), node.removeChild( target );
				}( target )
			} );
		}

	};

	$( document ).ready( container.ready() );

} )( window.wp, jQuery );