import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createEncode_ArrayHierarchicalPointer =
    _test_protobuf_encode("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )({
        encode: (input) =>
            typia.protobuf.encode<ArrayHierarchicalPointer>(input),
        decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
