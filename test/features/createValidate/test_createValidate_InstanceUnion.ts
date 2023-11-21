import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_createValidate_InstanceUnion = _test_validate(
  "InstanceUnion",
)<InstanceUnion>(InstanceUnion)(typia.createValidate<InstanceUnion>());
