import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createValidateDecode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_validateDecode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        validateDecode:
            typia.protobuf.createValidateDecode<ArrayRecursiveUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
