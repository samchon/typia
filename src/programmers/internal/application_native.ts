import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";

export const application_native =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (name: string) =>
    (
        nullable: boolean,
        attribute: IJsonSchema.IAttribute,
    ): IJsonSchema.IReference => {
        const key: string = name + (nullable ? ".Nullable" : "");
        if (components.schemas[key] === undefined)
            components.schemas[key] = {
                type: "object",
                $id:
                    options.purpose === "ajv"
                        ? options.prefix + "/" + key
                        : undefined,
                properties: {},
                nullable,
            };
        return {
            $ref: `#/components/schemas/${name}`,
            ...attribute,
        };
    };
