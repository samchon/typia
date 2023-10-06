import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createAssertDecode_ObjectInternal =
    _test_protobuf_assertDecode("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )({
        decode: (input) => typia.protobuf.assertDecode<ObjectInternal>(input),
        encode: typia.protobuf.createEncode<ObjectInternal>(),
    });
