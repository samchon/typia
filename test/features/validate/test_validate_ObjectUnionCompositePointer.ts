import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_validate_ObjectUnionCompositePointer = _test_validate(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.validate<ObjectUnionCompositePointer>(input),
);
