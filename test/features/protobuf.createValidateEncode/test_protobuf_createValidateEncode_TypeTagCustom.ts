import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createValidateEncode_TypeTagCustom =
    _test_protobuf_validateEncode("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )({
        encode: typia.protobuf.createValidateEncode<TypeTagCustom>(),
        decode: typia.protobuf.createDecode<TypeTagCustom>(),
        message: typia.protobuf.message<TypeTagCustom>(),
    });
