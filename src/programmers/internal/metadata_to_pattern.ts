import { Metadata } from "../../schemas/metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";
import { PatternUtil } from "../../utils/PatternUtil";

import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const metadata_to_pattern =
    (top: boolean) =>
    (meta: Metadata): string => {
        if (meta.atomics.find((a) => a.type === "string") !== undefined)
            return "(.*)";

        const values: string[] = ArrayUtil.flat(
            meta.constants.map((c) => {
                if (c.type !== "string")
                    return c.values.map((v) => v.toString());
                return c.values.map((str) => PatternUtil.escape(str));
            }),
        );
        for (const a of meta.atomics)
            if (a.type === "number" || a.type === "bigint")
                values.push(PatternUtil.NUMBER);
            else if (a.type === "boolean") values.push(PatternUtil.BOOLEAN);
        for (const childTpl of meta.templates)
            values.push("(" + template_to_pattern(false)(childTpl) + ")");

        const pattern: string =
            values.length === 1 ? values[0]! : "(" + values.join("|") + ")";
        return top ? PatternUtil.fix(pattern) : pattern;
    };
