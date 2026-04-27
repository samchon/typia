import typia, { tags } from "typia";

interface LlmUser {
  id: string & tags.Format<"uuid">;
  age: number & tags.Type<"uint32"> & tags.Minimum<1>;
}

interface ProtobufUser {
  id: string;
  age: number & tags.Type<"uint32">;
  payload: Uint8Array;
}

interface Output {
  ok: boolean;
}

interface InternalShape {
  id: string & tags.Format<"uuid">;
  count: number & tags.Type<"int32">;
  values?: string[] & tags.UniqueItems;
}

interface OptionalInternalShape {
  value?: string;
  values?: string[] & tags.UniqueItems;
}

class Service {
  /**
   * Search users.
   *
   * @deprecated
   * @param input LLM user payload.
   * @returns Search result payload.
   * @summary Search operation
   * @tag users operations
   */
  public search(input: LlmUser): Output {
    return { ok: input.age > 0 };
  }

  public human(
    /** @human */
    input: LlmUser,
  ): Output {
    return { ok: input.age > 0 };
  }

  /** @ignore */
  public hidden(input: LlmUser): Output {
    return { ok: input.age > 0 };
  }
}

export const llmParameters = typia.llm.parameters<LlmUser, { strict: true }>();
export const llmSchema = typia.llm.schema<LlmUser, { strict: true }>({});
export const llmParse = typia.llm.createParse<LlmUser>();
export const llmCoerce = typia.llm.createCoerce<LlmUser>();
export const llmStructured = typia.llm.structuredOutput<
  LlmUser,
  { strict: true }
>();
export const llmApplication = typia.llm.application<Service>();
export const llmController = typia.llm.controller<Service>(
  "service",
  new Service(),
);
export const validateUser = (input: unknown) => typia.validate<LlmUser>(input);
export const standardValidateUser = typia.createValidate<LlmUser>();
export const randomUser = typia.random<LlmUser>();
export const randomRegExp = typia.random<RegExp>();
export const randomArrayBuffer = typia.random<ArrayBuffer>();
export const randomBlob = typia.random<Blob>();
export const randomFile = typia.random<File>();
export const createRandomUser = typia.createRandom<LlmUser>();
export const cloneAny = (input: any) => typia.misc.clone<any>(input);
export const notationAny = (input: any) => typia.notations.camel<any>(input);
export const equalsInternal = typia.createEquals<InternalShape>();
export const stringifyInternal = typia.json.createStringify<InternalShape>();
export const stringifyOptionalInternal =
  typia.json.createStringify<OptionalInternalShape>();
export const protobufEncode = typia.protobuf.createEncode<ProtobufUser>();
export const protobufDecode = typia.protobuf.createDecode<ProtobufUser>();
