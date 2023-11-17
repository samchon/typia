import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createIsEncode_TypeTagLength =
  _test_protobuf_isEncode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    encode: typia.protobuf.createIsEncode<TypeTagLength>(),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
  });
