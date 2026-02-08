import { ClassProperties } from "../../typings/ClassProperties";

import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataObjectType } from "./IMetadataObjectType";
import { MetadataProperty } from "./MetadataProperty";

export class MetadataObjectType {
  public readonly name: string;
  public readonly properties: Array<MetadataProperty>;
  public readonly description: string | undefined;
  public readonly jsDocTags: IJsDocTagInfo[];

  public readonly index: number;
  public validated: boolean;
  public recursive: boolean;
  public nullables: boolean[] = [];

  /** @internal */
  public tagged_: boolean = false;

  /** @internal */
  private literal_?: boolean;

  /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
  /** @ignore */
  private constructor(
    props: Omit<ClassProperties<MetadataObjectType>, "tagged_">,
  ) {
    this.name = props.name;
    this.properties = props.properties;
    this.description = props.description;
    this.jsDocTags = props.jsDocTags;

    this.index = props.index;
    this.validated = props.validated;
    this.recursive = props.recursive;
    this.nullables = props.nullables.slice();

    this.tagged_ = false;
  }

  /** @internal */
  public static create(
    props: Omit<ClassProperties<MetadataObjectType>, "tagged_">,
  ) {
    return new MetadataObjectType(props);
  }

  /** @internal */
  public static _From_without_properties(
    obj: IMetadataObjectType,
  ): MetadataObjectType {
    return MetadataObjectType.create({
      name: obj.name,
      properties: [],
      description: obj.description,
      jsDocTags: obj.jsDocTags,

      index: obj.index,
      validated: false,
      recursive: obj.recursive,
      nullables: obj.nullables.slice(),
    });
  }

  public isPlain(level: number = 0): boolean {
    return (
      this.recursive === false &&
      this.properties.length < 10 &&
      this.properties.every(
        (property) =>
          property.key.isSoleLiteral() &&
          property.value.size() === 1 &&
          property.value.isRequired() === true &&
          property.value.nullable === false &&
          (property.value.atomics.length === 1 ||
            (level < 1 &&
              property.value.objects.length === 1 &&
              property.value.objects[0]!.type.isPlain(level + 1))),
      )
    );
  }

  public isLiteral(): boolean {
    return (this.literal_ ??= (() => {
      if (this.recursive === true) return false;
      return (
        this.name === "__type" ||
        this.name === "__object" ||
        this.name.startsWith("__type.") ||
        this.name.startsWith("__object.") ||
        this.name.includes("readonly [")
      );
    })());
  }

  public toJSON(): IMetadataObjectType {
    return {
      name: this.name,
      properties: this.properties.map((property) => property.toJSON()),
      description: this.description,
      jsDocTags: this.jsDocTags,

      index: this.index,
      recursive: this.recursive,
      nullables: this.nullables.slice(),
    };
  }
}

/** @internal */
export namespace MetadataObjectType {
  export const intersects = (
    x: MetadataObjectType,
    y: MetadataObjectType,
  ): boolean =>
    x.properties.some(
      (prop) =>
        y.properties.find(
          (oppo) => prop.key.getName() === oppo.key.getName(),
        ) !== undefined,
    );

  export const covers = (
    x: MetadataObjectType,
    y: MetadataObjectType,
  ): boolean =>
    x.properties.length >= y.properties.length &&
    x.properties.every(
      (prop) =>
        y.properties.find(
          (oppo) => prop.key.getName() === oppo.key.getName(),
        ) !== undefined,
    );
}
