import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createAssertEncode_TypeTagDefault =
  _test_protobuf_assertEncode("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    {
      encode: (input) => typia.protobuf.assertEncode<TypeTagDefault>(input),
      decode: typia.protobuf.createDecode<TypeTagDefault>(),
      message: typia.protobuf.message<TypeTagDefault>(),
    },
  );
