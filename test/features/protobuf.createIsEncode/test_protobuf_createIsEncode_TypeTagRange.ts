import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createIsEncode_TypeTagRange =
    _test_protobuf_isEncode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        encode: typia.protobuf.createIsEncode<TypeTagRange>(),
        decode: typia.protobuf.createDecode<TypeTagRange>(),
        message: typia.protobuf.message<TypeTagRange>(),
    });
