import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpAtomic =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpAtomic>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    message: typia.protobuf.message<ObjectHttpAtomic>(),
  });
