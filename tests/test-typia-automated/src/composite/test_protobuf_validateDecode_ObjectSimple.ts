import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_protobuf_validateDecode } from "../internal/_test_protobuf_validateDecode";

export const test_protobuf_validateDecode_ObjectSimple = (): void =>
  _test_protobuf_validateDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    decode: (input) => typia.protobuf.validateDecode<ObjectSimple>(input),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
