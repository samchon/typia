import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertDecode_ObjectUnionExplicitPointer =
    _test_protobuf_assertDecode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        assertDecode:
            typia.protobuf.createAssertDecode<ObjectUnionExplicitPointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
    });
