import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_assertEncode_ObjectPartialAndRequired =
    _test_protobuf_assertEncode(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectPartialAndRequired>(input),
        message: typia.protobuf.message<ObjectPartialAndRequired>(),
        decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    });
