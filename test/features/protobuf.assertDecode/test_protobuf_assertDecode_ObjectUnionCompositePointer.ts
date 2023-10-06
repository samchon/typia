import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createAssertDecode_ObjectUnionCompositePointer =
    _test_protobuf_assertDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        decode: (input) =>
            typia.protobuf.assertDecode<ObjectUnionCompositePointer>(input),
        encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
    });
