import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_assertDecode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_assertDecode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ArrayRecursiveUnionExplicitPointer>(
                input,
            ),
        encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
