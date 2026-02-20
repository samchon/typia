import { ClassProperties, IMetadataSchemaCollection } from "@typia/interface";

import { MetadataComponents } from "./MetadataComponents";
import { MetadataSchema } from "./MetadataSchema";

export class MetadataApplication {
  public readonly schemas: MetadataSchema[];
  public readonly components: MetadataComponents;

  private constructor(props: ClassProperties<MetadataApplication>) {
    this.schemas = props.schemas;
    this.components = props.components;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataApplication>,
  ): MetadataApplication {
    return new MetadataApplication(props);
  }

  public static from(app: IMetadataSchemaCollection): MetadataApplication {
    const components: MetadataComponents = MetadataComponents.from(
      app.components,
    );
    const metadatas: MetadataSchema[] = app.schemas.map((metadata) =>
      MetadataSchema.from(metadata, components.dictionary),
    );
    return MetadataApplication.create({ schemas: metadatas, components });
  }

  public toJSON(): IMetadataSchemaCollection {
    return {
      schemas: this.schemas.map((s) => s.toJSON()),
      components: this.components.toJSON(),
    };
  }
}
