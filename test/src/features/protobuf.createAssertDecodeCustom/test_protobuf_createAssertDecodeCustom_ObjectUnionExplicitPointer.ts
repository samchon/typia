import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_createAssertDecodeCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
      decode: typia.protobuf.createAssertDecode<ObjectUnionExplicitPointer>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
    });
