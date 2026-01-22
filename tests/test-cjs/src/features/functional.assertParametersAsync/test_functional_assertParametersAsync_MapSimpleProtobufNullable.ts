import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertParametersAsync_MapSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "MapSimpleProtobufNullable",
    )(MapSimpleProtobufNullable)(
      (
        p: (
          input: MapSimpleProtobufNullable,
        ) => Promise<MapSimpleProtobufNullable>,
      ) => typia.functional.assertParameters(p),
    );
