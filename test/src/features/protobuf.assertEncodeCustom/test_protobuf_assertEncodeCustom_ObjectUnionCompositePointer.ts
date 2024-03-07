import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectUnionCompositePointer =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectUnionCompositePointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    message: typia.protobuf.message<ObjectUnionCompositePointer>(),
  });
