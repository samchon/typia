import ts from "typescript";

import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { MapUtil } from "../utils/MapUtil";

import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
    private readonly dict_: Map<ts.Type, MetadataObject>;
    private readonly names_: Map<string, Map<ts.Type, string>>;
    private readonly unions_: Map<string, MetadataObject[]>;
    private index_: number;

    public constructor() {
        this.dict_ = new Map();
        this.names_ = new Map();
        this.unions_ = new Map();
        this.index_ = 0;
    }

    public objects(): MetadataObject[] {
        return [...this.dict_.values()];
    }
    public unions(): MetadataObject[][] {
        return [...this.unions_.values()];
    }

    public emplace(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): [MetadataObject, boolean] {
        const oldbie = this.dict_.get(type);
        if (oldbie !== undefined) return [oldbie, false];

        const $id: string = this.get_name(checker, type);
        const obj: MetadataObject = MetadataObject.create({
            name: $id,
            properties: [],
            description:
                (type.symbol &&
                    CommentFactory.generate(
                        type.symbol.getDocumentationComment(checker),
                    )) ||
                undefined,
            jsDocTags: type.symbol?.getJsDocTags() || [],
            validated: false,
            index: this.index_++,
            recursive: false,
            nullables: [],
        });
        this.dict_.set(type, obj);
        return [obj, true];
    }

    /**
     * @internal
     */
    public getUnionIndex(meta: Metadata): number {
        const key: string = meta.objects.map((obj) => obj.name).join(" | ");
        MapUtil.take(this.unions_, key, () => meta.objects);
        return [...this.unions_.keys()].indexOf(key);
    }

    private get_name(checker: ts.TypeChecker, type: ts.Type): string {
        const name: string = TypeFactory.getFullName(checker, type);
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
