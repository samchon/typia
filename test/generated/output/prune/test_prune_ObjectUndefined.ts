import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_ObjectUndefined = _test_prune("ObjectUndefined", ObjectUndefined.generate, (input) => ((input: ObjectUndefined): void => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name;
    const $po0 = (input: any) => {
        if ("object" === typeof input.classroom && null !== input.classroom)
            $po1(input.classroom);
        for (const key of Object.keys(input)) {
            if ("name" === key || "professor" === key || "classroom" === key || "grade" === key || "nothing" === key || "unknown" === key || "never" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
})(input));
