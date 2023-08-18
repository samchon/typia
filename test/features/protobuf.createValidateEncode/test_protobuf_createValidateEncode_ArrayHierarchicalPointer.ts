import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_validateEncode_ArrayHierarchicalPointer =
    _test_protobuf_validateEncode<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ArrayHierarchicalPointer>(),
        message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
