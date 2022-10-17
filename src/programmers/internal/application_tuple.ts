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
    (
        items: Array<Metadata>,
        nullable: boolean,
        attribute: IJsonSchema.IAttribute,
    ): IJsonSchema.ITuple => ({
        type: "array",
        items: items.map((meta) =>
            application_schema(options)(components)(false)(meta, attribute),
        ),
        nullable,
        ...attribute,
    });
