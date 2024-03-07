import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_TemplateUnion =
  _test_protobuf_assertEncode(TypeGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    encode: typia.protobuf.createAssertEncode<TemplateUnion>(),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
