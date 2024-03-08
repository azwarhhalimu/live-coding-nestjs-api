import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { kelurahan } from '@prisma/client';
import PrismaService from 'src/service/prisma.service';
import random from 'src/service/random';

@Controller('kelurahan')
class KelurahanController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list_data() {
    const data_kelurahan = await this.prisma.kelurahan.findMany();
    return {
      status: 'data_ok',
      data: data_kelurahan,
    };
  }

  @Get(':id')
  async tampil_1_data(@Param() { id }) {
    const get_data = await this.prisma.kelurahan.findFirst({
      where: {
        id_kelurahan: id,
      },
    });
    return {
      status: 'data_ok',
      data: get_data,
    };
  }

  @Post()
  async simpan_data(@Body() formData: kelurahan) {
    await this.prisma.kelurahan.create({
      data: {
        id_kelurahan: random(),
        kelurahan: formData.kelurahan,
      },
    });

    return {
      status: 'sukses',
    };
  }

  @Put(':id')
  async edit_data(
    @Body() FormData: kelurahan,
    @Param() { id }: { id: string },
  ) {
    await this.prisma.kelurahan.update({
      data: {
        kelurahan: FormData.kelurahan,
      },

      where: {
        id_kelurahan: id,
      },
    });
    return {
      status: 'sukses',
    };
  }
  @Delete(':id')
  async hapus_kelurahan(@Param() { id }: { id: string }) {
    await this.prisma.kelurahan.delete({
      where: {
        id_kelurahan: id,
      },
    });
    return {
      status: 'sukses',
    };
  }

  @Get('data-warga/:id_kelurahan')
  async tampil_data_warga(@Param() { id_kelurahan }: { id_kelurahan: string }) {
    const data_warga = await this.prisma.warga.findMany({
      where: {
        id_kelurahan: id_kelurahan,
      },
      include: {
        kelurahan: true,
      },
    });
    return {
      status: 'data_ok',
      data: data_warga,
    };
  }
}
export default KelurahanController;
