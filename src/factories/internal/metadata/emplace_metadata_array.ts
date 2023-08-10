import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArray } from "../../../schemas/metadata/MetadataArray";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_array =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type, nullable: boolean): MetadataArray => {
        // CHECK EXISTENCE
        const [array, newbie, setValue] = collection.emplaceArray(
            checker,
            type,
        );
        ArrayUtil.add(array.nullables, nullable);
        if (newbie === false) return array;

        // CONSTRUCT VALUE TYPE
        const value: Metadata = explore_metadata(checker)(options)(collection)(
            type.getNumberIndexType()!,
            false,
            false,
        );
        setValue(value);

        return array;
    };
