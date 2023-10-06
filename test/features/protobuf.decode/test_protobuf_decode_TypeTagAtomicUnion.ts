import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createDecode_TypeTagAtomicUnion =
    _test_protobuf_decode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        decode: (input) => typia.protobuf.decode<TypeTagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
    });
