import typia from "../../../src";
import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_InstanceUnion = _test_validate(
    "InstanceUnion",
    InstanceUnion.generate,
    typia.createValidate<InstanceUnion>(),
);
