import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_assertDecode_ObjectSimple =
    _test_protobuf_assertDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectSimple>(input),
        encode: typia.protobuf.createEncode<ObjectSimple>(),
    });
