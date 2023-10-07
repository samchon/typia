import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_decode } from "./_test_protobuf_decode";

export const _test_protobuf_isDecode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        decode: (input: Uint8Array) => typia.Resolved<T> | null;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        _test_protobuf_decode(name)(factory)({
            decode: (input) => functor.decode(input)!,
            encode: functor.encode,
        })();
    };
