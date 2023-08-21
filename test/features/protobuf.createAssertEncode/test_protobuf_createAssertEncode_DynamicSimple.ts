import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_assertEncode_DynamicSimple =
    _test_protobuf_assertEncode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
        assertEncode: typia.protobuf.createAssertEncode<DynamicSimple>(),
        message: typia.protobuf.message<DynamicSimple>(),
    });
