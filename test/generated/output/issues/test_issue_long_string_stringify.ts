import typia from "typia";

import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

export const test_issue_long_string_stringify = (): void => {
    const str: string = RandomGenerator.string(1000);
    const stringified: string = typia.json.stringify(str);
    const decoded: string = JSON.parse(stringified);
    if (str !== decoded)
        throw new Error(
            `Bug on typia.stringify(): failed to stringify long string.`,
        );
};
