import {
  ClassProperties,
  IJsDocTagInfo,
  IMetadataSchema,
} from "@typia/interface";

import { IProtobufProperty } from "../protobuf/IProtobufProperty";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataProperty {
  public readonly key: MetadataSchema;
  public readonly value: MetadataSchema;
  public readonly description: string | null;
  public readonly jsDocTags: IJsDocTagInfo[];
  public readonly mutability?: "readonly" | null | undefined;

  public of_protobuf_?: IProtobufProperty;

  /* -----------------------------------------------------------
    CONSTRUCTORS
  ----------------------------------------------------------- */
  private constructor(props: ClassProperties<MetadataProperty>) {
    this.key = props.key;
    this.value = props.value;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
    this.mutability = props.mutability;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataProperty>,
  ): MetadataProperty {
    return new MetadataProperty(props);
  }

  /** @internal */
  public static from(
    property: IMetadataSchema.IProperty,
    dict: IMetadataDictionary,
  ) {
    return MetadataProperty.create({
      key: MetadataSchema.from(property.key, dict),
      value: MetadataSchema.from(property.value, dict),
      description: property.description,
      jsDocTags: property.jsDocTags.slice(),
      mutability: property.mutability,
    });
  }

  public toJSON(): IMetadataSchema.IProperty {
    return {
      key: this.key.toJSON(),
      value: this.value.toJSON(),
      description: this.description,
      jsDocTags: this.jsDocTags,
      mutability: this.mutability,
    };
  }
}
