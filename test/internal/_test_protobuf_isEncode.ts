import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_isEncode =
    <T>(type: {
        constructor: { name: string };
        generate(): T;
        SPOILERS?: Spoiler<T>[];
    }) =>
    (functor: {
        decoder: (input: Uint8Array) => typia.Primitive<T>;
        encoder: (input: T) => Uint8Array | null;
    }) =>
    () => {
        try {
            const data: T = type.generate();
            const encoded: Uint8Array | null = functor.encoder(data);
            if (encoded === null)
                throw new Error(
                    `Bug on typia.protobuf.isEncode(): failed to understand ${type.constructor.name} type.`,
                );

            const decoded: typia.Primitive<T> = functor.decoder(encoded);
            if (primitive_equal_to(data, decoded as T) === false)
                throw new Error(
                    `Bug on typia.protobuf.isEncode(): wrong encode for ${type.constructor.name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.isEncode(): failed to encode ${type.constructor.name} type.`,
            );
        }

        for (const spoil of type.SPOILERS ?? []) {
            const elem: T = type.generate();
            spoil(elem);

            if (functor.encoder(elem) !== null)
                throw new Error(
                    `Bug on typia.json.isEncode(): failed to detect error on the ${type.constructor.name} type.`,
                );
        }
    };
