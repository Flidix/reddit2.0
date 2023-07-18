import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { TredController } from './tred.controller';

import { TredService } from './tred.service';

import { getJwtConfig } from '../config/jwtr.config';

@Module({
  controllers: [TredController],
  providers: [TredService],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
})
export class TredModule {}
