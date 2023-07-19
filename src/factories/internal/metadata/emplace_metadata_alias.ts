import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataTagFactory } from "../../MetadataTagFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_alias =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type, nullable: boolean): MetadataAlias => {
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
            type,
            false,
            true,
        );
        closure(value);
        alias.tags.push(
            ...MetadataTagFactory.generate(value)(alias.jsDocTags)(
                () => alias.name,
            ),
        );
        return alias;
    };
