import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TemplateUnion =
  _test_protobuf_assertEncode(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    encode: typia.protobuf.createAssertEncode<TemplateUnion>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
