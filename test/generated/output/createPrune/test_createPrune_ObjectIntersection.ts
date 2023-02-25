import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_ObjectIntersection = _test_prune("ObjectIntersection", ObjectIntersection.generate, (input: ObjectIntersection): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("email" === key || "name" === key || "vulnerable" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
