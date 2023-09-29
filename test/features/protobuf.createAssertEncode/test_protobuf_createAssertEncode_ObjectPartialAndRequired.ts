import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createAssertEncode_ObjectPartialAndRequired =
    _test_protobuf_assertEncode(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
        assertEncode:
            typia.protobuf.createAssertEncode<ObjectPartialAndRequired>(),
        message: typia.protobuf.message<ObjectPartialAndRequired>(),
        decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    });
