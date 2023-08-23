import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_decode } from "./_test_protobuf_decode";

export const _test_protobuf_assertDecode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        assertDecode: (input: Uint8Array) => typia.Resolved<T>;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        _test_protobuf_decode(name)(factory)({
            decode: functor.assertDecode,
            encode: functor.encode,
        })();
    };
