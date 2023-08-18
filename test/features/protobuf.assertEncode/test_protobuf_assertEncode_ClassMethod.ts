import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_assertEncode_ClassMethod =
    _test_protobuf_assertEncode<ClassMethod>(ClassMethod)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ClassMethod>(input),
        message: typia.protobuf.message<ClassMethod>(),
    });
