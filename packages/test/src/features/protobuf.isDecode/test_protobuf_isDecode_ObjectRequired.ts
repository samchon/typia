import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createIsDecode_ObjectRequired =
  _test_protobuf_isDecode("ObjectRequired")<ObjectRequired>(ObjectRequired)({
    decode: (input) => typia.protobuf.isDecode<ObjectRequired>(input),
    encode: typia.protobuf.createEncode<ObjectRequired>(),
  });
