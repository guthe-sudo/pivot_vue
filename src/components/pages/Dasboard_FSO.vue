<template>
  <Form />
  <div class="table-responsive mx-3">
    <table class="table table-bordered border-dark">
      <thead>
        <tr class="bg-info">
          <th scope="col">UP3</th>
          <th scope="col">JENIS TRANSAKSI</th>
          <th scope="col">JML PELUNASAN (a)</th>
          <th scope="col">BLM ISI MAT</th>
          <th scope="col">ISI MAT</th>
          <th scope="col">WO VEND</th>
          <th scope="col">WO PTG</th>
          <th scope="col">PROG</th>
          <th scope="col">PENANGGUHAN</th>
          <th scope="col">SELESAI PENYAMBUNGAN</th>
          <th scope="col">SELESAI VERIFIKASI PK (b)</th>
          <th scope="col">SELESAI VERIFIKASI PK CLEANING</th>
          <th scope="col">TOLAK WO</th>
          <th scope="col">NON_FSO</th>
          <th scope="col">PROSENTASE KEBERHASILAN FSO (b/a)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Form from "/src/components/Form.vue";
export default {
  components: {
    Form,
  },
};
</script>
