import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_validate_InstanceUnion = _test_validate(
    "InstanceUnion",
)<InstanceUnion>(InstanceUnion)((input) =>
    typia.validate<InstanceUnion>(input),
);
