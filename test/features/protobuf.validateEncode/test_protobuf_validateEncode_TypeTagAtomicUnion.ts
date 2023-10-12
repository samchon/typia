import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createValidateEncode_TypeTagAtomicUnion =
    _test_protobuf_validateEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        encode: (input) =>
            typia.protobuf.validateEncode<TypeTagAtomicUnion>(input),
        decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
        message: typia.protobuf.message<TypeTagAtomicUnion>(),
    });
