import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_DynamicTree =
  _test_protobuf_assertDecode(TypeGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: (input) => typia.protobuf.assertDecode<DynamicTree>(input),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
