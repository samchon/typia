import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createAssertEncode_TypeTagLength =
  _test_protobuf_assertEncode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    encode: typia.protobuf.createAssertEncode<TypeTagLength>(),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
  });
