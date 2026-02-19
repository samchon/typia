import { IMetadataSchema } from "@typia/interface";

import { ClassProperties } from "../../typings/ClassProperties";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataParameter } from "./MetadataParameter";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataFunction {
  public parameters: MetadataParameter[];
  public output: MetadataSchema;
  public async: boolean;

  /** @ignore */
  private constructor(props: ClassProperties<MetadataFunction>) {
    this.parameters = props.parameters;
    this.output = props.output;
    this.async = props.async;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataFunction>,
  ): MetadataFunction {
    return new MetadataFunction(props);
  }

  public static from(
    json: IMetadataSchema.IFunction,
    dict: IMetadataDictionary,
  ): MetadataFunction {
    return MetadataFunction.create({
      parameters: json.parameters.map((p) => MetadataParameter.from(p, dict)),
      output: MetadataSchema.from(json.output, dict),
      async: json.async,
    });
  }

  public toJSON(): IMetadataSchema.IFunction {
    return {
      parameters: this.parameters.map((p) => p.toJSON()),
      output: this.output.toJSON(),
      async: this.async,
    };
  }
}
