export declare namespace TypiaGenerator {
    interface ILocation {
        input: string;
        output: string;
        project: string;
    }
    const build: (location: TypiaGenerator.ILocation) => Promise<void>;
}
