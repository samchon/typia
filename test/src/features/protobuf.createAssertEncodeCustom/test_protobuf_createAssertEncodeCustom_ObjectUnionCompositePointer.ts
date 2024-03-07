import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectUnionCompositePointer =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    encode: typia.protobuf.createAssertEncode<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    message: typia.protobuf.message<ObjectUnionCompositePointer>(),
  });
