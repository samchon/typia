import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createValidateEncode_TypeTagNaN =
    _test_protobuf_validateEncode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagNaN>(),
        message: typia.protobuf.message<TypeTagNaN>(),
        decode: typia.protobuf.createDecode<TypeTagNaN>(),
    });
