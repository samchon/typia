import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createAssertDecode_TypeTagTypeUnion =
  _test_protobuf_assertDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagTypeUnion>(input),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  });
