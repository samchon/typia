import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataConstant } from "./IMetadataConstant";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export class MetadataConstant {
  public readonly type: "boolean" | "bigint" | "number" | "string";
  public readonly values: boolean[] | bigint[] | number[] | string[];

  /**
   * @internal
   */
  public tags?: IMetadataTypeTag[][] | undefined;

  private constructor(props: ClassProperties<MetadataConstant>) {
    this.type = props.type;
    this.values = props.values;
    this.tags = props.tags;
  }

  public static create(
    props: ClassProperties<MetadataConstant>,
  ): MetadataConstant {
    return new MetadataConstant(props);
  }

  public static from(json: IMetadataConstant): MetadataConstant {
    return MetadataConstant.create({
      type: json.type,
      values:
        json.type === "bigint"
          ? json.values.map((v) => BigInt(v))
          : (json.values as any[]),
    });
  }

  public toJSON(): IMetadataConstant {
    return {
      type: this.type,
      values:
        this.type === "bigint"
          ? this.values.map((v) => v.toString())
          : (this.values as any[]),
    };
  }
}
