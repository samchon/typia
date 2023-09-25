import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createValidateEncode_TypeTagTypeUnion =
    _test_protobuf_validateEncode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagTypeUnion>(),
        message: typia.protobuf.message<TypeTagTypeUnion>(),
        decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    });
