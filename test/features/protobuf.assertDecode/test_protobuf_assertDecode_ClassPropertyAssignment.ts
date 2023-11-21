import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertDecode_ClassPropertyAssignment =
  _test_protobuf_assertDecode(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    decode: (input) =>
      typia.protobuf.assertDecode<ClassPropertyAssignment>(input),
    encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
  });
