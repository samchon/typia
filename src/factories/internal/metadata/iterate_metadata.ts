import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

// import { ArrayUtil } from "../../../utils/ArrayUtil";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata_alias } from "./iterate_metadata_alias";
import { iterate_metadata_array } from "./iterate_metadata_array";
import { iterate_metadata_atomic } from "./iterate_metadata_atomic";
import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";
import { iterate_metadata_constant } from "./iterate_metadata_constant";
import { iterate_metadata_intersection } from "./iterate_metadata_intersection";
import { iterate_metadata_map } from "./iterate_metadata_map";
import { iterate_metadata_native } from "./iterate_metadata_native";
import { iterate_metadata_object } from "./iterate_metadata_object";
import { iterate_metadata_resolve } from "./iterate_metadata_resolve";
import { iterate_metadata_set } from "./iterate_metadata_set";
import { iterate_metadata_template } from "./iterate_metadata_template";
import { iterate_metadata_tuple } from "./iterate_metadata_tuple";
import { iterate_metadata_union } from "./iterate_metadata_union";

export const iterate_metadata =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (
        meta: Metadata,
        type: ts.Type,
        resolved: boolean,
        aliased: boolean,
    ): void => {
        if (type.isTypeParameter() === true)
            throw new Error(
                `Error on typia.MetadataFactory.generate(): non-specified generic argument on ${meta.getName()}.`,
            );
        // CHECK SPECIAL CASES
        if (
            (aliased !== true &&
                iterate_metadata_alias(checker)(options)(collection)(
                    meta,
                    type,
                )) ||
            iterate_metadata_intersection(checker)(options)(collection)(
                meta,
                type,
                resolved,
                aliased,
            ) ||
            iterate_metadata_union(checker)(options)(collection)(
                meta,
                type,
                resolved,
            ) ||
            iterate_metadata_resolve(checker)(options)(collection)(
                meta,
                type,
                resolved,
                aliased,
            )
        )
            return;

        // ITERATE CASES
        iterate_metadata_coalesce(meta, type) ||
            iterate_metadata_constant(checker)(options)(meta, type) ||
            iterate_metadata_template(checker)(options)(collection)(
                meta,
                type,
            ) ||
            iterate_metadata_atomic(meta, type) ||
            iterate_metadata_tuple(checker)(options)(collection)(
                meta,
                type as ts.TupleType,
            ) ||
            iterate_metadata_array(checker)(options)(collection)(meta, type) ||
            iterate_metadata_native(checker)(meta, type) ||
            iterate_metadata_map(checker)(options)(collection)(meta, type) ||
            iterate_metadata_set(checker)(options)(collection)(meta, type) ||
            iterate_metadata_object(checker)(options)(collection)(
                meta,
                type,
                resolved,
            );
    };
