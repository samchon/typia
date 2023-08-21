import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_assertEncode_DynamicConstant =
    _test_protobuf_assertEncode("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<DynamicConstant>(input),
        message: typia.protobuf.message<DynamicConstant>(),
    });
