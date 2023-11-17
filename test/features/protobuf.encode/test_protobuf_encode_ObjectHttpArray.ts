import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createEncode_ObjectHttpArray = _test_protobuf_encode(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  encode: (input) => typia.protobuf.encode<ObjectHttpArray>(input),
  decode: typia.protobuf.createDecode<ObjectHttpArray>(),
  message: typia.protobuf.message<ObjectHttpArray>(),
});
