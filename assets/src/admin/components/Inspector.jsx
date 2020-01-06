/**
 * Block dependencies
 */
import AOS from 'aos';
import $ from 'jquery';
import includes from 'lodash/includes';
import defaultColors from './../utils/colors';
import defaultTabs from './../utils/tabs';
import applyWithColors from './../utils/withColors';
import applyWithSelect from './../utils/withSelect';
import applyWithFallbackStyles from './../utils/withFallbackStyles';

/**
 * Internal block libraries
 */
const { _x, sprintf } = wp.i18n;
const { Fragment, Component } = wp.element;
const { compose } = wp.compose;
const { URLInput, InspectorControls, InspectorAdvancedControls, AlignmentToolbar, PanelColorSettings, getColorObjectByColorValue } = wp.blockEditor;
const { ButtonGroup, Button, BaseControl, RangeControl, SelectControl, PanelBody, TextControl, TabPanel, FocalPointPicker, ToggleControl, ColorPalette, ColorIndicator, ExternalLink } = wp.components;

export default compose( applyWithColors, applyWithSelect, applyWithFallbackStyles ) ( class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
		this.setObjUndefined = this.setObjUndefined.bind( this );
	}

	setObjUndefined( obj ) {
		// Set all values of the object to undefined
		for ( let key in obj ) {
			if ( obj.hasOwnProperty( key ) ) {
	  			obj[key] = undefined;
	  		} // End If Statement
		} // End of the loop

		return obj;
	}

	componentDidUpdate( prevProps ) {
		const { 
			aos: prevAOS } = prevProps.attributes;
		const {
			type: prevAosType,
			duration: prevAosDuration,
			ease: prevAosEase } = prevAOS;
		const { 
			clientId,
			attributes } = this.props;
		const { 
			aos } = attributes;
		const {
			type: aosType,
			duration: aosDuration,
			ease: aosEase } = aos;

		// Bail-out, in case the animation is turned off or hasn’t changed.
		if ( ! aosType || ( aosType === prevAosType && aosEase === prevAosEase ) ) {
			return;
		} else {
			// Remove the `AOS` specific classnames so we can hard-refresh the animation manually.
			$( `#block-${ clientId } .wp-block-mypreview-container` ).removeClass( 'aos-init aos-animate' );
			// Note that duration must match to whatever number that the user has chosen.
			setTimeout( function() {
				AOS.refreshHard();
			}, aosDuration || 400 );
			clearTimeout();
		} // End If Statement
	}

	render() {

		const { 
			colors,
			setBackgroundColor,
			backgroundColor,
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
			link,
			img,
			video,
			dim,
			aos } = attributes;

		// List of available background size options.
		const imgPositionControls = [
        	{ label: _x( 'None', 'image position', 'container-block' ), value: '' },
            { label: _x( 'Left Top', 'image position', 'container-block' ), value: 'left-top' },
            { label: _x( 'Left Center', 'image position', 'container-block' ), value: 'left-center' },
            { label: _x( 'Left Bottom', 'image position', 'container-block' ), value: 'left-bottom' },
            { label: _x( 'Right Top', 'image position', 'container-block' ), value: 'right-top' },
            { label: _x( 'Right Center', 'image position', 'container-block' ), value: 'right-center' },
            { label: _x( 'Right Bottom', 'image position', 'container-block' ), value: 'right-bottom' },
            { label: _x( 'Center Top', 'image position', 'container-block' ), value: 'top' },
            { label: _x( 'Center Center', 'image position', 'container-block' ), value: 'center' },
            { label: _x( 'Center Bottom', 'image position', 'container-block' ), value: 'bottom' }
    	];
    	// Append the custom value to the list.
    	if ( 'animate-left' !== imgEffect && 'animate-right' !== imgEffect ) {
    		imgPositionControls.push( 
    			{ label: _x( 'Custom', 'image position', 'container-block' ), value: 'custom' }
    		);
    	} // End If Statement
		// Image
		const {
			id: imgID,
	        src: imgSRC,
	        position: imgPosition,
	        focalPoint: imgFocalPoint,
	        repeat: imgRepeat,
	        size: imgSize,
	        effect: imgEffect } = img;
	    // Video
		const {
			id: videoID } = video;
		// Scroll-to
		const {
			show: scrlShow,
			target: scrlTarget,
			color: scrlColor,
			customColor: customScrlColor } = scroll;
		// Visibility
		const {
			desktop: visDesktop,
			laptop: visLaptop,
			tablet: visTablet,
			smartphone: visSmartphone } = visible;
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
		// Link-to
		const {
			url: linkUrl,
			target: linkTarget } = link;
		// Shape
		const {
			type: shapeType,
			height: shapeHeight,
			color: shapeColor,
			customColor: customShapeColor } = shape;
		// Animation
		const {
			type: aosType,
			once: aosOnce,
			offset: aosOffset,
			duration: aosDuration,
			delay: aosDelay,
			ease: aosEase } = aos;

		// Image - Position
		const onChangeImgPosition = value => {
			setAttributes( { img: { 
				...img,
		        position: value
			} } );
		};
		// Image - Focal Point
		const onChangeFocalPoint = value => {
			setAttributes( { img: { 
				...img,
		        focalPoint: value
			} } );
		};
		// Image - Repeat
		const onChangeImgRepeat = value => {
			setAttributes( { img: { 
				...img,
		        repeat: value
			} } );
		};
		// Image - Size
		const onChangeImgSize = value => {
			setAttributes( { img: { 
				...img,
		        size: value
			} } );
		};
		// Scroll — Status
		const onChangeScrlShow = value => {
			if ( ! value ) {
				setAttributes( { 
					scroll: { ...this.setObjUndefined( scroll ) }
				} );
			} else {
				setAttributes( { scroll: { 
					...scroll,
					show: ! scrlShow
				} } );
			} // End If Statement
		};
		// Scroll — Target
		const onChangeScrlTarget = value => {
			setAttributes( { scroll: { 
				...scroll,
				target: value
			} } );
		};
		// Scroll — Color
		const onChangeScrlColor = value => {
			const colorObject = getColorObjectByColorValue( colors, value );
			setAttributes( { scroll: { 
				...scroll,
				color: colorObject ? colorObject.slug : undefined,
				customColor:value
			} } );
		}
		// Visibility — Desktop
		const onChangeVisDesktop = value => {
			setAttributes( { visible: { 
				...visible,
				desktop: ! visDesktop
			} } );
		};
		// Visibility — Laptop
		const onChangeVisLaptop = value => {
			setAttributes( { visible: { 
				...visible,
				laptop: ! visLaptop
			} } );
		};
		// Visibility — Tablet
		const onChangeVisTablet = value => {
			setAttributes( { visible: { 
				...visible,
				tablet: ! visTablet
			} } );
		};
		// Visibility — Mobile
		const onChangeVisSmartphone = value => {
			setAttributes( { visible: { 
				...visible,
				smartphone: ! visSmartphone
			} } );
		};
		// Spacing — Desktop
		const onChangeHrzDesktop = value => {
			setAttributes( { spacing: { 
				...spacing,
				desktop: value
			} } );
		};
		// Spacing — Laptop
		const onChangeHrzLaptop = value => {
			setAttributes( { spacing: { 
				...spacing,
				laptop: value
			} } );
		};
		// Spacing — Tablet
		const onChangeHrzTablet = value => {
			setAttributes( { spacing: { 
				...spacing,
				tablet: value
			} } );
		};
		// Spacing — Mobile
		const onChangeHrzSmartphone = value => {
			setAttributes( { spacing: { 
				...spacing,
				smartphone: value
			} } );
		};
		// Alignment — Desktop
		const onChangeAlignDesktop = value => {
			setAttributes( { alignment: { 
				...alignment,
				desktop: value
			} } );
		};
		// Alignment — Laptop
		const onChangeAlignLaptop = value => {
			setAttributes( { alignment: { 
				...alignment,
				laptop: value
			} } );
		};
		// Alignment — Tablet
		const onChangeAlignTablet = value => {
			setAttributes( { alignment: { 
				...alignment,
				tablet: value
			} } );
		};
		// Alignment — Mobile
		const onChangeAlignSmartphone = value => {
			setAttributes( { alignment: { 
				...alignment,
				smartphone: value
			} } );
		};
		// Border — Width
		const onClickBorder = value => {
			if ( ! value.target.value ) {
				setAttributes( { 
					border: { ...this.setObjUndefined( border ) }
				} );
			} else {
				setAttributes( { border: { 
					...border,
					width: value.target.value
				} } );
			} // End If Statement
		};
		// Border — Radius
		const onClickBorderRadius = value => {
			setAttributes( { border: { 
				...border,
				radius: value.target.value
			} } );
		};
		// Border — Color
		const onChangeBorderColor = value => {
			setAttributes( { border: { 
				...border,
				color: value
			} } );
		};
		// Border - Reset
		const onClickBorderReset = value => {
			setAttributes( { 
				border: { ...this.setObjUndefined( border ) }
			} );
		};
		// Border Radius - Reset
		const onClickBorderRadiusReset = value => {
			setAttributes( { border: { 
				...border,
				radius: undefined
			} } );
		};
		// Link — Url
		const onChangeLinkUrl = value => {
			setAttributes( { link: { 
				...link,
				url: value
			} } );
		};
		// Link — Url
		const onChangeLinkTarget = value => {
			setAttributes( { link: { 
				...link,
				target: ! linkTarget
			} } );
		};
		// Shape — Type
		const onChangeShapeType = value => {
			if ( ! value ) {
				setAttributes( { 
					shape: { ...this.setObjUndefined( shape ) }
				} );
			} else {
				setAttributes( { shape: { 
					...shape,
					type: value
				} } );
			} // End If Statement
		};
		// Shape — Height
		const onChangeShapeHeight = value => {
			setAttributes( { shape: { 
				...shape,
				height: value
			} } );
		};
		// Shape — Color
		const onChangeShapeColor = value => {
			const colorObject = getColorObjectByColorValue( colors, value );
			setAttributes( { shape: { 
				...shape,
				color: colorObject ? colorObject.slug : undefined,
				customColor:value
			} } );
		};
		// AOS — Type
		const onChangeAosType = value => {
			if ( ! value ) {
				setAttributes( { 
					aos: { ...this.setObjUndefined( aos ) }
				} );
			} else {
				setAttributes( { aos: { 
					...aos,
					type: value
				} } );
			} // End If Statement
		};
		// AOS — Ease
		const onChangeAosEase = value => {
			setAttributes( { aos: { 
				...aos,
				ease: value
			} } );
		};
		// AOS — Offset
		const onChangeAosOffset = value => {
			setAttributes( { aos: { 
				...aos,
				offset: value
			} } );
		};
		// AOS — Delay
		const onChangeAosDelay = value => {
			setAttributes( { aos: { 
				...aos,
				delay: value
			} } );
		};
		// AOS — Duration
		const onChangeAosDuration = value => {
			setAttributes( { aos: { 
				...aos,
				duration: value
			} } );
		};
		// AOS — Once
		const onChangeAosOnce = value => {
			setAttributes( { aos: { 
				...aos,
				once: ! aosOnce
			} } );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody 
						initialOpen={ true }
					>
						<RangeControl
	                        label={ _x( 'Width', 'control label', 'container-block' ) }
	                        help={ _x( 'Maximum width of the inner wrapper.', 'panel title', 'container-block' ) }
	                        allowReset={ true }
	                        value={ width }
	                        onChange={ value => setAttributes( { width: value || undefined } ) }
	                        step="1"
	                        min="100"
	                        max="1920"
	                    />
					</PanelBody>
					<PanelBody 
						title={ _x( 'Display Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ _x( 'Full-height?', 'control label', 'container-block' ) }
							help={ _x( 'Stretches the container to fit the whole height of the browser window.', 'control help', 'container-block' ) }
							checked={ !! isFH }
							onChange={ () => setAttributes( { isFH: ! isFH } ) }
						/>
						<ToggleControl
							label={ _x( 'Scroll down icon', 'control label', 'container-block' ) }
							help={ _x( 'Displays a delicate scrolling mouse wheel animation that will offer direction to the user after the initial land on a website.', 'control help', 'container-block' ) }
							checked={ !! scrlShow }
							onChange={ onChangeScrlShow }
						/>
						{ scrlShow && (
							<Fragment>
								<TextControl
							        label={ _x( 'Element ID', 'control label', 'container-block' ) }
							        help={ _x( 'Smoothly scroll the window to a specific element or tag ID within the page.', 'control help', 'container-block' ) }
							        value={ scrlTarget }
							        onChange={ onChangeScrlTarget }
							    />
							    <p
		                            className="components-base-control__field components-base-control__flex"
		                        >
		                            <span
		                                className="components-base-control__label"
		                            >
		                                { _x( 'Color', 'color label', 'container-block' ) }
		                            </span>
		                            { customScrlColor && (
		                                <ColorIndicator 
		                                    colorValue={ customScrlColor } 
		                                />
		                            ) }
		                        </p>
								<ColorPalette
									clearable={ true }
		                            colors={ colors || defaultColors }
		                            value={ customScrlColor }
		                            onChange={ onChangeScrlColor }
		                        />
							</Fragment>
						) }
					</PanelBody>
					<PanelBody 
						title={ _x( 'Visibility Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<TabPanel 
                        	className="components-tab-panel components-insp-tabs"
					        activeClass="components-insp-tabs__active"
					        tabs={ defaultTabs }
					    >
					        {
					            tab => {
					            	return (
					            		<Fragment>
						            		{ 'desktop' === tab.name && (
						            			<ToggleControl
													label={ _x( 'Hide from the view?', 'control label', 'container-block' ) }
													checked={ !! visDesktop }
													onChange={ onChangeVisDesktop }
												/>
						            		) }
						            		{ 'laptop' === tab.name && (
						            			<ToggleControl
													label={ _x( 'Hide from the view?', 'control label', 'container-block' ) }
													checked={ !! visLaptop }
													onChange={ onChangeVisLaptop }
												/>
						            		) }
						            		{ 'tablet' === tab.name && (
						            			<ToggleControl
													label={ _x( 'Hide from the view?', 'control label', 'container-block' ) }
													checked={ !! visTablet }
													onChange={ onChangeVisTablet }
												/>
						            		) }
						            		{ 'smartphone' === tab.name && (
						            			<ToggleControl
													label={ _x( 'Hide from the view?', 'control label', 'container-block' ) }
													checked={ !! visSmartphone }
													onChange={ onChangeVisSmartphone }
												/>
						            		) }
					            		</Fragment>
					            	)
					            }
					        }
					    </TabPanel>
					</PanelBody>
					<PanelBody 
						title={ _x( 'Spacing Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
                        <TabPanel 
                        	className="components-tab-panel components-insp-tabs"
				        	activeClass="components-insp-tabs__active"
					        tabs={ defaultTabs }
					    >
					        {
					            tab => {
					            	return (
					            		<Fragment>
						            		{ 'desktop' === tab.name && (
						            			<RangeControl
						            				readonly="readonly"
							                        allowReset={ true }
							                        value={ hrzDesktop }
							                        onChange={ onChangeHrzDesktop }
							                        step="5"
							                        min="0"
							                        max="50"
							                    />
						            		) }
						            		{ 'laptop' === tab.name && (
						            			<RangeControl
						            				readonly="readonly"
							                        allowReset={ true }
							                        value={ hrzLaptop }
							                        onChange={ onChangeHrzLaptop }
							                        step="5"
							                        min="0"
							                        max="50"
							                    />
						            		) }
						            		{ 'tablet' === tab.name && (
						            			<RangeControl
						            				readonly="readonly"
							                        allowReset={ true }
							                        value={ hrzTablet }
							                        onChange={ onChangeHrzTablet }
							                        step="5"
							                        min="0"
							                        max="50"
							                    />
						            		) }
						            		{ 'smartphone' === tab.name && (
						            			<RangeControl
						            				readonly="readonly"
							                        allowReset={ true }
							                        value={ hrzSmartphone }
							                        onChange={ onChangeHrzSmartphone }
							                        step="5"
							                        min="0"
							                        max="50"
							                    />
						            		) }
					            		</Fragment>
					            	)
					            }
					        }
					    </TabPanel>
                    </PanelBody>
                    <PanelBody 
						title={ _x( 'Alignment Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
                        <TabPanel 
                        	className="components-tab-panel components-insp-tabs"
				        	activeClass="components-insp-tabs__active"
					        tabs={ defaultTabs }
					    >
					        {
					            tab => {
					            	return (
					            		<Fragment>
						            		{ 'desktop' === tab.name && (
						            			<AlignmentToolbar
						                    		isCollapsed={ false }
													value={ alignDesktop }
													onChange={ onChangeAlignDesktop }
												/>
						            		) }
						            		{ 'laptop' === tab.name && (
						            			<AlignmentToolbar
						                    		isCollapsed={ false }
													value={ alignLaptop }
													onChange={ onChangeAlignLaptop }
												/>
						            		) }
						            		{ 'tablet' === tab.name && (
						            			<AlignmentToolbar
						                    		isCollapsed={ false }
													value={ alignTablet }
													onChange={ onChangeAlignTablet }
												/>
						            		) }
						            		{ 'smartphone' === tab.name && (
						            			<AlignmentToolbar
						                    		isCollapsed={ false }
													value={ alignSmartphone }
													onChange={ onChangeAlignSmartphone }
												/>
						            		) }
					            		</Fragment>
					            	)
					            }
					        }
					    </TabPanel>
                    </PanelBody>
					<PanelBody 
						title={ _x( 'Link to Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<URLInput
							hasBorder
							isFullWidth
                            value={ linkUrl }
                            autoFocus={ false }
                            className="components-base-control"
                            disableSuggestions={ ! isSelected }
                            onChange={ onChangeLinkUrl }
                        />
                        { linkUrl && (
                        	<ToggleControl
								label={ _x( 'Open in a new window?', 'control label', 'container-block' ) }
								checked={ !! linkTarget }
								onChange={ onChangeLinkTarget }
							/>
						) }
					</PanelBody>
					<PanelBody 
						title={ _x( 'Border Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<BaseControl>
							<ButtonGroup
								aria-label={ _x( 'Border Thickness', 'aria label', 'container-block' ) }
							>
								<Button 
									isSmall
									value="thin"
									isPrimary={ 'thin' === borderWidth ? true : false }
									onClick={ onClickBorder }
								>
									{ _x( 'Thin', 'border thickness', 'container-block' ) }
								</Button>
								<Button 
									isSmall
									value="medium"
									isPrimary={ 'medium' === borderWidth ? true : false }
									onClick={ onClickBorder }
								>
									{ _x( 'Medium', 'border thickness', 'container-block' ) }
								</Button>
								<Button 
									isSmall
									value="thick"
									isPrimary={ 'thick' === borderWidth ? true : false }
									onClick={ onClickBorder }
								>
									{ _x( 'Thick', 'border thickness', 'container-block' ) }
								</Button>
							</ButtonGroup>
							<Button
								isSmall
								isDestructive
								className="alignright"
								onClick={ onClickBorderReset }
							>
								{ _x( 'Reset', 'button label', 'container-block' ) }
							</Button>
						</BaseControl>
						{ borderWidth && (
							<Fragment>
								<BaseControl
									className="components-base-control--label-block"
									label={ _x( 'Rounded corners?', 'control label', 'container-block' ) }
									help={ _x( 'Defines the radius of the corners.', 'control help', 'container-block' ) }
								>
									<ButtonGroup
										aria-label={ _x( 'Border Radius', 'aria label', 'container-block' ) }
									>
										<Button 
											isSmall
											value="edge"
											isPrimary={ 'edge' === borderRadius ? true : false }
											onClick={ onClickBorderRadius }
										>
											{ _x( 'Edge', 'border radius', 'container-block' ) }
										</Button>
										<Button 
											isSmall
											value="round"
											isPrimary={ 'round' === borderRadius ? true : false }
											onClick={ onClickBorderRadius }
										>
											{ _x( 'Round', 'border radius', 'container-block' ) }
										</Button>
										<Button 
											isSmall
											value="pill"
											isPrimary={ 'pill' === borderRadius ? true : false }
											onClick={ onClickBorderRadius }
										>
											{ _x( 'Pill', 'border radius', 'container-block' ) }
										</Button>
									</ButtonGroup>
									<Button
										isSmall
										isDestructive
										className="alignright"
										onClick={ onClickBorderRadiusReset }
									>
										{ _x( 'Reset', 'button label', 'container-block' ) }
									</Button>
								</BaseControl>
								<p
		                            className="components-base-control__field components-base-control__flex"
		                        >
		                            <span
		                                className="components-base-control__label"
		                            >
		                                { _x( 'Color', 'color label', 'container-block' ) }
		                            </span>
		                            { borderColor && (
		                                <ColorIndicator 
		                                    colorValue={ borderColor } 
		                                />
		                            ) }
		                        </p>
								<ColorPalette
									clearable={ true }
		                            colors={ colors || defaultColors }
		                            value={ borderColor }
		                            onChange={ onChangeBorderColor }
		                        />
	                        </Fragment>
						) }
					</PanelBody>
					<PanelBody 
						title={ _x( 'Shadow Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<SelectControl
					        label={ _x( 'Type', 'control label', 'container-block' ) }
					        help={ _x( 'Shadow utlities to add a box shadow to the element.', 'control help', 'container-block' ) }
					        value={ shadow }
					        options={ [
					            { label: _x( 'None', 'shadow style', 'container-block' ), value: '' },
					            { label: _x( 'Light', 'shadow style', 'container-block' ), value: 'light' },
					            { label: _x( 'Light Large', 'shadow style', 'container-block' ), value: 'light-lg' },
					            { label: _x( 'Dark', 'shadow style', 'container-block' ), value: 'dark' },
					            { label: _x( 'Dark Large', 'shadow style', 'container-block' ), value: 'dark-lg' },
					            { label: _x( 'Lift', 'shadow style', 'container-block' ), value: 'lift' },
					        ] }
					        onChange={ value => setAttributes( { shadow: value || undefined } ) }
					    />
					</PanelBody>
					<PanelBody 
						title={ _x( 'Shape Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<SelectControl
					        label={ _x( 'Type', 'control label', 'container-block' ) }
					        help={ _x( 'Multiple shapes to use as separators for sections or as the background graphic.', 'control help', 'container-block' ) }
					        value={ shapeType }
					        options={ [
					            { label: _x( 'None', 'shape style', 'container-block' ), value: '' },
					            { label: _x( 'Simple', 'shape style', 'container-block' ), value: 'simple-custom' },
					            { label: _x( 'Concave Up', 'shape style', 'container-block' ), value: 'concave-up' },
					            { label: _x( 'Concave Up (Adjustable)', 'shape style', 'container-block' ), value: 'concave-up-custom' },
					            { label: _x( 'Concave Down', 'shape style', 'container-block' ), value: 'concave-down' },
					            { label: _x( 'Concave Up, Increasing', 'shape style', 'container-block' ), value: 'concave-up-increasing' },
					            { label: _x( 'Concave Up, Decreasing', 'shape style', 'container-block' ), value: 'concave-up-decreasing' },
					            { label: _x( 'Curve Left', 'shape style', 'container-block' ), value: 'curve-left' },
					            { label: _x( 'Curve Right', 'shape style', 'container-block' ), value: 'curve-right' },
					            { label: _x( 'Angle Top', 'shape style', 'container-block' ), value: 'angle-top' },
					            { label: _x( 'Angle Right', 'shape style', 'container-block' ), value: 'angle-right' },
					            { label: _x( 'Angle Bottom', 'shape style', 'container-block' ), value: 'angle-bottom' },
					            { label: _x( 'Angle Left', 'shape style', 'container-block' ), value: 'angle-left' },
					            { label: _x( 'Wave', 'shape style', 'container-block' ), value: 'wave' },
					            { label: _x( 'Blur 1', 'shape style', 'container-block' ), value: 'blur-1' },
					            { label: _x( 'Blur 2', 'shape style', 'container-block' ), value: 'blur-2' },
					            { label: _x( 'Blur 3', 'shape style', 'container-block' ), value: 'blur-3' },
					            { label: _x( 'Blur 4', 'shape style', 'container-block' ), value: 'blur-4' }
					        ] }
					        onChange={ onChangeShapeType }
					    />
					    { shapeType && (
						    <Fragment>
						    	{ shapeType.includes( 'custom' ) && (
							    	<RangeControl
								    	readonly="readonly"
				                        label={ _x( 'Height', 'control label', 'container-block' ) }
				                        value={ shapeHeight }
				                        onChange={ onChangeShapeHeight }
				                        step="0.5"
				                        min="5"
				                        max="100"
				                    />
			                    ) }
			                    <p
		                            className="components-base-control__field components-base-control__flex"
		                        >
		                            <span
		                                className="components-base-control__label"
		                            >
		                                { _x( 'Color', 'color label', 'container-block' ) }
		                            </span>
		                            { customShapeColor && (
		                                <ColorIndicator 
		                                    colorValue={ customShapeColor } 
		                                />
		                            ) }
		                        </p>
								<ColorPalette
									clearable={ true }
		                            colors={ colors || defaultColors }
		                            value={ customShapeColor }
		                            onChange={ onChangeShapeColor }
		                        />
						    </Fragment>
	                    ) }
					</PanelBody>
					<PanelBody 
						title={ _x( 'Animation Settings', 'panel title', 'container-block' ) }
						initialOpen={ false }
					>
						<SelectControl
					        label={ _x( 'Type', 'control label', 'container-block' ) }
					        help={ _x( 'This module allows you to animate elements as you scroll down, and up.', 'control help', 'container-block' ) }
					        value={ aosType }
					        options={ [
					            { label: _x( 'None', 'animation type', 'container-block' ), value: '' },
					            { label: _x( 'Fade', 'animation type', 'container-block' ), value: 'fade' },
					            { label: _x( 'Fade-up', 'animation type', 'container-block' ), value: 'fade-up' },
					            { label: _x( 'Fade-down', 'animation type', 'container-block' ), value: 'fade-down' },
					            { label: _x( 'Fade-left', 'animation type', 'container-block' ), value: 'fade-left' },
					            { label: _x( 'Fade-right', 'animation type', 'container-block' ), value: 'fade-right' },
					            { label: _x( 'Fade-up-right', 'animation type', 'container-block' ), value: 'fade-up-right' },
					            { label: _x( 'Fade-up-left', 'animation type', 'container-block' ), value: 'fade-up-left' },
					            { label: _x( 'Fade-down-right', 'animation type', 'container-block' ), value: 'fade-down-right' },
					            { label: _x( 'Fade-down-left', 'animation type', 'container-block' ), value: 'fade-down-left' },
					            { label: _x( 'Flip-up', 'animation type', 'container-block' ), value: 'flip-up' },
					            { label: _x( 'Flip-down', 'animation type', 'container-block' ), value: 'flip-down' },
					            { label: _x( 'Flip-left', 'animation type', 'container-block' ), value: 'flip-left' },
					            { label: _x( 'Flip-right', 'animation type', 'container-block' ), value: 'flip-right' },
					            { label: _x( 'Slide-up', 'animation type', 'container-block' ), value: 'slide-up' },
					            { label: _x( 'Slide-down', 'animation type', 'container-block' ), value: 'slide-down' },
					            { label: _x( 'Slide-left', 'animation type', 'container-block' ), value: 'slide-left' },
					            { label: _x( 'Slide-right', 'animation type', 'container-block' ), value: 'slide-right' },
					            { label: _x( 'Zoom-in', 'animation type', 'container-block' ), value: 'zoom-in' },
					            { label: _x( 'Zoom-in-up', 'animation type', 'container-block' ), value: 'zoom-in-up' },
					            { label: _x( 'Zoom-in-down', 'animation type', 'container-block' ), value: 'zoom-in-down' },
					            { label: _x( 'Zoom-in-left', 'animation type', 'container-block' ), value: 'zoom-in-left' },
					            { label: _x( 'Zoom-in-right', 'animation type', 'container-block' ), value: 'zoom-in-right' },
					            { label: _x( 'Zoom-out', 'animation type', 'container-block' ), value: 'zoom-out' },
					            { label: _x( 'Zoom-out-up', 'animation type', 'container-block' ), value: 'zoom-out-up' },
					            { label: _x( 'Zoom-out-down', 'animation type', 'container-block' ), value: 'zoom-out-down' },
					            { label: _x( 'Zoom-out-left', 'animation type', 'container-block' ), value: 'zoom-out-left' },
					            { label: _x( 'Zoom-out-right', 'animation type', 'container-block' ), value: 'zoom-out-right' }
					        ] }
					        onChange={ onChangeAosType }
					    />
					    { aosType && (
					    	<Fragment>
								<SelectControl
							        label={ _x( 'Ease', 'control label', 'container-block' ) }
							        help={ _x( 'Choose timing function to ease elements in different ways.', 'control help', 'container-block' ) }
							        value={ aosEase }
							        options={ [
							            { label: _x( 'Linear', 'animation ease type', 'container-block' ), value: 'linear' },
							            { label: _x( 'Ease', 'animation ease type', 'container-block' ), value: 'ease' },
							            { label: _x( 'Ease-in', 'animation ease type', 'container-block' ), value: 'ease-in' },
							            { label: _x( 'Ease-out', 'animation ease type', 'container-block' ), value: 'ease-out' },
							            { label: _x( 'Ease-in-out', 'animation ease type', 'container-block' ), value: 'ease-in-out' },
							            { label: _x( 'Ease-in-back', 'animation ease type', 'container-block' ), value: 'ease-in-back' },
							            { label: _x( 'Ease-out-back', 'animation ease type', 'container-block' ), value: 'ease-out-back' },
							            { label: _x( 'Ease-in-out-back', 'animation ease type', 'container-block' ), value: 'ease-in-out-back' },
							            { label: _x( 'Ease-in-sine', 'animation ease type', 'container-block' ), value: 'ease-in-sine' },
							            { label: _x( 'Ease-out-sine', 'animation ease type', 'container-block' ), value: 'ease-out-sine' },
							            { label: _x( 'Ease-in-out-sine', 'animation ease type', 'container-block' ), value: 'ease-in-out-sine' },
							            { label: _x( 'Ease-in-quad', 'animation ease type', 'container-block' ), value: 'ease-in-quad' },
							            { label: _x( 'Ease-out-quad', 'animation ease type', 'container-block' ), value: 'ease-out-quad' },
							            { label: _x( 'Ease-in-out-quad', 'animation ease type', 'container-block' ), value: 'ease-in-out-quad' },
							            { label: _x( 'Ease-in-cubic', 'animation ease type', 'container-block' ), value: 'ease-in-cubic' },
							            { label: _x( 'Ease-out-cubic', 'animation ease type', 'container-block' ), value: 'ease-out-cubic' },
							            { label: _x( 'Ease-in-out-cubic', 'animation ease type', 'container-block' ), value: 'ease-in-out-cubic' },
							            { label: _x( 'Ease-in-quart', 'animation ease type', 'container-block' ), value: 'ease-in-quart' },
							            { label: _x( 'Ease-out-quart', 'animation ease type', 'container-block' ), value: 'ease-out-quart' },
							            { label: _x( 'Ease-in-out-quart', 'animation ease type', 'container-block' ), value: 'ease-in-out-quart' }
							        ] }
							        onChange={ onChangeAosEase }
							    />
								<RangeControl
			                        label={ _x( 'Offset', 'control label', 'container-block' ) }
			                        help={ _x( 'Change offset to trigger animations sooner or later in pixels.', 'control help', 'container-block' ) }
			                        value={ aosOffset }
			                        onChange={ onChangeAosOffset }
			                        step="1"
			                        min="0"
			                    />
			                    <RangeControl
			                        label={ _x( 'Delay', 'control label', 'container-block' ) }
			                        help={ _x( 'Delay animation in milliseconds.', 'control help', 'container-block' ) }
			                        value={ aosDelay }
			                        onChange={ onChangeAosDelay }
			                        step="1"
			                        min="0"
			                    />
			                    <RangeControl
			                        label={ _x( 'Duration', 'control label', 'container-block' ) }
			                        help={ _x( 'Duration of animation in milliseconds.', 'control help', 'container-block' ) }
			                        readonly="readonly"
			                        value={ aosDuration }
			                        onChange={ onChangeAosDuration }
			                        step="50"
			                        min="50"
			                        max="3000"
			                    />
			                    <ToggleControl
									label={ _x( 'Run once?', 'control label', 'container-block' ) }
									help={ _x( 'Choose whether animation should fire once, or every time you scroll up/down to element.', 'control help', 'container-block' ) }
									checked={ !! aosOnce }
									onChange={ onChangeAosOnce }
								/>
							</Fragment>
						) }
					</PanelBody>
					{ !! imgID && (
						<PanelBody 
							title={ _x( 'Background Settings', 'panel title', 'container-block' ) }
							initialOpen={ false }
						>
							{ ( 'animate-left' !== imgEffect && 'animate-right' !== imgEffect ) && (
								<Fragment>
									<SelectControl
								        label={ _x( 'Position', 'control label', 'container-block' ) }
								        help={ _x( 'This property sets the starting position of a background image.', 'control help', 'container-block' ) }
								        value={ imgPosition }
								        options={ imgPositionControls }
								        onChange={ onChangeImgPosition }
								    />
								    { 'custom' === imgPosition && (
									    <FocalPointPicker
											label={ _x( 'Focal Point Picker', 'control label', 'container-block' ) }
											url={ imgSRC }
											value={ imgFocalPoint }
											onChange={ onChangeFocalPoint }
										/>
									) }
								    <SelectControl
								        label={ _x( 'Repeat', 'control label', 'container-block' ) }
								        help={ _x( 'This property sets if and how a background image will be repeated.', 'control help', 'container-block' ) }
								        value={ imgRepeat }
								        options={ [
								            { label: _x( 'None', 'image repeat', 'container-block' ), value: '' },
								            { label: _x( 'Repeat', 'image repeat', 'container-block' ), value: 'repeat' },
								            { label: _x( 'Repeat-X', 'image repeat', 'container-block' ), value: 'repeat-x' },
								            { label: _x( 'Repeat-Y', 'image repeat', 'container-block' ), value: 'repeat-y' },
								            { label: _x( 'No-repeat', 'image repeat', 'container-block' ), value: 'no-repeat' },
								            { label: _x( 'Space', 'image repeat', 'container-block' ), value: 'space' },
								            { label: _x( 'Round', 'image repeat', 'container-block' ), value: 'round' }
								        ] }
								        onChange={ onChangeImgRepeat }
								    />
							    </Fragment>
						    ) }
						    <SelectControl
						        label={ _x( 'Size', 'control label', 'container-block' ) }
						        help={ _x( 'This property specifies the size of the background images.', 'control help', 'container-block' ) }
						        value={ imgSize }
						        options={ [
						        	{ label: _x( 'None', 'image size', 'container-block' ), value: '' },
						        	{ label: _x( 'Auto', 'image size', 'container-block' ), value: 'auto' },
						        	{ label: _x( 'Cover', 'image size', 'container-block' ), value: 'cover' },
						        	{ label: _x( 'Contain', 'image size', 'container-block' ), value: 'contain' }
						        ] }
						        onChange={ onChangeImgSize }
						    />
						</PanelBody>
					) }
					<PanelColorSettings
						title={ _x( 'Color Settings', 'control label', 'container-block' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: _x( 'Background', 'color label', 'container-block' )
						} ] }
					>
						{ ( ( !! imgID || !! videoID ) && backgroundColor.color ) && (
							<RangeControl
		                        label={ _x( 'Overlay', 'control label', 'container-block' ) }
		                        help={ _x( 'This setting is useful if you are using a visually noisy background image or video and finding the content in your component difficult to read.', 'control help', 'container-block' ) }
		                        readonly="readonly"
		                        allowReset={ true }
		                        value={ dim }
		                        onChange={ value => setAttributes( { dim: value } ) }
		                        step="10"
		                        min="10"
		                        max="100"
		                    />
	                    ) }
					</PanelColorSettings>
					<PanelBody 
						title={ sprintf( _x( 'Looking for Help? %s', 'panel title', 'container-block' ), '⚡' ) }
						initialOpen={ false }
					>
						<BaseControl>
							<p>{ _x( 'I am a full-stack developer with over five years of experience in WordPress theme and plugin development, and would love to have the opportunity to discuss your project with you.', 'upsell', 'container-block' ) }</p>
							<ExternalLink 
	                            href={ 'https://www.upwork.com/o/profiles/users/_~016ad17ad3fc5cce94/' }
	                        >
	                            { _x( 'Hire Me!', 'upsell', 'container-block' ) }
	                        </ExternalLink>
						</BaseControl>
						<BaseControl
							className="components-base-control--label-block"
							label={ _x( 'Enjoying this block?', 'upsell', 'container-block' ) }
						>
							<ExternalLink 
	                            href={ 'https://wordpress.org/support/plugin/container-block/reviews' }
	                        >
	                            { sprintf( _x( 'Why not leave this plugin a %s review on WordPress.org!', 'upsell', 'container-block' ), '⭐⭐⭐⭐⭐' ) }
	                        </ExternalLink>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
				<InspectorAdvancedControls>
					<TextControl
				        label={ _x( 'Aria Label', 'control label', 'container-block' ) }
				        help={ _x( 'This attribute is used to define a string that labels the current element. You might use it in cases where a text label is not visible on the screen.', 'control help', 'container-block' ) }
				        value={ ariaLabel }
				        onChange={ value => setAttributes( { ariaLabel: value } ) }
				    />
				</InspectorAdvancedControls>
			</Fragment>
		);
	}
} );