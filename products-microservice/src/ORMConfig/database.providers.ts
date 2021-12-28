import { DATABASE_CONNECTION } from 'src/consts';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'ec2-44-194-54-186.compute-1.amazonaws.com',
        port: 5432,
        username: 'kfkqmmdnkuhcov',
        password:
          '8f10f100f77fbed2f14dc76b8f0a68febfe2e52d32c4a27d59debd38add1fc55',
        database: 'd1ltskis338e8j',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        extra: {
          ssl: { rejectUnauthorized: false },
        },
      }),
  },
];
