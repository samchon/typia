import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_alias =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        type: ts.Type,
        nullable: boolean,
        explore: MetadataFactory.IExplore,
    ): MetadataAlias => {
        // CHECK EXISTENCE
        const [alias, newbie, closure] = collection.emplaceAlias(
            checker,
            type,
            type.aliasSymbol!,
        );
        ArrayUtil.add(alias.nullables, nullable);
        if (newbie === false) return alias;

        // CONSTRUCT VALUE TYPE
        const value: Metadata = explore_metadata(checker)(options)(collection)(
            errors,
        )(type, {
            ...explore,
            escaped: false,
            aliased: true,
        });
        closure(value);
        return alias;
    };
