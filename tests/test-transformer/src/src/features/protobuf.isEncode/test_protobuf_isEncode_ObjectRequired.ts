import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_isEncode_ObjectRequired = (): void => _test_protobuf_isEncode(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  encode: (input) => typia.protobuf.isEncode<ObjectRequired>(input),
  decode: typia.protobuf.createDecode<ObjectRequired>(),
  message: typia.protobuf.message<ObjectRequired>(),
});
