import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataObject } from "./IMetadataObject";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataObjectType } from "./MetadataObjectType";

export class MetadataObject {
  public readonly type: MetadataObjectType;
  public readonly tags: IMetadataTypeTag[][];
  private name_?: string;

  /**
   * @hidden
   */
  private constructor(props: ClassProperties<MetadataObject>) {
    this.type = props.type;
    this.tags = props.tags;
  }

  public static create(props: ClassProperties<MetadataObject>): MetadataObject {
    return new MetadataObject(props);
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

  public toJSON(): IMetadataObject {
    return {
      name: this.type.name,
      tags: this.tags.map((row) => row.slice()),
    };
  }
}
