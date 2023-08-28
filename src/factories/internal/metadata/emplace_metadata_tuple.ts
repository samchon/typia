import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        type: ts.TupleType,
        nullable: boolean,
        explore: MetadataFactory.IExplore,
    ): MetadataTupleType => {
        // CHECK EXISTENCE
        const [tuple, newbie, closure] = collection.emplaceTuple(checker, type);
        ArrayUtil.add(tuple.nullables, nullable);
        if (newbie === false) return tuple;

        // CONSTRUCT ELEMENT TYPES
        const flagList: readonly ts.ElementFlags[] =
            type.elementFlags ??
            (type.target as ts.TupleType)?.elementFlags ??
            [];
        const elements: Metadata[] = checker
            .getTypeArguments(type as ts.TypeReference)
            .map((elem, i) => {
                const child: Metadata = explore_metadata(checker)(options)(
                    collection,
                )(errors)(elem, {
                    ...explore,
                    nested: tuple,
                    aliased: false,
                    escaped: false,
                });

                // CHECK OPTIONAL
                const flag: ts.ElementFlags | undefined = flagList[i];
                if (flag === ts.ElementFlags.Optional)
                    Writable(child).optional = true;

                // REST TYPE
                if (flag !== ts.ElementFlags.Rest) return child;
                const wrapper: Metadata = Metadata.initialize();
                Writable(wrapper).rest = child;
                return wrapper;
            });
        closure(elements);

        return tuple;
    };
