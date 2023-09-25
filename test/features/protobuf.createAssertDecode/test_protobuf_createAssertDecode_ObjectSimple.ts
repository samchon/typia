import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createAssertDecode_ObjectSimple =
    _test_protobuf_assertDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        assertDecode: typia.protobuf.createAssertDecode<ObjectSimple>(),
        encode: typia.protobuf.createEncode<ObjectSimple>(),
    });
