import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createAssertEncode_ObjectUnionCompositePointer =
    _test_protobuf_assertEncode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        encode: typia.protobuf.createAssertEncode<ObjectUnionCompositePointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
    });
