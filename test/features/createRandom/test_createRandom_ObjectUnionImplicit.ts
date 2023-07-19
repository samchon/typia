import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_random_ObjectUnionImplicit =
    _test_random<ObjectUnionImplicit>(ObjectUnionImplicit)({
        random: typia.createRandom<ObjectUnionImplicit>(),
        assert: typia.createAssert<ObjectUnionImplicit>(),
    });
