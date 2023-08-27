import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataTypeTag } from "./IMetadataTypeTag";

export class MetadataAtomic {
    public readonly type: "boolean" | "bigint" | "number" | "string";
    public readonly tags: IMetadataTypeTag[][];

    private name_?: string;

    /**
     * @internal
     */
    private constructor(props: ClassProperties<MetadataAtomic>) {
        this.type = props.type;
        this.tags = props.tags;
    }

    public static create(
        props: ClassProperties<MetadataAtomic>,
    ): MetadataAtomic {
        return new MetadataAtomic(props);
    }

    public getName(): string {
        return (this.name_ ??= (() => {
            if (this.tags.length === 0) return this.type;
            else if (this.tags.length === 1) {
                const str: string = [
                    this.type,
                    ...this.tags[0]!.map((t) => t.name),
                ].join(" & ");
                return `(${str})`;
            }
            const rows: string[] = this.tags.map((row) => {
                const str: string = row.map((t) => t.name).join(" & ");
                return row.length === 1 ? str : `(${str})`;
            });
            return `(${this.type} & (${rows.join(" | ")}))`;
        })());
    }
}
