import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createIsEncode_TypeTagPattern =
    _test_protobuf_isEncode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
        isEncode: typia.protobuf.createIsEncode<TypeTagPattern>(),
        message: typia.protobuf.message<TypeTagPattern>(),
        decode: typia.protobuf.createDecode<TypeTagPattern>(),
    });
