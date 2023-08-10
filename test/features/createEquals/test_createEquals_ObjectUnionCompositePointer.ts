import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_equals_ObjectUnionCompositePointer =
    _test_equals<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
        typia.createEquals<ObjectUnionCompositePointer>(),
    );
