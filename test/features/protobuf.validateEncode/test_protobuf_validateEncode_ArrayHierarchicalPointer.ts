import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_validateEncode_ArrayHierarchicalPointer =
    _test_protobuf_validateEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArrayHierarchicalPointer>(input),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
