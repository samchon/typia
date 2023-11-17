import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createValidateDecode_ObjectPartial =
  _test_protobuf_validateDecode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
    decode: (input) => typia.protobuf.validateDecode<ObjectPartial>(input),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
  });
