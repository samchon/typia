import {
  ClassProperties,
  IMetadataSchema,
  IMetadataTypeTag,
} from "@typia/interface";

import { MetadataTupleType } from "./MetadataTupleType";

export class MetadataTuple {
  public readonly type: MetadataTupleType;
  public readonly tags: IMetadataTypeTag[][];

  private constructor(props: ClassProperties<MetadataTuple>) {
    this.type = props.type;
    this.tags = props.tags;
  }

  /** @internal */
  public static create(props: ClassProperties<MetadataTuple>): MetadataTuple {
    return new MetadataTuple(props);
  }

  public toJSON(): IMetadataSchema.IReference {
    return {
      name: this.type.name,
      tags: this.tags.map((row) => row.slice()),
    };
  }
}
