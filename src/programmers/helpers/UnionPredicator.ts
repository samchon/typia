import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { MetadataProperty } from "../../metadata/MetadataProperty";
import { ArrayUtil } from "../../utils/ArrayUtil";
import { MapUtil } from "../../utils/MapUtil";

export namespace UnionPredicator {
    export interface ISpecializedObject {
        index: number;
        object: MetadataObject;
        property: MetadataProperty;
        neighbour: boolean;
    }

    export function object(
        targets: MetadataObject[],
    ): Array<ISpecializedObject> {
        // PROPERTY MATRIX
        const matrix: Map<string, Array<MetadataProperty | null>> = new Map();
        for (const obj of targets)
            for (const prop of obj.properties)
                MapUtil.take(matrix, prop.name, () =>
                    ArrayUtil.repeat(targets.length, () => null),
                );
        targets.forEach((obj, i) => {
            for (const prop of obj.properties) {
                matrix.get(prop.name)![i] = prop;
            }
        });

        // EXPLORE SPECIALIZERS
        const output: ISpecializedObject[] = [];
        targets.forEach((obj, i) => {
            const children: ISpecializedProperty[] = [];
            obj.properties.forEach((prop) => {
                // MUST BE REQUIRED
                if (prop.metadata.required === false) return;

                // FIND NEIGHBORHOOD PROPERTIES
                const neighbors: MetadataProperty[] = matrix
                    .get(prop.name)!
                    .filter(
                        (oppo, k) => i !== k && oppo !== null,
                    ) as MetadataProperty[];

                // NO NEIGHBORHOOD
                const unique: boolean =
                    neighbors.length === 0 ||
                    neighbors.every(
                        (n) => !Metadata.intersects(prop.metadata, n.metadata),
                    );
                if (unique === true)
                    children.push({
                        property: prop,
                        neighbour: neighbors.length !== 0,
                    });
            });
            if (children.length === 0) return;

            const top: ISpecializedProperty =
                children.find((child) =>
                    child.property.metadata.isConstant(),
                ) || children[0]!;
            output.push({
                index: i,
                object: obj,
                ...top,
            });
        });
        return output;
    }

    export function array(targets: Metadata[]) {
        
    }
}

interface ISpecializedProperty {
    property: MetadataProperty;
    neighbour: boolean;
}
