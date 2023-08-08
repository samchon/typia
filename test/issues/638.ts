import typia from "typia";

type EnvVars = {
    /**
     * Port number to run the server on.
     * @example 8080
     * @default 3000
     * @int
     * @minimum 1
     * @maximum 65535
     */
    PORT?: number;
};

const app: typia.IJsonApplication = typia.json.application<[EnvVars], "ajv">();
const object = app.components.schemas!.EnvVars as typia.IJsonComponents.IObject;
const property = object.properties.PORT as typia.IJsonSchema.INumber;
console.log(property.default);
