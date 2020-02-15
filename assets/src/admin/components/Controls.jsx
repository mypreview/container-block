/**
 * Block dependencies
 */
import icons from './../utils/icons';

/**
 * Internal block libraries
 */
const { _x } = wp.i18n;
const { Fragment, Component } = wp.element;
const {
	BlockControls,
	BlockVerticalAlignmentToolbar,
	MediaUpload,
	MediaUploadCheck,
} = wp.blockEditor;
const { Toolbar, IconButton } = wp.components;

export default class Controls extends Component {
	constructor( props ) {
		super( ...arguments );
		this.setObjUndefined = this.setObjUndefined.bind( this );
	}

	setObjUndefined( obj ) {
		// Set all values of the object to undefined
		for ( const key in obj ) {
			if ( obj.hasOwnProperty( key ) ) {
				obj[ key ] = undefined;
			} // End If Statement
		} // End of the loop

		return obj;
	}

	render() {
		const { noticeUI, setAttributes, attributes } = this.props;

		const { isFH, img, video, valign } = attributes;

		// Image
		const {
			id: imgID,
			src: imgSRC,
			position: imgPosition,
			focalPoint: imgFocalPoint,
			repeat: imgRepeat,
			effect: imgEffect,
		} = img;
		// Video
		const { id: videoID } = video;

		// Image - Upload
		const onUploadImage = ( value ) => {
			if ( ! value || ! value.url ) {
				return;
			} // End If Statement

			setAttributes( {
				img: {
					...img,
					id: value.id,
					src: value.url,
					width: value.width,
				},
			} );
		};
		// Video - Upload
		const onUploadVideo = ( value ) => {
			if ( ! value || ! value.url ) {
				return;
			} // End If Statement

			setAttributes( {
				video: {
					id: value.id,
					src: value.url,
				},
			} );
		};
		// Image & Video - Remove (trash)
		const onClickRemoveMedia = () => {
			// Set all values of the object to undefined
			setAttributes( {
				img: { ...this.setObjUndefined( img ) },
				video: { ...this.setObjUndefined( video ) },
			} );
		};
		// Image - Effect
		const onClickImgEffect = ( value ) => {
			setAttributes( {
				img: {
					...img,
					position:
						value && value.includes( 'animate' )
							? undefined
							: imgPosition,
					focalPoint:
						value && value.includes( 'animate' )
							? undefined
							: imgFocalPoint,
					repeat:
						value && value.includes( 'animate' )
							? undefined
							: imgRepeat,
					effect: value,
				},
			} );
		};
		// Image - Effect controls
		const imgEffectControls = [
			{
				icon: icons.rotateLeft,
				title: _x(
					'Animate left',
					'toolbar button',
					'container-block'
				),
				onClick: () =>
					'animate-left' === imgEffect
						? onClickImgEffect( undefined )
						: onClickImgEffect( 'animate-left' ),
				isActive: imgEffect === 'animate-left',
			},
			{
				icon: icons.rotateRight,
				title: _x(
					'Animate right',
					'toolbar button',
					'container-block'
				),
				onClick: () =>
					'animate-right' === imgEffect
						? onClickImgEffect( undefined )
						: onClickImgEffect( 'animate-right' ),
				isActive: imgEffect === 'animate-right',
			},
			{
				icon: icons.parallax,
				title: _x( 'Parallax', 'toolbar button', 'container-block' ),
				onClick: () =>
					'fixed' === imgEffect
						? onClickImgEffect( undefined )
						: onClickImgEffect( 'fixed' ),
				isActive: imgEffect === 'fixed',
			},
		];

		return (
			<Fragment>
				<BlockControls>
					{ isFH && (
						<BlockVerticalAlignmentToolbar
							isCollapsed={ true }
							value={ valign }
							onChange={ ( value ) =>
								setAttributes( { valign: value } )
							}
						/>
					) }
					<Toolbar>
						<MediaUploadCheck>
							{ ( ( !!! imgID && !!! videoID ) || !! imgID ) && (
								<MediaUpload
									allowedTypes="image"
									notices={ noticeUI }
									onSelect={ onUploadImage }
									value={ imgID }
									render={ ( { open } ) => (
										<IconButton
											className="components-toolbar__control"
											label={
												imgID
													? _x(
															'Edit image',
															'toolbar button',
															'container-block'
													  )
													: _x(
															'Add image',
															'toolbar button',
															'container-block'
													  )
											}
											icon={
												imgID ? icons.edit : icons.image
											}
											onClick={ open }
										/>
									) }
								/>
							) }
							{ ( ( !!! imgID && !!! videoID ) ||
								!! videoID ) && (
								<MediaUpload
									allowedTypes="video"
									notices={ noticeUI }
									onSelect={ onUploadVideo }
									value={ videoID }
									render={ ( { open } ) => (
										<IconButton
											className="components-toolbar__control"
											label={
												videoID
													? _x(
															'Edit video',
															'toolbar button',
															'container-block'
													  )
													: _x(
															'Add video',
															'toolbar button',
															'container-block'
													  )
											}
											icon={
												videoID
													? icons.edit
													: icons.video
											}
											onClick={ open }
										/>
									) }
								/>
							) }
						</MediaUploadCheck>
						{ ( !! imgID || !! videoID ) && (
							<IconButton
								className="components-toolbar__control"
								label={ _x(
									'Remove media',
									'toolbar button',
									'container-block'
								) }
								icon={ icons.trash }
								onClick={ onClickRemoveMedia }
							/>
						) }
					</Toolbar>
					{ !! imgID && <Toolbar controls={ imgEffectControls } /> }
				</BlockControls>
			</Fragment>
		);
	}
}
