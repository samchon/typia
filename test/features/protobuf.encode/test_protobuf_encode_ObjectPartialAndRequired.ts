import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_encode_ObjectPartialAndRequired =
    _test_protobuf_encode("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired,
    )({
        encode: (input) =>
            typia.protobuf.encode<ObjectPartialAndRequired>(input),
        message: typia.protobuf.message<ObjectPartialAndRequired>(),
        decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    });
