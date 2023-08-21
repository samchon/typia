import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_isEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_isEncode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        isEncode: (input) =>
            typia.protobuf.isEncode<ArrayRecursiveUnionExplicitPointer>(input),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
