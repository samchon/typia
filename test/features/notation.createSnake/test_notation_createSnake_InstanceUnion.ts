import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_createValidateSnake_InstanceUnion =
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.SnakeCase<InstanceUnion>
  >({
    convert: typia.notations.createValidateSnake<InstanceUnion>(),
    assert: typia.createAssert<typia.SnakeCase<InstanceUnion>>(),
  });
