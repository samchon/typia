import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpAtomic =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectHttpAtomic",
    )<ObjectHttpAtomic>(ObjectHttpAtomic)({
      encode: typia.protobuf.createAssertEncode<ObjectHttpAtomic>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
      message: typia.protobuf.message<ObjectHttpAtomic>(),
    });
