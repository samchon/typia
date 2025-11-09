import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_validateParameters_MapSimpleProtobufNullable =
  (): void =>
    _test_functional_validateParameters("MapSimpleProtobufNullable")(
      MapSimpleProtobufNullable,
    )((p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
      typia.functional.validateParameters(p),
    );
