import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_misc_prune_ObjectClosure = _test_misc_prune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input: ObjectClosure): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "open" === key) continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input) $po0(input);
});
