import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataConstant } from "./IMetadataConstant";
import { MetadataConstantValue } from "./MetadataConstantValue";

export class MetadataConstant {
  public readonly type: "boolean" | "bigint" | "number" | "string";
  public readonly values: MetadataConstantValue[];

  private constructor(props: ClassProperties<MetadataConstant>) {
    this.type = props.type;
    this.values = props.values.map(MetadataConstantValue.create);
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
    });
  }

  public toJSON(): IMetadataConstant {
    return {
      type: this.type,
      values: this.values.map((value) => value.toJSON()),
    };
  }
}
