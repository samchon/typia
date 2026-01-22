import ts from "typescript";

import { ClassProperties } from "../../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataParameter } from "./IMetadataParameter";
import { Metadata } from "./Metadata";

export class MetadataParameter {
  public name: string;
  public type: Metadata;
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
    json: IMetadataParameter,
    dict: IMetadataDictionary,
  ): MetadataParameter {
    return MetadataParameter.create({
      name: json.name,
      type: Metadata.from(json.type, dict),
      description: json.description,
      jsDocTags: json.jsDocTags,
    });
  }

  public toJSON(): IMetadataParameter {
    return {
      name: this.name,
      type: this.type.toJSON(),
      description: this.description,
      jsDocTags: this.jsDocTags,
    };
  }
}
