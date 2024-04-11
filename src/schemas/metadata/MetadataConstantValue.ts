import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataConstantValue } from "./IMetadataConstantValue";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export class MetadataConstantValue {
  public readonly value: boolean | bigint | number | string;
  public tags: IMetadataTypeTag[][] | undefined;
  private name_?: string;

  private constructor(props: ClassProperties<MetadataConstantValue>) {
    this.value = props.value;
    this.tags = props.tags;
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
