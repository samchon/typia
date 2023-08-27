import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_validateEncode_TypeTagRange =
    _test_protobuf_validateEncode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagRange>(),
        message: typia.protobuf.message<TypeTagRange>(),
        decode: typia.protobuf.createDecode<TypeTagRange>(),
    });
