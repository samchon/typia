import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataTupleType } from "./IMetadataTupleType";
import { Metadata } from "./Metadata";

export class MetadataTupleType {
  public readonly name: string;
  public readonly elements: Metadata[];

  public readonly index: number | null;
  public readonly recursive: boolean;
  public readonly nullables: boolean[];

  /**
   * @internal
   */
  public of_map?: boolean;

  /**
   * @internal
   */
  private constructor(props: ClassProperties<MetadataTupleType>) {
    this.name = props.name;
    this.elements = props.elements;
    this.index = props.index;
    this.recursive = props.recursive;
    this.nullables = props.nullables;
  }

  /**
   * @internal
   */
  public static _From_without_elements(
    props: Omit<IMetadataTupleType, "elements">,
  ): MetadataTupleType {
    return MetadataTupleType.create({
      name: props.name,
      index: props.index,
      elements: null!,
      recursive: props.recursive,
      nullables: props.nullables.slice(),
    });
  }

  public static create(
    props: ClassProperties<MetadataTupleType>,
  ): MetadataTupleType {
    return new MetadataTupleType(props);
  }

  public isRest(): boolean {
    return (
      this.elements.length > 0 &&
      this.elements[this.elements.length - 1]!.rest !== null
    );
  }

  public toJSON(): IMetadataTupleType {
    return {
      name: this.name,
      index: this.index,
      elements: this.elements.map((elem) => elem.toJSON()),
      recursive: this.recursive,
      nullables: this.nullables.slice(),
    };
  }
}
