import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_assertDecode_ObjectUnionCompositePointer =
    _test_protobuf_assertDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        assertDecode:
            typia.protobuf.createAssertDecode<ObjectUnionCompositePointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
    });
