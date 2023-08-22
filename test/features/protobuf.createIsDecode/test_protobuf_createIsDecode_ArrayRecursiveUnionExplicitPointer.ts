import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_isDecode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_isDecode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        isDecode:
            typia.protobuf.createIsDecode<ArrayRecursiveUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
