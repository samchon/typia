import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_random_ObjectHierarchical = _test_random(
    "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)({
    random: () =>
        typia.random<ObjectHierarchical>((ObjectHierarchical as any).RANDOM),
    assert: typia.createAssert<ObjectHierarchical>(),
});
