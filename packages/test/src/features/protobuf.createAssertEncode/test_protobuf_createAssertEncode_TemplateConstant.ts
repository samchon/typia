import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createAssertEncode_TemplateConstant =
  _test_protobuf_assertEncode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    encode: typia.protobuf.createAssertEncode<TemplateConstant>(),
    decode: typia.protobuf.createDecode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
  });
