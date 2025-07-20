import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createDecode_DynamicConstant = (): void =>
  _test_protobuf_decode("DynamicConstant")<DynamicConstant>(DynamicConstant)({
    decode: typia.protobuf.createDecode<DynamicConstant>(),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
  });
