import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_assertDecode_ObjectHttpTypeTag =
    _test_protobuf_assertDecode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectHttpTypeTag>(input),
        encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
    });
