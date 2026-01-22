import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createAssertDecodeCustom_TypeTagTypeUnion =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "TypeTagTypeUnion",
    )<TypeTagTypeUnion>(TypeTagTypeUnion)({
      decode: typia.protobuf.createAssertDecode<TypeTagTypeUnion>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
    });
