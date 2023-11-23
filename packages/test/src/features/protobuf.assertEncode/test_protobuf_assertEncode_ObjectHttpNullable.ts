import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_createAssertEncode_ObjectHttpNullable =
  _test_protobuf_assertEncode("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectHttpNullable>(input),
    decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
    message: typia.protobuf.message<ObjectHttpNullable>(),
  });
