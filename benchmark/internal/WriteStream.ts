import fs from "fs";

export class WriteStream {
    private readonly stream_: fs.WriteStream;

    public constructor(path: string) {
        this.stream_ = fs.createWriteStream(path, "utf8");
    }

    public write(data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.stream_.write(data + "\n", "utf8", (error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }

    public async close(): Promise<void> {
        await this._End();
        await this._Close();
    }

    private _End(): Promise<void> {
        return new Promise((resolve) => {
            this.stream_.on("finish", resolve);
            this.stream_.end();
        });
    }

    private _Close(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.stream_.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
}
