import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createEncode_ObjectHttpArray = _test_protobuf_encode(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  encode: typia.protobuf.createEncode<ObjectHttpArray>(),
  decode: typia.protobuf.createDecode<ObjectHttpArray>(),
  message: typia.protobuf.message<ObjectHttpArray>(),
});
