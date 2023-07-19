import { Metadata } from "../../schemas/metadata/Metadata";

import { PatternUtil } from "../../utils/PatternUtil";

import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const template_to_pattern = (top: boolean) => (template: Metadata[]) => {
    const pattern: string = template
        .map((meta) => metadata_to_pattern(false)(meta))
        .join("");
    return top ? PatternUtil.fix(pattern) : pattern;
};
