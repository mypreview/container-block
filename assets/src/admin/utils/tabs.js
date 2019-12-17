/**
 * Internal block libraries
 */
const { Dashicon } = wp.components;

const tabs = [
    {
        name: 'desktop',
        title: <Dashicon icon="desktop" />
    },
    {
        name: 'laptop',
        title: <Dashicon icon="laptop" />
    },
    {
        name: 'tablet',
        title: <Dashicon icon="tablet" />
    },
    {
        name: 'smartphone',
        title: <Dashicon icon="smartphone" />
    }
];

export default tabs;