import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_isEncode } from "../internal/_test_protobuf_isEncode";

export const test_protobuf_isEncode_ObjectSimple = (): void =>
  _test_protobuf_isEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    encode: (input) => typia.protobuf.isEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
