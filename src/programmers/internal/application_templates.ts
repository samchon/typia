import { Metadata } from "../../metadata/Metadata";
import { MetadataConstant } from "../../metadata/MetadataConstant";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const application_templates = (
    templates: Metadata[][],
    constant: MetadataConstant | undefined,
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IString => {
    const output: IJsonSchema.IString = {
        type: "string",
        nullable,
        ...attribute,
    };
    const patterns = templates.map((tpl) => template_to_pattern(tpl));
    if (constant) patterns.push(...(constant.values as string[]));

    output.pattern = "/" + patterns.map((str) => `(${str})`).join("|") + "/";
    return output;
};
