import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataArrayType } from "./IMetadataArrayType";
import { Metadata } from "./Metadata";

export class MetadataArrayType {
  public readonly name: string;
  public readonly value: Metadata;
  public readonly nullables: boolean[];
  public readonly recursive: boolean;
  public readonly index: number | null;

  /**
   * @hidden
   */
  private constructor(props: ClassProperties<MetadataArrayType>) {
    this.name = props.name;
    this.value = props.value;
    this.index = props.index;
    this.recursive = props.recursive;
    this.nullables = props.nullables;
  }

  /**
   * @internal
   */
  public static _From_without_value(
    props: Omit<IMetadataArrayType, "value">,
  ): MetadataArrayType {
    return MetadataArrayType.create({
      name: props.name,
      value: null!,
      index: props.index,
      recursive: props.recursive,
      nullables: props.nullables,
    });
  }

  /**
   * @internal
   */
  public static create(
    props: ClassProperties<MetadataArrayType>,
  ): MetadataArrayType {
    return new MetadataArrayType(props);
  }

  public toJSON(): IMetadataArrayType {
    return {
      name: this.name,
      value: this.value.toJSON(),
      nullables: this.nullables,
      recursive: this.recursive,
      index: this.index,
    };
  }
}
