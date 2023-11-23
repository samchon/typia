import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createAssertDecode_ObjectPrimitive =
  _test_protobuf_assertDecode("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )({
    decode: (input) => typia.protobuf.assertDecode<ObjectPrimitive>(input),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
