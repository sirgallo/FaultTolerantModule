import { 
  ServerConfiguration,
  IServerConfiguration
} from '@core/baseServer/core/models/ServerConfiguration';

export const serverConfiguration: ServerConfiguration<Record<string, IServerConfiguration>> = {
  repSys: {
    port: 8765,
    name: 'Replicated State Machine',
    numOfCpus: 1,
    version: '0.1'
  }
}