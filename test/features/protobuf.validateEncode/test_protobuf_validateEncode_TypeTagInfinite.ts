import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_validateEncode_TypeTagInfinite =
    _test_protobuf_validateEncode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TypeTagInfinite>(input),
        message: typia.protobuf.message<TypeTagInfinite>(),
        decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    });
