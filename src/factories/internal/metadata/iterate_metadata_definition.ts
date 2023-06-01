import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataDefinition } from "../../../metadata/MetadataDefinition";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_definition } from "./emplace_metadata_definition";

export const iterate_metadata_definition =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (options.absorb !== false || type.aliasSymbol === undefined)
            return false;

        const node: ts.Declaration | undefined =
            type.aliasSymbol.declarations?.[0];
        if (node === undefined) return false;

        // CONSTRUCT DEFINITION
        const definition: MetadataDefinition = emplace_metadata_definition(
            checker,
        )(options)(collection)(type, meta.nullable);
        ArrayUtil.add(
            meta.definitions,
            definition,
            (elem) => elem.name === definition.name,
        );
        return true;
    };
