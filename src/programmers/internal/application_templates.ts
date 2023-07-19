import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { Metadata } from "../../schemas/metadata/Metadata";

import { application_default_string } from "./application_default_string";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_templates =
    (meta: Metadata) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.IString => {
        // CONSTRUCT PATTERN
        const output: IJsonSchema.IString = {
            type: "string",
            ...attribute,
        };
        output.pattern = metadata_to_pattern(true)(meta);

        // DEFAULT VALUE
        output.default = application_default_string(meta)(attribute)(output);

        // RETURNS
        return output;
    };
