"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataObject = void 0;
class MetadataObject {
    name;
    properties;
    description;
    jsDocTags;
    index;
    validated;
    recursive;
    nullables = [];
    /**
     * @internal
     */
    tagged_ = false;
    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    constructor(props) {
        this.name = props.name;
        this.properties = props.properties;
        this.description = props.description;
        this.jsDocTags = props.jsDocTags;
        this.index = props.index;
        this.validated = props.validated;
        this.recursive = props.recursive;
        this.nullables = [];
        this.tagged_ = false;
    }
    /**
     * @internal
     */
    static create(props) {
        return new MetadataObject(props);
    }
    /**
     * @internal
     */
    static _From_without_properties(obj) {
        return this.create({
            name: obj.name,
            properties: [],
            description: obj.description,
            jsDocTags: obj.jsDocTags,
            index: obj.index,
            validated: obj.validated,
            recursive: obj.recursive,
            nullables: obj.nullables.slice(),
        });
    }
    /**
     * @internal
     */
    _Messagable() {
        return (this.properties.length >= 1 &&
            this.properties.every((p) => p.key.isSoleLiteral()));
    }
    /**
     * @internal
     */
    _Is_simple(level = 0) {
        return (this.recursive === false &&
            this.properties.length < 10 &&
            this.properties.every((property) => property.key.isSoleLiteral() &&
                property.value.size() === 1 &&
                property.value.isRequired() === true &&
                property.value.nullable === false &&
                (property.value.atomics.length === 1 ||
                    (level < 1 &&
                        property.value.objects.length === 1 &&
                        property.value.objects[0]._Is_simple(level + 1)))));
    }
    toJSON() {
        return {
            name: this.name,
            properties: this.properties.map((property) => property.toJSON()),
            description: this.description,
            jsDocTags: this.jsDocTags,
            index: this.index,
            validated: this.validated,
            recursive: this.recursive,
            nullables: this.nullables.slice(),
        };
    }
}
exports.MetadataObject = MetadataObject;
/**
 * @internal
 */
(function (MetadataObject) {
    MetadataObject.intersects = (x, y) => x.properties.some((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== undefined);
    MetadataObject.covers = (x, y) => x.properties.length >= y.properties.length &&
        x.properties.every((prop) => y.properties.find((oppo) => prop.key.getName() === oppo.key.getName()) !== undefined);
})(MetadataObject || (exports.MetadataObject = MetadataObject = {}));
