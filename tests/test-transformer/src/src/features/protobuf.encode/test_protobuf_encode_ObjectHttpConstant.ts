import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_encode_ObjectHttpConstant = (): void => _test_protobuf_encode(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
  encode: (input) => typia.protobuf.encode<ObjectHttpConstant>(input),
  decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
  message: typia.protobuf.message<ObjectHttpConstant>(),
});
