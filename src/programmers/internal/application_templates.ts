import { Metadata } from "../../metadata/Metadata";
import { MetadataConstant } from "../../metadata/MetadataConstant";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { application_default_string } from "./application_default_string";
import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const application_templates = (
    meta: Metadata,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IString => {
    // CONSTRUCT PATTERN
    const output: IJsonSchema.IString = {
        type: "string",
        nullable: meta.nullable,
        ...attribute,
    };
    const patterns = meta.templates.map((tpl) => template_to_pattern(tpl));

    // CONSIDER CONSTANT STRING
    const constant: MetadataConstant | undefined = meta.constants.find(
        (c) => c.type === "string",
    );
    if (constant) patterns.push(...(constant.values as string[]));

    output.pattern = "/" + patterns.map((str) => `(${str})`).join("|") + "/";

    // DEFAULT VALUE
    output.default = application_default_string(meta, attribute)(output);

    // RETURNS
    return output;
};
