import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createAssertDecodeCustom_ObjectGenericArray =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectGenericArray",
    )<ObjectGenericArray>(ObjectGenericArray)({
      decode: typia.protobuf.createAssertDecode<ObjectGenericArray>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectGenericArray>(),
    });
