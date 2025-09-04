import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertReturnCustom_MapSimpleProtobufNullable =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )(MapSimpleProtobufNullable)(
      (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
