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
    (metadata: Metadata) =>
    (props: {
        nullable: boolean;
        attribute: IJsonSchema.IAttribute;
    }): IJsonSchema.IArray => {
        // SCHEMA
        const output: IJsonSchema.IArray = {
            type: "array",
            items: application_schema(options)(false)(components)(metadata)(
                props.attribute,
            ),
            nullable: props.nullable,
            "x-typia-tuple": tuple,
            ...props.attribute,
        };

        // RANGE
        for (const tag of props.attribute["x-typia-metaTags"] || [])
            if (tag.kind === "minItems") output.minItems = tag.value;
            else if (tag.kind === "maxItems") output.maxItems = tag.value;
        return output;
    };
