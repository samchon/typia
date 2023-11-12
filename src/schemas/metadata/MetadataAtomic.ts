import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataAtomic } from "./IMetadataAtomic";
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

    public static from(json: IMetadataAtomic): MetadataAtomic {
        return MetadataAtomic.create({
            type: json.type,
            tags: json.tags.map((row) =>
                row.map((tag) => ({
                    target: tag.target,
                    name: tag.name,
                    kind: tag.kind,
                    value:
                        typeof tag.value === "object" &&
                        tag.value?.type === "bigint" &&
                        typeof tag.value.value === "string"
                            ? BigInt(tag.value.value)
                            : tag.value,
                    validate: tag.validate,
                    exclusive: tag.exclusive,
                })),
            ),
        });
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

    public toJSON(): IMetadataAtomic {
        return {
            type: this.type,
            tags: this.tags.map((row) =>
                row.map((tag) => ({
                    target: tag.target,
                    name: tag.name,
                    kind: tag.kind,
                    value:
                        typeof tag.value === "bigint"
                            ? {
                                  type: "bigint",
                                  value: tag.value.toString(),
                              }
                            : tag.value,
                    validate: tag.validate,
                    exclusive: tag.exclusive,
                })),
            ),
        };
    }
}
