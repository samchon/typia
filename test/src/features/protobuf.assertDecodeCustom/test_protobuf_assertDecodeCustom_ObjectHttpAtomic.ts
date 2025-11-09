import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectHttpAtomic = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
  decode: (input) => typia.protobuf.assertDecode<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
});
