import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createIsDecode_ObjectHttpTypeTag =
    _test_protobuf_isDecode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        isDecode: typia.protobuf.createIsDecode<ObjectHttpTypeTag>(),
        encode: typia.protobuf.createEncode<ObjectHttpTypeTag>(),
    });
