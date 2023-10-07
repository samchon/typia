import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createDecode_ObjectGenericUnion =
    _test_protobuf_decode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        decode: (input) => typia.protobuf.decode<ObjectGenericUnion>(input),
        encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
    });
