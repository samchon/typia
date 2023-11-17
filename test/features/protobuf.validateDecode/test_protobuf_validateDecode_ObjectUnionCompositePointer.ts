import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createValidateDecode_ObjectUnionCompositePointer =
  _test_protobuf_validateDecode(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
    decode: (input) =>
      typia.protobuf.validateDecode<ObjectUnionCompositePointer>(input),
    encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
  });
