import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectGenericArray =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectGenericArray>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
  });
