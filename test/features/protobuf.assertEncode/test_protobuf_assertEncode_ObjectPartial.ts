import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createAssertEncode_ObjectPartial =
    _test_protobuf_assertEncode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
        encode: (input) => typia.protobuf.assertEncode<ObjectPartial>(input),
        decode: typia.protobuf.createDecode<ObjectPartial>(),
        message: typia.protobuf.message<ObjectPartial>(),
    });
