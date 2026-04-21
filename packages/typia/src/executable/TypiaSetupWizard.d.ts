export declare namespace TypiaSetupWizard {
    interface IArguments {
        manager: "npm" | "pnpm" | "yarn" | "bun";
        project: string | null;
    }
    const setup: () => Promise<void>;
}
