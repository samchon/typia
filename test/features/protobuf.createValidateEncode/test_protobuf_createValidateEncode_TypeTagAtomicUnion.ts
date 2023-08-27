import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_validateEncode_TypeTagAtomicUnion =
    _test_protobuf_validateEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<TypeTagAtomicUnion>(),
        message: typia.protobuf.message<TypeTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    });
