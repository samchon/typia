import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_assertEncodeCustom_TemplateUnion =
  _test_protobuf_assertEncode(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TemplateUnion>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
