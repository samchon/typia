import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";

/**
 * @internal
 */
export const application_native =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (name: string) =>
    (props: {
        nullable: boolean;
        attribute: IJsonSchema.IAttribute;
    }): IJsonSchema.IReference => {
        const key: string = name + (props.nullable ? ".Nullable" : "");
        if (components.schemas[key] === undefined)
            components.schemas[key] = {
                type: "object",
                $id:
                    options.purpose === "ajv"
                        ? options.prefix + "/" + key
                        : undefined,
                properties: {},
                nullable: props.nullable,
            };
        return {
            $ref: `#/components/schemas/${name}`,
            ...props.attribute,
        };
    };
