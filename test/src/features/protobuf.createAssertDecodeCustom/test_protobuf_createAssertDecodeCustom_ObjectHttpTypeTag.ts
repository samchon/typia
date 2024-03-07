import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpTypeTag =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    decode: typia.protobuf.createAssertDecode<ObjectHttpTypeTag>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
  });
