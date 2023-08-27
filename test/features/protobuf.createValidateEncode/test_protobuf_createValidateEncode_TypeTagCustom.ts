import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_validateEncode_TypeTagCustom =
    _test_protobuf_validateEncode("TypeTagCustom")<TypeTagCustom>(
        TypeTagCustom,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagCustom>(),
        message: typia.protobuf.message<TypeTagCustom>(),
        decode: typia.protobuf.createDecode<TypeTagCustom>(),
    });
