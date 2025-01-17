import { IMessage } from 'common/interfaces/message';
import fs from 'fs-extra';


export enum OBJECT {
  SAVED = "saved",
  SENDED = 'sended'
}

export class Database {

  private path: string;
  public data: IMessage[];

  constructor(object: string) {
    this.path = `../../${object}.json`
    this.data = this.get();
  }

  save() {
    console.log(this.data);
    return fs.writeJSON(this.path, this.data);
  }

  private get(): IMessage[] {
    try {
      if (fs.existsSync(this.path))
        return fs.readJsonSync(this.path) || [];
      return [];
    } catch (e) {
      return [];
    }
  }
}