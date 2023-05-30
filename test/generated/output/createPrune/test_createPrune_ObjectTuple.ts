import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectTuple } from "../../../structures/ObjectTuple";
export const test_createPrune_ObjectTuple = _test_prune("ObjectTuple", ObjectTuple.generate, (input: ObjectTuple): void => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "code" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "mobile" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])))) {
        if ("object" === typeof input[0] && null !== input[0])
            $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1])
            $po1(input[1]);
    }
});
