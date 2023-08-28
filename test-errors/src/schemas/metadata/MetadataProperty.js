"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataProperty = void 0;
const Metadata_1 = require("./Metadata");
class MetadataProperty {
    key;
    value;
    description;
    jsDocTags;
    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    constructor(props) {
        this.key = props.key;
        this.value = props.value;
        this.description = props.description;
        this.jsDocTags = props.jsDocTags;
    }
    /**
     * @internal
     */
    static create(props) {
        return new MetadataProperty(props);
    }
    /**
     * @internal
     */
    static _From(property, dict) {
        return this.create({
            key: Metadata_1.Metadata._From(property.key, dict),
            value: Metadata_1.Metadata._From(property.value, dict),
            description: property.description,
            jsDocTags: property.jsDocTags.slice(),
        });
    }
    toJSON() {
        return {
            key: this.key.toJSON(),
            value: this.value.toJSON(),
            description: this.description,
            jsDocTags: this.jsDocTags,
        };
    }
}
exports.MetadataProperty = MetadataProperty;
