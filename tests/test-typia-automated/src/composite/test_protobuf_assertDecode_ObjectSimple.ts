import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../internal/_test_protobuf_assertDecode";

export const test_protobuf_assertDecode_ObjectSimple = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectSimple>(input),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
