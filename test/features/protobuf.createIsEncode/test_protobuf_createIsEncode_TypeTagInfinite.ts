import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createIsEncode_TypeTagInfinite =
    _test_protobuf_isEncode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        isEncode: typia.protobuf.createIsEncode<TypeTagInfinite>(),
        message: typia.protobuf.message<TypeTagInfinite>(),
        decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    });
