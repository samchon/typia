import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_validateEncode } from "../internal/_test_protobuf_validateEncode";

export const test_protobuf_validateEncode_ObjectSimple = (): void =>
  _test_protobuf_validateEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    encode: (input) => typia.protobuf.validateEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
