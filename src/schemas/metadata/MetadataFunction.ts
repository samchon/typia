import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataFunction } from "./IMetadataFunction";
import { Metadata } from "./Metadata";
import { MetadataParameter } from "./MetadataParameter";

export class MetadataFunction {
  public parameters: MetadataParameter[];
  public output: Metadata;
  public async: boolean;

  /**
   * @hidden
   */
  private constructor(props: ClassProperties<MetadataFunction>) {
    this.parameters = props.parameters;
    this.output = props.output;
    this.async = props.async;
  }

  /**
   * @internal
   */
  public static create(
    props: ClassProperties<MetadataFunction>,
  ): MetadataFunction {
    return new MetadataFunction(props);
  }

  public static from(
    json: IMetadataFunction,
    dict: IMetadataDictionary,
  ): MetadataFunction {
    return MetadataFunction.create({
      parameters: json.parameters.map((p) => MetadataParameter.from(p, dict)),
      output: Metadata.from(json.output, dict),
      async: json.async,
    });
  }

  public toJSON(): IMetadataFunction {
    return {
      parameters: this.parameters.map((p) => p.toJSON()),
      output: this.output.toJSON(),
      async: this.async,
    };
  }
}
