import { IMetadata } from "./IMetadata";
import { IMetadataObject } from "./IMetadataObject";
import { Atomic } from "../typings/Atomic";
import { ClassProperties } from "../typings/ClassProperties";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataObject } from "./MetadataObject";
import { MetadataProperty } from "./MetadataProperty";

export class Metadata {
    public readonly any: boolean;
    public readonly required: boolean;
    public readonly nullable: boolean;
    public readonly functional: boolean;

    public readonly resolved: Metadata | null;
    public readonly atomics: Atomic.Literal[];
    public readonly constants: MetadataConstant[];

    public readonly arrays: Metadata[];
    public readonly tuples: Metadata[][];
    public readonly objects: MetadataObject[];

    /**
     * @internal
     */
    private name_: string | undefined = undefined;

    /**
     * @internal
     */
    public union_index?: number;

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<Metadata>) {
        this.any = props.any;
        this.required = props.required;
        this.nullable = props.nullable;
        this.functional = props.functional;

        this.resolved = props.resolved;
        this.atomics = props.atomics;
        this.constants = props.constants;
        this.arrays = props.arrays;
        this.tuples = props.tuples;
        this.objects = props.objects;
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
    public static initialize(): Metadata {
        return this.create({
            any: false,
            nullable: false,
            required: true,
            functional: false,

            resolved: null,
            constants: [],
            atomics: [],
            arrays: [],
            tuples: [],
            objects: [],
        });
    }

    public toJSON(): IMetadata {
        return {
            any: this.any,
            required: this.required,
            nullable: this.nullable,
            functional: this.functional,

            atomics: this.atomics.slice(),
            constants: JSON.parse(JSON.stringify(this.constants)),

            resolved: this.resolved ? this.resolved.toJSON() : null,
            arrays: this.arrays.map((meta) => meta.toJSON()),
            tuples: this.tuples.map((meta) =>
                meta.map((meta) => meta.toJSON()),
            ),
            objects: this.objects.map((obj) => obj.name),
        };
    }

    public static from(meta: IMetadata, objects: IMetadataObject[]): Metadata {
        const dict: Map<string, MetadataObject> = new Map();
        for (const obj of objects)
            dict.set(obj.name, MetadataObject._From_without_properties(obj));

        for (const obj of objects) {
            const initialized = dict.get(obj.name)!;
            initialized.properties.push(
                ...obj.properties.map((prop) =>
                    MetadataProperty._From(prop, dict),
                ),
            );
        }
        return this._From(meta, dict);
    }

    /**
     * @internal
     */
    public static _From(
        meta: IMetadata,
        objects: Map<string, MetadataObject>,
    ): Metadata {
        return this.create({
            any: meta.any,
            required: meta.required,
            nullable: meta.nullable,
            functional: meta.functional,

            resolved: meta.resolved ? this._From(meta.resolved, objects) : null,
            atomics: meta.atomics.slice(),
            constants: JSON.parse(JSON.stringify(meta.constants)),

            arrays: meta.arrays.map((meta) => this._From(meta, objects)),
            tuples: meta.tuples.map((tuple) =>
                tuple.map((meta) => this._From(meta, objects)),
            ),
            objects: meta.objects.map((name) => {
                const found = objects.get(name);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find object "${name}".`,
                    );
                return found;
            }),
        });
    }

    /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
    public getName(): string {
        this.name_ ||= getName(this);
        return this.name_;
    }

    public empty(): boolean {
        return this.bucket() === 0 || this.size() === 0;
    }
    public size(): number {
        return (
            (this.resolved ? 1 : 0) +
            (this.functional ? 1 : 0) +
            this.atomics.length +
            this.constants
                .map((c) => c.values.length)
                .reduce((x, y) => x + y, 0) +
            this.arrays.length +
            this.tuples.length +
            this.objects.length
        );
    }
    public bucket(): number {
        return (
            (this.resolved ? 1 : 0) +
            (this.functional ? 1 : 0) +
            (this.atomics.length ? 1 : 0) +
            (this.constants.length ? 1 : 0) +
            (this.arrays.length ? 1 : 0) +
            (this.tuples.length ? 1 : 0) +
            (this.objects.length ? 1 : 0)
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
}
export namespace Metadata {
    export function intersects(
        x: Metadata,
        y: Metadata,
        deep: boolean,
    ): boolean {
        // CHECK ANY & OPTIONAL
        if (x.any || y.any) return true;
        if (x.required === false && false === y.required) return true;
        if (x.nullable === true && true === y.nullable) return true;

        //----
        // INSTANCES
        //----
        // ARRAYS AND OBJECTS
        if (deep === true) {
            for (const xa of x.arrays)
                for (const ya of y.arrays)
                    if (intersects(xa, ya, deep)) {
                        return true;
                    }
            for (const xo of x.objects)
                for (const yo of y.objects)
                    if (MetadataObject.intersects(xo, yo)) {
                        return true;
                    }
        } else {
            if (x.arrays.length && y.arrays.length) return true;
            if (x.objects.length && y.objects.length) return true;
        }

        // TUPLES
        for (const xt of x.tuples)
            for (const yt of y.tuples)
                if (
                    xt
                        .slice(0, Math.min(xt.length, yt.length))
                        .some((xv, i) => intersects(xv, yt[i]!, deep))
                )
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

        // FUNCTIONAL
        if (x.functional === true && y.functional === true) return true;

        return false;
    }

    export function covers(x: Metadata, y: Metadata): boolean {
        // CHECK ANY
        if (x.any) return true;
        else if (y.any) return false;

        //----
        // INSTANCES
        //----
        // ARRAYS
        for (const ya of y.arrays)
            if (x.arrays.some((xa) => covers(xa, ya) === true) === false)
                return false;

        // OBJECTS
        for (const yo of y.objects)
            if (x.objects.some((xo) => MetadataObject.covers(xo, yo)) === false)
                return false;

        // TUPLES
        for (const yt of y.tuples)
            if (
                x.tuples.some(
                    (xt) =>
                        xt.length >= yt.length &&
                        xt
                            .slice(yt.length)
                            .every((xv, i) => covers(xv, yt[i]!)),
                ) === false
            )
                return false;

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
    }
}

function getName(metadata: Metadata): string {
    if (metadata.any === true) return "any";

    const elements: string[] = [];

    // OPTIONAL
    if (metadata.nullable === true) elements.push("null");
    if (metadata.required === false) elements.push("undefined");

    // ATOMIC
    for (const type of metadata.atomics) elements.push(type);
    for (const constant of metadata.constants)
        for (const value of constant.values)
            elements.push(JSON.stringify(value));

    // ARRAY
    for (const tuple of metadata.tuples)
        elements.push(`[${tuple.map((elem) => elem.getName()).join(", ")}]`);
    for (const array of metadata.arrays)
        elements.push(`Array<${array.getName()}}>`);

    // OBJECT
    for (const object of metadata.objects)
        elements.push(`Resolve<${object.name}>`);
    if (metadata.resolved !== null) elements.push(metadata.resolved.getName());

    // RETURNS
    if (elements.length === 0) return "unknown";
    else if (elements.length === 1) return elements[0]!;

    elements.sort();
    return `(${elements.join(" | ")})`;
}
