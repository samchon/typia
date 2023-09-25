import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_assertEncode_ObjectHttpTypeTag =
    _test_protobuf_assertEncode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpTypeTag>(input),
        message: typia.protobuf.message<ObjectHttpTypeTag>(),
        decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
    });
