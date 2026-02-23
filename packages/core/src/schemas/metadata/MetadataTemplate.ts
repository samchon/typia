import {
  ClassProperties,
  IMetadataSchema,
  IMetadataTypeTag,
} from "@typia/interface";

import { IMetadataDictionary } from "./IMetadataDictionary";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataTemplate {
  public readonly row: MetadataSchema[];
  public readonly tags: IMetadataTypeTag[][];

  private name_?: string;

  private constructor(props: ClassProperties<MetadataTemplate>) {
    this.row = props.row.map(MetadataSchema.create);
    this.tags = props.tags;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataTemplate>,
  ): MetadataTemplate {
    return new MetadataTemplate(props);
  }

  public static from(
    json: IMetadataSchema.ITemplate,
    dict: IMetadataDictionary,
  ): MetadataTemplate {
    return new MetadataTemplate({
      row: json.row.map((m) => MetadataSchema.from(m, dict)),
      tags: json.tags,
    });
  }

  public getName(): string {
    return (this.name_ ??= getName(this));
  }

  /** @internal */
  public getBaseName(): string {
    return (
      "`" +
      this.row
        .map((child) =>
          child.isConstant() && child.size() === 1
            ? child.constants[0]!.values[0]!.value
            : `$\{${child.getName()}\}`,
        )
        .join("")
        .split("`")
        .join("\\`") +
      "`"
    );
  }

  public toJSON(): IMetadataSchema.ITemplate {
    return {
      row: this.row.map((m) => m.toJSON()),
      tags: this.tags,
    };
  }
}

const getName = (template: MetadataTemplate): string => {
  const base: string = template.getBaseName();
  if (!template.tags?.length) return base;
  else if (template.tags.length === 1) {
    const str: string = [base, ...template.tags[0]!.map((t) => t.name)].join(
      " & ",
    );
    return `(${str})`;
  }
  const rows: string[] = template.tags.map((row) => {
    const str: string = row.map((t) => t.name).join(" & ");
    return row.length === 1 ? str : `(${str})`;
  });
  return `(${base} & (${rows.join(" | ")}))`;
};
