import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_set =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        type = checker.getApparentType(type);

        const name = TypeFactory.getFullName(checker, type, type.getSymbol());
        const generic = type.aliasSymbol
            ? type.aliasTypeArguments
            : checker.getTypeArguments(type as ts.TypeReference);
        if (name.substring(0, 4) !== "Set<" || generic?.length !== 1)
            return false;

        const key: ts.Type = generic[0]!;
        ArrayUtil.set(
            meta.sets,
            explore_metadata(checker)(options)(collection)(key, false),
            (elem) => elem.getName(),
        );
        return true;
    };
