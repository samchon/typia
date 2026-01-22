import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createAssertDecode_ObjectHttpAtomic = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)({
    decode: typia.protobuf.createAssertDecode<ObjectHttpAtomic>(),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
  });
