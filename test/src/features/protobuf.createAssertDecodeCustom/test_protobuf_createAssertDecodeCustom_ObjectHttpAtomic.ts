import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpAtomic =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectHttpAtomic",
    )<ObjectHttpAtomic>(ObjectHttpAtomic)({
      decode: typia.protobuf.createAssertDecode<ObjectHttpAtomic>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
    });
