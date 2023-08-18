import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_assertEncode_ObjectOptional =
    _test_protobuf_assertEncode<ObjectOptional>(ObjectOptional)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectOptional>(input),
        message: typia.protobuf.message<ObjectOptional>(),
    });
