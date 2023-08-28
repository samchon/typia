import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_alias } from "./emplace_metadata_alias";

export const iterate_metadata_alias =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        meta: Metadata,
        type: ts.Type,
        explore: MetadataFactory.IExplore,
    ): boolean => {
        if (options.absorb !== false || type.aliasSymbol === undefined)
            return false;

        const node: ts.Declaration | undefined =
            type.aliasSymbol.declarations?.[0];
        if (node === undefined) return false;

        // CONSTRUCT DEFINITION
        const alias: MetadataAlias = emplace_metadata_alias(checker)(options)(
            collection,
        )(errors)(type, meta.nullable, explore);
        ArrayUtil.add(meta.aliases, alias, (elem) => elem.name === alias.name);
        return true;
    };
