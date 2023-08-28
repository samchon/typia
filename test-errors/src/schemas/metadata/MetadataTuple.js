"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTuple = void 0;
class MetadataTuple {
    type;
    tags;
    /**
     * @hidden
     */
    constructor(props) {
        this.type = props.type;
        this.tags = props.tags;
    }
    /**
     * @internal
     */
    static create(props) {
        return new MetadataTuple(props);
    }
    toJSON() {
        return {
            type: this.type.toJSON(),
            tags: this.tags.map((row) => row.slice()),
        };
    }
}
exports.MetadataTuple = MetadataTuple;
