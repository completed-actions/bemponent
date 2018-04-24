import React from 'react';

class Component extends React.Component {
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

    toFirstUpperCase(str) {
        return str[0].toUpperCase() + str.substring(1, str.length);
    }

    genClassName() {
        const {
            props: {clx, parent},
            props,
            getModDeps,
            constructor: {name},
            toFirstUpperCase
        } = this;

        const mods = this.getStateMods();

        const modDeps = getModDeps.call(this);

        const componentMods = {...props, ...mods};

        const modsKeysSet = [...modDeps]
            .filter(
                (dep) => componentMods.hasOwnProperty(dep)
            );




        let className = modsKeysSet.reduce((str, dep) => {
            const mod = {
                key: toFirstUpperCase(dep),
                val: toFirstUpperCase(componentMods[dep])
            }

            if (mod.val === true) {
                return `${str} ${name}_${mod.key}`
            } else if (mod.val) {
                return `${str} ${name}_${mod.key}_${mod.val}`
            }

            return str;
        }, name);


        className += parent ? ` ${parent}-${name}` : '';
        className += clx ? ` ${clx}` : '';

        return className;
    }
}

const Bemponent = { Component }

module.exports = Bemponent;
