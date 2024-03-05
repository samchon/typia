import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createAssertDecodeCustom_ObjectUnionCompositePointer =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: typia.protobuf.createAssertDecode<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
