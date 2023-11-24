import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createIsDecode_ObjectPartial =
  _test_protobuf_isDecode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
    decode: (input) => typia.protobuf.isDecode<ObjectPartial>(input),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
