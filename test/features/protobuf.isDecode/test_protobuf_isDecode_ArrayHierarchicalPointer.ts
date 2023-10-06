import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createIsDecode_ArrayHierarchicalPointer =
    _test_protobuf_isDecode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        decode: (input) =>
            typia.protobuf.isDecode<ArrayHierarchicalPointer>(input),
        encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
    });
