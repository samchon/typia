import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";

import { TransformerError } from "../transformers/TransformerError";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";

export namespace JsonMetadataFactory {
    export const analyze =
        (method: string) =>
        (checker: ts.TypeChecker) =>
        (type: ts.Type): [MetadataCollection, Metadata] => {
            const collection = new MetadataCollection();
            const result = MetadataFactory.analyze(checker)({
                escape: true,
                constant: true,
                absorb: true,
                validate,
            })(collection)(type);
            if (result.success === false)
                throw TransformerError.from(method)(result.errors);
            return [collection, result.data];
        };

    export const validate = (meta: Metadata) => {
        const output: string[] = [];
        if (
            meta.atomics.some((a) => a.type === "bigint") ||
            meta.constants.some((c) => c.type === "bigint")
        )
            output.push("JSON does not support bigint type.");
        if (
            meta.tuples.some((t) =>
                t.type.elements.some((e) => e.isRequired() === false),
            ) ||
            meta.arrays.some((a) => a.type.value.isRequired() === false)
        )
            output.push("JSON does not support undefined type in array.");
        return output;
    };
}
