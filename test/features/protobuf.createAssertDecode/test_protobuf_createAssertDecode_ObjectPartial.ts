import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createAssertDecode_ObjectPartial =
    _test_protobuf_assertDecode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
        assertDecode: typia.protobuf.createAssertDecode<ObjectPartial>(),
        encode: typia.protobuf.createEncode<ObjectPartial>(),
    });
