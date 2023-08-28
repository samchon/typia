"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataCollection = void 0;
const MetadataAlias_1 = require("../schemas/metadata/MetadataAlias");
const MetadataArrayType_1 = require("../schemas/metadata/MetadataArrayType");
const MetadataObject_1 = require("../schemas/metadata/MetadataObject");
const MetadataTupleType_1 = require("../schemas/metadata/MetadataTupleType");
const Writable_1 = require("../typings/Writable");
const MapUtil_1 = require("../utils/MapUtil");
const CommentFactory_1 = require("./CommentFactory");
const TypeFactory_1 = require("./TypeFactory");
class MetadataCollection {
    options;
    objects_;
    object_unions_;
    aliases_;
    arrays_;
    tuples_;
    names_;
    object_index_;
    recursive_array_index_;
    recursive_tuple_index_;
    constructor(options) {
        this.options = options;
        this.objects_ = new Map();
        this.object_unions_ = new Map();
        this.aliases_ = new Map();
        this.arrays_ = new Map();
        this.tuples_ = new Map();
        this.names_ = new Map();
        this.object_index_ = 0;
        this.recursive_array_index_ = 0;
        this.recursive_tuple_index_ = 0;
    }
    /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
    aliases() {
        return [...this.aliases_.values()];
    }
    objects() {
        return [...this.objects_.values()];
    }
    unions() {
        return [...this.object_unions_.values()];
    }
    arrays() {
        return [...this.arrays_.values()];
    }
    tuples() {
        return [...this.tuples_.values()];
    }
    getName(checker, type) {
        const name = (() => {
            const str = TypeFactory_1.TypeFactory.getFullName(checker)(type);
            return this.options?.replace ? this.options.replace(str) : str;
        })();
        const duplicates = MapUtil_1.MapUtil.take(this.names_)(name, () => new Map());
        const oldbie = duplicates.get(type);
        if (oldbie !== undefined)
            return oldbie;
        const addicted = duplicates.size
            ? `${name}.o${duplicates.size}`
            : name;
        duplicates.set(type, addicted);
        return addicted;
    }
    /**
     * @internal
     */
    getUnionIndex(meta) {
        const key = meta.objects.map((obj) => obj.name).join(" | ");
        MapUtil_1.MapUtil.take(this.object_unions_)(key, () => meta.objects);
        return [...this.object_unions_.keys()].indexOf(key);
    }
    /* -----------------------------------------------------------
        INSTANCES
    ----------------------------------------------------------- */
    emplace(checker, type) {
        const oldbie = this.objects_.get(type);
        if (oldbie !== undefined)
            return [oldbie, false];
        // const displays = type.symbol.getDocumentationComment(checker);
        // const tags = type.symbol.getJsDocTags(checker);
        // console.log(
        //     ts.displayPartsToString(displays),
        //     tags.map((tag) => tag.name),
        //     tags.map((tag) => ts.displayPartsToString(tag.text)),
        // );
        const $id = this.getName(checker, type);
        const obj = MetadataObject_1.MetadataObject.create({
            name: $id,
            properties: [],
            description: (type.symbol && CommentFactory_1.CommentFactory.description(type.symbol)) ??
                undefined,
            jsDocTags: type.symbol?.getJsDocTags() ?? [],
            validated: false,
            index: this.object_index_++,
            recursive: null,
            nullables: [],
        });
        this.objects_.set(type, obj);
        return [obj, true];
    }
    emplaceAlias(checker, type, symbol) {
        const oldbie = this.aliases_.get(type);
        if (oldbie !== undefined)
            return [oldbie, false, () => { }];
        const $id = this.getName(checker, type);
        const alias = MetadataAlias_1.MetadataAlias.create({
            name: $id,
            value: null,
            description: CommentFactory_1.CommentFactory.description(symbol) ?? null,
            recursive: null,
            nullables: [],
            jsDocTags: symbol.getJsDocTags() ?? [],
        });
        this.aliases_.set(type, alias);
        return [alias, true, (meta) => ((0, Writable_1.Writable)(alias).value = meta)];
    }
    emplaceArray(checker, type) {
        const oldbie = this.arrays_.get(type);
        if (oldbie !== undefined)
            return [oldbie, false, () => { }];
        const $id = this.getName(checker, type);
        const array = MetadataArrayType_1.MetadataArrayType.create({
            name: $id,
            value: null,
            index: null,
            recursive: null,
            nullables: [],
        });
        this.arrays_.set(type, array);
        return [array, true, (meta) => ((0, Writable_1.Writable)(array).value = meta)];
    }
    emplaceTuple(checker, type) {
        const oldbie = this.tuples_.get(type);
        if (oldbie !== undefined)
            return [oldbie, false, () => { }];
        const $id = this.getName(checker, type);
        const tuple = MetadataTupleType_1.MetadataTupleType.create({
            name: $id,
            elements: null,
            index: null,
            recursive: null,
            nullables: [],
        });
        this.tuples_.set(type, tuple);
        return [
            tuple,
            true,
            (elements) => ((0, Writable_1.Writable)(tuple).elements = elements),
        ];
    }
    /**
     * @internal
     */
    setObjectRecursive(obj, recursive) {
        (0, Writable_1.Writable)(obj).recursive = recursive;
    }
    /**
     * @internal
     */
    setAliasRecursive(alias, recursive) {
        (0, Writable_1.Writable)(alias).recursive = recursive;
    }
    /**
     * @internal
     */
    setArrayRecursive(array, recursive) {
        (0, Writable_1.Writable)(array).recursive = recursive;
        if (recursive)
            (0, Writable_1.Writable)(array).index = this.recursive_array_index_++;
    }
    setTupleRecursive(tuple, recursive) {
        (0, Writable_1.Writable)(tuple).recursive = recursive;
        if (recursive)
            (0, Writable_1.Writable)(tuple).index = this.recursive_tuple_index_++;
    }
    toJSON() {
        return {
            objects: this.objects().map((o) => o.toJSON()),
            aliases: this.aliases().map((d) => d.toJSON()),
            arrays: [...this.arrays_.values()].map((a) => a.toJSON()),
            tuples: [...this.tuples_.values()].map((t) => t.toJSON()),
        };
    }
}
exports.MetadataCollection = MetadataCollection;
(function (MetadataCollection) {
    MetadataCollection.replace = (str) => {
        for (const [before, after] of REPLACERS)
            str = str.split(before).join(after);
        return str;
    };
    MetadataCollection.escape = (str) => {
        for (const [before, after] of REPLACERS)
            if (after !== "")
                str = str.split(after).join(before);
        return str;
    };
})(MetadataCollection || (exports.MetadataCollection = MetadataCollection = {}));
const REPLACERS = [
    ["$", "_dollar_"],
    ["&", "_and_"],
    ["|", "_or_"],
    ["{", "_blt_"],
    ["}", "_bgt_"],
    ["<", "_lt_"],
    [">", "_gt_"],
    ["[", "_alt_"],
    ["]", "_agt_"],
    [",", "_comma_"],
    ["`", "_backquote_"],
    ["'", "_singlequote_"],
    ['"', "_doublequote_"],
    [" ", "_space_"],
];
