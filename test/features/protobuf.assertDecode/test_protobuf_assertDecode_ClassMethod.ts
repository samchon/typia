import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createAssertDecode_ClassMethod =
    _test_protobuf_assertDecode("ClassMethod")<ClassMethod>(ClassMethod)({
        decode: (input) => typia.protobuf.assertDecode<ClassMethod>(input),
        encode: typia.protobuf.createEncode<ClassMethod>(),
    });
