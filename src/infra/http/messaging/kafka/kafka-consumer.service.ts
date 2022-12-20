import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId:'notifications',
        brokers: ['smiling-bird-13549-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'c21pbGluZy1iaXJkLTEzNTQ5JLVfUTrp5uVvHh5NFNhrQ4GKOH1nmhstFuGQrVg',
          password: 'xcoRKSCZXZFOkvwOho8lX1j3nlaO37Itfd-2xSBStUG6hoYYC_U1DV__ct9kuYTz81lFqQ==',
        },
        ssl: true,
      },
    });
  }
  
  async onModuleDestroy() {
    await this.close();
  }
}