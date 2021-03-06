const e = window.DI.React.createElement;
const Plugin = require('../Plugin');

class SettingsOptionBase extends window.DI.React.Component {
    constructor(props) {
        super(props);
        if (!props.hasOwnProperty('plugin') || !(props.plugin instanceof Plugin)) {
            throw new Error('Settings Components must have a valid plugin property!');
        }
    }

    get plugin() {
        return this.props.plugin;
    }

    getProp() {
        return this.plugin.getSettingsNode(this.props.lsNode, this.props.defaultValue);
    }

    setProp(newVal) {
        if (typeof this.props.onSave === 'function') this.props.onSave();
        return this.plugin.setSettingsNode(this.props.lsNode, newVal);
    }
}

module.exports = SettingsOptionBase;
