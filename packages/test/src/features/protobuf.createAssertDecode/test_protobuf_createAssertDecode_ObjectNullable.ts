import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createAssertDecode_ObjectNullable =
  _test_protobuf_assertDecode("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    {
      decode: typia.protobuf.createAssertDecode<ObjectNullable>(),
      encode: typia.protobuf.createEncode<ObjectNullable>(),
    },
  );
