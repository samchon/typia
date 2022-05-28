import { IJsonComponents } from "./IJsonComponents";
import { IJsonSchema } from "./IJsonSchema";

export interface IJsonApplication {
    schema: IJsonSchema;
    components: IJsonComponents;
}
