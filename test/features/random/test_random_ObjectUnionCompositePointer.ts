import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_random_ObjectUnionCompositePointer =
    _test_random<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        random: () => typia.random<ObjectUnionCompositePointer>(),
        assert: typia.createAssert<ObjectUnionCompositePointer>(),
    });
