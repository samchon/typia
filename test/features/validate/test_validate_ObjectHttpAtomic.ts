import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_validate_ObjectHttpAtomic = _test_validate(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    typia.validate<ObjectHttpAtomic>(input),
);
