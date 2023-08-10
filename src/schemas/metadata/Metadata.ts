import { Atomic } from "../../typings/Atomic";
import { ClassProperties } from "../../typings/ClassProperties";
import { Writable } from "../../typings/Writable";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { IMetadata } from "./IMetadata";
import { IMetadataCollection } from "./IMetadataCollection";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataAlias } from "./MetadataAlias";
import { MetadataArray } from "./MetadataArray";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataObject } from "./MetadataObject";
import { MetadataProperty } from "./MetadataProperty";
import { MetadataResolved } from "./MetadataResolved";
import { MetadataTuple } from "./MetadataTuple";

export class Metadata {
    public any: boolean;
    public required: boolean;
    public optional: boolean;
    public nullable: boolean;
    public functional: boolean;

    public resolved: MetadataResolved | null;
    public atomics: Atomic.Literal[];
    public constants: MetadataConstant[];
    public templates: Metadata[][];

    public rest: Metadata | null;
    public aliases: MetadataAlias[];
    public arrays: MetadataArray[];
    public tuples: MetadataTuple[];
    public objects: MetadataObject[];

    public natives: string[];
    public sets: Metadata[];
    public maps: Metadata.Entry[];

    /** @internal */ private name_?: string;
    /** @internal */ private parent_resolved_: boolean = false;
    /** @internal */ public union_index?: number;

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<Metadata>) {
        this.any = props.any;
        this.required = props.required;
        this.optional = props.optional;
        this.nullable = props.nullable;
        this.functional = props.functional;

        this.resolved = props.resolved;
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
    public static create(props: ClassProperties<Metadata>): Metadata {
        return new Metadata(props);
    }

    /**
     * @internal
     */
    public static initialize(parentResolved: boolean = false): Metadata {
        const meta: Metadata = this.create({
            any: false,
            nullable: false,
            required: true,
            optional: false,
            functional: false,

            resolved: null,
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

    public toJSON(): IMetadata {
        return {
            any: this.any,
            required: this.required,
            optional: this.optional,
            nullable: this.nullable,
            functional: this.functional,

            atomics: this.atomics.slice(),
            constants: JSON.parse(JSON.stringify(this.constants)),
            templates: this.templates.map((tpl) =>
                tpl.map((meta) => meta.toJSON()),
            ),
            resolved: this.resolved ? this.resolved.toJSON() : null,

            rest: this.rest ? this.rest.toJSON() : null,
            arrays: this.arrays.map((array) => array.name),
            tuples: this.tuples.map((tuple) => tuple.name),
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

    public static from(
        meta: IMetadata,
        collection: IMetadataCollection,
    ): Metadata {
        const dict: IMetadataDictionary = {
            objects: new Map(
                collection.objects.map((obj) => [
                    obj.name,
                    MetadataObject._From_without_properties(obj),
                ]),
            ),
            aliases: new Map(
                collection.aliases.map((alias) => [
                    alias.name,
                    MetadataAlias._From_without_value(alias),
                ]),
            ),
            arrays: new Map(
                collection.arrays.map((arr) => [
                    arr.name,
                    MetadataArray._From_without_value(arr),
                ]),
            ),
            tuples: new Map(
                collection.tuples.map((tpl) => [
                    tpl.name,
                    MetadataTuple._From_without_elements(tpl),
                ]),
            ),
        };

        for (const obj of collection.objects) {
            const initialized = dict.objects.get(obj.name)!;
            initialized.properties.push(
                ...obj.properties.map((prop) =>
                    MetadataProperty._From(prop, dict),
                ),
            );
        }
        for (const alias of collection.aliases)
            Writable(dict.aliases.get(alias.name)!).value = this._From(
                alias.value,
                dict,
            );
        for (const array of collection.arrays)
            Writable(dict.arrays.get(array.name)!).value = this._From(
                array.value,
                dict,
            );
        for (const tuple of collection.tuples)
            Writable(dict.tuples.get(tuple.name)!).elements =
                tuple.elements.map((elem) => this._From(elem, dict));

        return this._From(meta, dict);
    }

    /**
     * @internal
     */
    public static _From(meta: IMetadata, dict: IMetadataDictionary): Metadata {
        return this.create({
            any: meta.any,
            required: meta.required,
            optional: meta.optional,
            nullable: meta.nullable,
            functional: meta.functional,

            constants: JSON.parse(JSON.stringify(meta.constants)),
            atomics: meta.atomics.slice(),
            templates: meta.templates.map((tpl) =>
                tpl.map((meta) => this._From(meta, dict)),
            ),
            resolved: meta.resolved
                ? MetadataResolved._From(meta.resolved, dict)
                : null,

            rest: meta.rest ? this._From(meta.rest, dict) : null,
            arrays: meta.arrays.map((id) => {
                const array = dict.arrays.get(id);
                if (array === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find array "${id}".`,
                    );
                return array;
            }),
            tuples: meta.tuples.map((id) => {
                const tuple = dict.tuples.get(id);
                if (tuple === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find tuple "${id}".`,
                    );
                return tuple;
            }),
            objects: meta.objects.map((name) => {
                const found = dict.objects.get(name);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find object "${name}".`,
                    );
                return found;
            }),
            aliases: meta.aliases.map((alias) => {
                const found = dict.aliases.get(alias);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find alias "${alias}".`,
                    );
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
    public getName(): string {
        this.name_ ??= getName(this);
        return this.name_;
    }

    public empty(): boolean {
        return this.bucket() === 0 || this.size() === 0;
    }

    public size(): number {
        return (
            (this.any ? 1 : 0) +
            (this.resolved ? 1 : 0) +
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
            this.aliases.length
        );
    }

    public bucket(): number {
        return (
            (this.any ? 1 : 0) +
            (this.resolved ? 1 : 0) +
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
            (this.aliases.length ? 1 : 0)
        );
    }

    public isConstant(): boolean {
        return this.bucket() === (this.constants.length ? 1 : 0);
    }

    public isRequired(): boolean {
        return this.required === true && this.optional === false;
    }

    /**
     * @internal
     */
    public isUnionBucket(): boolean {
        const size: number = this.bucket();
        const emended: number =
            !!this.atomics.length && !!this.constants.length ? size - 1 : size;
        return emended > 1;
    }

    /**
     * @internal
     */
    public getSoleLiteral(): string | null {
        if (
            this.size() === 1 &&
            this.constants.length === 1 &&
            this.constants[0]!.type === "string" &&
            this.constants[0]!.values.length === 1
        )
            return this.constants[0]!.values[0] as string;
        else return null;
    }

    public isSoleLiteral(): boolean {
        return this.getSoleLiteral() !== null;
    }

    /**
     * @internal
     */
    public isParentResolved(): boolean {
        return this.parent_resolved_;
    }
}
export namespace Metadata {
    export const intersects = (x: Metadata, y: Metadata): boolean => {
        // CHECK ANY & OPTIONAL
        if (x.any || y.any) return true;
        if (x.isRequired() === false && false === y.isRequired()) return true;
        if (x.nullable === true && true === y.nullable) return true;
        if (x.functional === true && y.functional === true) return true;

        //----
        // INSTANCES
        //----
        // ARRAYS
        if (x.arrays.length && y.arrays.length) return true;
        if (x.tuples.length && y.tuples.length) return true;
        if (x.objects.length && y.objects.length) return true;
        if (x.aliases.length && y.aliases.length) return true;

        // NATIVES
        if (x.natives.length && y.natives.length)
            if (x.natives.some((xn) => y.natives.some((yn) => xn === yn)))
                return true;

        //----
        // VALUES
        //----
        // ATOMICS
        for (const atomic of x.atomics)
            if (y.atomics.includes(atomic)) return true;

        // CONSTANTS
        for (const constant of x.constants) {
            const opposite: MetadataConstant | undefined = y.constants.find(
                (elem) => elem.type === constant.type,
            );
            if (opposite === undefined) continue;

            const values: Set<any> = new Set([
                ...constant.values,
                ...opposite.values,
            ]);
            if (values.size !== constant.values.length + opposite.values.length)
                return true;
        }
        return false;
    };

    export const covers = (
        x: Metadata,
        y: Metadata,
        level: number = 0,
    ): boolean => {
        // CHECK ANY
        if (x === y) return false;
        else if (x.any) return true;
        else if (y.any) return false;

        //----
        // INSTANCES
        //----
        if (level === 0) {
            // ARRAYS
            for (const ya of y.arrays)
                if (
                    !x.arrays.some((xa) =>
                        covers(xa.value, ya.value, level + 1),
                    )
                ) {
                    return false;
                }

            // TUPLES
            for (const yt of y.tuples)
                if (
                    yt.elements.length !== 0 &&
                    x.tuples.some(
                        (xt) =>
                            xt.elements.length >= yt.elements.length &&
                            xt.elements
                                .slice(yt.elements.length)
                                .every((xv, i) =>
                                    covers(xv, yt.elements[i]!, level + 1),
                                ),
                    ) === false
                )
                    return false;
        }

        // OBJECTS
        for (const yo of y.objects)
            if (x.objects.some((xo) => MetadataObject.covers(xo, yo)) === false)
                return false;

        // ALIASES
        for (const yd of y.aliases)
            if (x.aliases.some((xd) => xd.name === yd.name) === false)
                return false;

        // NATIVES
        for (const yn of y.natives)
            if (x.natives.some((xn) => xn === yn) === false) return false;

        // SETS
        for (const ys of y.sets)
            if (x.sets.some((xs) => covers(xs, ys)) === false) return false;

        //----
        // VALUES
        //----
        // ATOMICS
        if (y.atomics.some((atomic) => x.atomics.includes(atomic) === false))
            return false;

        // CONSTANTS
        for (const yc of y.constants) {
            if (x.atomics.some((type) => yc.type === type)) continue;
            const xc: MetadataConstant | undefined = x.constants.find(
                (elem) => elem.type === yc.type,
            );
            if (xc === undefined) return false;
            else if (
                (yc.values as number[]).some(
                    (yv) => xc.values.includes(yv as never) === false,
                )
            )
                return false;
        }

        // FUNCTIONAL
        if (x.functional === false && y.functional) return false;

        // SUCCESS
        return true;
    };

    /**
     * @internal
     */
    export const merge = (x: Metadata, y: Metadata): Metadata => {
        const output: Metadata = Metadata.create({
            any: x.any || y.any,
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
            optional: x.optional || y.optional,
            functional: x.functional || y.functional,

            resolved:
                x.resolved !== null && y.resolved !== null
                    ? //? merge(x.resolved, y.resolved)
                      MetadataResolved.create({
                          original: merge(
                              x.resolved.original,
                              y.resolved.original,
                          ),
                          returns: merge(
                              x.resolved.returns,
                              y.resolved.returns,
                          ),
                      })
                    : x.resolved ?? y.resolved,
            atomics: [...new Set([...x.atomics, ...y.atomics])],
            constants: [...x.constants],
            templates: x.templates.slice(),

            rest:
                x.rest !== null && y.rest !== null
                    ? merge(x.rest, y.rest)
                    : x.rest ?? y.rest,
            arrays: x.arrays.slice(),
            tuples: x.tuples.slice(),
            objects: x.objects.slice(),
            aliases: x.aliases.slice(),

            natives: [...new Set([...x.natives, ...y.natives])],
            sets: x.sets.slice(),
            maps: x.maps.slice(),
        });
        for (const constant of y.constants) {
            const target: MetadataConstant = ArrayUtil.take(
                output.constants,
                (elem) => elem.type === constant.type,
                () => ({
                    type: constant.type,
                    values: [],
                }),
            );
            for (const value of constant.values)
                ArrayUtil.add(target.values, value);
        }
        for (const array of y.arrays)
            ArrayUtil.set(output.arrays, array, (elem) => elem.name);
        for (const tuple of y.tuples)
            ArrayUtil.set(output.tuples, tuple, (elem) => elem.name);
        for (const obj of y.objects)
            ArrayUtil.set(output.objects, obj, (elem) => elem.name);
        for (const alias of y.aliases)
            ArrayUtil.set(output.aliases, alias, (elem) => elem.name);

        return output;
    };
}

const getName = (metadata: Metadata): string => {
    if (metadata.any === true) return "any";

    const elements: string[] = [];

    // OPTIONAL
    if (metadata.nullable === true) elements.push("null");
    if (metadata.isRequired() === false) elements.push("undefined");

    // ATOMIC
    for (const type of metadata.atomics) {
        elements.push(type);
    }
    for (const constant of metadata.constants)
        for (const value of constant.values)
            elements.push(JSON.stringify(value));
    for (const template of metadata.templates)
        elements.push(
            "`" +
                template
                    .map((child) =>
                        child.isConstant() && child.size() === 1
                            ? child.constants[0]!.values[0]!
                            : `$\{${child.getName()}\}`,
                    )
                    .join("")
                    .split("`")
                    .join("\\`") +
                "`",
        );

    // NATIVES
    for (const native of metadata.natives) elements.push(native);
    for (const set of metadata.sets) elements.push(`Set<${set.getName()}>`);
    for (const map of metadata.maps)
        elements.push(`Map<${map.key.getName()}, ${map.value.getName()}>`);

    // INSTANCES
    if (metadata.rest !== null) elements.push(`...${metadata.rest.getName()}`);
    for (const tuple of metadata.tuples) elements.push(tuple.name);
    for (const array of metadata.arrays) elements.push(array.name);
    for (const object of metadata.objects) elements.push(object.name);
    for (const alias of metadata.aliases) elements.push(alias.name);
    if (metadata.resolved !== null) elements.push(metadata.resolved.getName());

    // RETURNS
    if (elements.length === 0) return "unknown";
    else if (elements.length === 1) return elements[0]!;

    elements.sort();
    return `(${elements.join(" | ")})`;
};
export namespace Metadata {
    export interface Entry {
        key: Metadata;
        value: Metadata;
    }
}
