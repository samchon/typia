import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_validateEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_validateEncode<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArrayRecursiveUnionExplicitPointer>(
                input,
            ),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
