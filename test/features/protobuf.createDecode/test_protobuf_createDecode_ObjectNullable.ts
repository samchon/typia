import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createDecode_ObjectNullable = _test_protobuf_decode(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
  decode: typia.protobuf.createDecode<ObjectNullable>(),
  encode: typia.protobuf.createEncode<ObjectNullable>(),
});
