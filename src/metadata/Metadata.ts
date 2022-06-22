import { IMetadata } from "../structures/IMetadata";
import { IMetadataObject } from "../structures/IMetadataObject";
import { Atomic } from "../typings/Atomic";
import { ClassProperties } from "../typings/ClassProperties";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataObject } from "./MetadataObject";
import { MetadataProperty } from "./MetadataProperty";

export class Metadata {
    public readonly any: boolean;
    public readonly required: boolean;
    public readonly nullable: boolean;

    public readonly resolved: Metadata | null;
    public readonly atomics: Atomic.Name[];
    public readonly constants: MetadataConstant[];

    public readonly arrays: Metadata[];
    public readonly tuples: Metadata[][];
    public readonly objects: MetadataObject[];

    /**
     * @internal
     */
    private name_: string | undefined = undefined;

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
            (this.constants.length ? 1 : 0) +
            (this.arrays.length ? 1 : 0) +
            (this.tuples.length ? 1 : 0) +
            (this.objects.length ? 1 : 0)
        );
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
