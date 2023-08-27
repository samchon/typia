import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_validateEncode_TypeTagNaN =
    _test_protobuf_validateEncode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TypeTagNaN>(input),
        message: typia.protobuf.message<TypeTagNaN>(),
        decode: typia.protobuf.createDecode<TypeTagNaN>(),
    });
