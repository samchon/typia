import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createAssertDecode_DynamicConstant =
  _test_protobuf_assertDecode("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )({
    decode: (input) => typia.protobuf.assertDecode<DynamicConstant>(input),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
  });
