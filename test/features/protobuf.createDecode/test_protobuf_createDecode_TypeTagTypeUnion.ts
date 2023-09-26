import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createDecode_TypeTagTypeUnion =
    _test_protobuf_decode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
        encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
    });
