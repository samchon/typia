import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateEncode_ObjectHttpAtomic = (): void => _test_protobuf_validateEncode(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
  encode: typia.protobuf.createValidateEncode<ObjectHttpAtomic>(),
  decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
  message: typia.protobuf.message<ObjectHttpAtomic>(),
});
