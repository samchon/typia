import { IJsonComponents } from "../../schemas/IJsonComponents";

import { IJsonSchema } from "../../module";
import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";

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
        const key: string =
            options.purpose === "ajv"
                ? name
                : `${name}${props.nullable ? ".Nullable" : ""}`;
        if (components.schemas?.[key] === undefined) {
            components.schemas ??= {};
            components.schemas[key] ??= {
                type: "object",
                $id:
                    options.purpose === "ajv"
                        ? `${JSON_COMPONENTS_PREFIX}/objects/${key}`
                        : undefined,
                properties: {},
                nullable:
                    options.purpose === "swagger" ? props.nullable : undefined,
            };
        }
        return {
            ...props.attribute,
            $ref: `${JSON_COMPONENTS_PREFIX}/objects/${key}`,
        };
    };
