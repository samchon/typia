import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_random_ArrayRecursiveUnionImplicit = _test_random(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)({
    random: typia.createRandom<ArrayRecursiveUnionImplicit>(),
    assert: typia.createAssert<ArrayRecursiveUnionImplicit>(),
});
