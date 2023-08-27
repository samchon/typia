import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_validateEncode_TypeTagPattern =
    _test_protobuf_validateEncode("TypeTagPattern")<TypeTagPattern>(
        TypeTagPattern,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TypeTagPattern>(input),
        message: typia.protobuf.message<TypeTagPattern>(),
        decode: typia.protobuf.createDecode<TypeTagPattern>(),
    });
