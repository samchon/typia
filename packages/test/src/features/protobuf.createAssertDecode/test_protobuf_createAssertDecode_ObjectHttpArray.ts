import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createAssertDecode_ObjectHttpArray =
  _test_protobuf_assertDecode("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectHttpArray>(),
    encode: typia.protobuf.createEncode<ObjectHttpArray>(),
  });
