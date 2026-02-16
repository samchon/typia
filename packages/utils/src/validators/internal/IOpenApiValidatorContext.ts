import { IValidation, OpenApi } from "@typia/interface";

export interface IOpenApiValidatorContext<Schema extends OpenApi.IJsonSchema> {
  components: OpenApi.IComponents;
  schema: Schema;
  value: unknown;
  path: string;
  report: (
    error: IValidation.IError & {
      exceptionable: boolean;
    },
  ) => false;
  exceptionable: boolean;
  expected: string;
  equals: boolean;
  required: boolean;
}
