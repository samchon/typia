import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_validate_MapSimpleProtobufNullable = (): void =>
  _test_validate("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable,
  )((input) => typia.validate<MapSimpleProtobufNullable>(input));
