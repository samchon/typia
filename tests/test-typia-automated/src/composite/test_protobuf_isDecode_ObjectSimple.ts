import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_isDecode } from "../internal/_test_protobuf_isDecode";

export const test_protobuf_isDecode_ObjectSimple = (): void =>
  _test_protobuf_isDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: (input) => typia.protobuf.isDecode<ObjectSimple>(input),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
