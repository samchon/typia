import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_assertDecode_DynamicSimple =
    _test_protobuf_assertDecode("DynamicSimple")<DynamicSimple>(DynamicSimple)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<DynamicSimple>(input),
        encode: typia.protobuf.createEncode<DynamicSimple>(),
    });
