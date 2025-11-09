import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectHttpAtomic = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
  encode: (input) => typia.protobuf.assertEncode<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
  message: typia.protobuf.message<ObjectHttpAtomic>(),
});
