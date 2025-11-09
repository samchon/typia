import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createAssertDecodeCustom_ObjectGenericUnion =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectGenericUnion",
    )<ObjectGenericUnion>(ObjectGenericUnion)({
      decode: typia.protobuf.createAssertDecode<ObjectGenericUnion>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
    });
