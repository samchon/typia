"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataAtomic = void 0;
class MetadataAtomic {
    type;
    tags;
    name_;
    /**
     * @internal
     */
    constructor(props) {
        this.type = props.type;
        this.tags = props.tags;
    }
    static create(props) {
        return new MetadataAtomic(props);
    }
    getName() {
        return (this.name_ ??= (() => {
            if (this.tags.length === 0)
                return this.type;
            else if (this.tags.length === 1) {
                const str = [
                    this.type,
                    ...this.tags[0].map((t) => t.name),
                ].join(" & ");
                return `(${str})`;
            }
            const rows = this.tags.map((row) => {
                const str = row.map((t) => t.name).join(" & ");
                return row.length === 1 ? str : `(${str})`;
            });
            return `(${this.type} & (${rows.join(" | ")}))`;
        })());
    }
}
exports.MetadataAtomic = MetadataAtomic;
