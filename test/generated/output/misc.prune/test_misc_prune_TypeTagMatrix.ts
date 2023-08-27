import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_misc_prune_TypeTagMatrix = _test_misc_prune(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
    ((input: TypeTagMatrix): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("matrix" === key) continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
