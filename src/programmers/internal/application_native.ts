import { IJsonComponents } from "../../schemas/json/IJsonComponents";

import { IJsonSchema } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";

/**
 * @internal
 */
export const application_native =
  (options: JsonApplicationProgrammer.IOptions) =>
  (components: IJsonComponents) =>
  (name: string) =>
  (nullable: boolean): IJsonSchema.IReference => {
    const key: string =
      options.purpose === "ajv"
        ? name
        : `${name}${nullable ? ".Nullable" : ""}`;
    if (components.schemas?.[key] === undefined) {
      components.schemas ??= {};
      components.schemas[key] ??= {
        type: "object",
        $id:
          options.purpose === "ajv"
            ? `${JSON_COMPONENTS_PREFIX}/objects/${key}`
            : undefined,
        properties: {},
        nullable: options.purpose === "swagger" ? nullable : undefined,
      };
    }
    return {
      $ref: `${JSON_COMPONENTS_PREFIX}/objects/${key}`,
    };
  };
