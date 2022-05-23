import ts from "typescript";
import { HashMap } from "tstl/container/HashMap";
import { Pair } from "tstl/utility/Pair";

import { TypeFactory } from "./TypeFactry";
import { IMetadata } from "../structures/IMetadata";
import { MapUtil } from "../utils/MapUtil";
import { CommentFactory } from "./CommentFactory";

export class MetadataCollection
{
    private readonly dict_: HashMap<Pair<ts.Type, boolean>, [string, IMetadata.IObject]>;
    private readonly names_: Map<string, Map<ts.Type, string>>;

    public constructor
        (
            public readonly inline: boolean
        )
    {
        this.dict_ = new HashMap();
        this.names_ = new Map();
    }

    public storage(): IMetadata.IStorage
    {
        const storage: IMetadata.IStorage = {};
        for (const it of this.dict_)
            storage[it.second[0]] = it.second[1];
        return storage;
    }

    public emplace
        (
            checker: ts.TypeChecker,
            type: ts.Type, 
            nullable: boolean
        ): [string, IMetadata.IObject | null]
    {
        const key: Pair<ts.Type, boolean> = new Pair(type, nullable);
        const it = this.dict_.find(key);
        
        if (it.equals(this.dict_.end()) === false)
            return [it.second[0], null];
        
        const $id: string = this.get_name(checker, type, nullable);
        const obj: IMetadata.IObject = {
            $id,
            nullable,
            properties: {},
            description: type.symbol 
                && CommentFactory.generate(type.symbol.getDocumentationComment(checker)) 
                || undefined
        };
        this.dict_.emplace(key, [$id, obj]);

        return [$id, obj];
    }

    private get_name
        (
            checker: ts.TypeChecker,
            type: ts.Type, 
            nullable: boolean
        ): string
    {
        const name: string = `${TypeFactory.full_name(checker, type)}${nullable ? ".Nullable" : ""}`
            .split("&").join("-and-")
            .split("|").join("-or-")
            .split("<").join("-lt-")
            .split(">").join("-gt-")
            .split(",").join("-comma-")
            .split("'").join("")
            .split('"').join("")
            .split(" ").join("");
        const duplicates: Map<ts.Type, string> = MapUtil.take(this.names_, name, () => new Map());
        const oldbie = duplicates.get(type);

        if (oldbie)
            return oldbie;
        
        const emended: string = duplicates.size
            ? `${name}.o${duplicates.size}`
            : name;
        duplicates.set(type, emended);
        return emended;
    }
}
export namespace MetadataCollection {}