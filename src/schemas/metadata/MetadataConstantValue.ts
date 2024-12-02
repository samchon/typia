import { ClassProperties } from "../../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataConstantValue } from "./IMetadataConstantValue";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export class MetadataConstantValue {
  public readonly value: boolean | bigint | number | string;
  public tags: IMetadataTypeTag[][];
  public readonly description?: string | null;
  public readonly jsDocTags?: IJsDocTagInfo[];
  private name_?: string;

  private constructor(props: ClassProperties<MetadataConstantValue>) {
    this.value = props.value;
    this.tags = props.tags;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
  }

  public static create(
    props: ClassProperties<MetadataConstantValue>,
  ): MetadataConstantValue {
    return new MetadataConstantValue(props);
  }

  public static from(json: IMetadataConstantValue<any>): MetadataConstantValue {
    return MetadataConstantValue.create({
      value: typeof json.value === "bigint" ? BigInt(json.value) : json.value,
      tags: json.tags,
      description: json.description,
      jsDocTags: json.jsDocTags,
    });
  }

  public getName(): string {
    return (this.name_ ??= getName(this));
  }

  public toJSON(): IMetadataConstantValue<any> {
    return {
      value:
        typeof this.value === "bigint" ? this.value.toString() : this.value,
      tags: this.tags,
      description: this.description,
      jsDocTags: this.jsDocTags,
    };
  }
}

const getName = (obj: MetadataConstantValue): string => {
  const base: string =
    typeof obj.value === "string"
      ? JSON.stringify(obj.value)
      : obj.value.toString();
  if (!obj.tags?.length) return base;
  const rows: string[] = obj.tags.map((row) => {
    const str: string = row.map((t) => t.name).join(" & ");
    return row.length === 1 ? str : `(${str})`;
  });
  return `(${base} & (${rows.join(" | ")}))`;
};
