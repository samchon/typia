import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataConstant } from "./IMetadataConstant";
import { MetadataConstantValue } from "./MetadataConstantValue";

export class MetadataConstant {
  public readonly type: "boolean" | "bigint" | "number" | "string";
  public readonly values: MetadataConstantValue[];
  /**
   * The name of the enum type if this constant originates from a TypeScript enum.
   * Used to generate `$ref` schemas for enums.
   */
  public readonly enumName?: string;

  private constructor(props: ClassProperties<MetadataConstant>) {
    this.type = props.type;
    this.values = props.values.map(MetadataConstantValue.create);
    this.enumName = props.enumName;
  }

  public static create(
    props: ClassProperties<MetadataConstant>,
  ): MetadataConstant {
    return new MetadataConstant(props);
  }

  public static from(json: IMetadataConstant): MetadataConstant {
    return MetadataConstant.create({
      type: json.type,
      values: json.values.map(MetadataConstantValue.from),
      enumName: json.enumName,
    });
  }

  public toJSON(): IMetadataConstant {
    return {
      type: this.type,
      values: this.values.map((value) => value.toJSON()),
      enumName: this.enumName,
    };
  }
}
