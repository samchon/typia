import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpConstant =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectHttpConstant",
    )<ObjectHttpConstant>(ObjectHttpConstant)({
      encode: typia.protobuf.createAssertEncode<ObjectHttpConstant>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
      message: typia.protobuf.message<ObjectHttpConstant>(),
    });
