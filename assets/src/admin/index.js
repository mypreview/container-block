/**
 * Block dependencies
 */
import edit from './components/Edit.jsx';
import save from './components/Save.jsx';
import icons from './utils/icons.js';
import attributes from './utils/attributes';
import transforms from './utils/transforms';

/**
 * Internal block libraries
 */
const { _x } = wp.i18n;

/**
 * Meta-data for registering block type
 */
const name = 'container';
const title = _x( 'Container', 'block title', 'container-block' );
const category = 'mypreview';
const icon = icons.container;

/**
 * Block settings
 */
const settings = {
    title,
    description: _x( 'Container block is used to wrap several blocks in a parent wrapper and enables you to do more sophisticated styling as well.', 'block description', 'container-block' ),
    keywords: [
        _x( 'Group', 'block keyword', 'container-block' ),
        _x( 'Section', 'block keyword', 'container-block' ),
        _x( 'Wrapper', 'block keyword', 'container-block' )
    ],
    supports: {
        anchor: true,
        html: false,
        align: [ 'wide', 'full' ]
    },
    attributes,
    transforms,
    edit,
    save
};

export { name, title, category, icon, settings };