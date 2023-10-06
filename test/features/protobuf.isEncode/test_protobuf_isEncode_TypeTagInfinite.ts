import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createIsEncode_TypeTagInfinite =
    _test_protobuf_isEncode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        encode: (input) => typia.protobuf.isEncode<TypeTagInfinite>(input),
        decode: typia.protobuf.createDecode<TypeTagInfinite>(),
        message: typia.protobuf.message<TypeTagInfinite>(),
    });
