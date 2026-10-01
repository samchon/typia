import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import typia from "typia";

export namespace TestGlobal {
  /**
   * Reads the environment variables of an experimental provider run.
   *
   * @evidence contracts/testing.md#behavioral-verification getEnvironments loads dotenv files and validates process.env with a natively generated assertion; it asserts nothing about typia behavior and is used only by the manual experimental scripts.
   * @evidence contracts/testing.md#independent-expectations It has no expectation; the optional OPENROUTER_API_KEY shape is its own declaration.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction.
   * @evidence contracts/testing.md#execution-ownership It runs inside the test-langchain start process (DynamicExecutor under ttsx with the native typia plugin) and is called in process by the cases that import it; it starts no process of its own.
   */
  export const getEnvironments = (): IEnvironments => environments.get();

  /**
   * Fetches a hosted OpenAPI document for manual provider experiments.
   *
   * @evidence contracts/testing.md#behavioral-verification getSwagger downloads a third-party hosted document and upgrades it; it is used only by the manual experimental scripts and by no DynamicExecutor case, because a network dependency would make a case non-hermetic.
   * @evidence contracts/testing.md#independent-expectations It has no expectation of its own.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction.
   * @evidence contracts/testing.md#execution-ownership It is not reached by the DynamicExecutor population; the experimental scripts run it by hand with network access.
   */
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

  /**
   * Reads the values that follow a command-line flag up to the next flag.
   *
   * @evidence contracts/testing.md#behavioral-verification getArguments only parses process arguments for the include and exclude filters; it asserts nothing about typia and a wrong parse changes which cases run, not any verdict.
   * @evidence contracts/testing.md#independent-expectations It has no expectation of its own; the filter semantics are those of DynamicExecutor include and exclude names.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; absent flags and repeated flags are handled by its loop without a dedicated test.
   * @evidence contracts/testing.md#execution-ownership It runs inside the test-langchain start process (DynamicExecutor under ttsx with the native typia plugin) and is called in process by the cases that import it; it starts no process of its own.
   */
  export const getArguments = (key: string): string[] => {
    const values: string[] = [];
    for (let i = 0; i < process.argv.length; i++) {
      const arg = process.argv[i];
      if (arg === `--${key}` && i + 1 < process.argv.length) {
        values.push(process.argv[++i]!);
      }
    }
    return values;
  };
}

const swagger = new Singleton(async () => {
  const response: Response = await fetch(
    "https://raw.githubusercontent.com/samchon/shopping-backend/refs/heads/master/packages/api/swagger.json",
  );
  const document: OpenApiV3_1.IDocument = await response.json();
  return OpenApiConverter.upgradeDocument(document);
});

interface IEnvironments {
  OPENROUTER_API_KEY?: string;
}

const environments = new Singleton(() => {
  const env = dotenv.config();
  dotenvExpand.expand(env);
  return typia.assert<IEnvironments>(process.env);
});
