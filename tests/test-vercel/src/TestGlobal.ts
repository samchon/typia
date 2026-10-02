import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import typia from "typia";

/**
 * Integration-runner flags and optional live-provider experiment inputs.
 *
 * Only flag parsing is used by the automated runner. Environment and hosted
 * document loading are lazy manual-experiment helpers, not hermetic test
 * cases.
 *
 */
export namespace TestGlobal {
  /**
   * Loads and expands dotenv once for a manual provider experiment, then
   * validates the optional provider key in process.env.
   *
   */
  export const getEnvironments = (): IEnvironments => environments.get();

  /**
   * Fetches and upgrades the hosted shopping OpenAPI document once for manual
   * provider experiments. Repeated reads share the same promise, including
   * rejection.
   *
   */
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
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
