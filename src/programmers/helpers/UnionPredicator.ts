import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { ArrayUtil } from "../../utils/ArrayUtil";
import { MapUtil } from "../../utils/MapUtil";

export namespace UnionPredicator {
  export interface ISpecialized {
    index: number;
    object: MetadataObjectType;
    property: MetadataProperty;
    neighbor: boolean;
  }

  export const object = (
    objects: MetadataObjectType[],
  ): Array<ISpecialized> => {
    // PROPERTY MATRIX
    const matrix: Map<string, Array<MetadataProperty | null>> = new Map();
    for (const obj of objects)
      for (const prop of obj.properties) {
        const key: string | null = prop.key.getSoleLiteral();
        if (key !== null)
          MapUtil.take(matrix, key, () =>
            ArrayUtil.repeat(objects.length, () => null),
          );
      }
    objects.forEach((obj, i) => {
      for (const prop of obj.properties) {
        const key: string | null = prop.key.getSoleLiteral();
        if (key !== null) matrix.get(key)![i] = prop;
      }
    });

    // EXPLORE SPECIALIZERS
    const output: ISpecialized[] = [];
    objects.forEach((obj, i) => {
      const children: ISpecializedProperty[] = [];
      obj.properties.forEach((prop) => {
        // MUST BE REQUIRED
        if (prop.value.isRequired() === false) return;
        const key: string | null = prop.key.getSoleLiteral();
        if (key === null) return;

        // FIND NEIGHBORHOOD PROPERTIES
        const neighbors: MetadataProperty[] = matrix
          .get(key)!
          .filter((oppo, k) => i !== k && oppo !== null) as MetadataProperty[];

        // NO NEIGHBORHOOD
        const unique: boolean =
          neighbors.length === 0 ||
          neighbors.every((n) => !Metadata.intersects(prop.value, n.value));
        if (unique === true)
          children.push({
            property: prop,
            neighbor: neighbors.length !== 0,
          });
      });
      if (children.length === 0) return;

      const top: ISpecializedProperty =
        children.find((child) => child.property.value.isConstant()) ||
        children[0]!;
      output.push({
        index: i,
        object: obj,
        ...top,
      });
    });
    return output;
  };
}

interface ISpecializedProperty {
  property: MetadataProperty;
  neighbor: boolean;
}
