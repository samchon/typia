import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_assertEncode_ObjectPartial =
    _test_protobuf_assertEncode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectPartial>(input),
        message: typia.protobuf.message<ObjectPartial>(),
        decode: typia.protobuf.createDecode<ObjectPartial>(),
    });
