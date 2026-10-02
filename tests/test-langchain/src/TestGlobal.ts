import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import typia from "typia";

/**
 * Integration-runner filters and manual provider-experiment preparation.
 *
 * @evidence contracts/testing.md#behavioral-verification getArguments supplies the actual DynamicExecutor name filters; getEnvironments and getSwagger prepare manual experiments and contain no automated assertions.
 * @evidence contracts/testing.md#independent-expectations Authored flag spelling, optional provider-key type and hosted document URL are inputs; the manual helpers do not establish a model or network correctness oracle.
 * @evidence contracts/testing.md#distinguishing-cases The runner handles absent or repeated include/exclude flags; manual environment and document initialization are separate singleton effects, not additional automated cases.
 * @evidence contracts/testing.md#execution-ownership src/index.ts calls the filter helper; experimental entries call environment preparation. No exported member here is discovered as a test, and manual provider experiments are outside the default unit/integration population.
 */
export namespace TestGlobal {
  /**
   * Loads and expands dotenv once for a manual provider experiment, then
   * validates the optional provider key in process.env.
   *
   * @evidence contracts/testing.md#behavioral-verification This manual preparation loads and expands dotenv and asserts the optional provider-key shape; it contains no automated expectation about provider behavior.
   * @evidence contracts/testing.md#execution-ownership experimental/structured-output.ts and experimental/tool-calling.ts call this helper; default unit and integration cases do not initialize dotenv or contact a provider.
   * @evidence contracts/testing.md#independent-expectations IEnvironments declares the optional string input contract. The helper supplies configuration and makes no independent model-response assertion.
   * @evidence contracts/testing.md#distinguishing-cases First access initializes the environment singleton and later accesses reuse it; absent credentials are permitted by the input type but do not guarantee provider success.
   */
  export const getEnvironments = (): IEnvironments => environments.get();

  /**
   * Fetches and upgrades the hosted shopping OpenAPI document once for manual
   * provider experiments. Repeated reads share the same promise, including
   * rejection.
   *
   * @evidence contracts/testing.md#behavioral-verification This manual helper fetches the hosted document, parses JSON and delegates upgrading; it has no assertions about HTTP status or document structure.
   * @evidence contracts/testing.md#execution-ownership No default case calls this exported manual preparation helper. Its private singleton initializer owns the retained fetch/parse/upgrade promise and is not a registered test entry.
   * @evidence contracts/testing.md#independent-expectations The fixed hosted URL is an authored experiment input, not an expected converter output; this helper supplies no independent conversion oracle.
   * @evidence contracts/testing.md#distinguishing-cases A first access starts document preparation; later access shares success or rejection. Automated HTTP-tool cases instead use authored local documents.
   */
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
   * @evidence contracts/testing.md#behavioral-verification The helper supplies one following value per flag occurrence to the integration runner; DynamicExecutor applies those values to actual case names. It owns no assertion itself.
   * @evidence contracts/testing.md#execution-ownership src/index.ts calls it for include/exclude before DynamicExecutor registration; exported test entries retain their individual assertions and failure identity.
   * @evidence contracts/testing.md#independent-expectations Double-dash flag spelling and process.argv are caller inputs rather than test expectations. A filtered run establishes discovery of the selected cases, not a full parser oracle.
   * @evidence contracts/testing.md#distinguishing-cases Absent flags return no restrictions, repeated flags preserve one value per occurrence, and a terminal flag with no following value contributes nothing.
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
