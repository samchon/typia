import { Metadata } from "../../metadata/Metadata";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_tuple =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (items: Array<Metadata>) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.ITuple => ({
        type: "array",
        items: items.map((meta, i) =>
            application_schema(options)(false)(components)(meta.rest ?? meta)({
                ...attribute,
                "x-typia-rest":
                    i === items.length - 1 ? meta.rest !== null : undefined,
                "x-typia-required": meta.required,
                "x-typia-optional": meta.optional,
            }),
        ),
        ...attribute,
    });
