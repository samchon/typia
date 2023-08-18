import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_encode_ObjectGenericUnion =
    _test_protobuf_encode<ObjectGenericUnion>(ObjectGenericUnion)({
        encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
        message: typia.protobuf.message<ObjectGenericUnion>(),
    });
