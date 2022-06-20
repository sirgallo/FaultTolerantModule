import { BaseServer } from '@baseServer/core/BaseServer';

import { LogProvider } from '@core/providers/LogProvider';
import { MQProvider } from '@core/providers/MQProvider';

export class InitReplicatedServer extends BaseServer {
  private repLog: LogProvider = new LogProvider(this.name);
  private state: any;

  async startServer() {
    try {
      this.run();
    } catch (err) {
      this.repLog.error(err);
      throw err;
    }
  }
}