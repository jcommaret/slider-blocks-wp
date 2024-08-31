const { addFilter } = wp.hooks;
const { assign } = lodash;

// Fonction pour modifier les attributs par défaut du bloc Media & Text
function modifyMediaTextAttributes(settings) {
    // Vérifie qu'on modifie bien le bloc 'core/media-text'
    if (settings.name !== 'core/media-text') {
        return settings;
    }

    // Modifier les attributs par défaut
    const newAttributes = {
        mediaPosition: {
            type: 'string',
            default: 'right', // Changer la valeur par 'left' ou autre valeur si nécessaire
        },
    };

    // Fusionne les nouveaux attributs avec ceux existants
    return assign({}, settings, {
        attributes: assign({}, settings.attributes, newAttributes),
    });
}

// Ajout du filtre pour enregistrer les nouvelles valeurs par défaut
addFilter(
    'blocks.registerBlockType',
    'custom/media-text-modify-defaults',
    modifyMediaTextAttributes
);