import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_assertDecodeCustom_ObjectHttpTypeTag = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectHttpTypeTag>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
  });
