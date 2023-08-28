"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
const Writable_1 = require("../../typings/Writable");
const ArrayUtil_1 = require("../../utils/ArrayUtil");
const MetadataAlias_1 = require("./MetadataAlias");
const MetadataArray_1 = require("./MetadataArray");
const MetadataArrayType_1 = require("./MetadataArrayType");
const MetadataAtomic_1 = require("./MetadataAtomic");
const MetadataEscaped_1 = require("./MetadataEscaped");
const MetadataObject_1 = require("./MetadataObject");
const MetadataProperty_1 = require("./MetadataProperty");
const MetadataTuple_1 = require("./MetadataTuple");
const MetadataTupleType_1 = require("./MetadataTupleType");
class Metadata {
    any;
    required;
    optional;
    nullable;
    functional;
    escaped;
    atomics;
    constants;
    templates;
    rest;
    aliases;
    arrays;
    tuples;
    objects;
    natives;
    sets;
    maps;
    /** @internal */ name_;
    /** @internal */ parent_resolved_ = false;
    /** @internal */ union_index;
    /** @internal */ fixed_;
    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    constructor(props) {
        this.any = props.any;
        this.required = props.required;
        this.optional = props.optional;
        this.nullable = props.nullable;
        this.functional = props.functional;
        this.escaped = props.escaped;
        this.atomics = props.atomics;
        this.constants = props.constants;
        this.templates = props.templates;
        this.rest = props.rest;
        this.arrays = props.arrays;
        this.tuples = props.tuples;
        this.objects = props.objects;
        this.aliases = props.aliases;
        this.natives = props.natives;
        this.sets = props.sets;
        this.maps = props.maps;
    }
    /**
     * @internal
     */
    static create(props) {
        return new Metadata(props);
    }
    /**
     * @internal
     */
    static initialize(parentResolved = false) {
        const meta = this.create({
            any: false,
            nullable: false,
            required: true,
            optional: false,
            functional: false,
            escaped: null,
            constants: [],
            atomics: [],
            templates: [],
            arrays: [],
            tuples: [],
            objects: [],
            aliases: [],
            rest: null,
            natives: [],
            sets: [],
            maps: [],
        });
        meta.parent_resolved_ = parentResolved;
        return meta;
    }
    toJSON() {
        return {
            any: this.any,
            required: this.required,
            optional: this.optional,
            nullable: this.nullable,
            functional: this.functional,
            atomics: this.atomics.map((a) => MetadataAtomic_1.MetadataAtomic.create({
                type: a.type,
                tags: a.tags.map((r) => r.slice()),
            })),
            constants: this.constants.map((c) => ({
                type: c.type,
                values: c.values.slice(),
            })),
            templates: this.templates.map((tpl) => tpl.map((meta) => meta.toJSON())),
            escaped: this.escaped ? this.escaped.toJSON() : null,
            rest: this.rest ? this.rest.toJSON() : null,
            arrays: this.arrays.map((array) => ({
                name: array.type.name,
                tags: array.tags.map((r) => r.slice()),
            })),
            tuples: this.tuples.map((tuple) => ({
                name: tuple.type.name,
                tags: tuple.tags.map((r) => r.slice()),
            })),
            objects: this.objects.map((obj) => obj.name),
            aliases: this.aliases.map((alias) => alias.name),
            natives: this.natives.slice(),
            sets: this.sets.map((meta) => meta.toJSON()),
            maps: this.maps.map((entry) => ({
                key: entry.key.toJSON(),
                value: entry.value.toJSON(),
            })),
        };
    }
    static from(meta, collection) {
        const dict = {
            objects: new Map(collection.objects.map((obj) => [
                obj.name,
                MetadataObject_1.MetadataObject._From_without_properties(obj),
            ])),
            aliases: new Map(collection.aliases.map((alias) => [
                alias.name,
                MetadataAlias_1.MetadataAlias._From_without_value(alias),
            ])),
            arrays: new Map(collection.arrays.map((arr) => [
                arr.name,
                MetadataArrayType_1.MetadataArrayType._From_without_value(arr),
            ])),
            tuples: new Map(collection.tuples.map((tpl) => [
                tpl.name,
                MetadataTupleType_1.MetadataTupleType._From_without_elements(tpl),
            ])),
        };
        for (const obj of collection.objects) {
            const initialized = dict.objects.get(obj.name);
            initialized.properties.push(...obj.properties.map((prop) => MetadataProperty_1.MetadataProperty._From(prop, dict)));
        }
        for (const alias of collection.aliases)
            (0, Writable_1.Writable)(dict.aliases.get(alias.name)).value = this._From(alias.value, dict);
        for (const array of collection.arrays)
            (0, Writable_1.Writable)(dict.arrays.get(array.name)).value = this._From(array.value, dict);
        for (const tuple of collection.tuples)
            (0, Writable_1.Writable)(dict.tuples.get(tuple.name)).elements =
                tuple.elements.map((elem) => this._From(elem, dict));
        return this._From(meta, dict);
    }
    /**
     * @internal
     */
    static _From(meta, dict) {
        return this.create({
            any: meta.any,
            required: meta.required,
            optional: meta.optional,
            nullable: meta.nullable,
            functional: meta.functional,
            constants: meta.constants.slice(),
            atomics: meta.atomics.map((a) => MetadataAtomic_1.MetadataAtomic.create({ type: a.type, tags: a.tags })),
            templates: meta.templates.map((tpl) => tpl.map((meta) => this._From(meta, dict))),
            escaped: meta.escaped
                ? MetadataEscaped_1.MetadataEscaped._From(meta.escaped, dict)
                : null,
            rest: meta.rest ? this._From(meta.rest, dict) : null,
            arrays: meta.arrays.map((ref) => {
                const type = dict.arrays.get(ref.name);
                if (type === undefined)
                    throw new RangeError(`Error on Metadata.from(): failed to find array "${ref.name}".`);
                return MetadataArray_1.MetadataArray.create({
                    type,
                    tags: ref.tags.map((row) => row.slice()),
                });
            }),
            tuples: meta.tuples.map((t) => {
                const type = dict.tuples.get(t.name);
                if (type === undefined)
                    throw new RangeError(`Error on Metadata.from(): failed to find tuple "${t.name}".`);
                return MetadataTuple_1.MetadataTuple.create({
                    type,
                    tags: t.tags.map((r) => r.slice()),
                });
            }),
            objects: meta.objects.map((name) => {
                const found = dict.objects.get(name);
                if (found === undefined)
                    throw new RangeError(`Error on Metadata.from(): failed to find object "${name}".`);
                return found;
            }),
            aliases: meta.aliases.map((alias) => {
                const found = dict.aliases.get(alias);
                if (found === undefined)
                    throw new RangeError(`Error on Metadata.from(): failed to find alias "${alias}".`);
                return found;
            }),
            natives: meta.natives.slice(),
            sets: meta.sets.map((meta) => this._From(meta, dict)),
            maps: meta.maps.map((entry) => ({
                key: this._From(entry.key, dict),
                value: this._From(entry.value, dict),
            })),
        });
    }
    /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
    getName() {
        return (this.name_ ??= getName(this));
    }
    empty() {
        return this.bucket() === 0 || this.size() === 0;
    }
    size() {
        return ((this.any ? 1 : 0) +
            (this.escaped ? 1 : 0) +
            (this.functional ? 1 : 0) +
            (this.rest ? this.rest.size() : 0) +
            this.templates.length +
            this.atomics.length +
            this.constants
                .map((c) => c.values.length)
                .reduce((x, y) => x + y, 0) +
            this.arrays.length +
            this.tuples.length +
            this.natives.length +
            this.maps.length +
            this.sets.length +
            this.objects.length +
            this.aliases.length);
    }
    bucket() {
        return ((this.any ? 1 : 0) +
            (this.escaped ? 1 : 0) +
            (this.functional ? 1 : 0) +
            (this.templates.length ? 1 : 0) +
            (this.atomics.length ? 1 : 0) +
            (this.constants.length ? 1 : 0) +
            (this.rest ? this.rest.size() : 0) +
            (this.arrays.length ? 1 : 0) +
            (this.tuples.length ? 1 : 0) +
            (this.natives.length ? 1 : 0) +
            (this.sets.length ? 1 : 0) +
            (this.maps.length ? 1 : 0) +
            (this.objects.length ? 1 : 0) +
            (this.aliases.length ? 1 : 0));
    }
    isConstant() {
        return this.bucket() === (this.constants.length ? 1 : 0);
    }
    isRequired() {
        return this.required === true && this.optional === false;
    }
    /**
     * @internal
     */
    isUnionBucket() {
        const size = this.bucket();
        const emended = !!this.atomics.length && !!this.constants.length ? size - 1 : size;
        return emended > 1;
    }
    /**
     * @internal
     */
    getSoleLiteral() {
        if (this.size() === 1 &&
            this.constants.length === 1 &&
            this.constants[0].type === "string" &&
            this.constants[0].values.length === 1)
            return this.constants[0].values[0];
        else
            return null;
    }
    isSoleLiteral() {
        return this.getSoleLiteral() !== null;
    }
    /**
     * @internal
     */
    isParentResolved() {
        return this.parent_resolved_;
    }
}
exports.Metadata = Metadata;
(function (Metadata) {
    Metadata.intersects = (x, y) => {
        // CHECK ANY & OPTIONAL
        if (x.any || y.any)
            return true;
        if (x.isRequired() === false && false === y.isRequired())
            return true;
        if (x.nullable === true && true === y.nullable)
            return true;
        if (x.functional === true && y.functional === true)
            return true;
        //----
        // INSTANCES
        //----
        // ARRAYS
        if (x.arrays.length && y.arrays.length)
            return true;
        if (x.tuples.length && y.tuples.length)
            return true;
        if (x.objects.length && y.objects.length)
            return true;
        if (x.aliases.length && y.aliases.length)
            return true;
        // NATIVES
        if (x.natives.length && y.natives.length)
            if (x.natives.some((xn) => y.natives.some((yn) => xn === yn)))
                return true;
        //----
        // VALUES
        //----
        // ATOMICS
        for (const atomic of x.atomics)
            if (y.atomics.some((ya) => atomic.type === ya.type))
                return true;
        // CONSTANTS
        for (const constant of x.constants) {
            const opposite = y.constants.find((elem) => elem.type === constant.type);
            if (opposite === undefined)
                continue;
            const values = new Set([
                ...constant.values,
                ...opposite.values,
            ]);
            if (values.size !== constant.values.length + opposite.values.length)
                return true;
        }
        return false;
    };
    Metadata.covers = (x, y, level = 0) => {
        // CHECK ANY
        if (x === y)
            return false;
        else if (x.any)
            return true;
        else if (y.any)
            return false;
        //----
        // INSTANCES
        //----
        if (level === 0) {
            // ARRAYS
            for (const ya of y.arrays)
                if (!x.arrays.some((xa) => Metadata.covers(xa.type.value, ya.type.value, level + 1))) {
                    return false;
                }
            // TUPLES
            for (const yt of y.tuples)
                if (yt.type.elements.length !== 0 &&
                    x.tuples.some((xt) => xt.type.elements.length >=
                        yt.type.elements.length &&
                        xt.type.elements
                            .slice(yt.type.elements.length)
                            .every((xv, i) => Metadata.covers(xv, yt.type.elements[i], level + 1))) === false)
                    return false;
        }
        // OBJECTS
        for (const yo of y.objects)
            if (x.objects.some((xo) => MetadataObject_1.MetadataObject.covers(xo, yo)) === false)
                return false;
        // ALIASES
        for (const yd of y.aliases)
            if (x.aliases.some((xd) => xd.name === yd.name) === false)
                return false;
        // NATIVES
        for (const yn of y.natives)
            if (x.natives.some((xn) => xn === yn) === false)
                return false;
        // SETS
        for (const ys of y.sets)
            if (x.sets.some((xs) => Metadata.covers(xs, ys)) === false)
                return false;
        //----
        // VALUES
        //----
        // ATOMICS
        if (y.atomics.some((ya) => x.atomics.some((xa) => xa.type === ya.type) === false))
            return false;
        // CONSTANTS
        for (const yc of y.constants) {
            if (x.atomics.some((atom) => yc.type === atom.type))
                continue;
            const xc = x.constants.find((elem) => elem.type === yc.type);
            if (xc === undefined)
                return false;
            else if (yc.values.some((yv) => xc.values.includes(yv) === false))
                return false;
        }
        // FUNCTIONAL
        if (x.functional === false && y.functional)
            return false;
        // SUCCESS
        return true;
    };
    /**
     * @internal
     */
    Metadata.merge = (x, y) => {
        const output = Metadata.create({
            any: x.any || y.any,
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
            optional: x.optional || y.optional,
            functional: x.functional || y.functional,
            escaped: x.escaped !== null && y.escaped !== null
                ? MetadataEscaped_1.MetadataEscaped.create({
                    original: Metadata.merge(x.escaped.original, y.escaped.original),
                    returns: Metadata.merge(x.escaped.returns, y.escaped.returns),
                })
                : x.escaped ?? y.escaped,
            atomics: mergeTaggedTypes({
                container: x.atomics,
                equals: (x, y) => x.type === y.type,
                getter: (x) => x.tags,
            })(y.atomics),
            constants: [...x.constants],
            templates: x.templates.slice(),
            rest: x.rest !== null && y.rest !== null
                ? Metadata.merge(x.rest, y.rest)
                : x.rest ?? y.rest,
            // arrays: x.arrays.slice(),
            arrays: mergeTaggedTypes({
                container: x.arrays,
                equals: (x, y) => x.type.name === y.type.name,
                getter: (x) => x.tags,
            })(y.arrays),
            tuples: mergeTaggedTypes({
                container: x.tuples,
                equals: (x, y) => x.type.name === y.type.name,
                getter: (x) => x.tags,
            })(y.tuples),
            objects: x.objects.slice(),
            aliases: x.aliases.slice(),
            natives: [...new Set([...x.natives, ...y.natives])],
            sets: x.sets.slice(),
            maps: x.maps.slice(),
        });
        for (const constant of y.constants) {
            const target = ArrayUtil_1.ArrayUtil.take(output.constants, (elem) => elem.type === constant.type, () => ({
                type: constant.type,
                values: [],
            }));
            for (const value of constant.values)
                ArrayUtil_1.ArrayUtil.add(target.values, value);
        }
        for (const obj of y.objects)
            ArrayUtil_1.ArrayUtil.set(output.objects, obj, (elem) => elem.name);
        for (const alias of y.aliases)
            ArrayUtil_1.ArrayUtil.set(output.aliases, alias, (elem) => elem.name);
        return output;
    };
})(Metadata || (exports.Metadata = Metadata = {}));
const getName = (metadata) => {
    if (metadata.any === true)
        return "any";
    const elements = [];
    // OPTIONAL
    if (metadata.nullable === true)
        elements.push("null");
    if (metadata.isRequired() === false)
        elements.push("undefined");
    // ATOMIC
    for (const atom of metadata.atomics) {
        elements.push(atom.getName());
    }
    for (const constant of metadata.constants)
        for (const value of constant.values)
            elements.push(constant.type === "string"
                ? JSON.stringify(value)
                : value.toString());
    for (const template of metadata.templates)
        elements.push("`" +
            template
                .map((child) => child.isConstant() && child.size() === 1
                ? child.constants[0].values[0]
                : `$\{${child.getName()}\}`)
                .join("")
                .split("`")
                .join("\\`") +
            "`");
    // NATIVES
    for (const native of metadata.natives)
        elements.push(native);
    for (const set of metadata.sets)
        elements.push(`Set<${set.getName()}>`);
    for (const map of metadata.maps)
        elements.push(`Map<${map.key.getName()}, ${map.value.getName()}>`);
    // INSTANCES
    if (metadata.rest !== null)
        elements.push(`...${metadata.rest.getName()}`);
    for (const tuple of metadata.tuples)
        elements.push(tuple.type.name);
    for (const array of metadata.arrays)
        elements.push(array.getName());
    for (const object of metadata.objects)
        elements.push(object.name);
    for (const alias of metadata.aliases)
        elements.push(alias.name);
    if (metadata.escaped !== null)
        elements.push(metadata.escaped.getName());
    // RETURNS
    if (elements.length === 0)
        return "unknown";
    else if (elements.length === 1)
        return elements[0];
    elements.sort();
    return `(${elements.join(" | ")})`;
};
const mergeTaggedTypes = (props) => (opposite) => {
    const output = [...props.container];
    for (const elem of opposite) {
        const equal = props.container.find((x) => props.equals(x, elem));
        if (equal === undefined) {
            output.push(elem);
            continue;
        }
        const matrix = props
            .getter(equal)
            .map((tags) => tags.map((t) => t.name))
            .sort();
        for (const tags of props.getter(elem)) {
            const names = tags.map((t) => t.name).sort();
            if (matrix.some((m) => m.length === names.length &&
                m.every((s, i) => s === names[i])))
                continue;
            props.getter(equal).push(tags);
        }
    }
    return output;
};
