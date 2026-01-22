import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpTypeTag =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectHttpTypeTag",
    )<ObjectHttpTypeTag>(ObjectHttpTypeTag)({
      encode: typia.protobuf.createAssertEncode<ObjectHttpTypeTag>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
      message: typia.protobuf.message<ObjectHttpTypeTag>(),
    });
