import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertEncode_TypeTagArray =
  _test_protobuf_assertEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagArray>(input),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
    message: typia.protobuf.message<TypeTagArray>(),
  });
