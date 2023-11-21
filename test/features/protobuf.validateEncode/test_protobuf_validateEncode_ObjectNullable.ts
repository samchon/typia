import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_createValidateEncode_ObjectNullable =
  _test_protobuf_validateEncode("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )({
    encode: (input) => typia.protobuf.validateEncode<ObjectNullable>(input),
    decode: typia.protobuf.createDecode<ObjectNullable>(),
    message: typia.protobuf.message<ObjectNullable>(),
  });
