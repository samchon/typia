import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_DynamicTree =
  _test_protobuf_assertDecode(TypeGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: typia.protobuf.createAssertDecode<DynamicTree>(),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
