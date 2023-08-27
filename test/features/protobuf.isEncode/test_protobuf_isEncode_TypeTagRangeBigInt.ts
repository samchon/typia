import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_isEncode_TypeTagRangeBigInt =
    _test_protobuf_isEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        isEncode: (input) => typia.protobuf.isEncode<TypeTagRangeBigInt>(input),
        message: typia.protobuf.message<TypeTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    });
