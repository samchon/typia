import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_validateDecode_TypeTagTypeUnion =
    _test_protobuf_validateDecode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        validateDecode: typia.protobuf.createValidateDecode<TypeTagTypeUnion>(),
        encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
    });
