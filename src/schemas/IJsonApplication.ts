import { IJsonComponents } from "./IJsonComponents";
import { IJsonSchema } from "./IJsonSchema";

export interface IJsonApplication {
    schemas: IJsonSchema[];
    components: IJsonComponents;
    purpose: "swagger" | "ajv";

    /**
     * @deprecated Always "#/components/schemas"
     */
    prefix: string;
}
