import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_assertEncode_ObjectRequired =
    _test_protobuf_assertEncode("ObjectRequired")<ObjectRequired>(
        ObjectRequired,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectRequired>(input),
        message: typia.protobuf.message<ObjectRequired>(),
        decode: typia.protobuf.createDecode<ObjectRequired>(),
    });
