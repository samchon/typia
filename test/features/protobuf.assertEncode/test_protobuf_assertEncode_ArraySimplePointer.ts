import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_assertEncode_ArraySimplePointer =
    _test_protobuf_assertEncode<ArraySimplePointer>(ArraySimplePointer)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ArraySimplePointer>(input),
        message: typia.protobuf.message<ArraySimplePointer>(),
    });
