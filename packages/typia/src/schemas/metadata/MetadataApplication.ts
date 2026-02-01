import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataApplication } from "./IMetadataApplication";
import { Metadata } from "./Metadata";
import { MetadataComponents } from "./MetadataComponents";

export class MetadataApplication {
  public readonly metadatas: Metadata[];
  public readonly components: MetadataComponents;

  /** @ignore */
  private constructor(props: ClassProperties<MetadataApplication>) {
    this.metadatas = props.metadatas;
    this.components = props.components;
  }

  /** @internal */
  public static create(
    props: ClassProperties<MetadataApplication>,
  ): MetadataApplication {
    return new MetadataApplication(props);
  }

  public static from(app: IMetadataApplication): MetadataApplication {
    const components: MetadataComponents = MetadataComponents.from(
      app.components,
    );
    const metadatas: Metadata[] = app.metadatas.map((metadata) =>
      Metadata.from(metadata, components.dictionary),
    );
    return MetadataApplication.create({ metadatas, components });
  }

  public toJSON(): IMetadataApplication {
    return {
      metadatas: this.metadatas.map((metadata) => metadata.toJSON()),
      components: this.components.toJSON(),
    };
  }
}
