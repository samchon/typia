import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_validateEncode_ObjectPartialAndRequired =
    _test_protobuf_validateEncode(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectPartialAndRequired>(input),
        message: typia.protobuf.message<ObjectPartialAndRequired>(),
        decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    });
