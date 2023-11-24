import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createAssertEncode_ObjectNullable =
  _test_protobuf_assertEncode("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    {
      encode: (input) => typia.protobuf.assertEncode<ObjectNullable>(input),
      decode: typia.protobuf.createDecode<ObjectNullable>(),
      message: typia.protobuf.message<ObjectNullable>(),
    },
  );
