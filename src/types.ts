
export abstract class DeepstreamPlugin {
public abstract description: string
public init? (): void
public async whenReady (): Promise<void> {}
public async close (): Promise<void> {}
public setRecordHandler? (recordHandler: any): void
}

export type StorageHeadBulkCallback = (error: string | null, versions: { [index: string]: number }, missing: string[]) => void
export type StorageHeadCallback = (error: string | null, version: number) => void
export type StorageReadCallback = (error: string | null, version?: number, result?: any) => void
export type StorageWriteCallback = (error: string | null) => void
export interface Storage extends DeepstreamPlugin  {
  apiVersion?: number
  headBulk (recordNames: string[], callback: StorageHeadBulkCallback): void
  set (recordName: string, version: number, data: any, callback: StorageWriteCallback, metaData?: any): void
  get (recordName: string, callback: StorageReadCallback, metaData?: any): void
  delete (recordName: string, callback: StorageWriteCallback, metaData?: any): void
  deleteBulk (recordNames: string[], callback: StorageWriteCallback, metaData?: any): void
}