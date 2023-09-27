import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createValidateDecode_TypeTagDefault =
    _test_protobuf_validateDecode("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )({
        validateDecode: typia.protobuf.createValidateDecode<TypeTagDefault>(),
        encode: typia.protobuf.createEncode<TypeTagDefault>(),
    });
