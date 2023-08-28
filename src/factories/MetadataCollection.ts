import ts from "typescript";

import { IMetadataCollection } from "../schemas/metadata/IMetadataCollection";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataAlias } from "../schemas/metadata/MetadataAlias";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";

import { Writable } from "../typings/Writable";

import { MapUtil } from "../utils/MapUtil";

import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
    private readonly objects_: Map<ts.Type, MetadataObject>;
    private readonly object_unions_: Map<string, MetadataObject[]>;
    private readonly aliases_: Map<ts.Type, MetadataAlias>;
    private readonly arrays_: Map<ts.Type, MetadataArrayType>;
    private readonly tuples_: Map<ts.Type, MetadataTupleType>;

    private readonly names_: Map<string, Map<ts.Type, string>>;
    private object_index_: number;
    private recursive_array_index_: number;
    private recursive_tuple_index_: number;

    public constructor(
        private readonly options?: Partial<MetadataCollection.IOptions>,
    ) {
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
    public aliases(): MetadataAlias[] {
        return [...this.aliases_.values()];
    }

    public objects(): MetadataObject[] {
        return [...this.objects_.values()];
    }

    public unions(): MetadataObject[][] {
        return [...this.object_unions_.values()];
    }

    public arrays(): MetadataArrayType[] {
        return [...this.arrays_.values()];
    }

    public tuples(): MetadataTupleType[] {
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
        INSTANCES
    ----------------------------------------------------------- */
    public emplace(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [MetadataObject, boolean] {
        const oldbie = this.objects_.get(type);
        if (oldbie !== undefined) return [oldbie, false];

        // const displays = type.symbol.getDocumentationComment(checker);
        // const tags = type.symbol.getJsDocTags(checker);

        // console.log(
        //     ts.displayPartsToString(displays),
        //     tags.map((tag) => tag.name),
        //     tags.map((tag) => ts.displayPartsToString(tag.text)),
        // );

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
            recursive: null!,
            nullables: [],
        });
        this.objects_.set(type, obj);
        return [obj, true];
    }

    public emplaceAlias(
        checker: ts.TypeChecker,
        type: ts.Type,
        symbol: ts.Symbol,
    ): [MetadataAlias, boolean, (meta: Metadata) => void] {
        const oldbie = this.aliases_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id: string = this.getName(checker, type);
        const alias: MetadataAlias = MetadataAlias.create({
            name: $id,
            value: null!,
            description: CommentFactory.description(symbol) ?? null,
            recursive: null!,
            nullables: [],
            jsDocTags: symbol.getJsDocTags() ?? [],
        });
        this.aliases_.set(type, alias);
        return [alias, true, (meta) => (Writable(alias).value = meta)];
    }

    public emplaceArray(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [MetadataArrayType, boolean, (meta: Metadata) => void] {
        const oldbie = this.arrays_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id = this.getName(checker, type);
        const array: MetadataArrayType = MetadataArrayType.create({
            name: $id,
            value: null!,
            index: null,
            recursive: null!,
            nullables: [],
        });
        this.arrays_.set(type, array);
        return [array, true, (meta) => (Writable(array).value = meta)];
    }

    public emplaceTuple(
        checker: ts.TypeChecker,
        type: ts.TupleType,
    ): [MetadataTupleType, boolean, (elements: Metadata[]) => void] {
        const oldbie = this.tuples_.get(type);
        if (oldbie !== undefined) return [oldbie, false, () => {}];

        const $id = this.getName(checker, type);
        const tuple: MetadataTupleType = MetadataTupleType.create({
            name: $id,
            elements: null!,
            index: null,
            recursive: null!,
            nullables: [],
        });
        this.tuples_.set(type, tuple);
        return [
            tuple,
            true,
            (elements) => (Writable(tuple).elements = elements),
        ];
    }

    /**
     * @internal
     */
    public setObjectRecursive(obj: MetadataObject, recursive: boolean): void {
        Writable(obj).recursive = recursive;
    }

    /**
     * @internal
     */
    public setAliasRecursive(alias: MetadataAlias, recursive: boolean): void {
        Writable(alias).recursive = recursive;
    }

    /**
     * @internal
     */
    public setArrayRecursive(
        array: MetadataArrayType,
        recursive: boolean,
    ): void {
        Writable(array).recursive = recursive;
        if (recursive) Writable(array).index = this.recursive_array_index_++;
    }

    public setTupleRecursive(
        tuple: MetadataTupleType,
        recursive: boolean,
    ): void {
        Writable(tuple).recursive = recursive;
        if (recursive) Writable(tuple).index = this.recursive_tuple_index_++;
    }

    public toJSON(): IMetadataCollection {
        return {
            objects: this.objects().map((o) => o.toJSON()),
            aliases: this.aliases().map((d) => d.toJSON()),
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
