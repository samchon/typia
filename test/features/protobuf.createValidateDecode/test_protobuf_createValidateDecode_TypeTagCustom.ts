import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createValidateDecode_TypeTagCustom =
    _test_protobuf_validateDecode("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )({
        validateDecode: typia.protobuf.createValidateDecode<TypeTagCustom>(),
        encode: typia.protobuf.createEncode<TypeTagCustom>(),
    });
