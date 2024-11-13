import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataMap } from "./IMetadataMap";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { Metadata } from "./Metadata";

export class MetadataMap {
  public readonly key: Metadata;
  public readonly value: Metadata;
  public readonly tags: IMetadataTypeTag[][];
  private name_?: string;

  private constructor(props: ClassProperties<MetadataMap>) {
    this.key = props.key;
    this.value = props.value;
    this.tags = props.tags;
  }

  public static create(props: ClassProperties<MetadataMap>): MetadataMap {
    return new MetadataMap(props);
  }

  public getName(): string {
    return (this.name_ ??= (() => {
      const symbol: string = `Map<${this.key.getName()}, ${this.value.getName()}>`;
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

  public toJSON(): IMetadataMap {
    return {
      key: this.key.toJSON(),
      value: this.value.toJSON(),
      tags: this.tags,
    };
  }
}
