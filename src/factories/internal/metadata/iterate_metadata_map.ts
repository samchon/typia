import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_map =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        type = checker.getApparentType(type);

        const name = TypeFactory.getFullName(checker, type, type.getSymbol());
        const generic = type.aliasSymbol
            ? type.aliasTypeArguments
            : checker.getTypeArguments(type as ts.TypeReference);
        if (name.substring(0, 4) !== "Map<" || generic?.length !== 2)
            return false;

        const key: ts.Type = generic[0]!;
        const value: ts.Type = generic[1]!;

        ArrayUtil.set(
            meta.maps,
            {
                key: explore_metadata(checker)(options)(collection)(key, false),
                value: explore_metadata(checker)(options)(collection)(
                    value,
                    false,
                ),
            },
            (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`,
        );
        return true;
    };
