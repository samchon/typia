import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_isDecode_DynamicConstant = (): void =>
  _test_protobuf_isDecode("DynamicConstant")<DynamicConstant>(DynamicConstant)({
    decode: (input) => typia.protobuf.isDecode<DynamicConstant>(input),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
  });
