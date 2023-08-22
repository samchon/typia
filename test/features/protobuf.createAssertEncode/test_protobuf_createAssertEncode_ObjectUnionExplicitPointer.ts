import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_assertEncode_ObjectUnionExplicitPointer =
    _test_protobuf_assertEncode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        assertEncode:
            typia.protobuf.createAssertEncode<ObjectUnionExplicitPointer>(),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    });
