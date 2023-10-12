import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createValidateEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_validateEncode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        encode: typia.protobuf.createValidateEncode<ArrayRecursiveUnionExplicitPointer>(),
        decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
