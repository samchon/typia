import { Atomic } from "../typings/Atomic";
import { ClassProperties } from "../typings/ClassProperties";
import { Writable } from "../typings/Writable";

import { ArrayUtil } from "../utils/ArrayUtil";

import { IMetadata } from "./IMetadata";
import { IMetadataCollection } from "./IMetadataCollection";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataArray } from "./MetadataArray";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataDefinition } from "./MetadataDefinition";
import { MetadataObject } from "./MetadataObject";
import { MetadataProperty } from "./MetadataProperty";
import { MetadataTuple } from "./MetadataTuple";

export class Metadata {
    public any: boolean;
    public required: boolean;
    public optional: boolean;
    public nullable: boolean;
    public functional: boolean;

    public resolved: Metadata | null;
    public atomics: Atomic.Literal[];
    public constants: MetadataConstant[];
    public templates: Metadata[][];

    public rest: Metadata | null;
    public arrays: MetadataArray[];
    public tuples: MetadataTuple[];
    public objects: MetadataObject[];
    public definitions: MetadataDefinition[];

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
        this.definitions = props.definitions;

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
            definitions: [],

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
            definitions: this.definitions.map((def) => def.name),

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
            definitions: new Map(
                collection.definitions.map((def) => [
                    def.name,
                    MetadataDefinition._From_without_value(def),
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
        for (const def of collection.definitions)
            Writable(dict.definitions.get(def.name)!).value = this._From(
                def.value,
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
            resolved: meta.resolved ? this._From(meta.resolved, dict) : null,

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
            definitions: meta.definitions.map((def) => {
                const found = dict.definitions.get(def);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find definition "${def}".`,
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
            this.definitions.length
        );
    }
    public bucket(): number {
        return (
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
            (this.definitions.length ? 1 : 0)
        );
    }
    public isConstant(): boolean {
        return this.bucket() === (this.constants.length ? 1 : 0);
    }

    /**
     * @internal
     */
    public isUnionBucket(): boolean {
        const size: number = this.bucket();
        const emended: number = this.constants.length ? size - 1 : size;
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

    /**
     * @internal
     */
    public isSoleLiteral(): boolean {
        return this.getSoleLiteral() !== null;
    }

    /**
     * @internal
     */
    public isParentResolved(): boolean {
        return this.parent_resolved_;
    }

    // /* -----------------------------------------------------------
    //     COMBINERS
    // ----------------------------------------------------------- */
    // public computeEmpty(): boolean {
    //     return this.computeSize() === 0;
    // }

    // public computeSize(): number {
    //     return (this.computed_size_ ??=
    //         (this.computeResolved() ? 1 : 0) +
    //         (this.computeFunctional() ? 1 : 0) +
    //         (this.computeRest() ? 1 : 0) +
    //         this.computeTemplates().length +
    //         this.computeAtomics().size +
    //         [...this.computeConstants().values()]
    //             .map((v) => v.size)
    //             .reduce((a, b) => a + b, 0) +
    //         this.computeArrays().length +
    //         this.computeTuples().length +
    //         this.computeObjects().length +
    //         this.computeDefinitions().length +
    //         this.computeNatives().size +
    //         this.computeSets().length +
    //         this.computeMaps().length);
    // }

    // public computeBucket(): number {
    //     return (this.computed_bucket_ ??=
    //         (this.computeResolved() ? 1 : 0) +
    //         (this.computeFunctional() ? 1 : 0) +
    //         (this.computeTemplates().length ? 1 : 0) +
    //         (this.computeAtomics().size ? 1 : 0) +
    //         (this.computeConstants().size ? 1 : 0) +
    //         (this.computeRest() ? 1 : 0) +
    //         (this.computeArrays().length ? 1 : 0) +
    //         (this.computeTuples().length ? 1 : 0) +
    //         (this.computeObjects().length ? 1 : 0) +
    //         (this.computeNatives().size ? 1 : 0) +
    //         (this.computeSets().length ? 1 : 0) +
    //         (this.computeMaps().length ? 1 : 0));
    // }

    // public computeAny(): boolean {
    //     return (this.computed_any_ ??= Metadata._Iterate([] as boolean[])(
    //         (flags) => (meta) => flags.push(meta.any),
    //     )(this).reduce((x, y) => x || y));
    // }

    // public computeRequired(): boolean {
    //     return (this.computed_required_ ??= Metadata._Iterate([] as boolean[])(
    //         (flags) => (meta) => flags.push(meta.required),
    //     )(this).reduce((x, y) => x && y));
    // }

    // public computeOptional(): boolean {
    //     return (this.computed_optional_ ??= Metadata._Iterate([] as boolean[])(
    //         (flags) => (meta) => flags.push(meta.optional),
    //     )(this).reduce((x, y) => x || y));
    // }

    // public computeNullable(): boolean {
    //     return (this.computed_nullable_ ??= Metadata._Iterate([] as boolean[])(
    //         (flags) => (meta) => flags.push(meta.nullable),
    //     )(this).reduce((x, y) => x || y));
    // }

    // public computeFunctional(): boolean {
    //     return (this.computed_functional_ ??= Metadata._Iterate(
    //         [] as boolean[],
    //     )((flags) => (meta) => flags.push(meta.any))(this).reduce(
    //         (x, y) => x || y,
    //     ));
    // }

    // public computeAtomics(): Set<Atomic.Literal> {
    //     return (this.computed_atomics_ ??= Metadata._Iterate(
    //         new Set<Atomic.Literal>(),
    //     )((values) => (meta) => {
    //         for (const atomic of meta.atomics) values.add(atomic);
    //     })(this));
    // }

    // public computeConstants(): Map<Atomic.Literal, Set<Atomic.Type>> {
    //     return (this.computed_constants_ ??= Metadata._Iterate(
    //         new Map<Atomic.Literal, Set<Atomic.Type>>(),
    //     )((container) => (meta) => {
    //         for (const constant of meta.constants) {
    //             const line = MapUtil.take(container)(
    //                 constant.type,
    //                 () => new Set(),
    //             );
    //             for (const v of constant.values) line.add(v);
    //         }
    //     })(this));
    // }

    // public computeTemplates(): Metadata[][] {
    //     return (this.computed_templates_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, Metadata[]>())(
    //             (dict) => (meta) =>
    //                 meta.templates.forEach((tpl) =>
    //                     dict.set(tpl.map((t) => t.getName).join(","), tpl),
    //                 ),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeResolved(): Metadata | null {
    //     return (this.computed_resolved_ ??= this.resolved);
    // }

    // public computeRest(): Metadata | null {
    //     return (this.computed_rest_ ??= this.rest);
    // }

    // public computeArrays(): Metadata[] {
    //     return (this.computed_arrays_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, Metadata>())(
    //             (dict) => (meta) =>
    //                 meta.arrays.forEach((array) =>
    //                     dict.set(array.getName(), array),
    //                 ),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeTuples(): Metadata[][] {
    //     return (this.computed_tuples_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, Metadata[]>())(
    //             (dict) => (meta) =>
    //                 meta.tuples.forEach((tpl) =>
    //                     dict.set(tpl.map((t) => t.getName).join(","), tpl),
    //                 ),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeNatives(): Set<string> {
    //     return (this.computed_natives_ ??= Metadata._Iterate(new Set<string>())(
    //         (values) => (meta) => {
    //             for (const native of meta.natives) values.add(native);
    //         },
    //     )(this));
    // }

    // public computeSets(): Metadata[] {
    //     return (this.computed_sets_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, Metadata>())(
    //             (dict) => (meta) =>
    //                 meta.sets.forEach((set) => dict.set(set.getName(), set)),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeMaps(): Metadata.Entry[] {
    //     return (this.computed_maps_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, Metadata.Entry>())(
    //             (dict) => (meta) =>
    //                 meta.maps.forEach((m) =>
    //                     dict.set(
    //                         [m.key.getName(), m.value.getName()].join(","),
    //                         m,
    //                     ),
    //                 ),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeObjects(): MetadataObject[] {
    //     return (this.computed_objects_ ??= (() => {
    //         const dict = Metadata._Iterate(new Map<string, MetadataObject>())(
    //             (dict) => (meta) =>
    //                 meta.objects.forEach((obj) => dict.set(obj.name, obj)),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public computeDefinitions(): MetadataDefinition[] {
    //     return (this.computed_definitions_ ??= (() => {
    //         const dict = Metadata._Iterate(
    //             new Map<string, MetadataDefinition>(),
    //         )(
    //             (dict) => (meta) =>
    //                 meta.definitions.forEach((def) => dict.set(def.name, def)),
    //         )(this);
    //         return [...dict.values()];
    //     })());
    // }

    // public absorb(): void {
    //     this._Absorb(new Set());
    // }

    // private _Absorb(visited: Set<Metadata>): void {
    //     if (visited.has(this)) return;
    //     visited.add(this);

    //     if (this.size() === 1 && this.definitions.length === 1) return;

    //     //----
    //     // ITERATIONS
    //     //----
    //     if (this.resolved) this.resolved._Absorb(visited);
    //     if (this.rest) this.rest._Absorb(visited);

    //     for (const array of this.arrays) array._Absorb(visited);
    //     for (const tuple of this.tuples)
    //         for (const elem of tuple) elem._Absorb(visited);

    //     for (const set of this.sets) set._Absorb(visited);
    //     for (const map of this.maps) map.value._Absorb(visited);
    //     for (const object of this.objects)
    //         for (const property of object.properties)
    //             property.value._Absorb(visited);
    //     for (const definition of this.definitions)
    //         definition.value._Absorb(visited);

    //     //----
    //     // MEMBERS
    //     //----
    //     // FLAGS
    //     this.any = this.computeAny();
    //     this.required = this.computeRequired();
    //     this.optional = this.computeOptional();
    //     this.nullable = this.computeNullable();
    //     this.functional = this.computeFunctional();

    //     // ATOMICS
    //     this.atomics = [...this.computeAtomics()];
    //     this.constants = [...this.computeConstants()].map(([type, values]) => ({
    //         type,
    //         values: [...values],
    //     })) as MetadataConstant[];
    //     this.templates = this.computeTemplates();

    //     // INSTANCES
    //     this.resolved = this.computeResolved();
    //     this.rest = this.computeRest();
    //     this.arrays = this.computeArrays();
    //     this.tuples = this.computeTuples();
    //     this.natives = [...this.computeNatives()];
    //     this.maps = this.computeMaps();
    //     this.sets = this.computeSets();
    //     this.objects = this.computeObjects();
    //     this.definitions = this.computeDefinitions();
    // }

    // private static _Iterate =
    //     <T>(container: T) =>
    //     (closure: (container: T) => (meta: Metadata) => any) => {
    //         const visited: Set<string> = new Set();
    //         const iterate = (meta: Metadata): T => {
    //             closure(container)(meta);
    //             for (const def of meta.definitions) {
    //                 const name: string = def.value.getName();
    //                 if (visited.has(name)) continue;
    //                 visited.add(name);
    //                 iterate(def.value);
    //             }
    //             return container;
    //         };
    //         return iterate;
    //     };

    // /** @internal */ private computed_size_?: number;
    // /** @internal */ private computed_bucket_?: number;
    // /** @internal */ private computed_any_?: boolean;
    // /** @internal */ private computed_required_?: boolean;
    // /** @internal */ private computed_optional_?: boolean;
    // /** @internal */ private computed_nullable_?: boolean;
    // /** @internal */ private computed_functional_?: boolean;
    // /** @internal */ private computed_atomics_?: Set<Atomic.Literal>;
    // /** @internal */ private computed_constants_?: Map<
    //     Atomic.Literal,
    //     Set<Atomic.Type>
    // >;
    // /** @internal */ private computed_templates_?: Metadata[][];
    // /** @internal */ private computed_rest_?: Metadata | null;
    // /** @internal */ private computed_resolved_?: Metadata | null;
    // /** @internal */ private computed_arrays_?: Metadata[];
    // /** @internal */ private computed_tuples_?: Metadata[][];
    // /** @internal */ private computed_natives_?: Set<string>;
    // /** @internal */ private computed_sets_?: Metadata[];
    // /** @internal */ private computed_maps_?: Metadata.Entry[];
    // /** @internal */ private computed_objects_?: MetadataObject[];
    // /** @internal */ private computed_definitions_?: MetadataDefinition[];
}
export namespace Metadata {
    export const intersects = (x: Metadata, y: Metadata): boolean => {
        // CHECK ANY & OPTIONAL
        if (x.any || y.any) return true;
        if (x.required === false && false === y.required) return true;
        if (x.nullable === true && true === y.nullable) return true;
        if (x.functional === true && y.functional === true) return true;

        //----
        // INSTANCES
        //----
        // ARRAYS
        if (x.arrays.length && y.arrays.length) return true;
        if (x.tuples.length && y.tuples.length) return true;
        if (x.objects.length && y.objects.length) return true;
        if (x.definitions.length && y.definitions.length) return true;

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
                )
                    return false;

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

        // DEFINITIONS
        for (const yd of y.definitions)
            if (x.definitions.some((xd) => xd.name === yd.name) === false)
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
                    ? merge(x.resolved, y.resolved)
                    : x.resolved || y.resolved,
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
            definitions: x.definitions.slice(),

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
        for (const def of y.definitions)
            ArrayUtil.set(output.definitions, def, (elem) => elem.name);

        return output;
    };
}

const getName = (metadata: Metadata): string => {
    if (metadata.any === true) return "any";

    const elements: string[] = [];

    // OPTIONAL
    if (metadata.nullable === true) elements.push("null");
    if (metadata.required === false) elements.push("undefined");

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
    for (const def of metadata.definitions) elements.push(def.name);
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
