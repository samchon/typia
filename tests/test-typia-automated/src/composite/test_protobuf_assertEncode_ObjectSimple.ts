import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../internal/_test_protobuf_assertEncode";

export const test_protobuf_assertEncode_ObjectSimple = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectSimple>(input),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
