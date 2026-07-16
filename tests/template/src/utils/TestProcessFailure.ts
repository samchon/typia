export namespace TestProcessFailure {
  export const listen = (): void => {
    process.on("uncaughtException", (error) => {
      console.log("exception", error);
    });
    process.on("unhandledRejection", (error) => {
      console.log("rejection", error);
    });
  };
}
