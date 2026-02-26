import fs from "fs";

export class BenchmarkStream {
  private readonly stream_: fs.WriteStream;
  private readonly time_: Date;

  public constructor(
    public readonly path: string,
    public readonly environments: {
      cpu: string;
      os: string;
      memory: number;
      node: string;
      typia: string;
    },
  ) {
    this.stream_ = fs.createWriteStream(path + "/README.md", "utf8");
    this.time_ = new Date();
  }

  public elapsed(): number {
    return Date.now() - this.time_.getTime();
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
