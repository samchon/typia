import { IMetadataSchema } from "@typia/interface";

import { ClassProperties } from "../../typings/ClassProperties";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataEscaped {
  public readonly original: MetadataSchema;
  public readonly returns: MetadataSchema;

  /** @ignore */
  private constructor(props: ClassProperties<MetadataEscaped>) {
    this.original = props.original;
    this.returns = props.returns;
  }

  /** @internal */
  public static from(
    props: IMetadataSchema.IEscaped,
    dict: IMetadataDictionary,
  ): MetadataEscaped {
    return MetadataEscaped.create({
      original: MetadataSchema.from(props.original, dict),
      returns: MetadataSchema.from(props.returns, dict),
    });
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataEscaped>,
  ): MetadataEscaped {
    return new MetadataEscaped(props);
  }

  public getName(): string {
    return this.returns.getName();
  }

  public toJSON(): IMetadataSchema.IEscaped {
    return {
      original: this.original.toJSON(),
      returns: this.returns.toJSON(),
    };
  }
}
