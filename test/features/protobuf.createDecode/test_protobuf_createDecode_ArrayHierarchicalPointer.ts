import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_decode_ArrayHierarchicalPointer =
    _test_protobuf_decode("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )({
        decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
        encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
    });
