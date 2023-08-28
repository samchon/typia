"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataEscaped = void 0;
const Metadata_1 = require("./Metadata");
class MetadataEscaped {
    original;
    returns;
    /**
     * @hidden
     */
    constructor(props) {
        this.original = props.original;
        this.returns = props.returns;
    }
    /**
     * @internal
     */
    static _From(props, dict) {
        return this.create({
            original: Metadata_1.Metadata._From(props.original, dict),
            returns: Metadata_1.Metadata._From(props.returns, dict),
        });
    }
    /**
     * @internal
     */
    static create(props) {
        return new MetadataEscaped(props);
    }
    getName() {
        return this.returns.getName();
    }
    toJSON() {
        return {
            original: this.original.toJSON(),
            returns: this.returns.toJSON(),
        };
    }
}
exports.MetadataEscaped = MetadataEscaped;
