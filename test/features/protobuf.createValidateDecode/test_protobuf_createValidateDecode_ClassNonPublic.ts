import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createValidateDecode_ClassNonPublic =
  _test_protobuf_validateDecode("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: typia.protobuf.createValidateDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
