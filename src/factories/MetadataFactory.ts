import ts from "typescript";

import { Metadata } from "../metadata/Metadata";

import { ArrayUtil } from "../utils/ArrayUtil";

import { MetadataCollection } from "./MetadataCollection";
import { explore_metadata } from "./internal/explore_metadata";

export namespace MetadataFactory {
    export interface IOptions {
        resolve: boolean;
        constant: boolean;
    }

    export function generate(
        checker: ts.TypeChecker,
        collection: MetadataCollection,
        type: ts.Type | null,
        options: IOptions,
    ): Metadata {
        // CONSTRUCT SCHEMA WITH OBJECTS
        const metadata: Metadata = explore_metadata(checker)(options)(
            collection,
        )(type, false);

        // FIND RECURSIVE OBJECTS
        for (const object of collection.objects())
            object.recursive = object.properties.some(
                (prop) =>
                    ArrayUtil.has(
                        prop.value.objects,
                        (elem) => elem.name === object.name,
                    ) ||
                    prop.value.arrays.some((meta) =>
                        ArrayUtil.has(
                            meta.objects,
                            (elem) => elem.name === object.name,
                        ),
                    ),
            );

        // RETURNS
        return metadata;
    }
}
