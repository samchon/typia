import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { ArrayUtil } from "../../utils/ArrayUtil";
import { MapUtil } from "../../utils/MapUtil";

export namespace UnionPredicator {
    export interface ISpecialized {
        index: number;
        object: MetadataObject;
        property: MetadataProperty;
        neighbour: boolean;
    }

    export const object = (targets: MetadataObject[]): Array<ISpecialized> => {
        // PROPERTY MATRIX
        const matrix: Map<string, Array<MetadataProperty | null>> = new Map();
        for (const obj of targets)
            for (const prop of obj.properties) {
                const key: string | null = prop.key.getSoleLiteral();
                if (key !== null)
                    MapUtil.take(matrix)(key, () =>
                        ArrayUtil.repeat(targets.length, () => null),
                    );
            }
        targets.forEach((obj, i) => {
            for (const prop of obj.properties) {
                const key: string | null = prop.key.getSoleLiteral();
                if (key !== null) matrix.get(key)![i] = prop;
            }
        });

        // EXPLORE SPECIALIZERS
        const output: ISpecialized[] = [];
        targets.forEach((obj, i) => {
            const children: ISpecializedProperty[] = [];
            obj.properties.forEach((prop) => {
                // MUST BE REQUIRED
                if (prop.value.isRequired() === false) return;
                const key: string | null = prop.key.getSoleLiteral();
                if (key === null) return;

                // FIND NEIGHBORHOOD PROPERTIES
                const neighbors: MetadataProperty[] = matrix
                    .get(key)!
                    .filter(
                        (oppo, k) => i !== k && oppo !== null,
                    ) as MetadataProperty[];

                // NO NEIGHBORHOOD
                const unique: boolean =
                    neighbors.length === 0 ||
                    neighbors.every(
                        (n) => !Metadata.intersects(prop.value, n.value),
                    );
                if (unique === true)
                    children.push({
                        property: prop,
                        neighbour: neighbors.length !== 0,
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
    neighbour: boolean;
}
