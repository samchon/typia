import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_assertEncode_ArraySimplePointer =
    _test_protobuf_assertEncode<ArraySimplePointer>(ArraySimplePointer)({
        assertEncode: typia.protobuf.createAssertEncode<ArraySimplePointer>(),
        message: typia.protobuf.message<ArraySimplePointer>(),
    });
