import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createValidateEncode_DynamicConstant =
  _test_protobuf_validateEncode("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )({
    encode: typia.protobuf.createValidateEncode<DynamicConstant>(),
    decode: typia.protobuf.createDecode<DynamicConstant>(),
    message: typia.protobuf.message<DynamicConstant>(),
  });
