import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createAssertDecode_TypeTagDefault =
  _test_protobuf_assertDecode("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    {
      decode: typia.protobuf.createAssertDecode<TypeTagDefault>(),
      encode: typia.protobuf.createEncode<TypeTagDefault>(),
    },
  );
