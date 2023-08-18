import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_assertEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_assertEncode<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ArrayRecursiveUnionExplicitPointer>(
                input,
            ),
        message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
