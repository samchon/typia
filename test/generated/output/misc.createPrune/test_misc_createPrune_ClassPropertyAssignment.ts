import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_misc_prune_ClassPropertyAssignment = _test_misc_prune(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)(
    (input: ClassPropertyAssignment): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "note" === key ||
                    "editable" === key ||
                    "incremental" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    },
);
