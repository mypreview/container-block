const attributes = {
    
    width: {
        type: 'number'
    },
    isFH: {
        type: 'boolean',
        default: false
    },
    shadow: {
        type: 'string'
    },
    ariaLabel: {
        type: 'string'
    },
    allowedBlocks: {
        type: 'array',
        default: []
    },
    img: {
        type: 'object',
        default: {
            id: undefined,
            src: undefined,
            width: undefined,
            position: undefined,
            focalPoint: undefined,
            repeat: undefined,
            size: undefined,
            effect: undefined
        }
    },
    scroll: {
        type: 'object',
        default: {
            show: false,
            target: undefined,
            color: undefined
        }
    },
    visible: {
        type: 'object',
        default: {
            desktop: false,
            laptop: false,
            tablet: false,
            smartphone: false
        }
    },
    spacing: {
        type: 'object',
        default: {
            desktop: undefined,
            laptop: undefined,
            tablet: undefined,
            smartphone: undefined
        }
    },
    alignment: {
        type: 'object',
        default: {
            desktop: undefined,
            laptop: undefined,
            tablet: undefined,
            smartphone: undefined
        }
    },
    link: {
        type: 'object',
        default: {
            url: undefined,
            target: false
        }
    },
    border: {
        type: 'object',
        default: {
            width: undefined,
            radius: undefined,
            color: undefined
        }
    },
    shape: {
        type: 'object',
        default: {
            type: undefined,
            height: 5,
            color: undefined
        }
    },
    aos: {
        type: 'object',
        default: {
            type: undefined,
            once: false,
            offset: 120,
            duration: 400,
            delay: 0,
            ease: 'ease'
        }
    }
};

export default attributes;