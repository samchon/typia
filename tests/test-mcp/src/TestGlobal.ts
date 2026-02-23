import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { OpenApiConverter, Singleton } from "@typia/utils";

export namespace TestGlobal {
  export const getSwagger = (): Promise<OpenApi.IDocument> => swagger.get();

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
