import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpUndefindable =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
      encode: typia.protobuf.createAssertEncode<ObjectHttpUndefindable>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
      message: typia.protobuf.message<ObjectHttpUndefindable>(),
    });
