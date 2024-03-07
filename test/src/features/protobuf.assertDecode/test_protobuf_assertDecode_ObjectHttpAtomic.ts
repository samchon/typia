import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectHttpAtomic =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)({
    decode: (input) => typia.protobuf.assertDecode<ObjectHttpAtomic>(input),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
  });
