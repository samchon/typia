"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataArrayType = void 0;
class MetadataArrayType {
    name;
    value;
    nullables;
    recursive;
    index;
    /**
     * @hidden
     */
    constructor(props) {
        this.name = props.name;
        this.value = props.value;
        this.index = props.index;
        this.recursive = props.recursive;
        this.nullables = props.nullables;
    }
    /**
     * @internal
     */
    static _From_without_value(props) {
        return this.create({
            name: props.name,
            value: null,
            index: props.index,
            recursive: props.recursive,
            nullables: props.nullables,
        });
    }
    /**
     * @internal
     */
    static create(props) {
        return new MetadataArrayType(props);
    }
    toJSON() {
        return {
            name: this.name,
            value: this.value.toJSON(),
            nullables: this.nullables,
            recursive: this.recursive,
            index: this.index,
        };
    }
}
exports.MetadataArrayType = MetadataArrayType;
