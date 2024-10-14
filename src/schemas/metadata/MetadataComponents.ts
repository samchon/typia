import { ClassProperties } from "../../typings/ClassProperties";
import { Writable } from "../../typings/Writable";

import { IMetadataComponents } from "./IMetadataComponents";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { Metadata } from "./Metadata";
import { MetadataAliasType } from "./MetadataAliasType";
import { MetadataArrayType } from "./MetadataArrayType";
import { MetadataObjectType } from "./MetadataObjectType";
import { MetadataProperty } from "./MetadataProperty";
import { MetadataTupleType } from "./MetadataTupleType";

export class MetadataComponents {
  public readonly aliases: MetadataAliasType[];
  public readonly objects: MetadataObjectType[];
  public readonly arrays: MetadataArrayType[];
  public readonly tuples: MetadataTupleType[];
  public readonly dictionary: IMetadataDictionary;

  private constructor(props: ClassProperties<MetadataComponents>) {
    this.aliases = props.aliases;
    this.objects = props.objects;
    this.arrays = props.arrays;
    this.tuples = props.tuples;
    this.dictionary = props.dictionary;
  }

  public static from(json: IMetadataComponents): MetadataComponents {
    // INITIALIZE COMPONENTS
    const dictionary: IMetadataDictionary = {
      objects: new Map(
        json.objects.map((obj) => [
          obj.name,
          MetadataObjectType._From_without_properties(obj),
        ]),
      ),
      aliases: new Map(
        json.aliases.map((alias) => [
          alias.name,
          MetadataAliasType._From_without_value(alias),
        ]),
      ),
      arrays: new Map(
        json.arrays.map((arr) => [
          arr.name,
          MetadataArrayType._From_without_value(arr),
        ]),
      ),
      tuples: new Map(
        json.tuples.map((tpl) => [
          tpl.name,
          MetadataTupleType._From_without_elements(tpl),
        ]),
      ),
    };

    // CONSTRUCT METADATA OF THEM
    for (const obj of json.objects)
      dictionary.objects
        .get(obj.name)!
        .properties.push(
          ...obj.properties.map((prop) =>
            MetadataProperty.from(prop, dictionary),
          ),
        );
    for (const alias of json.aliases)
      Writable(dictionary.aliases.get(alias.name)!).value = Metadata.from(
        alias.value,
        dictionary,
      );
    for (const array of json.arrays)
      Writable(dictionary.arrays.get(array.name)!).value = Metadata.from(
        array.value,
        dictionary,
      );
    for (const tuple of json.tuples)
      Writable(dictionary.tuples.get(tuple.name)!).elements =
        tuple.elements.map((elem) => Metadata.from(elem, dictionary));

    // FINALIZE
    return new MetadataComponents({
      aliases: [...dictionary.aliases.values()],
      objects: [...dictionary.objects.values()],
      arrays: [...dictionary.arrays.values()],
      tuples: [...dictionary.tuples.values()],
      dictionary,
    });
  }

  public toJSON(): IMetadataComponents {
    return {
      aliases: this.aliases.map((alias) => alias.toJSON()),
      objects: this.objects.map((object) => object.toJSON()),
      arrays: this.arrays.map((array) => array.toJSON()),
      tuples: this.tuples.map((tuple) => tuple.toJSON()),
    };
  }
}
