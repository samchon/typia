import ts from "typescript";

import { Metadata } from "../metadata/Metadata";
import { MetadataDefinition } from "../metadata/MetadataDefinition";
import { MetadataObject } from "../metadata/MetadataObject";

import { Writable } from "../typings/Writable";

import { MapUtil } from "../utils/MapUtil";

import { CommentFactory } from "./CommentFactory";
import { MetadataTagFactory } from "./MetadataTagFactory";
import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
    private readonly objects_: Map<ts.Type, MetadataObject>;
    private readonly names_: Map<string, Map<ts.Type, string>>;
    private readonly unions_: Map<string, MetadataObject[]>;
    private index_: number;

    private readonly definitions_: Map<ts.Type, MetadataDefinition>;
    private def_index_: number;

    public constructor(
        private readonly options?: Partial<MetadataCollection.IOptions>,
    ) {
        this.objects_ = new Map();
        this.names_ = new Map();
        this.unions_ = new Map();
        this.index_ = 0;

        this.definitions_ = new Map();
        this.def_index_ = 0;
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
        return [...this.unions_.values()];
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
            index: this.index_++,
            recursive: false,
            nullables: [],
        });
        this.objects_.set(type, obj);
        return [obj, true];
    }

    /**
     * @internal
     */
    public getUnionIndex(meta: Metadata): number {
        const key: string = meta.objects.map((obj) => obj.name).join(" | ");
        MapUtil.take(this.unions_)(key, () => meta.objects);
        return [...this.unions_.keys()].indexOf(key);
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
        const jsDocTags = symbol.getJsDocTags() ?? [];
        const def: MetadataDefinition = MetadataDefinition.create({
            name: $id,
            value: null!,
            description: CommentFactory.description(symbol) ?? undefined,
            index: this.def_index_++,
            validated: false,
            nullables: [],
            jsDocTags: symbol.getJsDocTags() ?? [],
            tags: [],
        });
        this.definitions_.set(type, def);
        return [
            def,
            true,
            (meta) => {
                Writable(def).value = meta;
                Writable(def).tags = MetadataTagFactory.generate(meta)(
                    jsDocTags,
                )(() => $id);
            },
        ];
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
