import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_validateDecode_DynamicConstant = (): void => _test_protobuf_validateDecode(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  decode: (input) => typia.protobuf.validateDecode<DynamicConstant>(input),
  encode: typia.protobuf.createEncode<DynamicConstant>(),
});
