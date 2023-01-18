import { Metadata } from "../../metadata/Metadata";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_array =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (tuple?: IJsonSchema.ITuple) =>
    (
        metadata: Metadata,
        nullable: boolean,
        attribute: IJsonSchema.IAttribute,
    ): IJsonSchema.IArray => {
        // SCHEMA
        const output: IJsonSchema.IArray = {
            type: "array",
            items: application_schema(options)(components)(false)(
                metadata,
                attribute,
            ),
            nullable,
            "x-typia-tuple": tuple,
            ...attribute,
        };

        // RANGE
        for (const tag of attribute["x-typia-metaTags"] || [])
            if (tag.kind === "minItems") output.minItems = tag.value;
            else if (tag.kind === "maxItems") output.maxItems = tag.value;
            else if (tag.kind === "items") {
                if (tag.minimum !== undefined)
                    output.minItems =
                        tag.minimum.value +
                        (tag.minimum.include === true ? 0 : 1);
                if (tag.maximum !== undefined)
                    output.maxItems =
                        tag.maximum.value -
                        (tag.maximum.include === true ? 0 : 1);
            }
        return output;
    };
