import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createValidateDecode_DynamicConstant =
  _test_protobuf_validateDecode("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )({
    decode: typia.protobuf.createValidateDecode<DynamicConstant>(),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
  });
