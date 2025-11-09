import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpConstant =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectHttpConstant",
    )<ObjectHttpConstant>(ObjectHttpConstant)({
      decode: typia.protobuf.createAssertDecode<ObjectHttpConstant>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
    });
