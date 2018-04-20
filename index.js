import React, {Component as ReactComponent} from 'react';

class Component extends ReactComponent {
    constructor() {
        super();
    }

    getStateMods() {
        let mods = {};

        if (this.state && this.state.mods) {
            mods = this.state.mods;
        }

        return mods;
    }

    getModDeps() {
        const mods = this.getStateMods();

        const modKeyValues = Object.entries(mods);

        return modKeyValues
            .filter(([key, val]) => val)
            .map(([key, val]) => key);
    }

    genClassName() {
        const {
            props: {clx, parent},
            props,
            getModDeps,
            constructor: {name}
        } = this;

        const mods = this.getStateMods();

        const modDeps = getModDeps.call(this);

        const componentMods = {...props, ...mods};


        let className = modDeps.reduce((str, mod) => {
            const modVal = componentMods[mod];

            if (modVal === true) {
                return `${str} ${name}_${mod}`
            } else if (modVal) {
                return `${str} ${name}_${mod}_${modVal}`
            }

            return str;
        }, name);


        className += parent ? ` ${parent}-${name}` : '';
        className += clx ? ` ${clx}` : '';

        return className;
    }
}

export default Component;
