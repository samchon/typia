import ts from "typescript";

import { TypeFactory } from "./TypeFactory";
import { IMetadata } from "../structures/IMetadata";
import { MapUtil } from "../utils/MapUtil";
import { CommentFactory } from "./CommentFactory";

export class MetadataCollection {
    private readonly dict_: Map<ts.Type, [string, IMetadata.IObject]>;
    private readonly names_: Map<string, Map<ts.Type, string>>;

    public constructor(
        private readonly options?: Partial<MetadataCollection.IOptions>,
    ) {
        this.dict_ = new Map();
        this.names_ = new Map();
    }

    public storage(): IMetadata.IStorage {
        const storage: IMetadata.IStorage = {};
        for (const [key, value] of this.dict_.values()) storage[key] = value;
        return storage;
    }

    public emplace(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [string, IMetadata.IObject, boolean] {
        const oldbie = this.dict_.get(type);
        if (oldbie !== undefined) return [oldbie[0], oldbie[1], false];

        const $id: string = this.get_name(checker, type);
        const obj: IMetadata.IObject = {
            $id,
            recursive: false,
            properties: {},
            description:
                (type.symbol &&
                    CommentFactory.generate(
                        type.symbol.getDocumentationComment(checker),
                    )) ||
                undefined,
            validated: false,
        };
        this.dict_.set(type, [$id, obj]);
        return [$id, obj, true];
    }

    private get_name(checker: ts.TypeChecker, type: ts.Type): string {
        const name: string = (() => {
            const str: string = TypeFactory.getFullName(checker, type);
            return this.options?.replace ? this.options.replace(str) : str;
        })();

        const duplicates: Map<ts.Type, string> = MapUtil.take(
            this.names_,
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
}
export namespace MetadataCollection {
    export interface IOptions {
        replace(str: string): string;
    }

    export function replace(str: string): string {
        for (const [before, after] of REPLACERS)
            str = str.split(before).join(after);
        return str;
    }
}
const REPLACERS: [string, string][] = [
    ["$", "_dollar_"],
    ["&", "_and_"],
    ["|", "_or_"],
    ["{", "_blt_"],
    ["}", "_bgt_"],
    ["<", "_lt_"],
    [">", "_gt_"],
    [",", "_comma_"],
    ["`", ""],
    ["'", ""],
    ['"', ""],
    [" ", ""],
];
