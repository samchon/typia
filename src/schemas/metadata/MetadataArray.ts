import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataArray } from "./IMetadataArray";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataArrayType } from "./MetadataArrayType";

export class MetadataArray {
  public readonly type: MetadataArrayType;
  public readonly tags: IMetadataTypeTag[][];

  private name_?: string;

  /**
   * @hidden
   */
  private constructor(props: ClassProperties<MetadataArray>) {
    this.type = props.type;
    this.tags = props.tags;
  }

  public static create(props: ClassProperties<MetadataArray>): MetadataArray {
    return new MetadataArray(props);
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

  public toJSON(): IMetadataArray {
    return {
      name: this.type.name,
      tags: this.tags.map((row) => row.slice()),
    };
  }
}
