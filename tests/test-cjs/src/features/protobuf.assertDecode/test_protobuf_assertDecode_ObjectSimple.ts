import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_assertDecode_ObjectSimple = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectSimple>(input),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
