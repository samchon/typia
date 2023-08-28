import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_template =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        meta: Metadata,
        type: ts.Type,
        explore: MetadataFactory.IExplore,
    ): boolean => {
        const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
        if (!filter(ts.TypeFlags.TemplateLiteral)) return false;

        const template: ts.TemplateLiteralType = type as ts.TemplateLiteralType;
        const row: Metadata[] = [];

        template.texts.forEach((text, i) => {
            // TEXT LITERAL TYPE
            if (text !== "") row.push(MetadataHelper.literal_to_metadata(text));

            // BINDED TEMPLATE TYPE
            const binded: ts.Type | undefined = template.types[i];
            if (binded)
                row.push(
                    explore_metadata(checker)(options)(collection)(errors)(
                        binded,
                        {
                            ...explore,
                            escaped: false,
                            aliased: false,
                        },
                    ),
                );
        });
        meta.templates.push(row);

        return true;
    };
