import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_array_type =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        type: ts.Type,
        nullable: boolean,
        explore: MetadataFactory.IExplore,
    ): MetadataArrayType => {
        // CHECK EXISTENCE
        const [array, newbie, setValue] = collection.emplaceArray(
            checker,
            type,
        );
        ArrayUtil.add(array.nullables, nullable);
        if (newbie === false) return array;

        // CONSTRUCT VALUE TYPE
        const value: Metadata = explore_metadata(checker)(options)(collection)(
            errors,
        )(type.getNumberIndexType()!, {
            ...explore,
            escaped: false,
            aliased: false,
        });
        setValue(value);

        return array;
    };
