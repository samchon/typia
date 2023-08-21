import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { explore_metadata } from "./internal/metadata/explore_metadata";
import { iterate_metadata_collection } from "./internal/metadata/iterate_metadata_collection";
import { iterate_metadata_sort } from "./internal/metadata/iterate_metadata_sort";

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
        (type: ts.Type | null): Metadata => {
            const meta: Metadata = explore_metadata(checker)(options)(
                collection,
            )(type, false);
            iterate_metadata_collection(collection);
            iterate_metadata_sort(collection)(meta);

            if (options.validate)
                for (const elem of collection.entire_) options.validate(elem);
            collection.entire_.clear();
            return meta;
        };

    /**
     * @internal
     */
    export const soleLiteral = (value: string): Metadata => {
        const meta: Metadata = Metadata.initialize();
        meta.constants.push({
            values: [value],
            type: "string",
        });
        return meta;
    };
}
