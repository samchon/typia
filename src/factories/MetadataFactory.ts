import ts from "typescript";

import { Metadata } from "../metadata/Metadata";
import { explore_metadata } from "./internal/metadata/explore_metadata";

import { MetadataCollection } from "./MetadataCollection";

export namespace MetadataFactory {
    export interface IOptions {
        resolve: boolean;
        constant: boolean;
        absorb: boolean;
        validate?: (meta: Metadata) => void;
    }

    export const analyze =
        (checker: ts.TypeChecker) =>
        (options: IOptions) =>
        (collection: MetadataCollection) =>
        (type: ts.Type | null): Metadata =>
            explore_metadata(checker)(options)(collection)(type, false);

    /**
     * @deprecated Use `analyze` function instead
     */
    export const generate = (
        checker: ts.TypeChecker,
        collection: MetadataCollection,
        type: ts.Type,
        options: IOptions,
    ) => analyze(checker)(options)(collection)(type);
}
