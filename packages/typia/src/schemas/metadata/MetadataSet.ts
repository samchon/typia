import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataSet } from "./IMetadataSet";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { Metadata } from "./Metadata";

export class MetadataSet {
  public readonly value: Metadata;
  public readonly tags: IMetadataTypeTag[][];
  private name_?: string;

  private constructor(props: ClassProperties<MetadataSet>) {
    this.value = props.value;
    this.tags = props.tags;
  }

  public static create(props: ClassProperties<MetadataSet>): MetadataSet {
    return new MetadataSet(props);
  }

  public getName(): string {
    return (this.name_ ??= (() => {
      const symbol: string = `Set<${this.value.getName()}>`;
      if (this.tags.length === 0) return symbol;
      else if (this.tags.length === 1) {
        const str: string = [symbol, ...this.tags[0]!.map((t) => t.name)].join(
          " & ",
        );
        return `(${str})`;
      }
      const rows: string[] = this.tags.map((row) => {
        const str: string = row.map((t) => t.name).join(" & ");
        return row.length === 1 ? str : `(${str})`;
      });
      return `(${symbol} & (${rows.join(" | ")}))`;
    })());
  }

  public toJSON(): IMetadataSet {
    return {
      value: this.value.toJSON(),
      tags: this.tags,
    };
  }
}
