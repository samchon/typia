import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createIsDecode_ObjectSimple =
  _test_protobuf_isDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: typia.protobuf.createIsDecode<ObjectSimple>(),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
