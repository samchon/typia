import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createIsEncode_TypeTagTypeUnion =
    _test_protobuf_isEncode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        encode: typia.protobuf.createIsEncode<TypeTagTypeUnion>(),
        decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
        message: typia.protobuf.message<TypeTagTypeUnion>(),
    });
