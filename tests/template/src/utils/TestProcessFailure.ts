export namespace TestProcessFailure {
  export const listen = (): IListener => {
    let failed: boolean = false;
    const report = (type: string, error: unknown): void => {
      failed = true;
      process.exitCode = 1;
      console.error(type, error);
    };
    process.on("uncaughtException", (error) => {
      report("exception", error);
    });
    process.on("unhandledRejection", (error) => {
      report("rejection", error);
    });
    return { failed: () => failed };
  };

  export interface IListener {
    failed(): boolean;
  }
}
