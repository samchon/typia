import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { Writable } from "../../../typings/Writable";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_resolve =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type, parentResolved: boolean): boolean => {
        if (options.resolve === true && parentResolved === false) {
            const resolved: ts.Type | null = TypeFactory.resolve(checker, type);
            if (resolved !== null) {
                Writable(meta).resolved = explore_metadata(checker)(options)(
                    collection,
                )(resolved, true);
                return true;
            }
        }
        return false;
    };
