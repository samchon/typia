import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataDefinition } from "../../../metadata/MetadataDefinition";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_definition =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type, resolved: boolean): MetadataDefinition => {
        const [def, newbie, closure] = collection.emplaceDefinition(
            checker,
            type,
            type.aliasSymbol!,
        );
        if (newbie === true) {
            const value: Metadata = explore_metadata(checker)(options)(
                collection,
            )(type, resolved, true);
            closure(value);
        }
        return def;
    };
