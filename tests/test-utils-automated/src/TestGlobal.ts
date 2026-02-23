import path from "path";

export class TestGlobal {
  public static readonly ROOT: string = path.resolve(
    path.join(__dirname, ".."),
  );

  public static getArguments(type: string): string[] | null {
    const from: number = process.argv.indexOf(`--${type}`) + 1;
    if (from === 0) {
      return null;
    }
    const to: number = process.argv
      .slice(from)
      .findIndex((str) => str.startsWith("--"), from);
    return process.argv.slice(
      from,
      to === -1 ? process.argv.length : to + from,
    );
  }
}
