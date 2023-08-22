import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_assertDecode_ObjectOptional =
    _test_protobuf_assertDecode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        assertDecode: typia.protobuf.createAssertDecode<ObjectOptional>(),
        encode: typia.protobuf.createEncode<ObjectOptional>(),
    });
