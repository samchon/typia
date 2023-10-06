import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_createAssertEncode_DynamicConstant =
    _test_protobuf_assertEncode("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )({
        encode: (input) => typia.protobuf.assertEncode<DynamicConstant>(input),
        decode: typia.protobuf.createDecode<DynamicConstant>(),
        message: typia.protobuf.message<DynamicConstant>(),
    });
