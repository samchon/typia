import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createIsEncode_ArrayHierarchicalPointer =
    _test_protobuf_isEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        encode: (input) =>
            typia.protobuf.isEncode<ArrayHierarchicalPointer>(input),
        decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
