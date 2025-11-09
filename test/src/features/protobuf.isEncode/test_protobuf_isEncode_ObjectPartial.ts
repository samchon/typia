import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_isEncode_ObjectPartial = (): void => _test_protobuf_isEncode(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  encode: (input) => typia.protobuf.isEncode<ObjectPartial>(input),
  decode: typia.protobuf.createDecode<ObjectPartial>(),
  message: typia.protobuf.message<ObjectPartial>(),
});
