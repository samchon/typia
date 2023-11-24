import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createDecode_ObjectHttpArray = _test_protobuf_decode(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  decode: typia.protobuf.createDecode<ObjectHttpArray>(),
  encode: typia.protobuf.createEncode<ObjectHttpArray>(),
});
