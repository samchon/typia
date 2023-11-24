import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_createAssertDecode_ObjectHttpNullable =
  _test_protobuf_assertDecode("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpNullable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
  });
