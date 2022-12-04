import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectUnionComposite = _test_isParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    TSON.createIsParse<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
