import '../modAlias';

import { InitReplicatedServer } from '@repServer/initReplicatedServer';
import { serverConfiguration } from '../ServerConfigurations';

const server = new InitReplicatedServer(
  serverConfiguration.repSys.name,
  serverConfiguration.repSys.port,
  serverConfiguration.repSys.version,
  serverConfiguration.repSys.numOfCpus
);

try {
  server.startServer();
} catch (err) { console.log(err); }