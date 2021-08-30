<template>
  <div class="container-fluid p-3">
    <form class="card">
      <div class="card-header">
        <b>Dashboard FSO</b>
      </div>
      <div class="card-body">
        <div class="row gx-3 px-2 d-flex bd-highlight">
          <div class="col-sm-4">
            <label for="">Unit Induk Distribusi/Wilayah</label>
            <select
              class="form-select mb-3 align-self-end"
              aria-label="Default select example"
            >
              <option selected>--Pilih--</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-sm-4 align-self-end">
            <label for="">UP3</label>
            <select
              class="form-select mb-4"
              aria-label="Default select example"
            >
              <option selected>--Pilih--</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-sm-4 align-self-end">
            <label for="">ULP</label>
            <select
              class="form-select mb-4"
              aria-label="Default select example"
            >
              <option selected>--Pilih--</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row gx-3 px-3 d-flex bd-highlight">
          <div class="form-check col-sm-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Tanggal Lunas
            </label>
          </div>
          <div class="form-check col-sm-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Tanggal WO
            </label>
          </div>
          <div class="form-check col-sm-2 mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Tanggal Pasang
            </label>
          </div>
        </div>
        <div class="row gx-2 px-2 d-flex bd-highlight">
          <div class="form-group col-sm-4 align-self-start">
            <datepicker
              :full-month-name="true"
              input-class="customClass"
              placeholder="Tanggal Awal"
              :typeable="true"
              v-model="picked"
            />
          </div>
          <div class="form-group col-sm-4 align-self-start">
            <datepicker
              :full-month-name="true"
              input-class="customClass"
              placeholder="Tanggal Akhir"
              :typeable="true"
              v-model="picked"
            />
          </div>
          <div class="col-sm-4 align-self-start">
            <label for="">Jenis Transaksi</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>--Pilih--</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-check col-sm-1 align-self-end">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Data
            </label>
          </div>
          <div class="form-check col-sm-1 align-self-end">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Grafik
            </label>
          </div>
        </div>
      </div>
      <div class="d-inline-flex p-2 bd-highlight mx-3">
        <button type="button" class="btn btn-primary btn-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-folder2-open"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
            />
          </svg>
          <span class="text_icon">Tampilkan</span>
        </button>
        <button type="button" class="btn btn-danger btn-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
            />
          </svg>
          <span class="text_icon">Reset</span>
        </button>
        <button type="button" class="btn btn-success btn-sm mb-2">
          <span class="text_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-spreadsheet"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z"
              />
            </svg>
            Export Exel
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import { ref } from "vue";

// import Datepicker from "../src/datepicker/Datepicker.vue";
// import { ref } from "vue";

export default {
  components: {
    Datepicker,
  },
  setup() {
    const picked = ref(new Date());
    // const picked_from = ref(new Date());
    // const picked_to = ref(new Date());
    return {
      picked,
      // picked_from,
      // picked_to,
    };
  },
};
</script>
