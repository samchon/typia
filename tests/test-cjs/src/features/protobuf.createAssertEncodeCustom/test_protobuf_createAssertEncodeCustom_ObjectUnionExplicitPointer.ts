import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertEncodeCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
      encode: typia.protobuf.createAssertEncode<ObjectUnionExplicitPointer>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
      message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
    });
