import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertDecodeCustom_ObjectJsonTag =
  _test_protobuf_assertDecode(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectJsonTag>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
  });
