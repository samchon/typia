import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.TupleType): boolean => {
        if (!(checker as any).isTupleType(type)) return false;

        const elementFlags: readonly ts.ElementFlags[] =
            type.elementFlags ??
            (type.target as ts.TupleType)?.elementFlags ??
            [];

        const children: Metadata[] = checker
            .getTypeArguments(type as ts.TypeReference)
            .map((elem, i) => {
                const child: Metadata = explore_metadata(checker)(options)(
                    collection,
                )(elem, false);

                const flag: ts.ElementFlags | undefined = elementFlags[i];
                if (flag !== ts.ElementFlags.Rest) return child;

                const wrapper: Metadata = Metadata.initialize();
                Writable(wrapper).rest = child;
                return wrapper;
            });
        ArrayUtil.set(meta.tuples, children, join_tuple_names);
        return true;
    };

function join_tuple_names(metas: Metadata[]): string {
    return `[${metas.map((m) => m.getName).join(", ")}]`;
}
