import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createIsDecode_ObjectGenericAlias =
  _test_protobuf_isDecode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    decode: typia.protobuf.createIsDecode<ObjectGenericAlias>(),
    encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
  });
