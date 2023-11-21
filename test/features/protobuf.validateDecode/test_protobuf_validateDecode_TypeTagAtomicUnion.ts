import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createValidateDecode_TypeTagAtomicUnion =
  _test_protobuf_validateDecode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )({
    decode: (input) => typia.protobuf.validateDecode<TypeTagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
  });
