import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createAssertDecodeCustom_TypeTagAtomicUnion =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "TypeTagAtomicUnion",
    )<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
      decode: typia.protobuf.createAssertDecode<TypeTagAtomicUnion>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
    });
