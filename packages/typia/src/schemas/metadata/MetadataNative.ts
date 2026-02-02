import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataNative } from "./IMetadataNative";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export class MetadataNative {
  public readonly name: string;
  public readonly tags: IMetadataTypeTag[][];
  private typeName_?: string;

  private constructor(props: ClassProperties<MetadataNative>) {
    this.name = props.name;
    this.tags = props.tags;
  }

  public static create(props: ClassProperties<MetadataNative>): MetadataNative {
    return new MetadataNative(props);
  }

  public getName(): string {
    return (this.typeName_ ??= (() => {
      if (this.tags.length === 0) return this.name;
      else if (this.tags.length === 1) {
        const str: string = [
          this.name,
          ...this.tags[0]!.map((t) => t.name),
        ].join(" & ");
        return `(${str})`;
      }
      const rows: string[] = this.tags.map((row) => {
        const str: string = row.map((t) => t.name).join(" & ");
        return row.length === 1 ? str : `(${str})`;
      });
      return `(${this.name} & (${rows.join(" | ")}))`;
    })());
  }

  public toJSON(): IMetadataNative {
    return {
      name: this.name,
      tags: this.tags,
    };
  }
}
