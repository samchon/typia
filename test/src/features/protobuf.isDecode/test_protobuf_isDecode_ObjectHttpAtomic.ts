import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_isDecode_ObjectHttpAtomic = _test_protobuf_isDecode(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
  decode: (input) => typia.protobuf.isDecode<ObjectHttpAtomic>(input),
  encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
});
