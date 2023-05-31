import ts from "typescript";

import { IMetadataCollection } from "../metadata/IMetadataCollection";
import { Metadata } from "../metadata/Metadata";
import { MetadataArray } from "../metadata/MetadataArray";
import { MetadataDefinition } from "../metadata/MetadataDefinition";
import { MetadataObject } from "../metadata/MetadataObject";
import { MetadataTuple } from "../metadata/MetadataTuple";

import { Writable } from "../typings/Writable";

import { MapUtil } from "../utils/MapUtil";

import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
    private readonly objects_: Map<ts.Type, MetadataObject>;
    private readonly object_unions_: Map<string, MetadataObject[]>;
    private readonly definitions_: Map<ts.Type, MetadataDefinition>;
    private readonly arrays_: Map<ts.Type, MetadataArray>;
    private readonly tuples_: Map<ts.Type, MetadataTuple>;

    private readonly names_: Map<string, Map<ts.Type, string>>;
    private object_index_: number;
    private array_index_: number;
    private tuple_index_: number;

    public constructor(
        private readonly options?: Partial<MetadataCollection.IOptions>,
    ) {
        this.objects_ = new Map();
        this.object_unions_ = new Map();
        this.definitions_ = new Map();
        this.arrays_ = new Map();
        this.tuples_ = new Map();

        this.names_ = new Map();
        this.object_index_ = 0;
        this.array_index_ = 0;
        this.tuple_index_ = 0;
    }

    /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
    public definitions(): MetadataDefinition[] {
        return [...this.definitions_.values()];
    }

    public objects(): MetadataObject[] {
        return [...this.objects_.values()];
    }

    public unions(): MetadataObject[][] {
        return [...this.object_unions_.values()];
    }

    public arrays(): MetadataArray[] {
        return [...this.arrays_.values()];
    }

    public tuples(): MetadataTuple[] {
        return [...this.tuples_.values()];
    }

    private getName(checker: ts.TypeChecker, type: ts.Type): string {
        const name: string = (() => {
            const str: string = TypeFactory.getFullName(checker)(type);
            return this.options?.replace ? this.options.replace(str) : str;
        })();

        const duplicates: Map<ts.Type, string> = MapUtil.take(this.names_)(
            name,
            () => new Map(),
        );
        const oldbie: string | undefined = duplicates.get(type);
        if (oldbie !== undefined) return oldbie;

        const addicted: string = duplicates.size
            ? `${name}.o${duplicates.size}`
            : name;
        duplicates.set(type, addicted);
        return addicted;
    }

    /**
     * @internal
     */
    public getUnionIndex(meta: Metadata): number {
        const key: string = meta.objects.map((obj) => obj.name).join(" | ");
        MapUtil.take(this.object_unions_)(key, () => meta.objects);
        return [...this.object_unions_.keys()].indexOf(key);
    }

    /* -----------------------------------------------------------
        OBJECTS
    ----------------------------------------------------------- */
    public emplace(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [MetadataObject, boolean] {
        const oldbie = this.objects_.get(type);
        if (oldbie !== undefined) return [oldbie, false];

        const $id: string = this.getName(checker, type);
        const obj: MetadataObject = MetadataObject.create({
            name: $id,
            properties: [],
            description:
                (type.symbol && CommentFactory.description(type.symbol)) ??
                undefined,
            jsDocTags: type.symbol?.getJsDocTags() ?? [],
            validated: false,
            index: this.object_index_++,
            recursive: false,
            nullables: [],
        });
        this.objects_.set(type, obj);
        return [obj, true];
    }

    /* -----------------------------------------------------------
        DEFINITIONS
    ----------------------------------------------------------- */
    public emplaceDefinition(
        checker: ts.TypeChecker,
        type: ts.Type,
        symbol: ts.Symbol,
    ): [MetadataDefinition, boolean, (meta: Metadata) => void] {
        const oldbie = this.definitions_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id: string = this.getName(checker, type);
        const def: MetadataDefinition = MetadataDefinition.create({
            name: $id,
            value: null!,
            description: CommentFactory.description(symbol) ?? null,
            nullables: [],
            jsDocTags: symbol.getJsDocTags() ?? [],
        });
        this.definitions_.set(type, def);
        return [def, true, (meta) => (Writable(def).value = meta)];
    }

    public emplaceArray(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [MetadataArray, boolean, (meta: Metadata) => void] {
        const oldbie = this.arrays_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id = this.getName(checker, type);
        const array: MetadataArray = MetadataArray.create({
            name: $id,
            value: null!,
            index: this.array_index_,
            recursive: false,
            nullables: [],
        });
        this.arrays_.set(type, array);
        return [array, true, (meta) => (Writable(array).value = meta)];
    }

    public emplaceTuple(
        checker: ts.TypeChecker,
        type: ts.TupleType,
    ): [MetadataTuple, boolean, (elements: Metadata[]) => void] {
        const oldbie = this.tuples_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id = this.getName(checker, type);
        const tuple: MetadataTuple = MetadataTuple.create({
            name: $id,
            elements: null!,
            index: this.tuple_index_++,
            recursive: false,
            nullables: [],
        });
        this.tuples_.set(type, tuple);
        return [
            tuple,
            true,
            (elements) => (Writable(tuple).elements = elements),
        ];
    }

    public toJSON(): IMetadataCollection {
        return {
            objects: this.objects().map((o) => o.toJSON()),
            definitions: this.definitions().map((d) => d.toJSON()),
            arrays: [...this.arrays_.values()].map((a) => a.toJSON()),
            tuples: [...this.tuples_.values()].map((t) => t.toJSON()),
        };
    }
}
export namespace MetadataCollection {
    export interface IOptions {
        replace?(str: string): string;
    }

    export const replace = (str: string): string => {
        for (const [before, after] of REPLACERS)
            str = str.split(before).join(after);
        return str;
    };

    export const escape = (str: string): string => {
        for (const [before, after] of REPLACERS)
            if (after !== "") str = str.split(after).join(before);
        return str;
    };
}
const REPLACERS: [string, string][] = [
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
