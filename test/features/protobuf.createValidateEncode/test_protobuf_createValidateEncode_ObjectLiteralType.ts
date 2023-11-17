import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createValidateEncode_ObjectLiteralType =
  _test_protobuf_validateEncode("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )({
    encode: typia.protobuf.createValidateEncode<ObjectLiteralType>(),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    message: typia.protobuf.message<ObjectLiteralType>(),
  });
