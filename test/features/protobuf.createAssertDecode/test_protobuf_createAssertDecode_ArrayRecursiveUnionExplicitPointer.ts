import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createAssertDecode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_assertDecode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        assertDecode:
            typia.protobuf.createAssertDecode<ArrayRecursiveUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
