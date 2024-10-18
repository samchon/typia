import { ClassProperties } from "../../typings/ClassProperties";

import { IProtobufProperty } from "../protobuf/IProtobufProperty";
import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataProperty } from "./IMetadataProperty";
import { Metadata } from "./Metadata";

export class MetadataProperty {
  public readonly key: Metadata;
  public readonly value: Metadata;
  public readonly description: string | null;
  public readonly jsDocTags: IJsDocTagInfo[];

  public of_protobuf_?: IProtobufProperty;

  /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
  /**
   * @hidden
   */
  private constructor(props: ClassProperties<MetadataProperty>) {
    this.key = props.key;
    this.value = props.value;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;
  }

  /**
   * @internal
   */
  public static create(
    props: ClassProperties<MetadataProperty>,
  ): MetadataProperty {
    return new MetadataProperty(props);
  }

  /**
   * @internal
   */
  public static from(property: IMetadataProperty, dict: IMetadataDictionary) {
    return MetadataProperty.create({
      key: Metadata.from(property.key, dict),
      value: Metadata.from(property.value, dict),
      description: property.description,
      jsDocTags: property.jsDocTags.slice(),
    });
  }

  public toJSON(): IMetadataProperty {
    return {
      key: this.key.toJSON(),
      value: this.value.toJSON(),
      description: this.description,
      jsDocTags: this.jsDocTags,
    };
  }
}
