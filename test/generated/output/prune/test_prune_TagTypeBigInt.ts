import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_prune_TagTypeBigInt = _test_prune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) =>
        ((input: TagTypeBigInt): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("in64" === key || "uint64" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
