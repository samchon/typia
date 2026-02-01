import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_DynamicSimple = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
  decode: (input) => typia.protobuf.assertDecode<DynamicSimple>(input),
  encode: typia.protobuf.createEncode<DynamicSimple>(),
});
