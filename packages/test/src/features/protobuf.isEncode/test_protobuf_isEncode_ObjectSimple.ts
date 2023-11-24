import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createIsEncode_ObjectSimple =
  _test_protobuf_isEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    encode: (input) => typia.protobuf.isEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
