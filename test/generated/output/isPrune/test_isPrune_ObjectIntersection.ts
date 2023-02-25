import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectIntersection = _test_isPrune("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): input is ObjectIntersection => { const is = (input: any): input is ObjectIntersection => {
    return "object" === typeof input && null !== input && ("string" === typeof input.email && "string" === typeof input.name && "boolean" === typeof input.vulnerable);
}; const prune = (input: ObjectIntersection): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("email" === key || "name" === key || "vulnerable" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectIntersection.SPOILERS);
