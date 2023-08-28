"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataFactory = void 0;
const Metadata_1 = require("../schemas/metadata/Metadata");
const explore_metadata_1 = require("./internal/metadata/explore_metadata");
const iterate_metadata_collection_1 = require("./internal/metadata/iterate_metadata_collection");
const iterate_metadata_sort_1 = require("./internal/metadata/iterate_metadata_sort");
var MetadataFactory;
(function (MetadataFactory) {
    MetadataFactory.analyze = (checker) => (options) => (collection) => (type) => {
        const errors = [];
        const meta = (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(type, {
            top: true,
            object: null,
            property: null,
            nested: null,
            escaped: false,
            aliased: false,
        });
        (0, iterate_metadata_collection_1.iterate_metadata_collection)(errors)(collection);
        (0, iterate_metadata_sort_1.iterate_metadata_sort)(collection)(meta);
        if (options.validate)
            errors.push(...validate(options)(options.validate)(meta));
        return errors.length
            ? {
                success: false,
                errors,
            }
            : {
                success: true,
                data: meta,
            };
    };
    /**
     * @internal
     */
    MetadataFactory.soleLiteral = (value) => {
        const meta = Metadata_1.Metadata.initialize();
        meta.constants.push({
            values: [value],
            type: "string",
        });
        return meta;
    };
    const validate = (options) => (functor) => (meta) => {
        const visitor = {
            functor,
            errors: [],
            objects: new Set(),
            arrays: new Set(),
            tuples: new Set(),
            aliases: new Set(),
        };
        validateMeta(options)(visitor)(meta, {
            object: null,
            property: null,
            nested: null,
            top: true,
            aliased: false,
            escaped: false,
        });
        return visitor.errors;
    };
    const validateMeta = (options) => (visitor) => (meta, explore) => {
        const result = new Set(visitor.functor(meta, explore));
        if (result.size)
            visitor.errors.push({
                name: meta.getName(),
                explore: { ...explore },
                messages: [...result],
            });
        for (const alias of meta.aliases)
            validateAlias(options)(visitor)(alias, explore);
        for (const array of meta.arrays)
            validateArray(options)(visitor)(array.type, explore);
        for (const tuple of meta.tuples)
            validateTuple(options)(visitor)(tuple.type, explore);
        for (const obj of meta.objects)
            validateObject(options)(visitor)(obj);
        if (options.escape === true && meta.escaped !== null)
            validateMeta(options)(visitor)(meta.escaped.returns, {
                ...explore,
                escaped: true,
            });
    };
    const validateAlias = (options) => (visitor) => (alias, explore) => {
        if (visitor.aliases.has(alias))
            return;
        visitor.aliases.add(alias);
        validateMeta(options)(visitor)(alias.value, {
            ...explore,
            nested: alias,
            aliased: true,
        });
    };
    const validateArray = (options) => (visitor) => (array, explore) => {
        if (visitor.arrays.has(array))
            return;
        visitor.arrays.add(array);
        validateMeta(options)(visitor)(array.value, {
            ...explore,
            nested: array,
            top: false,
        });
    };
    const validateTuple = (options) => (visitor) => (tuple, explore) => {
        if (visitor.tuples.has(tuple))
            return;
        visitor.tuples.add(tuple);
        for (const elem of tuple.elements)
            validateMeta(options)(visitor)(elem, {
                ...explore,
                nested: tuple,
                top: false,
            });
    };
    const validateObject = (options) => (visitor) => (object) => {
        if (visitor.objects.has(object))
            return;
        visitor.objects.add(object);
        for (const property of object.properties)
            validateMeta(options)(visitor)(property.value, {
                object,
                property: property.value.isSoleLiteral()
                    ? property.value.getSoleLiteral()
                    : {},
                nested: null,
                top: false,
                aliased: false,
                escaped: false,
            });
    };
})(MetadataFactory || (exports.MetadataFactory = MetadataFactory = {}));
