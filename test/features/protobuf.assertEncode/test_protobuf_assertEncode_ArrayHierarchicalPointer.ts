import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertEncode_ArrayHierarchicalPointer =
    _test_protobuf_assertEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ArrayHierarchicalPointer>(input),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
        decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
    });
