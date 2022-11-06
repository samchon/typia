import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_intersection =
    _test_assert_clone(
        "intersected object",
        ObjectIntersection.generate,
        TSON.createAssertClone<ObjectIntersection>(),
        ObjectIntersection.SPOILERS,
    );
