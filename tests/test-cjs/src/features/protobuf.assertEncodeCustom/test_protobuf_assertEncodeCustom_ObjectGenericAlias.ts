import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_assertEncodeCustom_ObjectGenericAlias = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectGenericAlias>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    message: typia.protobuf.message<ObjectGenericAlias>(),
  });
