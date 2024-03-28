import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createAssertDecodeCustom_ObjectSimple =
  _test_protobuf_assertDecode(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )({
    decode: typia.protobuf.createAssertDecode<ObjectSimple>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
  });
