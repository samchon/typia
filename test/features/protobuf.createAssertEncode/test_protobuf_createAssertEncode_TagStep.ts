import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_assertEncode_TagStep =
    _test_protobuf_assertEncode<TagStep>(TagStep)({
        assertEncode: typia.protobuf.createAssertEncode<TagStep>(),
        message: typia.protobuf.message<TagStep>(),
    });
