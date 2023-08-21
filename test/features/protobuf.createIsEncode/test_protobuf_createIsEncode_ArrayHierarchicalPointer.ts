import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_isEncode_ArrayHierarchicalPointer =
    _test_protobuf_isEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        isEncode: typia.protobuf.createIsEncode<ArrayHierarchicalPointer>(),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
