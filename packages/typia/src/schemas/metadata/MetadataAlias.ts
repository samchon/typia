import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataAlias } from "./IMetadataAlias";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataAliasType } from "./MetadataAliasType";

export class MetadataAlias {
  public readonly type: MetadataAliasType;
  public readonly tags: IMetadataTypeTag[][];
  private name_?: string;

  private constructor(props: ClassProperties<MetadataAlias>) {
    this.type = props.type;
    this.tags = props.tags;
    this.type = props.type;
  }

  public static create(props: ClassProperties<MetadataAlias>): MetadataAlias {
    return new MetadataAlias(props);
  }

  public getName(): string {
    return (this.name_ ??= (() => {
      if (this.tags.length === 0) return this.type.name;
      else if (this.tags.length === 1) {
        const str: string = [
          this.type.name,
          ...this.tags[0]!.map((t) => t.name),
        ].join(" & ");
        return `(${str})`;
      }
      const rows: string[] = this.tags.map((row) => {
        const str: string = row.map((t) => t.name).join(" & ");
        return row.length === 1 ? str : `(${str})`;
      });
      return `(${this.type.name} & (${rows.join(" | ")}))`;
    })());
  }

  public toJSON(): IMetadataAlias {
    return {
      name: this.type.name,
      tags: this.tags,
    };
  }
}
