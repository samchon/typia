import { IJsDocTagInfo, IMetadataSchema } from "@typia/interface";
import ts from "typescript";

import { ClassProperties } from "../../typings/ClassProperties";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataParameter {
  public name: string;
  public type: MetadataSchema;
  public description: string | null;
  public jsDocTags: IJsDocTagInfo[];
  public tsType?: ts.Type;

  private constructor(props: ClassProperties<MetadataParameter>) {
    this.name = props.name;
    this.type = props.type;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
    this.tsType = props.tsType;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataParameter>,
  ): MetadataParameter {
    return new MetadataParameter(props);
  }

  public static from(
    json: IMetadataSchema.IParameter,
    dict: IMetadataDictionary,
  ): MetadataParameter {
    return MetadataParameter.create({
      name: json.name,
      type: MetadataSchema.from(json.type, dict),
      description: json.description,
      jsDocTags: json.jsDocTags,
    });
  }

  public toJSON(): IMetadataSchema.IParameter {
    return {
      name: this.name,
      type: this.type.toJSON(),
      description: this.description,
      jsDocTags: this.jsDocTags,
    };
  }
}
