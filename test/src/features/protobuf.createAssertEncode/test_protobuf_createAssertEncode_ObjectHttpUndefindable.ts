import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createAssertEncode_ObjectHttpUndefindable =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
      encode: typia.protobuf.createAssertEncode<ObjectHttpUndefindable>(),
      decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
      message: typia.protobuf.message<ObjectHttpUndefindable>(),
    });
