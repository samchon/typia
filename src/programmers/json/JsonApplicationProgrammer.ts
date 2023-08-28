import { IJsonApplication } from "../../schemas/json/IJsonApplication";
import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";

import { application_schema } from "../internal/application_schema";

export namespace JsonApplicationProgrammer {
    export interface IOptions {
        purpose: "ajv" | "swagger";
    }

    /**
     * @internal
     */
    export namespace IOptions {
        export const complement = (options?: Partial<IOptions>): IOptions => {
            const purpose: "swagger" | "ajv" = options?.purpose ?? "swagger";
            return {
                purpose,
            };
        };
    }

    export const write =
        (options?: Partial<IOptions>) =>
        (metadatas: Array<Metadata>): IJsonApplication => {
            const fullOptions: IOptions = IOptions.complement(options);
            const components: IJsonComponents = {
                schemas: {},
            };
            const generator = application_schema(fullOptions)(true)(components);

            return {
                schemas: metadatas.map((meta, i) => {
                    const schema: IJsonSchema | null = generator(meta)({});
                    if (schema === null)
                        throw new TransformerError({
                            code: "typia.json.application",
                            message: `invalid type on argument - (${meta.getName()}, ${i})`,
                        });
                    return schema;
                }),
                components,
                ...fullOptions,
            };
        };
}
