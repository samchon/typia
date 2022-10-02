import { Metadata } from "../../metadata/Metadata";

import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const template_to_pattern = (template: Metadata[]) =>
    template.map((meta) => metadata_to_pattern(meta)).join("");
