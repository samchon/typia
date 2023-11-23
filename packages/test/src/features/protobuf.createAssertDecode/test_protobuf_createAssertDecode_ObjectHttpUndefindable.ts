import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createAssertDecode_ObjectHttpUndefindable =
  _test_protobuf_assertDecode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectHttpUndefindable>(),
    encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
  });
