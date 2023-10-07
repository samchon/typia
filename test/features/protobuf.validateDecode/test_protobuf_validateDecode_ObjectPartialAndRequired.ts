import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createValidateDecode_ObjectPartialAndRequired =
    _test_protobuf_validateDecode(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
        decode: (input) =>
            typia.protobuf.validateDecode<ObjectPartialAndRequired>(input),
        encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
    });
